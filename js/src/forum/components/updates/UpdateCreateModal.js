import dayjs from 'dayjs';
import app from 'flarum/app';
import Stream from 'flarum/utils/Stream';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import getNextDayOfWeek from '../../../common/utils/getNextDayOfWeek';
import getDatepicker from '../../../common/utils/getDatepicker';
import UpdateTypeUtils from '../../../common/utils/UpdateTypeUtils';
import RequiredSelect from '../RequiredSelect';

export default class UpdateCreateModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
        this.saving = false;

        let linkPost = '';
        if (this.attrs.post) {
            linkPost = window.location.origin + app.route.post(this.attrs.post);
        }

        const today = new Date();
        let nextSunday = today;
        if (today.getDay() != 0) {
            nextSunday = getNextDayOfWeek(today, 0);
        }

        this.date = Stream(nextSunday);
        this.type = Stream();
        this.link = Stream(linkPost);
        this.comment = Stream();
        this.tpe = Stream();
    }

    className() {
        return 'Update Modal--small';
    }

    title() {
        return app.translator.trans('hcl.forum.updates.title');
    }

    oncreate(vnode) {
        super.oncreate(vnode);
        this.datepicker = getDatepicker('#Update-datepicker', this.date(), (instance, date) => this.date(date));
    }

    content() {
        // Using a hidden input to avoid autofocussing the first date input"
        return (
            <div className="Modal-body">
                <input type="hidden" autofocus="true" tabindex={-1} />
                <div className="Update--datepicker Form-group">
                    <label for="datepicker">{app.translator.trans('hcl.forum.updates.week_ending')}</label>
                    <input id="Update-datepicker" className="FormControl" type="text" required autocomplete="off" />
                </div>
                <div className="Update--type Form-group">
                    <label for="type">{app.translator.trans('hcl.forum.updates.type')}</label>
                    <RequiredSelect
                        id="type"
                        options={UpdateTypeUtils.types()}
                        className="FormControl"
                        value={this.type()}
                        onchange={(v) => {
                            this.tpe(UpdateTypeUtils.getTpe(v));
                            this.type(v);
                        }}
                    />
                </div>
                <div className="Update--link Form-group">
                    <label for="link">{app.translator.trans('hcl.forum.updates.link')}</label>
                    <input id="link" className="FormControl" type="text" bidi={this.link} />
                </div>
                <div className="Update--comment Form-group">
                    <label for="comment">{app.translator.trans('hcl.forum.updates.comment')}</label>
                    <input
                        id="comment"
                        className="FormControl"
                        type="text"
                        required={UpdateTypeUtils.getCommentRequired(this.type())}
                        bidi={this.comment}
                    />
                </div>
                <div className="Update--tpe Form-group">
                    <label for="tpe">{app.translator.trans('hcl.forum.basics.tpe')}</label>
                    <input id="tpe" type="number" className="FormControl" min={0} max={12} required bidi={this.tpe} />
                </div>
                <div className="Form-gruop">
                    <Button type="submit" className="Button Button--primary" loading={this.saving} disabled={this.saving}>
                        {app.translator.trans('hcl.forum.basics.submitt')}
                    </Button>
                </div>
            </div>
        );
    }

    data() {
        return {
            date: dayjs(this.date()).format('YYYY-MM-DD'),
            type: this.type(),
            link: this.link(),
            comment: this.comment(),
            tpe: this.tpe(),
        };
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        const update = app.store.createRecord('updates');

        update
            .save(this.data())
            .then(() => {
                this.hide();
                app.alerts.show({ type: 'success' }, app.translator.trans('hcl.forum.updates.success'));
            })
            .catch(() => {
                this.saving = false;
            });
    }
}
