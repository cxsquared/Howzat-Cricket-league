/**
 * Based on Flarum's DiscussionListState
 */
import SortMap from '../../common/utils/UpdateSortMap';

export default class UpdateDirectoryState {
    constructor(params = {}, app = window.app) {    
        this.params = params;
        this.app = app;
        this.updates = [];

        this.moreResults = false;
        this.loading = false;
    }

    requestParams() {
        const params = { include: [], filter: {} };

        const sortKey = this.params.sort || 'oldest';
        params.sort = this.sortMap()[sortKey];

        // don't send anything is all is selected
        // and default to pending if nothing is set
        if (this.params.q) {
            if (this.params.q != 'all')
                params.filter.q = this.statusMap()[this.params.q];
        } else {
            params.filter.q = this.statusMap()['pending'];
        }

        return params;
    }

    sortMap() {
        return {
            default: '',
            ...new SortMap().sortMap()
        };
    }

    statusMap() {
        return new SortMap().statusMap();
    }

    getParams() {
        return this.params;
    }

    clear() {
        this.updates = [];
        m.redraw();
    }

    refreshParams(newParams) {
        const hasNewParams = Object.keys(newParams).some(key => this.getParams()[key] != newParams[key]);
        if (!this.hasUpdates() || hasNewParams) {
            this.params = newParams;

            this.refresh();
        }
    }

    refresh() {
        this.loading = true;

        this.clear();

        return this.loadResults().then(
            (results) => {
                const playersToLoad = results.reduce((existingIds, update) => {
                    const id = update.submittedUser().id();
                    if (!update.submittedUser().player() && !existingIds.includes(id))
                        existingIds.push(id);

                    return existingIds;
                }, []);

                if (playersToLoad.length === 0) {
                    this.parseResults(results);
                }

                playersToLoad.forEach((id, i) => {
                    if (i === playersToLoad.length - 1) {
                        app.store.find('users', `${id}/player`, null, {
                            errorHandler() {
                            }
                        }).then(() => this.parseResults(results));

                    } else {
                        app.store.find('users', `${id}/player`, null, {
                            errorHandler() {
                            }
                        })
                    }
                });
            },
            () => {
                this.loading = false;
                m.redraw();
            }
        );
    }

    loadResults(offset) {
        const preloadedUpdates = this.app.preloadedApiDocument();

        if (preloadedUpdates) {
            return Promise.resolve(preloadedUpdates);
        }

        const params = this.requestParams();
        params.page = { offset };
        params.include = params.include.join(',');

        return this.app.store.find('updates', params);
    }

    loadMore() {
        this.loading = true;

        this.loadResults(this.updates.length).then(this.parseResults.bind(this));
    }

    parseResults(results) {
        this.updates.push(...results);

        this.loading = false;
        this.moreResults = !!results.payload.links && !!results.payload.links.next;

        m.redraw();

        return results;
    }

    hasUpdates() {
        return this.updates.length > 0;
    }

    isLoading() {
        return this.loading;
    }

    isSearchResults() {
        return !!this.params.q;
    }

    empty() {
        return !this.hasUpdates() && !this.isLoading();
    }
}