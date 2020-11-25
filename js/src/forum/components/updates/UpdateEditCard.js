import app from 'flarum/app';
import Component from 'flarum/Component'
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
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
            <div className="UpdateEditCard">
                <div className="UpdateEditCard-header">
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.player')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.for_week')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.submitted_at')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.type')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.tpe')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.link')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.comment')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.current_status')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.last_updated')}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans('hcl.forum.basics.updater')}
                    </div>
                </div>
                <div className="UpdateEditCard-body">
                    <div className="UpdateEditCard-player">
                        {player.name()} (
                        {username(this.update.submittedUser())})
                    </div>
                    <div className="UpdateEditCard-week">
                        {getNextDayOfWeek(this.update.date(), 0).toLocaleDateString()}
                    </div>
                    <div className="UpdateEditCard-label">
                        {this.update.submittedAt()}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans(`hcl.forum.updates.types.${this.update.type()}`)}
                    </div>
                    <div className="UpdateEditCard-label">
                        <input type="number"
                               value={this.update.tpe()}/>
                    </div>
                    <div className="UpdateEditCard-label">
                        {this.update.link()}
                    </div>
                    <div className="UpdateEditCard-label">
                        {this.update.comment()}
                    </div>
                    <div className="UpdateEditCard-label">
                        {app.translator.trans(`hcl.lib.update_status.${this.update.status()}`)}
                    </div>
                    <div className="UpdateEditCard-label">
                        {humanTime(this.update.updatedAt())}
                    </div>
                    <div className="UpdateEditCard-label">
                        {updater}
                    </div>
                </div>
                <div className="Button-group">
                    <Button className="Button Button--approve"
                            disabled={this.update.isApproved()}>
                        {app.translator.trans('hcl.forum.updates.approve')}
                    </Button>
                    <Button className="Button Button--deny"
                            disabled={this.update.isDenied()}>
                        {app.translator.trans('hcl.forum.updates.deny')}
                    </Button>
                    <Button className="Button Button--under-review">
                        {app.translator.trans('hcl.forum.updates.under_review')}
                    </Button>
                </div>
            </div>
        );
    }
}