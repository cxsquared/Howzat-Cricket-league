import sortable from 'sortablejs';
import Color from 'color';
import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Link from 'flarum/components/Link';
import Sortable from 'sortablejs';
import flag from '../../../common/utils/flag';

// https://github.com/flarum/tags/blob/master/js/src/admin/components/TagsPage.js
export default class TeamCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.team = this.attrs.team;
        this.gmView = app.session.user === this.team.gmUser()
                      || app.session.user === this.team.agmUser()
                      || app.forum.attribute('adminUrl');

        this.players = this.team.players();
        this.players.sort((p1, p2) => p1 - p2);

        this.rolesById = {};

        this.players.forEach(p => {
            this.rolesById[p.id()] = p.role();
        });

        this.forceRefreshKey = 0;
    }

    view() {
        const style = {
            backgroundImage: `url(${this.team.logoLink()})`,
            backgroundColor: `${Color(`#${this.team.primaryColor()}`).darken(0.35).hex()}`,
        };

        let save = null;
        if (this.gmView) {
           save = <Button className="button Button--primary"
                          onclick={() => this.saveTeam()}>
                              Save
            </Button>
        }

        this.sortPlayers();

        return (
            <div className="TeamCard" key={this.forceRefreshKey} oncreate={this.onListCreate.bind(this)}>
                <div className="TeamCard-header" style={style}>
                    <h1>{this.team.name()}</h1>
                </div>
                <div className="TeamCard-players">
                    <li>
                        <legend />
                        <legend>{app.translator.trans('hcl.forum.basics.player')}</legend>
                        <legend>{app.translator.trans('hcl.forum.basics.role')}</legend>
                        <legend>{app.translator.trans('hcl.forum.basics.tpa')}</legend>
                    </li>
                    <ul className="PlayerList">
                        {this.players.map((p) => this.viewPlayer(p))}
                    </ul>
                </div>
            </div>
        );
    }

    onListCreate(vnode) {
        if (!this.gmView)
            return;

        this.$('.PlayerList').get().map(e => {
            sortable.create(e, {
                group: 'players',
                animation: 150,
                swapThreshold: 0.65,
                dragClass: 'sortable-dragging',
                ghostClass: 'sortable-placeholder',
                onSort: (e) => this.onSortUpdate(e)
            })
        });
    }

    onSortUpdate(e) {
        const players = this.$('.PlayerList > li')
            .map(function () {
                return {
                    id: $(this).data('id')
                }
            }).get();

        players.forEach((player, i) => {
            app.store.getById('players', player.id)
            .pushData({ attributes: {
                order: i
            }});
        });

        this.players = app.store.all('players').filter(p => p.team() === this.team);
        this.forcedRefreshKey++;
        m.redraw();
    }

    viewPlayer(player) {
        let baseView = [
            <div className="TeamCard-flag">{flag(player.nationality().toLowerCase())}</div>,
            <div>
                {player.user() ? <Link href={app.route('user.player', { username: player.user().username() })}>{player.name()}</Link> : player.name()}
            </div>,
            <div>
                {player.isBowler()
                    ? app.translator.trans('hcl.forum.player.bowler', {
                            style: app.translator.trans(`hcl.forum.player.style.${player.bowlingStyle()}`),
                        })
                    : app.translator.trans('hcl.forum.player.batter')}
            </div>,
            <div>{player.tpa()}</div>,
        ];

        if (this.gmView) {
            baseView = [
                <div className="TeamCard-flag">{flag(player.nationality().toLowerCase())}</div>,
                <div>
                    GMView: {player.user() ? <Link href={app.route('user.player', { username: player.user().username() })}>{player.name()}</Link> : player.name()}
                </div>,
                <div>
                    {player.isBowler()
                        ? app.translator.trans('hcl.forum.player.bowler', {
                                style: app.translator.trans(`hcl.forum.player.style.${player.bowlingStyle()}`),
                            })
                        : app.translator.trans('hcl.forum.player.batter')}
                </div>,
                <div>{player.tpa()}</div>,
            ];
        }

        return <li data-id={player.id()}>
            {baseView}
        </li>  
    }

    saveTeam() {

    }

    sortPlayers() {
        this.players.sort((p1, p2) => p1 - p2);
    }
}
