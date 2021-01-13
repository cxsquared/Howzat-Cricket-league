/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
export default class PlayerRoleMap{
    roleMap () {
        return {
            batter: 'batter',
            wk: 'wk',
            bowler: 'bowler',
            bowler_1: '1_bowler',
            bowler_2: '2_bowler',
        };
    }
}
