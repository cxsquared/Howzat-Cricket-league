import datepicker from 'js-datepicker';
import app from 'flarum/app';
import Stream from 'flarum/utils/Stream';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import getNextDayOfWeek from '../../common/utils/getNextDayOfWeek';
import UpdateTypeUtils from '../../common/utils/UpdateTypeUtils';
import RequiredSelect from '../components/RequiredSelect';

export default class UpdateCreateModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
        this.dpInit = false;
        this.saving = false;

        const linkPost = window.location.origin + app.route.post(this.attrs.post);

        this.date = Stream();
        this.type = Stream();
        this.link = Stream(linkPost);
        this.comment = Stream();
        this.tpe = Stream();
    }

    className() {
        return "Update Modal--small";
    }

    title() {
        return app.translator.trans("hcl.forum.updates.title");
    }

    content() {
        return <div className="Modal-body">
            <div className="Update--datepicker Form-group">
                <label for="datepicker">{app.translator.trans("hcl.forum.updates.week_ending")}</label>
                <input id="datepicker"
                       className="FormControl"
                       type="text"
                       required
                       bidi={this.date}/>
            </div>
            <div className="Update--type Form-group">
                <label for="type">{app.translator.trans("hcl.forum.updates.type")}</label>
                <RequiredSelect id="type"
                                options={UpdateTypeUtils.types()}
                                className="FormControl"
                                value={this.type()}
                                onchange={v => {
                                    this.tpe(UpdateTypeUtils.getTpe(v));
                                    this.type(v);
                                }} />
            </div>
            <div className="Update--link Form-group">
                <label for="link">{app.translator.trans("hcl.forum.updates.link")}</label>
                <input id="link"
                       className="FormControl"
                       type="text"
                       bidi={this.link}/>
            </div>
            <div className="Update--comment Form-group">
                <label for="comment">{app.translator.trans("hcl.forum.updates.comment")}</label>
                <input id="comment"
                       className="FormControl"
                       type="text"
                       required={UpdateTypeUtils.getCommentRequired(this.type())}
                       bidi={this.comment}/>
            </div>
            <div className="Update--tpe Form-group">
                <label for="tpe">{app.translator.trans("hcl.forum.basics.tpe")}</label>
                <input id="tpe"
                       type="number"
                       className="FormControl"
                       min={0}
                       max={12}
                       required
                       bidi={this.tpe}/>
            </div>
            <div className="Form-gruop">
                <Button type="submit"
                        className="Button Button--primary"
                        loading={this.saving}
                        disabled={this.saving}>
                    {app.translator.trans('hcl.forum.basics.submitt')}
                </Button>
            </div>
        </div>;
    }

    onupdate(vnode) {
        const today = new Date();
        let nextSunday = today;
        if (today.getDay() != 0) {
            nextSunday = getNextDayOfWeek(today, 0);
        }    

        let maxDate = nextSunday;
        if (nextSunday === today) {
            maxDate.setDate(nextSunday.getDate() + 7);
        }

        if(!this.dpInit) {
            this.dpInit = true;
            this.date(nextSunday);
            this.datepicker = datepicker('#datepicker', {
                dateSelected: nextSunday,
                maxDate: maxDate,
                disabler: date => date.getDay() != 0
            });
        }
    }

    data() {
        return {
            date: this.date(),
            type: this.type(),
            link: this.link(),
            comment: this.comment(),
            tpe: this.tpe()
        }
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        const update = app.store.createRecord('updates');

        update.save(this.data()).then(() => {
            this.hide();
            app.alerts.show(
                { type: "success" },
                app.translator.trans("hcl.forum.updates.success")
            );
        }).catch(() => {
            this.saving = false;
        })

    }

}
