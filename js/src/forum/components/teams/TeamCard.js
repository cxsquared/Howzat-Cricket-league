import sortable from 'sortablejs';
import Color from 'color';
import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Link from 'flarum/components/Link';
import flag from '../../../common/utils/flag';
import Select from 'flarum/components/Select';
import PlayerRoleMap from '../../../common/utils/PlayerRoleMap';
import ReleasePlayerModal from './ReleasePlayerModal';

function roleOptions(bowlingStyle) {
    let options = {};
    let mapping = new PlayerRoleMap().roleMap();
    for (const role in mapping) {
        options[role] = app.translator.trans(`hcl.lib.player_role.${role}`, {
            style: app.translator.trans(`hcl.forum.player.style.${bowlingStyle}`),
        });
    }

    return options;
}

function playerItem(player, gmView, changeRole, onrelease) {
    let baseView = [
        <div className="TeamCard-flag">{flag(player.nationality().toLowerCase())}</div>,
        <div>
            {player.user() ? <Link href={app.route('user.player', { username: player.user().username() })}>{player.name()}</Link> : player.name()}
        </div>,
    ];

    let liClass = 'TeamCard--item';

    if (gmView) {
        baseView.push(
            <div>
                <Select options={roleOptions(player.bowlingStyle())} value={player.role() || 'batter'} onchange={(v) => changeRole(player, v)} />
            </div>
        );
        baseView.push(<div className="">{player.tpa()}</div>);
        baseView.push(
            <div>
                <Button icon="fas fa-times"
                        className="Button Button--danger"
                        onclick={() => app.modal.show(ReleasePlayerModal, { player: player, onexit: onrelease })}>
                    {app.translator.trans('hcl.forum.player.release.button')}
                </Button>
            </div>
        );

        liClass += ' TeamCard--gm';
    } else {
        let role = player.role() || 'batter';
        baseView.push(
            <div>
                {app.translator.trans(`hcl.lib.player_role.${role}`, {
                    style: app.translator.trans(`hcl.forum.player.style.${player.bowlingStyle()}`),
                })}
            </div>
        );
        baseView.push(<div>{player.tpa()}</div>);
    }

    return (
        <li data-id={player.id()}
            key={`${player.id()}_${player.order()}`}
            className={liClass}>
            {baseView}
        </li>
    );
}

// https://github.com/flarum/tags/blob/master/js/src/admin/components/TagsPage.js
export default class TeamCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.saving = false;

        this.team = this.attrs.team;
        this.gmView = app.session.user === this.team.gmUser() || app.session.user === this.team.agmUser() || app.forum.attribute('adminUrl');

        this.forcedRefreshKey = 0;
    }

    view() {
        const style = {
            backgroundImage: `url(${this.team.logoLink()})`,
            backgroundColor: `${Color(`#${this.team.primaryColor()}`).darken(0.35).hex()}`,
        };

        let save = null;
        if (this.gmView) {
            save = (
                <Button className="button Button--primary" disabled={this.saving} loading={this.saving} onclick={() => this.saveTeam()}>
                    Save
                </Button>
            );
        }

        let liClass = 'TeamCard--item';
        let header = [
            <legend className="TeamCard-flag" />,
            <legend>{app.translator.trans('hcl.forum.basics.player')}</legend>,
            <legend>{app.translator.trans('hcl.forum.basics.role')}</legend>,
            <legend>{app.translator.trans('hcl.forum.basics.tpa')}</legend>,
        ];

        if (this.gmView) {
            liClass += ' TeamCard--gm';
            header.push(<legend />);
        }

        return (
            <div className="TeamCard" key={this.forcedRefreshKey} oncreate={this.onListCreate.bind(this)}>
                <div className="TeamCard-header" style={style}>
                    <h1>{this.team.name()}</h1>
                </div>
                <div className="TeamCard-players">
                    <li className={liClass}>
                        {header}
                    </li>
                    <ul className="PlayerList">{this.getPlayers().map((p) => playerItem(p, this.gmView, this.changeRole.bind(this), this.onRelease.bind(this)))}</ul>
                </div>
                <div className="Button-group">{save}</div>
            </div>
        );
    }

    getPlayers() {
        return app.store
            .all('players')
            .filter((p) => p.team() === this.team)
            .sort((p1, p2) => p1.order() - p2.order());
    }

    onListCreate() {
        if (!this.gmView) return;

        this.$('.PlayerList')
            .get()
            .map((e) => {
                sortable.create(e, {
                    animation: 150,
                    swapThreshold: 0.65,
                    dragClass: 'sortable-dragging',
                    ghostClass: 'sortable-placeholder',
                    onSort: (e) => this.onSortUpdate(e),
                });
            });
    }

    onSortUpdate() {
        const players = this.$('.PlayerList > li')
            .map(function () {
                return {
                    id: $(this).data('id'),
                };
            })
            .get();

        players.forEach((player, i) => {
            app.store.getById('players', player.id).pushData({
                attributes: {
                    order: i,
                },
            });
        });

        this.forcedRefreshKey++;
        m.redraw();
    }

    changeRole(player, role) {
        app.store.getById('players', player.id()).pushData({
            attributes: {
                role: role,
            },
        });

        m.redraw();
    }

    onRelease() {
        window.location.reload();
    }

    saveTeam() {
        this.saving = true;

        const players = this.getPlayers().map((p) => {
            return {
                id: p.id(),
                order: p.order(),
                role: p.role(),
            };
        });

        app.request({
            url: `${app.forum.attribute('apiUrl')}/teams/${this.team.id()}/roles`,
            method: 'POST',
            body: { players },
        })
            .then(() => {
                app.alerts.show({ type: 'success' }, 'Team saved');
            })
            .finally(() => {
                this.saving = false;
            });
    }
}
