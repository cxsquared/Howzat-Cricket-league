import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';

export default class Update extends Model {}

Object.assign(Update.prototype, {
    date: Model.attribute('date', Model.transformDate),
    link: Model.attribute('link'),
    type: Model.attribute('type'),
    comment: Model.attribute('comment'),
    tpe: Model.attribute('tpe'),
    status: Model.attribute('status'),
    submittedAt: Model.attribute('submittedAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transformDate),

    submittedUser: Model.hasOne('submittedUser'),
    updaterUser: Model.hasOne('updaterUser'),
    updaterComment: Model.attribute('updaterComment'),

    isApproved: computed('status', (status) => status.toLowerCase() === "approved"),
    isDenied: computed('status', (status) => status.toLowerCase() === "denied") 
});