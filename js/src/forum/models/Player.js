import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';

export default class Player extends Model {
    id = Model.attribute('id');
    firstName = Model.attribute('firstName');
    lastName = Model.attribute('lastName');
    age = Model.attribute('age');
    height = Model.attribute('height');
    weight = Model.attribute('weight');
    nationality = Model.attribute('nationality');
    bowlingStyle = Model.attribute('bowlingStyle');

    running = Model.attribute('running');
    defense = Model.attribute('defense');
    attacking = Model.attribute('attacking');
    lofted = Model.attribute('lofted');
    vsSpin = Model.attribute('vsSpin');
    vsPace = Model.attribute('vsPace');
    footwork = Model.attribute('footwork');
    timing = Model.attribute('timing');
    control = Model.attribute('control');

    pace = Model.attribute('pace');
    swing = Model.attribute('swing');
    slowerBall = Model.attribute('slowerBall');
    seam = Model.attribute('seam');
    accuracy = Model.attribute('accuracy');
    discipline = Model.attribute('discipline');
    bouncer = Model.attribute('bouncer');
    yorker = Model.attribute('yorker');

    tpe = Model.attribute('tpe');
    bankedTpe = Model.attribute('bankedTpe');
    tpa = computed('running', 'defense', 'attacking', 'lofted', 'vsSpin', 'vsPace',
                   'footwork', 'timing', 'control', 'pace', 'swing', 'slowerBall',
                   'seam', 'accuracy', 'discipline', 'bouncer', 'yorker',
                   (...stats) => stats.reduce((t, n) => {
                       if (Number.isInteger(n)) {
                           return t + n;
                       }

                       return t;
                   }, 0));

    createdAt = Model.attribute('createdAt', Model.transformDate);
    updatedAt = Model.attribute('updatedAt', Model.transaformDate);

    user = Model.hasOne('user');
    //team = Model.hasOne('team');
};