import app from 'flarum/app';
import Notification from 'flarum/components/Notification';

export default class UpdateApprovedNotification extends Notification {
    icon() {
        return 'fas fa-certificate';
    }

    href() {
        return app.route('user.players', {username: app.session.user.username()});
    }

    content() {
        return app.translator.trans('hcl.forum.notifications.update_approved', { user: this.attrs.notification.fromUser() })
    }
}