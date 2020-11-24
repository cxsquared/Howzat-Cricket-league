import app from 'flarum/app';
import Component from 'flarum/Component'
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';

/*
 * Attr
 * update 
 * onselect
 */
export default class UpdateEditCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.update = this.attrs.update;
        this.originalState = this.update;
        this.saving = false;
    }

    view() {
        return (
            <div className="UpdateEditCard">
                {username(this.update.submittedUser())}
                <a href={this.update.link()}>{this.update.link()}</a>
                {this.update.tpe()}
            </div>
        )

    }
}