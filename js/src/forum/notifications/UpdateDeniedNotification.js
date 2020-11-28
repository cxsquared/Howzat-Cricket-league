import app from 'flarum/app';
import Notification from 'flarum/components/Notification';

export default class UpdateDeniedNotification extends Notification {
    icon() {
        return 'fas fa-certificate';
    }

    href() {
        return app.route('user.updates', {username: app.session.user.username()});
    }

    content() {
        return app.translator.trans('hcl.forum.notifications.update_denied', { user: this.attrs.notification.fromUser() })
    }

    excerpt() {
        return this.attrs.notification.content();
    }
}