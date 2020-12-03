/**
 * Based on Flarum's DiscussionListState
 */
import SortMap from '../../common/utils/PlayerSortMap';

export default class PlayersDirectoryState {
    constructor(params = {}, app = window.app) {
        this.params = params;
        this.app = app;
        this.players = [];

        this.moreResults = false;
        this.loading = false;
    }

    requestParams() {
        const params = { include: [], filter: {} };

        const sortKey = this.params.sort || 'newest';

        params.sort = this.sortMap()[sortKey];

        if (this.params.q) {
            params.filter.q = this.params.q;
        }

        return params;
    }

    sortMap() {
        return {
            default: '',
            ...new SortMap().sortMap(),
        };
    }

    getParams() {
        return this.params;
    }

    clear() {
        this.players = [];
        m.redraw();
    }

    refreshParams(newParams) {
        const hasNewParams = Object.keys(newParams).some((key) => this.getParams()[key] != newParams[key]);
        if (!this.hasPlayers() || hasNewParams) {
            this.params = newParams;

            this.refresh();
        }
    }

    refresh() {
        this.loading = true;

        this.clear();

        return this.loadResults().then(
            (results) => {
                this.parseResults(results);
            },
            () => {
                this.loading = false;
                m.redraw();
            }
        );
    }

    loadResults(offset) {
        const preloadedPlayers = this.app.preloadedApiDocument();

        if (preloadedPlayers) {
            return Promise.resolve(preloadedPlayers);
        }

        const params = this.requestParams();
        params.page = { offset };
        params.include = params.include.join(',');

        return this.app.store.find('players', params);
    }

    loadMore() {
        this.loading = true;

        this.loadResults(this.players.length).then(this.parseResults.bind(this));
    }

    parseResults(results) {
        this.players.push(...results);

        this.loading = false;
        this.moreResults = !!results.payload.links && !!results.payload.links.next;

        m.redraw();

        return results;
    }

    hasPlayers() {
        return this.players.length > 0;
    }

    isLoading() {
        return this.loading;
    }

    isSearchResults() {
        return !!this.params.q;
    }

    empty() {
        return !this.hasPlayers() && !this.isLoading();
    }
}
