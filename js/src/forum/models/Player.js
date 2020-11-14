import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';

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

    pace: Model.attribute('paceFlight'),
    swing: Model.attribute('swingLegSpin'),
    slowerBall: Model.attribute('slowerBallOffSpin'),
    seam: Model.attribute('seamDrift'),
    accuracy: Model.attribute('accuracy'),
    discipline: Model.attribute('discipline'),
    bouncer: Model.attribute('bouncerBounce'),
    yorker: Model.attribute('yorkerArmBall'),

    tpe: Model.attribute('tpe'),
    bankedTpe: Model.attribute('bankedTpe'),
    tpa: computed('running', 'defense', 'attacking', 'lofted', 'vsSpin', 'vsPace',
                   'footwork', 'timing', 'control', 'paceFlight', 'swingLegSpin',
                   'slowerBallOffSpin', 'seamDrift', 'accuracy', 'discipline',
                   'bouncerBounce', 'yorkerArmBall',
                   (...stats) => stats.reduce((t, n) => {
                        if (Number.isInteger(n)) {
                            var tpa = n - 40;
                            var totalTpa = 0;

                            while (tpa > 0) {
                                if (tpa > 50) {
                                    totalTpa += 10;                                
                                } else if (tpa > 40) {
                                    totalTpa += 5;
                                } else if (tpa > 35) {
                                    totalTpa += 3;
                                } else if (tpa > 30) {
                                    totalTpa += 2;
                                } else {
                                    totalTpa += 1;
                                }

                                tpa--;
                            }

                            return t + totalTpa;
                        }

                        return t;
                   }, 0)),

    createdAt: Model.attribute('createdAt', Model.transformDate),
    updatedAt: Model.attribute('updatedAt', Model.transaformDate),

    user: Model.hasOne('user'),
    team: Model.hasOne('team')
});