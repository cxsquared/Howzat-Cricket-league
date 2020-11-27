import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import PlayerCreateCard from './PlayerCreateCard';

export default class PlayerCreatePage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        if (app.session.user == null) {
            m.route.set(app.route('index'));
        }

        if (app.session.user.player()) {
            m.route.set(app.route('user.player', {username: app.session.user.username()}));
        }

        this.player = { firstName: "", lastName: ""};

        this.bodyClass = 'App--index';
    }

    title() {
        return app.translator.trans('hcl.forum.player.create');
    }

    updatePlayer(attribute, value) {
        this.player[attribute] = value;
    }

    view () {
        return <form onsubmit={this.onsubmit.bind(this)}
                     className="container CreatePlayers-Players Form--centered">
            <div>
                {PlayerCreateCard.component({
                    player: this.player,
                    update: this.updatePlayer.bind(this)
                })}
            </div>
            <div className="Form-group Submit">
                <Button
                    className="Button Button--primary Button--block"
                    type="submit"
                    loading={this.loading}>
                        Create
                </Button>
            </div>
        </form>;
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        let player = app.store.createRecord('players');

        player.save(this.player).then((e) => {
            this.loading = false;
            m.route.set(app.route('user.player', {username: app.session.user.username()}));
        }).catch(() => {
            this.loading = false;
        });
    }
}
