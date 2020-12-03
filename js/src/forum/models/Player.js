import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';
import TpeUtils from '../../common/utils/TpeUtils';

export default class Player extends Model {}

Object.assign(Player.prototype, {
    firstName: Model.attribute('firstName'),
    lastName: Model.attribute('lastName'),
    age: Model.attribute('age'),
    height: Model.attribute('height'),
    weight: Model.attribute('weight'),
    nationality: Model.attribute('nationality'),
    bowlingStyle: Model.attribute('bowlingStyle'),

    running: Model.attribute('running'),
    defense: Model.attribute('defense'),
    attacking: Model.attribute('attacking'),
    lofted: Model.attribute('lofted'),
    vsSpin: Model.attribute('vsSpin'),
    vsPace: Model.attribute('vsPace'),
    footwork: Model.attribute('footwork'),
    timing: Model.attribute('timing'),
    control: Model.attribute('control'),

    paceFlight: Model.attribute('paceFlight'),
    swingLegSpin: Model.attribute('swingLegSpin'),
    slowerBallOffSpin: Model.attribute('slowerBallOffSpin'),
    seamDrift: Model.attribute('seamDrift'),
    accuracy: Model.attribute('accuracy'),
    discipline: Model.attribute('discipline'),
    bouncerBounce: Model.attribute('bouncerBounce'),
    yorkerArmBall: Model.attribute('yorkerArmBall'),

    tpe: Model.attribute('tpe'),
    bankedTpe: Model.attribute('bankedTpe'),

    // Computed
    name: computed('firstName', 'lastName', (fn, ln) => `${fn} ${ln}`),
    tpa: computed('battingTpa', 'bowlingTpa', (bat, bowl) => bat + bowl), 
    battingTpa: computed(
        'running',
        'defense',
        'attacking',
        'lofted',
        'vsSpin',
        'vsPace',
        'footwork',
        'timing',
        'control',
        (...stats) => TpeUtils.tpa(stats)
    ),
    bowlingTpa: computed(
        'paceFlight',
        'swingLegSpin',
        'slowerBallOffSpin',
        'seamDrift',
        'accuracy',
        'discipline',
        'bouncerBounce',
        'yorkerArmBall',
        (...stats) => TpeUtils.tpa(stats)
    ),
    isBowler: computed('battingTpa', 'bowlingTpa', (bat, bowl) => bowl > bat),
    isPaceBowler: computed('bowlingStyle', (bs) => bs.toLowerCase() === 'pace'),

    // relationships
    user: Model.hasOne('user'),
    team: Model.hasOne('team'),

    // permissions
    canEdit: Model.attribute('canEdit'),

    // audit trail
    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),
});
