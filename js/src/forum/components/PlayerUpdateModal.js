import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

// Player
// OnSave
export default class PlayerUpdateModal extends Modal {

    oninit(vnode) {
        super.oninit(vnode);
        this.player = this.attrs.player;
        this.originalState = this.player;
        this.save = false;

        this.playerSkillUpdates = {};

        this.initPlayerUpdateSkills();

        this.errors = [];
    }

    className() {
        return 'PlayerUpdateModal';
    }

    title() {
        return app.translator.trans('hcl.forum.player.update.title');
    }

    content() {
        const save = <Button type="submit"
                             className="Button Button--primary"
                             loading={this.saving}
                             disabled={this.saving}>
            {app.translator.trans('hcl.forum.basics.save')}
        </Button>

        return save;
    }

    onsubmit(e) {
        e.preventDefault();

        this.saving = true;

        this.player.save(this.playerSkillUpdates).then(p => {
            this.saving = false;
            this.attrs.onsave(p);
            this.hide();
        }).catch(e => {
            this.saving = false;
            this.player = this.originalState;
            this.initPlayerUpdateSkills();
            this.onerror(e); // calls redraw
        });
    }

    initPlayerUpdateSkills() {
        // Batter
        this.playerSkillUpdates["running"] = this.player.running();
        this.playerSkillUpdates["defense"] = this.player.defense();
        this.playerSkillUpdates["attacking"] = this.player.attacking();
        this.playerSkillUpdates["lofted"] = this.player.lofted();
        this.playerSkillUpdates["vsSpin"] = this.player.vsSpin();
        this.playerSkillUpdates["vsPace"] = this.player.vsPace();
        this.playerSkillUpdates["footwork"] = this.player.footwork();
        this.playerSkillUpdates["timing"] = this.player.timing();
        this.playerSkillUpdates["control"] = this.player.control();

        this.playerSkillUpdates["paceFlight"] = this.player.paceFlight();
        this.playerSkillUpdates["swingLegSpin"] = this.player.swingLegSpin();
        this.playerSkillUpdates["slowerBallOffSpin"] = this.player.slowerBallOffSpin();
        this.playerSkillUpdates["seamDrift"] = this.player.seamDrift();
        this.playerSkillUpdates["accuracy"] = this.player.accuracy();
        this.playerSkillUpdates["discipline"] = this.player.discipline();
        this.playerSkillUpdates["bouncerBounce"] = this.player.bouncerBounce();
        this.playerSkillUpdates["yorkerArmBall"] = this.player.yorkerArmBall();
    }

    updateSkill(skill, tpe) {
        let intTpe = parseInt(tpe);
        if (this.validTpeLimit(skill, intTpe)) {
            this.playerSkillUpdates[skill] = intTpe;
        }
    }

    validTpeLimit(tpe) {
        // No skill over 15 tpe or under 0
        if (tpe > 99 || tpe < 40) {
            return false;
        }

        return true;
    }
};