import app from 'flarum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';

export default class TeamsPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        this.bodyClass = 'User--directory Teams';
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

    actionItems() {
        const items = new ItemList();

        /*
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
        */

        return items;
    }
}
