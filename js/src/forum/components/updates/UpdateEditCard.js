import app from 'flarum/app';
import Component from 'flarum/Component'
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import getNextDayOfWeek from '../../../common/utils/getNextDayOfWeek';

/*
 * Attr
 * update 
 * onselect
 */
export default class UpdateEditCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.update = this.attrs.update;
        this.originalState = this.update;
        this.saving = false;
    }

    view() {
        let updater = null;
        if (this.update.updaterUser()) {
            updater = username(this.update.updaterUser());
        }

        const player = this.update.submittedUser().player();
        return (
            <div className="UpdateEditCard"
                 style={{ backgroundColor: this.update.submittedUser().color()}}>
                <div className="UpdateEditCard-info">
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.player')}</legend>
                        {player.name()} (
                        <a href={app.route('user', { username: this.update.submittedUser().username() })}>
                            {username(this.update.submittedUser())}
                        </a>)
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.for_week')}</legend>
                            {getNextDayOfWeek(this.update.date(), 0).toLocaleDateString()}
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.type')}</legend>
                        {app.translator.trans(`hcl.forum.updates.types.${this.update.type()}`)}
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-tpe">
                        <legend>{app.translator.trans('hcl.forum.basics.tpe')}</legend>
                        <input type="number"
                                min={1}
                                min={30}
                                className="UpdateEditCard-tpe"
                                value={this.update.tpe()}/>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.link')}</legend>
                        <div className="UpdateEditCard-link">
                            <a href={this.update.link()}
                               target="_blank">
                                {this.update.link()}
                            </a>
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.comment')}</legend>
                        <div className="UpdateEditCard-comment">
                            {this.update.comment()}
                        </div>
                    </div>
                </div>
                <div className="UpdateEditCard-meta">
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.current_status')}</legend>
                        <div>
                            {app.translator.trans(`hcl.lib.update_status.${this.update.status()}`)}
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.submitted_at')}</legend>
                        <div className="UpdateEditCard-date">
                            {this.update.submittedAt().toLocaleString()}
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.last_updated')}</legend>
                        <div className="UpdateEditCard-date">
                            {this.update.updatedAt() ? this.update.updatedAt().toLocaleString() : 'Never Updated'}
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.updater')}</legend>
                        <div className="UpdateEditCard-user">
                            {updater}
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.updater_comment')}</legend>
                        <div className="UpdateEditCard-text">
                            {this.update.updaterComment()}
                        </div>
                    </div>
                </div>
                <div className="Button-group">
                    <Button className="Button Button--approve Button--primary"
                            onclick={() => this.approve()}
                            disabled={this.update.isApproved() || this.saving}>
                        {app.translator.trans('hcl.forum.updates.approve')}
                    </Button>
                    <Button className="Button Button--deny Button--danger"
                            onclick={() => this.deny()}
                            disabled={this.update.isDenied() || this.saving}>
                        {app.translator.trans('hcl.forum.updates.deny')}
                    </Button>
                    <Button className="Button Button--under-review"
                            disabled={this.update.isUnderReview() || this.saving}
                            onclick={() => this.underReview()} >
                        {app.translator.trans('hcl.forum.updates.under_review')}
                    </Button>
                </div>
            </div>
        );
    }

    approve() {
        this.saving = true;

        this.update.save({
            status: 'approved'
        }).then(() => {
            app.alerts.show(
                { type: "success" },
                app.translator.trans("hcl.forum.alerts.approved")
            );
        }).finally(() => {
            this.saving = false;
        });
    }

    deny() {
        this.saving = true;

        this.update.save({
            status: 'denied'
        }).then(() => {
            app.alerts.show(
                { type: "success" },
                app.translator.trans("hcl.forum.alerts.denied")
            );
        }).finally(() => {
            this.saving = false;
        });;
    }

    underReview() {
        this.saving = true;

        this.update.save({
            status: 'under_review'
        }).then(() => {
            app.alerts.show(
                { type: "success" },
                app.translator.trans("hcl.forum.alerts.underReview")
            );
        }).finally(() => {
            this.saving = false;
        });;
    }
}