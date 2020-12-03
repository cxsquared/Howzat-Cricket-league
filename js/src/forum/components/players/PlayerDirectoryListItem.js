import Component from 'flarum/Component';
import PlayerCard from './PlayerCard';

export default class PlayerDirectoryListItem extends Component {
    view() {
        const { player } = this.attrs;

        return (
            <div className="User">
                {PlayerCard.component({
                    player,
                    showUser: true,
                })}
            </div>
        );
    }
}
