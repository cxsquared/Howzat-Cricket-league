import datepicker from 'js-datepicker';
import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import getNextDayOfWeek from '../../common/utils/getNextDayOfWeek';

export default class UpdateCreateModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
        this.dpInit = false;
        this.saving = false;

        this.update = {};
    }

    className() {
        return "Update Modal--small";
    }

    title() {
        return app.translator.trans("hcl.forum.updates.title");
    }

    content() {
        return <div className="Modal-body">
            <label for="Update--datepicker">{app.translator.trans("hcl.forum.updates.week_ending")}</label>
            <input id="Update--datepicker"
                   type="text"/>
            <Button type="submit"
                             className="Button Button--primary"
                             loading={this.saving}
                             disabled={this.saving}>
                {app.translator.trans('hcl.forum.basics.submitt')}
            </Button>
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
            this.datepicker = datepicker('#Update--datepicker', {
                dateSelected: nextSunday,
                maxDate: maxDate,
                disabler: date => date.getDay() != 0
            });
        }
    }

    onsubmit(e) {
        e.preventDefault();
    }

}
