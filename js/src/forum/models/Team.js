import Model from 'flarum/Model';

export default class Team extends Model {}

Object.assign(Team.prototype, {
    name: Model.attribute('name'),
    logoLink: Model.attribute('logoLink'),
    primaryColor: Model.attribute('primaryColor'),
    secondaryColor: Model.attribute('secondaryColor'),

    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),

    gmUser: Model.hasOne('gm_user'),
    agmUser: Model.hasOne('agm_user'),
    players: Model.hasMany('players'),
});
