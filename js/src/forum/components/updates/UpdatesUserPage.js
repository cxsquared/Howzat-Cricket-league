import app from 'flarum/app';
import UserPage from 'flarum/components/UserPage';
import Placeholder from 'flarum/components/Placeholder';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Button from 'flarum/components/Button';

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

        this.loadLimit = 20;


        this.loadUser(m.route.param('username'));
    }

    onremove() {
        this.updates = null;
    }

    content() {
        if (this.updates.length === 0 && !this.loading) {
            return (
                <div className="PostsUserPage UpdatesUserPage">
                    <Placeholder text={app.translator.trans('hcl.forum.user.updates_empty_text')} />
                </div>
            );
        }

        let footer

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
        const updatesByWeek = this.updates.reduce((groups, update) =>{
            if (!groups[update.weekEnding()]) {
                groups[update.weekEnding()] = [];
            }

            groups[update.weekEnding()].push(update);

            return groups;
        }, {});

        return (
            <div className="PostsUserPage UpdatesUserPage">
                <ul className="PostsUserPage-list UpdatesUserPage-list">
                    {Object.keys(updatesByWeek).map((weekEndingKey) => (
                        <li>
                            <div clasName="PostsUserPage-discussion UpdatesUserPage-week">
                                {app.translator.trans('hcl.forum.user.for_week', {
                                    week: weekEndingKey 
                                })}
                            </div>
                            {updatesByWeek[weekEndingKey].length}
                        </li>
                    ))}
                </ul>
                <div className="PostsUserPage-loadMore UdatesUserPage-loadMore">
                    {footer}
                </div>
            </div>
        );
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
        return app.store.find('updates', {
            filter: {
                q: `username:${this.user.username()}`
            },
            page: {offset, limit: this.loadLimit },
            sort: '-submittedAt'
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
