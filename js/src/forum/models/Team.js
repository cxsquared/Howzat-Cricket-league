import Model from 'flarum/Model';

export default class Team extends Model {}

Object.assign(Team.prototype, {
    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),

    gmUser: Model.hasOne('gmUser'),
    agmUser: Model.hasOne('agmUser'),
    players: Model.hasMany('players'),
});
