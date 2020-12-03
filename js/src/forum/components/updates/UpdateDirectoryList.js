import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Placeholder from 'flarum/components/Placeholder';
import UpdateDirectoryListItem from './UpdateDirectoryListItem';

/**
 * Based on FoF's UserDirectoryList
 */
export default class UpdateDirectoryList extends Component {
    view() {
        const { state } = this.attrs;

        const params = state.getParams();
        let loading;

        if (state.isLoading()) {
            loading = LoadingIndicator.component();
        } else if (state.moreResults) {
            loading = Button.component(
                {
                    className: 'Button',
                    onclick: state.loadMore.bind(state),
                },
                app.translator.trans('hcl.forum.page.load_more_button')
            );
        }

        if (state.empty()) {
            const text = app.translator.trans('hcl.forum.page.empty_text');
            return <div className="DiscussionList">{Placeholder.component({ text })}</div>;
        }

        return (
            <div className={'UserDirectoryList' + (state.isSearchResults() ? ' UserDirectoryList--searchResults' : '')}>
                <ul className="UserDirectoryList-users">
                    {state.updates
                        .filter((u) => !state.getParams().q || state.getParams().q === 'all' || u.status() === state.getParams().q)
                        .map((update) => {
                            return (
                                <li key={update.id()} data-id={update.id()}>
                                    {UpdateDirectoryListItem.component({ update, params })}
                                </li>
                            );
                        })}
                </ul>
                <div className="UserDirectoryList-loadMore">{loading}</div>
            </div>
        );
    }
}
