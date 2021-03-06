import Color from "color";
import app from "flarum/app";
import Component from "flarum/Component";
import Button from "flarum/components/Button";
import Link from "flarum/components/Link";
import username from "flarum/helpers/username";
import flag from "../../../common/utils/flag";
import PlayerUpdateModal from "./PlayerUpdateModal";

const seperator = <div className="PlayerCard-seperator">|</div>;

/*
 * Attr
 * player
 * showUser
 */
export default class PlayerCard extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.player = this.attrs.player;
    this.originalState = this.player;
    this.saving = false;
  }

  view() {
    return (
      <div className="PlayerCard">
        {this.buildHeader(this.player)}
        {this.buildInfo(this.player)}
      </div>
    );
  }

  toggleUpdating() {
    app.modal.show(PlayerUpdateModal, {
      player: this.player,
      onsave: this.onsave.bind(this),
    });
  }

  onsave(player) {
    this.player = player;
    m.redraw();
  }

  buildHeader(player) {
    const colorString =
      this.player.user() && this.player.user().color()
        ? this.player.user().color()
        : "#675555";

    const bgColor = Color(colorString);
    const textColor = bgColor.isLight() ? "#111" : "#fff";

    const user = this.player.user();
    const usernameSpan = username(user);

    let userLink = null;
    if (this.attrs.showUser && user && usernameSpan[0] !== "[deleted]") {
      userLink = [
        <div className="PlayerCard-username">
          <a
            href={app.route("user", { username: user.username() })}
            style={{ color: textColor }}
          >
            {usernameSpan}
          </a>
        </div>,
        seperator,
      ];
    }

    let headerButtons = [];
    let canEdit =
      app.session.user === this.player.user() || this.player.canEdit();
    if (canEdit && !this.saving) {
      let hasTpe = this.player.bankedTpe() > 0;
      let text = app.translator.trans("hcl.forum.basics.no_tpe");
      let className = "Button";

      if (hasTpe) {
        text = app.translator.trans("hcl.forum.basics.update");
        className += " Button--important";
      }

      headerButtons.push(
        <Button
          onclick={this.toggleUpdating.bind(this)}
          icon="fas fa-cog"
          disabled={!hasTpe}
          className={className}
        >
          {text}
        </Button>
      );
    }

    const nationality = (
      <div className="PlayerCard-data-img">
        {flag(player.nationality().toLowerCase())}
      </div>
    );

    let team = null;
    if (player.team()) {
      team = [
        <div className="PlayerCard-data PlayerCard-team">
          <Link
            href={app.route("teams.show", { id: player.team().id() })}
            title={player.team().name()}
            alt={player.team().name()}
          >
            <img
              src={player.team().logoLink()}
              alt={player.team().name()}
              style={{
                backgroundColor: `${Color(`#${player.team().primaryColor()}`)
                  .darken(0.35)
                  .hex()}`,
              }}
            />
          </Link>
        </div>,
        seperator,
      ];
    }

    return (
      <div
        className="PlayerCard-header"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="PlayerCard-info">
          <div className="PlayerCard-name">{`${player.firstName()} ${player.lastName()}`}</div>
          {nationality}
          <div className="PlayerCard-subheader">
            {userLink}
            {team}
            <div className="PlayerCard-data">{`${app.translator.trans(
              "hcl.forum.player.age"
            )}: ${player.age()}`}</div>
            {seperator}
            <div className="PlayerCard-data">
              {`${app.translator.trans(
                "hcl.forum.player.tpe"
              )}: ${player.tpe()} (${app.translator.trans(
                "hcl.forum.player.banked"
              )} ${player.bankedTpe()})`}
            </div>
            {seperator}
            <div className="PlayerCard-data">{`${app.translator.trans(
              "hcl.forum.player.tpa"
            )}: ${player.tpa()}`}</div>
            {seperator}
            <div className="PlayerCard-data">{`${app.translator.trans(
              "hcl.forum.player.season"
            )}${player.season()}`}</div>
          </div>
        </div>
        <div className="PlayerCard-update ButtonGroup">{headerButtons}</div>
      </div>
    );
  }

  buildInfo(player) {
    const battingStats = this.showBattingStats(player);
    const batting = this.battingInfo(battingStats);

    const bowlingStats = this.showBowlingStats(player);
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
            <b>{app.translator.trans("hcl.forum.player.batting_attributes")}</b>
          </div>
          {seperator}
          <div className="PlayerCard-individual-tpe">{`${app.translator.trans(
            "hcl.forum.player.tpa"
          )}: ${this.player.battingTpa()}`}</div>
        </div>
        <div className="PlayerCard-batter-attributes">
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.running")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.defense")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.attacking")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.lofted")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.vsSpin")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.vsPace")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.footwork")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.timing")}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans("hcl.forum.player.control")}
          </div>
          {battingStats}
        </div>
      </div>
    );
  }

  showBattingStats(player) {
    return [
      <div className="PlayerCard-skill">{player.running()}</div>,
      <div className="PlayerCard-skill">{player.defense()}</div>,
      <div className="PlayerCard-skill">{player.attacking()}</div>,
      <div className="PlayerCard-skill">{player.lofted()}</div>,
      <div className="PlayerCard-skill">{player.vsSpin()}</div>,
      <div className="PlayerCard-skill">{player.vsPace()}</div>,
      <div className="PlayerCard-skill">{player.footwork()}</div>,
      <div className="PlayerCard-skill">{player.timing()}</div>,
      <div className="PlayerCard-skill">{player.control()}</div>,
    ];
  }

  updateBattingStats() {
    return [
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["running"]}
          onchange={(e) => this.updateSkill("running", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["defense"]}
          onchange={(e) => this.updateSkill("defense", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["attacking"]}
          onchange={(e) => this.updateSkill("attacking", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["lofted"]}
          onchange={(e) => this.updateSkill("lofted", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["vsSpin"]}
          onchange={(e) => this.updateSkill("vsSpin", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["vsPace"]}
          onchange={(e) => this.updateSkill("vsPace", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["footwork"]}
          onchange={(e) => this.updateSkill("footwork", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["timing"]}
          onchange={(e) => this.updateSkill("timing", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["control"]}
          onchange={(e) => this.updateSkill("control", e.target.value)}
        />
      </div>,
    ];
  }

  bowlingInfo(player, stats) {
    let style = player.bowlingStyle();

    return [
      <hr />,
      <div className="PlayerCard-bowler">
        <div className="PlayerCard-attributes-header">
          <div className="PlayerCard-info">
            <b>{app.translator.trans("hcl.forum.player.bowler_attributes")}</b>
          </div>{" "}
          {seperator}
          <div className="PlayerCard-info">
            {`${app.translator.trans(
              "hcl.forum.player.bowling_style"
            )}: ${app.translator.trans(
              `hcl.forum.player.style.${style.toLowerCase()}`
            )}`}
          </div>
          {seperator}
          <div className="PlayerCard-individual-tpe">{`${app.translator.trans(
            "hcl.forum.player.tpa"
          )}: ${this.player.bowlingTpa()}`}</div>
        </div>
        <div className="PlayerCard-bowler-attributes">
          <div className="PlayerCard-skill-label">
            {app.translator.trans(`hcl.forum.player.paceFlight.${style}`)}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans(`hcl.forum.player.swingLegSpin.${style}`)}
          </div>
          <div className="PlayerCard-skill-label">
            {app.translator.trans(
              `hcl.forum.player.slowerBallOffSpin.${style}`
            )}
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
      </div>,
    ];
  }

  showBowlingStats(player) {
    return [
      <div className="PlayerCard-skill">{player.paceFlight()}</div>,
      <div className="PlayerCard-skill">{player.swingLegSpin()}</div>,
      <div className="PlayerCard-skill">{player.slowerBallOffSpin()}</div>,
      <div className="PlayerCard-skill">{player.seamDrift()}</div>,
      <div className="PlayerCard-skill">{player.accuracy()}</div>,
      <div className="PlayerCard-skill">{player.discipline()}</div>,
      <div className="PlayerCard-skill">{player.bouncerBounce()}</div>,
      <div className="PlayerCard-skill">{player.yorkerArmBall()}</div>,
    ];
  }

  updateBowlingStats() {
    return [
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["paceFlight"]}
          onchange={(e) => this.updateSkill("paceFlight", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["swingLegSpin"]}
          onchange={(e) => this.updateSkill("swingLegSpin", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["slowerBallOffSpin"]}
          onchange={(e) =>
            this.updateSkill("slowerBallOffSpin", e.target.value)
          }
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["seamDrift"]}
          onchange={(e) => this.updateSkill("seamDrift", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["accuracy"]}
          onchange={(e) => this.updateSkill("accuracy", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["discipline"]}
          onchange={(e) => this.updateSkill("discipline", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["bouncerBounce"]}
          onchange={(e) => this.updateSkill("bouncerBounce", e.target.value)}
        />
      </div>,
      <div className="PlayerCard-skill-update">
        <input
          type="number"
          min={40}
          max={99}
          value={this.playerSkillUpdates["yorkerArmBall"]}
          onchange={(e) => this.updateSkill("yorkerArmBall", e.target.value)}
        />
      </div>,
    ];
  }
}
