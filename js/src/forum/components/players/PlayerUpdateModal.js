import Color from 'color';
import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import TpeUtils from '../../../common/utils/TpeUtils';

// Player
// OnSave
export default class PlayerUpdateModal extends Modal {

    oninit(vnode) {
        super.oninit(vnode);
        this.player = this.attrs.player;
        this.originalState = this.player;
        this.saving = false;

        this.playerSkillUpdates = {};
        this.spentTpe = 0;

        this.initPlayerUpdateSkills();

        this.errors = [];
    }

    className() {
        return 'PlayerUpdateModal Modal';
    }

    title() {
        return app.translator.trans('hcl.forum.player.update.title');
    }

    content() {
        const colorString = this.player.user().color() ?
            this.player.user().color() :
            '#675555'
        
        const bgColor = Color(colorString);
        const textColor = bgColor.isLight() ? '#111' : '#fff';
            
        const tpe = <div className="PlayerUpdate--tpebanked"
                         style={ {backgroundColor: bgColor, color: textColor}}>
            {`${app.translator.trans('hcl.forum.player.update.banked_tpe')}: ${this.player.bankedTpe() - this.spentTpe}`}
        </div>;
        const batting = <div className="PlayerUpdate--batting">
            <div className="PlayerUpdate--info">
                <h2>
                    <b>{app.translator.trans('hcl.forum.player.batting_attributes')}</b>
                </h2>
            </div>
            <div className="PlayerUpdate--skills">
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.skill')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.tpe')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.cost')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.update')}
                </div>
                {this.skillRow("running")}
                {this.skillRow("defense")}
                {this.skillRow("attacking")}
                {this.skillRow("lofted")}
                {this.skillRow("vsSpin")}
                {this.skillRow("vsPace")}
                {this.skillRow("footwork")}
                {this.skillRow("timing")}
                {this.skillRow("control")}
            </div>
        </div>;

        const style = this.player.bowlingStyle();

        const bowling = <div className="PlayerUpdate--bowling">
            <div className="PlayerUpdate--info">
                <h2>
                    <b>{app.translator.trans('hcl.forum.player.bowler_attributes')}</b>
                </h2>
            </div>
            <div className="PlayerUpdate--skills">
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.skill')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.tpe')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.cost')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center">
                    {app.translator.trans('hcl.forum.player.update.update')}
                </div>
                {this.skillRow("paceFlight", style)}
                {this.skillRow("swingLegSpin", style)}
                {this.skillRow("slowerBallOffSpin", style)}
                {this.skillRow("seamDrift", style)}
                {this.skillRow("accuracy")}
                {this.skillRow("discipline")}
                {this.skillRow("bouncerBounce", style)}
                {this.skillRow("yorkerArmBall", style)}
            </div>
        </div>;

        const save = <Button type="submit"
                             className="Button Button--primary"
                             loading={this.saving}
                             disabled={this.saving}>
            {app.translator.trans('hcl.forum.basics.save_skills')}
        </Button>

        const reset = <Button type="button"
                              className="Button Button--danger"
                              onclick={() => this.reset()} >
            {app.translator.trans('hcl.forum.basics.reset')}
        </Button>;

        return <div className="PlayerUpdate--body Modal-body">
            {tpe}
            {batting}
            {bowling}
            <div className="PlayerUpdate--footer ButtonGroup">
                {reset}
                {save}
            </div>
        </div>;
    }

    skillRow(skill, style) {
        let name = skill;
        if (!!style)
            name += `.${style}`;

        const originalValue = this.player.data.attributes[skill];
        const newValue = this.playerSkillUpdates[skill];
        const updated = originalValue != newValue;
        let className = "PlayerUpdate--item PlayerUpdate--skill";
        if (updated)
            className += " PlayerUpdate--updated";

        return [
            <div className={className}
                 title={app.translator.trans(`hcl.forum.player.tooltip.${name}`)}>
                {app.translator.trans(`hcl.forum.player.${name}`)}
            </div>,
            this.currentTpe(skill, updated),
            this.currentCost(skill),
            this.updateButtons(skill)
        ];
    }

    currentTpe(skill, updated) {
        let className = "PlayerUpdate--item PlayerUpdate--tpe PlayerUpdate--center";
        if (updated)
            className += " PlayerUpdate--updated";

        return <div className={className}>
            {this.playerSkillUpdates[skill]}
        </div>;
    }

    currentCost(skill) {
        const cost = TpeUtils.cost(this.playerSkillUpdates[skill]);

        let className = "PlayerUpdate--item PlayerUpdate--cost PlayerUpdate--center";
        if (cost > this.tpeLeft())    
            className = "PlayerUpdate--item PlayerUpdate--warning PlayerUpdate--center";

        return <div className={className}>
            {cost}
        </div>;
    }

    updateButtons(skill) {
        const currentTpe = this.playerSkillUpdates[skill];
        const increaseDisabled = TpeUtils.cost(currentTpe) > this.tpeLeft();
        const decreaseDisabled = currentTpe <= this.player.data.attributes[skill] || currentTpe === 40; 

        return <div className="PlayerUpdate--item PlayerUpdate--buttons PlayerUpdate--center ButtonGroup">
            <Button type="button"
                    className="Button PlayerUpdate--decrease Button--icon Button--rounded"
                    disabled={decreaseDisabled}
                    icon="fas fa-minus"
                    onclick={() => this.updateSkill(skill, -1, TpeUtils.decrementCost(currentTpe))} />
            <Button type="button"
                    className="Button PlayerUpdate--increase Button--icon Button--rounded"
                    disabled={increaseDisabled}
                    icon="fas fa-plus"
                    onclick={() => this.updateSkill(skill, 1, TpeUtils.cost(currentTpe))} />
        </div>
    }

    reset() {
        this.player = this.originalState;
        this.initPlayerUpdateSkills();

        m.redraw();
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
        this.spentTpe = 0;
        
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

    updateSkill(skill, tpeToAdd, cost) {
        const currentTpe = this.playerSkillUpdates[skill];
        const newTpe = currentTpe + tpeToAdd;

        if (newTpe > 99 || newTpe < 40 || this.tpeLeft() - cost < 0)
            return;

        this.spentTpe += cost;
        this.playerSkillUpdates[skill] = newTpe;
    }

    tpeLeft() {
        return this.player.bankedTpe() - this.spentTpe;
    }
};