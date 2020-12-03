import Model from 'flarum/Model';

export default class PlayerMovement extends Model {}

Object.assign(PlayerMovement.prototype, {
    createdAt: Model.attribute('date', Model.transformDate),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),

    player: Model.hasOne('player'),
    fromTeam: Model.hasOne('fromTeam'),
    toTeam: Model.hasMany('toTeam'),
});
