import app from 'flarum/app';
import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import IndexPage from 'flarum/components/IndexPage';
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';
import UserDirecotryState from '../../states/UpdateDirectoryState';
import UpdateDirectoryList from './UpdateDirectoryList';

export default class UpdateDirectoryPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        if (!app.forum.attribute('canEditUpdates')) {
            m.route.set(app.route('index'));
        }

        this.state = new UserDirecotryState({ q: "status:pending" });
        this.state.refreshParams({ q: "status:pending" });

        this.bodyClass = 'User--directory Update--directory';
    }

    view() {
        return (
            <div className="IndexPage">
                {IndexPage.prototype.hero()}
                <div className="container">
                    <div className="sideNavContainer">
                        <nav className="IndexPage-nav sideNav">
                            <ul>{listItems(this.sidebarItems().toArray())}</ul>
                        </nav>
                        <div className="IndexPage-results sideNavOffset">
                            <div className="IndexPage-toolbar">
                                <ul className="IndexPage-toolbar-view">{listItems(this.viewItems().toArray())}</ul>
                                <ul className="IndexPage-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
                            </div>
                            <UpdateDirectoryList state={this.state} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    viewItems() {
        const items = new ItemList();
        const sortMap = this.state.sortMap();

        const sortOptions = {};
        for (const i in sortMap) {
            sortOptions[i] = app.translator.trans('hcl.lib.sort.' + i);
        }

        items.add(
            'sort',
            Select.component({
                options: sortOptions,
                value: this.params().sort || 'oldest',
                onchange: this.changeSort.bind(this),
            })
        );

        items.add(
            'filter',
            Select.component({
                options: sortOptions,
                value: this.params().sort || 'oldest',
                onchange: this.changeSort.bind(this),
            })
        );
 
        return items;
    }

    actionItems() {
        const items = new ItemList();

        items.add(
            'refresh',
            Button.component({
                title: app.translator.trans('hcl.forum.page.refresh_tooltip'),
                icon: 'fas fa-sync',
                className: 'Button Button--icon',
                onclick: () => {
                    this.state.refresh();
                },
            })
        );

        return items;
    }

    /**
     * Redirect to the index page using the given sort parameter.
     *
     * @param {String} sort
     */
    changeSort(sort) {
        const params = this.params();

        if (sort === 'oldest') {
            delete params.sort;
        } else {
            params.sort = sort;
        }

        m.route.set(app.route(this.attrs.routeName, params));
    }

    stickyParams() {
        return {
            sort: m.route.param('sort'),
            q: m.route.param('q'),
        };
    }

    params() {
        return this.stickyParams();
    }

    /**
     * Our own sidebar. Re-uses Index.sidebarItems as the base
     * Elements added here will only show up on the user directory page
     *
     * @return {ItemList}
     */
    sidebarItems() {
        return IndexPage.prototype.sidebarItems();
    }

    /**
     * Our own sidebar navigation. Re-uses Index.navItems as the base
     * Elements added here will only show up on the user directory page
     *
     * @return {ItemList}
     */
    navItems() {
        return IndexPage.prototype.navItems();
    }
}

