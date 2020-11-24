import Component from 'flarum/Component';
import FieldSet from 'flarum/components/FieldSet';
import ItemList from 'flarum/utils/ItemList';
import { getNames, getCode } from 'country-list';
import RequiredSelect from '../RequiredSelect';

export default class  PlayerCreateCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.player = this.attrs.player;
        this.loading = false;
        this.countries = {};

        let names = getNames().sort();
        names.forEach(n => {
            let code = getCode(n);
            this.countries[code] = n;
        });

        this.fields = this.fields.bind(this);
    }

    view() {
        return <div className="Form Form--centered CreatePlayer">
            {this.fields().toArray()}
        </div>;
    }

    fields() {
        const items = new ItemList();

        items.add('identity',
            <FieldSet className="identity"
                      label={app.translator.trans('hcl.forum.player.identity')}>
                <label for="first_name">{app.translator.trans('hcl.forum.player.first_name')}</label>
                    <input className="FormControl"
                           name="firstName"
                           id="first_name"
                           type="text"
                           placeholder="Don"
                           minlength="3"
                           maxlength="50"
                           required 
                           value={this.player.firstName || ''}
                           onchange={e => this.attrs.update("firstName", e.target.value)} />
                    <label for="last_name">{app.translator.trans('hcl.forum.player.last_name')}</label>
                    <input className="FormControl"
                           name="lastName"
                           id="last_name"
                           type="text"
                           placeholder="Bradman"
                           minlength="3"
                           maxlength="50"
                           required 
                           value={this.player.lastName || ''}
                           onchange={e => this.attrs.update("lastName", e.target.value)} />
                    <label for="age">{app.translator.trans('hcl.forum.player.age')}</label>
                    <input className="FormControl"
                           name="age"
                           type="number"
                           required
                           id="age"
                           min={18}
                           max={99}
                           value={this.player.age || ''}
                           onchange={e => this.attrs.update("age", e.target.value)} />
                    <label for="height">{app.translator.trans('hcl.forum.player.height')}</label>
                    <input className="FormControl"
                           name="height"
                           type="number"
                           required
                           id="height"
                           min={120}
                           max={270}
                           value={this.player.height || ''}
                           onchange={e => this.attrs.update("height", e.target.value)} />
                    <label for="weight">{app.translator.trans('hcl.forum.player.weight')}</label>
                    <input className="FormControl"
                           name="weight"
                           type="number"
                           required
                           id="weight"
                           min={50}
                           max={130}
                           value={this.player.weight || ''}
                           onchange={e => this.attrs.update("weight", e.target.value)} />
                    <label for="nationality">{app.translator.trans('hcl.forum.player.country')}</label>
                    <RequiredSelect value={this.player.nationality} 
                                    id="nationality"
                                    options={this.countries}
                                    onchange={v => this.attrs.update("nationality", v)} />
                    <label for="bowling_style">{app.translator.trans('hcl.forum.player.bowling_style')}</label>
                    <RequiredSelect value={this.player.bowlingStyle} 
                                    id="bowling_style"
                                    options={{
                                        "pace": app.translator.trans('hcl.forum.player.style.pace'),
                                        "spin": app.translator.trans('hcl.forum.player.style.spin')
                                    }}
                                    onchange={v => this.attrs.update("bowlingStyle", v)} />
            </FieldSet>
        , 30);

        return items;
    }
}