import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import TpeUtils from '../../common/utils/TpeUtils';

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
        return 'PlayerUpdateModal';
    }

    title() {
        return app.translator.trans('hcl.forum.player.update.title');
    }

    content() {
        const tpe = <div className="PlayerUpdate--tpe">
            {`${app.translator.trans('hcl.forum.player.update.banked_tpe')}: ${this.player.bankedTpe() - this.spentTpe}`}
        </div>;
        const batting = <div className="PlayerUpdate--batting">
            <div className="PlayerUpdate--header">
                <div className="PlayerUpdate--info">
                    <b>
                        {app.translator.trans('hcl.forum.player.batting_attributes')}
                    </b>
                </div>
            </div>
            <div className="PlayerUpdate--skills">
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.skill')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.tpe')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.cost')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
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
            <div className="PlayerUpdate--header">
                <div className="PlayerUpdate--info">
                    <b>
                        {app.translator.trans('hcl.forum.player.bowler_attributes')}
                    </b>
                </div>
            </div>
            <div className="PlayerUpdate--skills">
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.skill')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.tpe')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
                    {app.translator.trans('hcl.forum.player.update.cost')}
                </div>
                <div className="PlayerUpdate--item PlayerUpdate--header">
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
            {app.translator.trans('hcl.forum.basics.save')}
        </Button>

        return <div classname="PlayerUpdate">
            {tpe}
            {batting}
            {bowling}
            {save}
        </div>;
    }

    skillRow(skill, style) {
        let name = skill;
        if (!!style)
            name += `.${style}`;

        return [
            <div className="PlayerUpdate--item PlayerUpdate--skill">
                {app.translator.trans(`hcl.forum.player.${name}`)}
            </div>,
            this.currentTpe(skill),
            this.currentCost(skill),
            this.updateButtons(skill)
        ];
    }

    currentTpe(skill) {
        const originalValue = this.player.data.attributes[skill];
        const newValue = this.playerSkillUpdates[skill];

        let className = "PlayerUpdate--item PlayerUpdate--tpe";
        if (originalValue != newValue)
            className += " PlayerUpdate--updated";

        return <div className={className}>
            {newValue}
        </div>;
    }

    currentCost(skill) {
        const cost = TpeUtils.cost(this.playerSkillUpdates[skill]);

        let className = "PlayerUpdate--item PlayerUpdate--cost";
        if (cost > this.tpeLeft())    
            className = "PlayerUpdate--warning";

        return <div className={className}>
            {cost}
        </div>;
    }

    updateButtons(skill) {
        const currentTpe = this.playerSkillUpdates[skill];
        const increaseDisabled = TpeUtils.cost(currentTpe) > this.tpeLeft();
        const decreaseDisabled = currentTpe <= this.player.data.attributes[skill] || currentTpe === 40; 

        return <div className="PlayerUpdate--item PlayerUpdate--buttons">
            <Button type="button"
                    className="Button PlayerUpdate--decrease"
                    disabled={decreaseDisabled}
                    icon="fas fa-minus"
                    onclick={() => this.updateSkill(skill, TpeUtils.decrementCost(currentTpe))} />
            <Button type="button"
                    className="Button PlayerUpdate--increase"
                    disabled={increaseDisabled}
                    icon="fas fa-plus"
                    onclick={() => this.updateSkill(skill, TpeUtils.cost(currentTpe))} />
        </div>
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
        const currentTpe = this.playerSkillUpdates[skill];
        const newTpe = currentTpe + tpe;

        if (newTpe > 99 || newTpe < 40 || this.tpeLeft() - tpe < 0)
            return;

        this.spentTpe += tpe;
        this.playerSkillUpdates[skill] = newTpe;
    }

    tpeLeft() {
        return this.player.bankedTpe() - this.spentTpe;
    }
};