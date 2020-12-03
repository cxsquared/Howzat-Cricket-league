/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
export default class UpdateSortMap {
    sortMap() {
        return {
            newest: '-submittedAt',
            oldest: 'submittedAt',
        };
    }

    statusMap() {
        return {
            pending: 'status:pending',
            all: 'all',
            under_review: 'status:under_review',
            approved: 'status:approved',
            denied: 'status:denied',
        };
    }
}
