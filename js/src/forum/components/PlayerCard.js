import app from 'flarum/app';
import Component from 'flarum/Component'
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';

const seperator = <div className="PlayerCard-seperator">|</div>;
const flagUrl = "https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/"; 

export default class PlayerCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.player = this.attrs.player;
        this.originalState = this.player;
        this.saving = false;

        this.showUpdate = false;
        this.playerSkillUpdates = {};

        this.save = this.save.bind(this);
        this.initPlayerUpdateSkills = this.initPlayerUpdateSkills.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
        this.validTpeLimit = this.validTpeLimit.bind(this);

        this.initPlayerUpdateSkills();

        this.errors = [];
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

    view() {
        const player = this.attrs.player;

        return (
            <div className="PlayerCard">
                {this.buildHeader(player)}
                {this.buildInfo(player)}
            </div>
        )
    }

    toggleUpdating() {
        this.showUpdate = !this.showUpdate;
        if (this.showUpdate) {
            this.originalState = this.attrs.player;
        }

        m.redraw();
    }

    save() {
        this.saving = true;

        this.player.save(this.playerSkillUpdates).then(p => {
            this.saving = false;
            this.player = p;
            m.redraw();
        }).catch(e => {
            this.saving = false;
            this.player = this.originalState;
            this.initPlayerUpdateSkills();
            m.redraw();
        });

        this.toggleUpdating();
    }

    cancel() {
        this.player = this.originalState;

        this.showUpdate = false;

        m.redraw();
    }

    updateSkill(skill, tpe) {
        let intTpe = parseInt(tpe);
        if (this.validTpeLimit(skill, intTpe)) {
            this.playerSkillUpdates[skill] = intTpe;
        }
    }

    buildHeader(player) {
        const color = this.attrs.color ? this.attrs.color : '#675555';
        const user = this.player.user();
        const usernameSpan = username(user);

        let userLink = null;
        if (this.attrs.showUser && user && usernameSpan[0] !== '[deleted]') {
            userLink = [ 
                <div className="PlayerCard-username">
                    <a href={app.route('user', { username: user.username() })}>
                        {usernameSpan}
                    </a>
                </div>,
                seperator
            ];
        }

        let headerButtons = [];
        let canEdit = app.session.user === this.attrs.user || this.player.canEdit();
        if (canEdit && !this.saving) {
            if (this.showUpdate) {
                headerButtons.push(
                    <Button onclick={this.cancel.bind(this)}
                            className="Button">
                        Cancel
                    </Button>
                );
                headerButtons.push(
                    <Button onclick={this.save.bind(this)}
                            className="Button Save">
                        Save 
                    </Button>
                );
            } else {
                headerButtons.push(
                    <Button onclick={this.toggleUpdating.bind(this)}
                            icon="fas fa-cog"
                            className="Button">
                        Update
                    </Button>
                );
            }
        }

        const countryCode = player.nationality().toLowerCase();
        const nationality =
            <div className="PlayerCard-data-img">
                <img src={`${flagUrl}${countryCode}.svg`} alt={countryCode} />
            </div>;

        return (
            <div className="PlayerCard-header"
                style={ color ? {backgroundColor: color} : ''}>
                <div className="PlayerCard-info">
                    <div className="PlayerCard-name">
                        {`${player.firstName()} ${player.lastName()}`}
                    </div>
                    {nationality}
                    <div className="PlayerCard-subheader">
                        {userLink}
                        <div className="PlayerCard-data">
                            {`${app.translator.trans('hcl.forum.player.age')}: ${player.age()}`}
                        </div>
                        {seperator}
                        <div className="PlayerCard-data">
                            {`${app.translator.trans('hcl.forum.player.tpe')}: ${player.tpe()} (${app.translator.trans('hcl.forum.player.banked')} ${player.bankedTpe()})`}
                        </div>
                        {seperator}
                        <div className="PlayerCard-data">
                            {`${app.translator.trans('hcl.forum.player.tpa')}: ${player.tpa()}`}
                        </div>
                    </div>
                </div>
                <div className="PlayerCard-update ButtonGroup">
                    {headerButtons}
                </div>
            </div>);
    }

    buildInfo(player) {
        const battingStats = this.showUpdate
            ? this.updateBattingStats() 
            : this.showBattingStats(player);

        const batting = this.battingInfo(battingStats);

        const bowlingStats = this.showUpdate
            ? this.updateBowlingStats() 
            : this.showBowlingStats(player);

        const bowling = this.bowlingInfo(player, bowlingStats);

        return (
            <div className="PlayerCard-attributes">
                {batting}
                {bowling}
            </div>
        );
    }

    battingInfo(battingStats) {
        return (
            <div className="PlayerCard-batter">
                <div className="PlayerCard-attributes-header">
                    <div className="PlayerCard-info">
                        <b>
                            {app.translator.trans('hcl.forum.player.batting_attributes')}
                        </b>
                    </div>
                </div>
                <div className="PlayerCard-batter-attributes">
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.running')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.defense')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.attacking')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.lofted')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.vsSpin')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.vsPace')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.footwork')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.timing')}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans('hcl.forum.player.control')}
                    </div>
                    {battingStats}
                </div>
            </div>);
    }

    showBattingStats (player) {
        return ([
            <div className="PlayerCard-skill">
                {player.running()}
            </div>,
            <div className="PlayerCard-skill">
                {player.defense()}
            </div>,
            <div className="PlayerCard-skill">
                {player.attacking()}
            </div>,
            <div className="PlayerCard-skill">
                {player.lofted()}
            </div>,
            <div className="PlayerCard-skill">
                {player.vsSpin()}
            </div>,
            <div className="PlayerCard-skill">
                {player.vsPace()}
            </div>,
            <div className="PlayerCard-skill">
                {player.footwork()}
            </div>,
            <div className="PlayerCard-skill">
                {player.timing()}
            </div>,
            <div className="PlayerCard-skill">
                {player.control()}
            </div>
        ]);
    }


    updateBattingStats () {
        return ([
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["running"]}
                        onchange={e => this.updateSkill("running", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["defense"]}
                        onchange={e => this.updateSkill("defense", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["attacking"]}
                        onchange={e => this.updateSkill("attacking", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["lofted"]}
                        onchange={e => this.updateSkill("lofted", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["vsSpin"]}
                        onchange={e => this.updateSkill("vsSpin", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["vsPace"]}
                        onchange={e => this.updateSkill("vsPace", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["footwork"]}
                        onchange={e => this.updateSkill("footwork", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["timing"]}
                        onchange={e => this.updateSkill("timing", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                <input type="number"
                        min={40}
                        max={99}
                        value={this.playerSkillUpdates["control"]}
                        onchange={e => this.updateSkill("control", e.target.value)} />
            </div>
        ]);
    }

    bowlingInfo(player, stats) {
        let style = player.bowlingStyle();

        return [
            <hr />,
            <div className="PlayerCard-bowler">
                <div className="PlayerCard-attributes-header">
                    <div className="PlayerCard-info">
                        <b>
                            {app.translator.trans('hcl.forum.player.bowler_attributes')}
                        </b>
                    </div>
                    <div className="PlayerCard-info">
                        {`${app.translator.trans('hcl.forum.player.bowling_style')}: ${app.translator.trans(`hcl.forum.player.style.${style.toLowerCase()}`)}`}
                    </div>
                </div>
                <div className="PlayerCard-bowler-attributes">
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.paceFlight.${style}`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.swingLegSpin.${style}`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.slowerBallOffSpin.${style}`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.seamDrift.${style}`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.accuracy`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.discipline`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.bouncerBounce.${style}`)}
                    </div>
                    <div className="PlayerCard-skill-label">
                        {app.translator.trans(`hcl.forum.player.yorkerArmBall.${style}`)}
                    </div>
                    {stats}
                </div>
            </div>];
    }

    showBowlingStats(player) {
        return [
            <div className="PlayerCard-skill">
                {player.paceFlight()}
            </div>,
            <div className="PlayerCard-skill">
                {player.swingLegSpin()}
            </div>,
            <div className="PlayerCard-skill">
                {player.slowerBallOffSpin()}
            </div>,
            <div className="PlayerCard-skill">
                {player.seamDrift()}
            </div>,
            <div className="PlayerCard-skill">
                {player.accuracy()}
            </div>,
            <div className="PlayerCard-skill">
                {player.discipline()}
            </div>,
            <div className="PlayerCard-skill">
                {player.bouncerBounce()}
            </div>,
            <div className="PlayerCard-skill">
                {player.yorkerArmBall()}
            </div>
        ];
    }

    updateBowlingStats() {
        return [
           <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["paceFlight"]}
                               onchange={e => this.updateSkill("paceFlight", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["swingLegSpin"]}
                               onchange={e => this.updateSkill("swingLegSpin", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["slowerBallOffSpin"]}
                               onchange={e => this.updateSkill("slowerBallOffSpin", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["seamDrift"]}
                               onchange={e => this.updateSkill("seamDrift", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["accuracy"]}
                               onchange={e => this.updateSkill("accuracy", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["discipline"]}
                               onchange={e => this.updateSkill("discipline", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["bouncerBounce"]}
                               onchange={e => this.updateSkill("bouncerBounce", e.target.value)} />
            </div>,
            <div className="PlayerCard-skill-update">
                        <input type="number"
                               min={40}
                               max={99}
                               value={this.playerSkillUpdates["yorkerArmBall"]}
                               onchange={e => this.updateSkill("yorkerArmBall", e.target.value)} />
            </div>

        ];
    }

    validTpeLimit(tpe) {
        // No skill over 15 tpe or under 0
        if (tpe > 99 || tpe < 40) {
            return false;
        }

        return true;
    }
}