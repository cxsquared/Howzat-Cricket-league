import app from 'flarum/app';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import UserPage from 'flarum/components/UserPage';
import Placeholder from 'flarum/components/Placeholder';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';
import UpdateGroupCard from './UpdateGroupCard';
import UpdateSortMap from '../../../common/utils/UpdateSortMap';
import UpdateCreateModal from './UpdateCreateModal';

/**
 * The `UpdatesUserPage` component shows a user's updates inside
 * of their profile.
 */
export default class UpdatesUserPage extends UserPage {
    oninit(vnode) {
        super.oninit(vnode);

        this.loading = true;
        this.moreResults = false;

        this.updates = [];
        this.sortMap = new UpdateSortMap();
        this.status = 'all';

        this.loadLimit = 20;

        this.loadUser(m.route.param('username'));
    }

    onremove() {
        this.updates = null;
    }

    content() {
        let header;

        if (app.session.user === this.user && this.user.player()) {
            header = (
                <div className="IndexPage-toolbar">
                    <ul className="IndexPage-toolbar-view">{listItems(this.viewItems().toArray())}</ul>
                    <ul className="IndexPage-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
                </div>
            );
        }

        if (this.updates.length === 0 && !this.loading) {
            return (
                <div className="PostsUserPage UpdatesUserPage">
                    {header}
                    <Placeholder text={app.translator.trans('hcl.forum.user.updates_empty_text')} />
                </div>
            );
        }

        let footer;

        if (this.loading) {
            footer = <LoadingIndicator />;
        } else if (this.moreResults) {
            footer = (
                <div className="PostsUserPage-loadmore UpdatesUserPage-loadMore">
                    <Button className="Button" onclick={this.loadMore.bind(this)}>
                        {app.translator.trans('hcl.forum.user.updates_load_more_button')}
                    </Button>
                </div>
            );
        }

        // https://www.robinwieruch.de/javascript-groupby
        const updatesByWeek = this.updates.reduce((groups, update) => {
            const weekEndingKey = update.weekEnding().toLocaleDateString();
            if (!groups[weekEndingKey]) {
                groups[weekEndingKey] = [];
            }

            groups[weekEndingKey].push(update);

            return groups;
        }, {});

        return (
            <div className="PostsUserPage UpdatesUserPage">
                {header}
                <ul className="PostsUserPage-list UpdatesUserPage-list">
                    {Object.keys(updatesByWeek)
                        .sort((a, b) => new Date(b) - new Date(a))
                        .map((weekEndingKey) => (
                            <li>
                                <div className="PostsUserPage-discussion UpdatesUserPage-week">
                                    {app.translator.trans('hcl.forum.user.for_week', {
                                        week: weekEndingKey,
                                    })}
                                </div>
                                <UpdateGroupCard updates={updatesByWeek[weekEndingKey]} user={this.user} />
                            </li>
                        ))}
                </ul>
                <div className="PostsUserPage-loadMore UdatesUserPage-loadMore">{footer}</div>
            </div>
        );
    }

    viewItems() {
        const items = new ItemList();

        const statusMap = this.sortMap.statusMap();
        const statusOptions = {};
        for (const i in statusMap) {
            statusOptions[i] = app.translator.trans('hcl.lib.update_status.' + i);
        }
        items.add(
            'status',
            Select.component({
                options: statusOptions,
                value: this.status || 'all',
                onchange: (status) => {
                    this.status = status;
                    this.refresh();
                },
            })
        );

        return items;
    }

    actionItems() {
        const items = new ItemList();

        items.add(
            'new-update',
            <Button
                title={app.translator.trans('hcl.forum.page.new_update')}
                icon="fas fa-certificate"
                className="Button"
                onclick={() => app.modal.show(UpdateCreateModal, {})}
            >
                {app.translator.trans('hcl.forum.page.new_update')}
            </Button>
        );

        return items;
    }

    /**
     * Initialize the component with a user, and trigger the loading
     * of their players.
     */
    show(user) {
        super.show(user);

        this.refresh();
    }

    /**
     * Clear and reload the user's updates.
     */
    refresh() {
        this.loading = true;
        this.updates = [];

        m.redraw();

        this.loadUpdates().then(this.parseResults.bind(this));
    }

    loadUpdates(offset) {
        let q = `username:${this.user.username()}`;
        if (app.session.user != this.user) {
            q += ' status:approved';
        } else {
            q += ` ${this.sortMap.statusMap()[this.status]}`;
        }

        return app.store.find('updates', {
            filter: {
                q,
            },
            page: { offset, limit: this.loadLimit },
            sort: '-submittedAt',
        });
    }

    loadMore() {
        this.loading = true;
        this.loadUpdates(this.updates.length).then(this.parseResults.bind(this));
    }

    parseResults(results) {
        this.loading = false;

        [].push.apply(this.updates, results);

        this.moreResults = results.length >= this.loadLimit;

        m.redraw();
        return results;
    }
}
