import Model from 'flarum/Model';

export default class Team extends Model {}

Object.assign(Player.prototype, {
    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),

    gm_user: Model.hasOne('gm_user'),
    agm_user: Model.hasOne('agm_user'),
    players: Model.hasMany('players')
});

