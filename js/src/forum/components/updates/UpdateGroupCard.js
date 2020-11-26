import app from 'flarum/app';
import icon from 'flarum/helpers/icon';
import username from 'flarum/helpers/username';
import Component from 'flarum/Component';
import Link from 'flarum/components/Link';

export default class UpdateGroupCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.updates = this.attrs.updates;
        this.user = this.attrs.user;
    }

    view() {
        let status = null;
        let className = "UpdateGroupCard";
        if (app.session.user === this.user) {
            className += "Own";

            status = <legend>
               {app.translator.trans('hcl.forum.basics.current_status')}
            </legend>;
        }

        return (
            <div className={className}>
                <legend>
                    {app.translator.trans('hcl.forum.basics.type')}
                </legend>
                <legend>
                    {app.translator.trans('hcl.forum.basics.tpe')}
                </legend>
                <legend>
                    {app.translator.trans('hcl.forum.basics.capped')}
                </legend>
                <legend>
                    {app.translator.trans('hcl.forum.basics.comment')}
                </legend>
                {status}
                <legend>
                    {app.translator.trans('hcl.forum.basics.approved_by')}
                </legend>
                {this.updates.map(update => {
                    let type = !!update.link() 
                        ? <Link href={update.link()}>
                            {app.translator.trans(`hcl.forum.updates.types.${update.type()}`)}
                          </Link> 
                        : app.translator.trans(`hcl.forum.updates.types.${update.type()}`);

                    let approvedBy = null;
                    if (update.updaterUser()) {
                        approvedBy = <Link href={app.route.user(update.updaterUser())}>
                            {username(update.updaterUser())}
                        </Link>;
                    } else if (update.isApproved()) {
                        // The user that approved this is probably deleted
                        approvedBy = username(update.updaterUser());
                    } 

                    let fields = [
                        <div>
                            {type}
                        </div>,
                        <div>
                            {update.tpe()}
                        </div>,
                        <div>
                            {update.isCapped() ? icon('fas fa-check') : null}
                        </div>,
                        <div>
                            {update.comment()}
                        </div>,
                        <div>
                            {approvedBy}
                        </div>
                    ];

                    if (app.session.user === this.user) {
                        fields.push(
                            <div>
                                {app.translator.trans(`hcl.lib.update_status.${update.status()}`)}
                            </div>
                        );
                    }
                    
                    return fields;
                })}
            </div>
        );
    }
}