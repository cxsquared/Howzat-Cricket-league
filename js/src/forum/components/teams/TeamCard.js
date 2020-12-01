import app from 'flarum/app';
import Component from 'flarum/Component';

export default class TeamCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.team = this.attrs.team;
    }

    view() {
        return (
            <div className="TeamCard">
                {this.team.name()}
                {this.team.players().map((p) => p.name())}
            </div>
        );
    }
}
