import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class PlayerRetireModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.saving = false;
    }

    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('hcl.forum.player.retire.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <h2>{app.translator.trans('hcl.forum.player.retire.warning')}</h2>
                <div className="Form-gruop">
                    <Button onclick={() => this.hide()} className="Button Button--primary" disabled={this.saving}>
                        {app.translator.trans('hcl.forum.basics.cancel')}
                    </Button>
                    <Button type="submit" className="Button Button--danger" loading={this.saving} disabled={this.saving}>
                        {app.translator.trans('hcl.forum.player.retire.button')}
                    </Button>
                </div>
            </div>
        )
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        this.attrs.player.save({ retire: true })
        .then(() => {
            this.hide();
            app.alerts.show({ type: 'success' }, app.translator.trans('hcl.forum.alerts.player_retired'))

            if (this.attrs.showPlayer) {
                this.attrs.showPlayer(null);
            }
        })
        .catch(() => {
            this.saving = false;
        })
    }
}