import app from 'flarum/app';
import Stream from 'flarum/utils/Stream';
import Button from 'flarum/components/Button';
import Modal from "flarum/components/Modal";
import Select from 'flarum/components/Select';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class MakeCaptainModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.teams = [];
        this.saving = false;
        this.loading = false;
        this.team = Stream();

        this.loadTeams();
    }

    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('hcl.forum.title.captain_modal');
    }

    content() {
        if (this.loading)
            return <LoadingIndicator />

        return (
            <div className="Modal-body">
                <Select options={this.teams} 
                        value={this.team()}
                        onchange={(v) => {
                            this.team(v);
                        }}
                        disabled={this.saving} />
                <div className="Form-gruop">
                    <Button type="submit" className="Button Button--primary" loading={this.saving} disabled={this.saving}>
                        {app.translator.trans('hcl.forum.basics.submitt')}
                    </Button>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        let team = app.store.getById('teams', this.team());
        let data = {};
        if (this.attrs.captain) {
            data.relationships = {
                gmUser: [
                    this.attrs.user,
                ]
            }
        } else {
            data.relationships = {
                agmUser: [
                    this.attrs.user
                ]
            }
        }

        team.save(data).then(() => {
            this.hide();
            app.alerts.show({ type: 'success'}, app.translator.trans('hcl.forum.alerts.set_captain'));
        });
    }

    loadTeams() {
        this.loading = true;

        app.store.find('teams')
        .then(results => {
            results.forEach((team) => {
                this.teams[team.id()] = team.name();
            });

            this.loading = false;

            m.redraw();
        });
    }
};