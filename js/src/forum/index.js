import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import LinkButton from 'flarum/components/LinkButton';
import UserPage from 'flarum/components/UserPage';
import SessionDropdown from 'flarum/components/SessionDropdown';
import NotificationGrid from 'flarum/components/NotificationGrid';
import Player from './models/Player';
import Update from './models/Update';
import Team from './models/Team';
import PlayerMovement from './models/PlayerMovement';
import PlayerUserPage from './components/players/PlayerUserPage';
import PlayerCreatePage from './components/players/PlayerCreatePage';
import PlayerDirectoryPage from './components/players/PlayerDirectoryPage';
import UpdateCreateModal from './components/updates/UpdateCreateModal';
import UpdateDirectoryPage from './components/updates/UpdateDirectoryPage';
import UpdateApprovedNotification from './notifications/UpdateApprovedNotification';
import UpdatesUserPage from './components/updates/UpdatesUserPage';

app.initializers.add('cxsquared/howzat-cricket-league', () => {
  // New Models
  app.store.models.players = Player;
  app.store.models.updates = Update;
  app.store.models.teams = Team;
  app.store.models.playerMovements = PlayerMovement;

  // New Model Relationships
  User.prototype.player = Model.hasOne('player');
  User.prototype.submittedUpdates = Model.hasMany('submittedUpdates');
  User.prototype.gmTeam = Model.hasOne('gmTeam');

  // New Routes
  app.routes['players'] = { path: '/players', component: PlayerDirectoryPage};
  app.routes['player.create'] = { path: '/player/create', component: PlayerCreatePage };
  app.routes['user.player'] = { path: '/u/:username/player', component: PlayerUserPage };
  app.routes['user.updates'] = { path: '/u/:username/updates', component: UpdatesUserPage };
  app.routes['updates'] = { path: '/updates', component: UpdateDirectoryPage};

  // Adding player button to UserPage
  extend(UserPage.prototype, 'navItems', function (items) {
    const playersHref = app.route('user.player', {username: this.user.username()});

    items.add('players',
      <LinkButton href={playersHref} icon="fas fa-hiking" class="Button Button--link">
        {app.translator.trans('hcl.forum.user.player_link')}
      </LinkButton>,
      80
    );

    const updatesHref = app.route('user.updates', {username: this.user.username()});

    items.add('updates',
      <LinkButton href={updatesHref} icon="fas fa-certificate" class="Button Button--link">
        {app.translator.trans('hcl.forum.user.updates_link')}
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
  });

  // Claim Comment
  extend(PostControls, 'userControls', function(items, post) {
    if (app.session.user == null)
      return;

    items.add('claimTpe',
      <Button icon="fas fa-certificate"
              onclick={() => app.modal.show(UpdateCreateModal, { post: post })}>
        {app.translator.trans('hcl.forum.basics.claim_tpe')}
      </Button>, 4);
  });

  // Update button
  extend(SessionDropdown.prototype, 'items', items => {
    if (app.forum.attribute('canEditUpdates')) {
      items.add(
        'updates',
        LinkButton.component(
          {
            icon: 'fas fa-pen',
            href: app.route('updates'),
          },
          app.translator.trans('hcl.forum.header.update_button')
        ),
        5 
      );
    }
  });

  // Notifications
  app.notificationComponents.updateApproved = UpdateApprovedNotification;

  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('updateApproved', {
      name: 'updateApproved',
      icon: 'fas fa-certificate',
      label: app.translator.trans('hcl.forum.settings.notify_update_approved')
    })
  })
});
