import app from 'flarum/app';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import Player from './models/Player';

app.initializers.add('cxsquared/howzat-cricket-league', () => {
  app.store.models.players = Player;
  User.prototype.player = Model.hasOne('players');
  User.prototype.submittedUpdates = Model.hasMany('updates');
});
