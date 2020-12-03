import Color from 'color';
import app from 'flarum/app';
import Component from 'flarum/Component';
import Link from 'flarum/components/Link';
import flag from '../../../common/utils/flag';

export default class TeamCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.team = this.attrs.team;
    }

    view() {
        const style = {
            backgroundImage: `url(${this.team.logoLink()})`,
            backgroundColor: `${Color(`#${this.team.primaryColor()}`).darken(0.35).hex()}`,
        };

        return (
            <div className="TeamCard">
                <div className="TeamCard-header" style={style}>
                    <h1>{this.team.name()}</h1>
                </div>
                <div className="TeamCard-players">
                    <legend />
                    <legend>{app.translator.trans('hcl.forum.basics.player')}</legend>
                    <legend>{app.translator.trans('hcl.forum.basics.role')}</legend>
                    <legend>{app.translator.trans('hcl.forum.basics.tpa')}</legend>
                    {this.team.players().map((p) => {
                        return [
                            <div className="TeamCard-flag">{flag(p.nationality().toLowerCase())}</div>,
                            <div>
                                {p.user() ? <Link href={app.route('user.player', { username: p.user().username() })}>{p.name()}</Link> : p.name()}
                            </div>,
                            <div>
                                {p.isBowler()
                                    ? app.translator.trans('hcl.forum.player.bowler', {
                                          style: app.translator.trans(`hcl.forum.player.style.${p.bowlingStyle()}`),
                                      })
                                    : app.translator.trans('hcl.forum.player.batter')}
                            </div>,
                            <div>{p.tpa()}</div>,
                        ];
                    })}
                </div>
            </div>
        );
    }
}
