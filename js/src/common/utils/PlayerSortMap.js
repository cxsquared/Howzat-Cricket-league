/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
export default class PlayerSortMap {
    sortMap() {
        return {
            first_name_az: 'firstName',
            first_name_za: '-firstName',
            last_name_az: 'lastName',
            last_name_za: '-lastName',
            newest: '-createdAt',
            oldest: 'createdAt',
            newest_update: '-updatedAt',
            oldest_update: 'updatedAt',
        };
    }
}
