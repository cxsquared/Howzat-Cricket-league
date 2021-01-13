import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';

export default class ReleasePlayerModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.player = this.attrs.player;
        this.latestUpdate = null;

        this.saving = false;
        this.loading = false;

        if (this.player.user())
            this.loadUpdates();
    }

    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('hcl.forum.player.release.title');
    }

    content() {
        if (this.loading) {
            return <div className="Modal-body">
                <LoadingIndicator />
            </div>;
        }

        let text = "";
        if (this.player.user() && this.latestUpdate) {
            text = app.translator.trans('hcl.forum.player.release.warning_update', {latestUpdate: this.latestUpdate.weekEnding().toDateString()});
        } else {
            text = app.translator.trans('hcl.forum.player.release.warning');
        }

        return (
            <div className="Modal-body">
                <h2>{text}</h2>
                <div className="Form-gruop">
                    <Button onclick={() => this.hide()} className="Button Button--primary" disabled={this.loading || this.saving}>
                        {app.translator.trans('hcl.forum.basics.cancel')}
                    </Button>
                    <Button type="submit" className="Button Button--danger" loading={this.saving} disabled={this.saving || this.saving}>
                        {app.translator.trans('hcl.forum.player.release.button')}
                    </Button>
                </div>
            </div>
        );
    }

    loadUpdates() {
        this.loading = true;

        app.store
            .find('updates', { filter: { q: `username:${this.player.user().username()}` } , page: { limit: 1 }, sort: '-submittedAt' })
            .then((updates) => {
                this.latestUpdate = updates[0];
                m.redraw();
            })
            .finally(() => (this.loading = false));
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        app.request({
            url: `${app.forum.attribute('apiUrl')}/players/${this.player.id()}/release`,
            method: 'POST',
        })
            .then((p) => {
                this.hide();
                app.alerts.show({ type: 'success' }, app.translator.trans('hcl.forum.alerts.player_released'));
                this.attrs.onexit();
            })
            .finally(() => {
                this.saving = false;
            });
    }
}
