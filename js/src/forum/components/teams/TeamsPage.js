import app from 'flarum/app';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class TeamsPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        this.loading = false;

        this.teams = null;

        this.teamId = m.route.param('id');

        this.loadTeams();

        this.bodyClass = 'TeamsPage';
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
                            {this.team 
                                ? [
                                    <div className="IndexPage-toolbar">
                                        <ul className="TeamsPage-toolbar">{listItems(this.teamItems().toArray())}</ul>
                                    </div>,
                                    <TeamCard team={this.teams.filter(t => t.id = this.teamId).first()} />
                                  ]   
                                : [<LoadingIndicator className="LoadingIndicator--block" />]}
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

    teamItems() {
        const items = new ItemList();

        if (this.teams) {
            for(const team in this.teams) {
                items.add(
                    team.name(),
                    Button.component({
                        title: team.name(),
                        className: 'Button-team',
                        onclick: (() => {
                            this.teamId = team.id();
                            m.redraw();
                        })
                    })
                );
            }
        }

        return items;
    }

    loadTeams() {

    }
}
