import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import app from 'flarum/app';
import Stream from 'flarum/utils/Stream';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import Component from 'flarum/Component'
import Button from 'flarum/components/Button';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import getDatepicker from '../../../common/utils/getDatepicker';

dayjs.extend(utc)

/*
 * Attr
 * update 
 * onselect
 */
export default class UpdateEditCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.update = this.attrs.update;
        this.player = this.update.submittedUser().player();
        this.originalState = this.update;
        this.saving = false;
        this.loadingPlayer = false;
        this.dpInit = false;

        this.updaterComment = new Stream(this.update.updaterComment());
        this.tpe = new Stream(this.update.tpe());
        this.date = new Stream(this.update.weekEnding());
    }

    oncreate(vnode) {
        super.oncreate(vnode);
        if (!this.loadingPlayer && !this.dpInit) {
            this.dpInit = true;
            this.datepicker = getDatepicker(`#Update-datepicker-${this.update.id()}`,
                this.date(),
                (instance, date) => this.date(date)
            );
        }
    }

    onupdate(vnode) {
        if (!this.loadingPlayer && !this.dpInit) {
            this.dpInit = true;
            this.datepicker = getDatepicker(`#Update-datepicker-${this.update.id()}`,
                this.date(),
                (instance, date) => this.date(date)
            );
        }
    }

    view() {
        let updater = null;
        if (this.update.updaterUser()) {
            updater = username(this.update.updaterUser());
        }

        if (!this.player) {
            this.loadPlayer();
        }

        if (this.loadingPlayer) {
            return (<div className="UpdateEditCard"
                         style={{ backgroundColor: this.update.submittedUser().color()}}>
                <LoadingIndicator/>
            </div>);
        }

        return (
            <div className="UpdateEditCard"
                 style={{ backgroundColor: this.update.submittedUser().color()}}>
                <div className="UpdateEditCard-fields">
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.player')}</legend>
                        {this.player.name()} (
                        <a href={app.route('user', { username: this.update.submittedUser().username() })}>
                            {username(this.update.submittedUser())}
                        </a>)
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-week">
                        <legend>{app.translator.trans('hcl.forum.basics.for_week')}</legend>
                        <input id={`Update-datepicker-${this.update.id()}`}
                            className="FormControl"
                            type="text"
                            required
                            autocomplete="off" />
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.type')}</legend>
                        {app.translator.trans(`hcl.forum.updates.types.${this.update.type()}`)}
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-tpe">
                        <legend>{app.translator.trans('hcl.forum.basics.tpe')}</legend>
                        <input type="number"
                                min={1}
                                max={12}
                                className="UpdateEditCard-tpe"
                                bidi={this.tpe} />
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-full">
                        <legend>{app.translator.trans('hcl.forum.basics.link')}</legend>
                        <a href={this.update.link()}
                        target="_blank">
                            {this.update.link()}
                        </a>
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-full">
                        <legend>{app.translator.trans('hcl.forum.basics.comment')}</legend>
                        {this.update.comment()}
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.current_status')}</legend>
                        {app.translator.trans(`hcl.lib.update_status.${this.update.status()}`)}
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.submitted_at')}</legend>
                        {humanTime(this.update.submittedAt())}
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.last_updated')}</legend>
                        <div className="UpdateEditCard-date">
                            {this.update.updatedAt() ? humanTime(this.update.updatedAt()) : 'Never Updated'}
                        </div>
                    </div>
                    <div className="UpdateEditCard-item">
                        <legend>{app.translator.trans('hcl.forum.basics.updater')}</legend>
                        {updater}
                    </div>
                    <div className="UpdateEditCard-item UpdateEditCard-full">
                        <legend>{app.translator.trans('hcl.forum.basics.updater_comment')}</legend>
                        <input type="textarea"
                            bidi={this.updaterComment} />
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

    loadPlayer()
    {
        this.loadingPlayer = true;

        // The UpdateDirectoryPage preloads players we just need to go find them
        const preloadedplayer = app.store.all('players')
            .filter(p => p.user() && p.user().id() == this.update.submittedUser().id())[0];
        if (!!preloadedplayer) {
            this.loadingPlayer = false;
            this.player = preloadedplayer;
            m.redraw();
            return;
        }

        app.store.find('users', `${this.update.submittedUser().id()}/player`, null, {
            errorHandler() {
            }
        }).then(p => {
            this.player = p;
        }).finally(() => {
            this.loadingPlayer = false;
            m.redraw();
        });
    }

    data(status) {
        let data = {
            status: status
        };

        if (!!this.updaterComment())
            data.updaterComment = this.updaterComment();

        var datea = dayjs(this.date()).format('YYYY-MM-DD');
        var dateb = dayjs(this.update.date()).utc().format('YYYY-MM-DD');

        if (datea != dateb)
            data.date = dayjs(this.date()).format('YYYY-MM-DD');

        if (this.tpe() != this.update.tpe())
            data.tpe = this.tpe();

        return data;
    }

    approve() {
        this.saving = true;

        this.update.save(
            this.data('approved')
        ).then(() => {
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

        if (!this.updaterComment()) {
            app.alerts.show(
                { type: "error" },
                app.translator.trans("hcl.forum.alerts.comment_required")
            );
            this.saving = false;
            return;
        }

        this.update.save(
            this.data('denied')
        ).then(() => {
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

        this.update.save(
            this.data('under_review')
        ).then(() => {
            app.alerts.show(
                { type: "success" },
                app.translator.trans("hcl.forum.alerts.underReview")
            );
        }).finally(() => {
            this.saving = false;
        });;
    }
}