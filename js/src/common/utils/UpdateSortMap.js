/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
export default class UpdateSortMap {
    sortMap() {
        return {
            newest: '-submittedAt',
            oldest: 'submittedAt'
        };
    }
}