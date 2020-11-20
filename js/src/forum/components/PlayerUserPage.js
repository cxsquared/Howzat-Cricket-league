import app from 'flarum/app';
import UserPage from 'flarum/components/UserPage';
import Placeholder from 'flarum/components/Placeholder';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import LinkButton from 'flarum/components/LinkButton';
import PlayerCard from './PlayerCard';

/**
 * The `PlayerUserPage` component shows a user's players inside
 * of their profile.
 */
export default class PlayerUserPage extends UserPage {
    oninit(vnode) {
        super.oninit(vnode);

        /**
         * Whether or not we are loading the players
         * 
         * @type {Boolean}
         */
        this.loading = true;

        /**
         * @type {Player}
         */
        this.player = null;

        this.loadUser(m.route.param('username'));
    }

    onremove() {
        this.player = null;
    }

    content() {
        if (!this.player && !this.loading) {
            let createNew = null;
            if (this.user === app.session.user) {
                createNew = <LinkButton href={app.route("players.create")}
                                        className="Button PlayersCreate">
                                Create Players
                            </LinkButton>;
            }

            return (
                <div className="PlayersUserPage">
                    <Placeholder text={app.translator.trans('hcl.forum.user.players_empty_text')} />
                    {createNew}
                </div>
            );
        }

        if (this.loading) {
            return (
                LoadingIndicator.component()
            );
        }

        return (
            <div className="PlayersUserPage">
                <ul className="PlayersUserPage-list">
                    <li>
                        <PlayerCard player={this.player}
                                    user={this.user}
                                    showUser={false}
                                    color={this.user.color()} /> 
                    </li>
                </ul>
            </div>
        );
    }

    /**
     * Initialize the component with a user, and trigger the loading
     * of their players.
     */
    show(user) {
        super.show(user);

        this.refresh();
    }

    /**
     * Clear and reload the user's players.
     */
    refresh() {
        this.loading = true;
        this.player = null;

        m.redraw();

        this.loadPlayers();
    }

    loadPlayers() {
        if (!this.player) {
            app.store.find('users', `${this.user.id()}/player`).then(p => {
                this.showPlayer(p)
                this.loading = false;
            });
        }
    }

    showPlayer(player) {
        this.player = player;

        m.redraw();
    }

}
