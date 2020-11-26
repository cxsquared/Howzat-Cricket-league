import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';
import getNextDayOfWeek from '../../common/utils/getNextDayOfWeek';

export default class Update extends Model {}

Object.assign(Update.prototype, {
    date: Model.attribute('date', Model.transformDate),
    weekEnding: computed('date', (date) => getNextDayOfWeek(date, 0).toLocaleDateString()),
    link: Model.attribute('link'),
    type: Model.attribute('type'),
    comment: Model.attribute('comment'),
    tpe: Model.attribute('tpe'),
    isCapped: Model.attribute('isCapped'),
    status: Model.attribute('status'),
    submittedAt: Model.attribute('submittedAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transformDate),

    submittedUser: Model.hasOne('submittedUser'),
    updaterUser: Model.hasOne('updaterUser'),
    updaterComment: Model.attribute('updaterComment'),
    player: Model.hasOne('player'),

    isApproved: computed('status', (status) => status.toLowerCase() === "approved"),
    isDenied: computed('status', (status) => status.toLowerCase() === "denied"),
    isUnderReview: computed('status', (status) => status.toLowerCase() === "under_review"),
});