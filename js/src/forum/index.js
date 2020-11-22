import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import LinkButton from 'flarum/components/LinkButton';
import UserPage from 'flarum/components/UserPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import Player from './models/Player';
import PlayerUserPage from './components/PlayerUserPage';
import PlayerCreatePage from './components/PlayerCreatePage';
import PlayerDirectoryPage from './components/PlayerDirectoryPage';

app.initializers.add('cxsquared/howzat-cricket-league', () => {
  // New Models
  app.store.models.players = Player;

  // New Model Relationships
  User.prototype.player = Model.hasOne('player');
  User.prototype.submittedUpdates = Model.hasMany('updates');

  // New Routes
  app.routes['players'] = { path: '/players', component: PlayerDirectoryPage};
  app.routes['player.create'] = { path: '/player/create', component: PlayerCreatePage };
  app.routes['user.player'] = { path: '/u/:username/player', component: PlayerUserPage };

  // Adding player button to UserPage
  extend(UserPage.prototype, 'navItems', function (items) {
    const href = app.route('user.player', {username: this.user.username()});

    items.add('players',
      <LinkButton href={href} icon="fas fa-hiking" class="Button Button--link">
        {app.translator.trans('hcl.forum.user.player_link')}
      </LinkButton>,
      80
    );
  });

  // Adding Create/Manage button to header
  extend(HeaderPrimary.prototype, 'items', items => {
    if (app.session.user == null)
      return;

    let player = app.session.user.player();

    if (player) {
      const href = app.route('user.player', {username: app.session.user.username()});
      items.add('view-players',
        <LinkButton href={href}>
          {app.translator.trans('hcl.forum.link.players_view')}
        </LinkButton>
        );
    } else {
      const href = app.route('player.create');

      items.add('create-players',
        <LinkButton href={href}>
          {app.translator.trans('hcl.forum.link.players_create')}
        </LinkButton>
        );
    }
  })
});
