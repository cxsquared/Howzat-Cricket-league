import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import withAttr from 'flarum/utils/withAttr';

export default class RequiredSelect extends Component {
    view() {
        const {options, onchange, value, disabled, id} = this.attrs;

        return (
        <span className="Select">
            <select className="Select-input FormControl"
                    id={id}
                    required
                    onchange={onchange ? withAttr('value', onchange.bind(this)) : undefined}
                    value={value}>
                    disabled={disabled}
            {Object.keys(options).map(key => <option value={key}>{options[key]}</option>)}
            </select>
            {icon('fas fa-sort', {className: 'Select-caret'})}
        </span>
        );
    }
}