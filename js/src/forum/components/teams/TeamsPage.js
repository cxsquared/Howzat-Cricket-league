import app from 'flarum/app';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Color from 'color';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import SelectDropdown from 'flarum/components/SelectDropdown';
import TeamCard from './TeamCard';

export default class TeamsPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        this.loading = false;

        this.teams = [];

        this.teamId = m.route.param('id');

        this.loadTeams().then(this.parseResults.bind(this));

        this.teamItems = this.teamItems.bind(this);
    }

    view() {
        return (
            <div className="IndexPage TeamPage">
                {IndexPage.prototype.hero()}
                <div className="container">
                    <div className="sideNavContainer">
                        <nav className="IndexPage-nav sideNav">
                            <ul>{listItems(this.sidebarItems().toArray())}</ul>
                        </nav>
                        <div className="IndexPage-results sideNavOffset">
                            {this.hasTeams() && !this.loading
                                ? [
                                      <div className="IndexPage-toolbar">
                                          <ul className="TeamsPage-toolbar">{listItems(this.teamItems().toArray())}</ul>
                                      </div>,
                                      this.teamId ? <TeamCard team={this.teams.filter((t) => t.id() === this.teamId)[0]} /> : null,
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

        const href = this.teamId ? app.route('teams.show', { id: this.teamId }) : app.route('teams');

        items.add(
            'hcl-team-directory',
            LinkButton.component(
                {
                    href: href,
                    icon: 'fas fa-hiking',
                },
                app.translator.trans('hcl.forum.page.team_directory')
            ),
            85
        );

        return items;
    }

    teamItems() {
        const items = new ItemList();

        if (this.hasTeams()) {
            this.teams.forEach((team) => {
                let className = 'Button-team';

                const style = { backgroundImage: `url(${team.logoLink()})` };

                if (this.teamId === team.id()) {
                    className += ' Button-team-active';
                    style.backgroundColor = `${Color(`#${team.primaryColor()}`).darken(0.35).hex()}`;
                }

                items.add(
                    team.name(),
                    <Button
                        style={style}
                        title={team.name()}
                        className={className}
                        onclick={() => {
                            this.teamId = team.id();
                            m.route.set(app.route('teams.show', { id: this.teamId }));
                        }}
                    />
                );
            });
        }

        return items;
    }

    loadTeams() {
        this.loading = true;

        const preloadedTeams = app.preloadedApiDocument();

        if (preloadedTeams && preloadedTeams.every(t => t.players())) {
            return Promise.resolve(preloadedTeams);
        }

        const teams = app.store.all('teams');
        if (teams.length > 0 && teams.every(t => t.players())) {
            return Promise.resolve(teams);
        }

        return app.store.find('teams');
    }

    parseResults(teams) {
        this.teams.push(...teams);

        this.loading = false;

        m.redraw();

        return teams;
    }

    hasTeams() {
        return this.teams && this.teams.length > 0;
    }
}
