import Model from 'flarum/Model';

export default class Update extends Model {}

Object.assign(Update.prototype, {
    date: Model.attribute('date', Model.transformDate),
    link: Model.attribute('link'),
    type: Model.attribute('type'),
    comment: Model.attribute('comment'),
    tpe: Model.attribute('tpe'),
    status: Model.attribute('status'),
    submittedAt: Model.attribute('aubmittedAt', Model.transformDate),
    updatedAt: Model.attribute('aubmittedAt', Model.updatedAt),

    submittedUser: Model.hasOne('submittedUser'),
    updaterUser: Model.hasOne('updaterUser')

})