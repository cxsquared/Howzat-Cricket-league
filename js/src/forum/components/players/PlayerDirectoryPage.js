import app from 'flarum/app';
import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import IndexPage from 'flarum/components/IndexPage';
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import SelectDropdown from 'flarum/components/SelectDropdown';
import PlayerDirectoryList from './PlayerDirectoryList';
import PlayerDirectoryState from '../../states/PlayerDirectoryState';

/**
 * This page re-uses Flarum's IndexPage CSS classes
 */
export default class PlayerDirectoryPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        this.state = new PlayerDirectoryState({});
        this.state.refreshParams(app.search.params());

        this.bodyClass = 'User--directory Player--directory';
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
                            <PlayerDirectoryList state={this.state} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Our own sidebar. Re-uses Index.sidebarItems as the base
     * Elements added here will only show up on the user directory page
     *
     * @return {ItemList}
     */
    sidebarItems() {
        const items = IndexPage.prototype.sidebarItems();

        items.replace(
            'nav',
            SelectDropdown.component(
                {
                    buttonClassName: 'Button',
                    className: 'App-titleControl',
                },
                this.navItems().toArray()
            )
        );

        return items;
    }

    /**
     * Our own sidebar navigation. Re-uses Index.navItems as the base
     * Elements added here will only show up on the user directory page
     *
     * @return {ItemList}
     */
    navItems() {
        const items = IndexPage.prototype.navItems();

        return items;
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
                value: this.params().sort || 'newest',
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
                    if (app.session.user.player()) {
                        app.store.find('players', app.session.user.player().id());
                        m.redraw();
                    }
                },
            })
        );

        if (app.forum.attribute('adminUrl')) {
            items.add(
                'download',
                LinkButton.component({
                    title: app.translator.trans('hcl.forum.page.refresh_tooltip'),
                    icon: 'fas fa-download',
                    className: 'Button Button--icon',
                    href: `${window.location.origin}${app.forum.attribute('basePath')}/api/players/download`,
                    force: false,
                    target: '_blank'
                })
            )
        }

        return items;
    }

    /**
     * Redirect to the index page using the given sort parameter.
     *
     * @param {String} sort
     */
    changeSort(sort) {
        const params = this.params();

        if (sort === 'newest') {
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
}