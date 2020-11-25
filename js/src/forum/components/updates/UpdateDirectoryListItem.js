import Component from 'flarum/Component';
import UpdateEditCard from './UpdateEditCard';

export default class UpdateDirectoryListItem extends Component {
    view() {
        const { update } = this.attrs;

        return (
            <div className="UpdateEditCardItem">
                {UpdateEditCard.component({
                    update
                })}
            </div>
        );
    }
}