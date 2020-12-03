import app from 'flarum/app';
import icon from 'flarum/helpers/icon';
import username from 'flarum/helpers/username';
import Component from 'flarum/Component';
import Link from 'flarum/components/Link';

export default class UpdateGroupCard extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.updates = this.attrs.updates;
        this.updateIdToHighlight = this.attrs.updateIdToHighlight;
        this.user = this.attrs.user;
    }

    view() {
        let legendStyle = { backgroundColor: this.user.color() };

        let className = 'UpdateGroupCard';
        let status = null;
        let updaterComment = null;
        if (app.session.user === this.user) {
            className += 'Own';

            status = (
                <legend style={legendStyle} className="UpdateGroupCard-end">
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.current_status')}</div>
                </legend>
            );

            updaterComment = (
                <legend style={legendStyle}>
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.updater_comment')}</div>
                </legend>
            );
        }

        return (
            <div className={className}>
                <legend style={legendStyle}>
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.type')}</div>
                </legend>
                <legend style={legendStyle} className="UpdateGroupCard-center">
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.tpe')}</div>
                </legend>
                <legend style={legendStyle} className="UpdateGroupCard-center">
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.capped')}</div>
                </legend>
                <legend style={legendStyle}>
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.comment')}</div>
                </legend>
                {updaterComment}
                <legend style={legendStyle} className="UpdateGroupCard-end">
                    <div className="darkenBackground">{app.translator.trans('hcl.forum.basics.approved_by')}</div>
                </legend>
                {status}
                {this.updates.map((update) => {
                    let type = !!update.link() ? (
                        <Link href={update.link()}>{app.translator.trans(`hcl.forum.updates.types.${update.type()}`)}</Link>
                    ) : (
                        app.translator.trans(`hcl.forum.updates.types.${update.type()}`)
                    );

                    let approvedBy = null;
                    if (update.updaterUser()) {
                        approvedBy = <Link href={app.route.user(update.updaterUser())}>{username(update.updaterUser())}</Link>;
                    } else if (update.isApproved()) {
                        // The user that approved this is probably deleted
                        approvedBy = username(update.updaterUser());
                    }

                    let fields = [
                        <div>{type}</div>,
                        <div className="UpdateGroupCard-center">{update.tpe()}</div>,
                        <div className="UpdateGroupCard-center">{update.isCapped() ? icon('fas fa-check') : null}</div>,
                        <div>{update.comment()}</div>,
                    ];

                    if (app.session.user === this.user) {
                        fields.push(<div>{update.updaterComment()}</div>);
                    }

                    fields.push(<div className="UpdateGroupCard-end">{approvedBy}</div>);

                    if (app.session.user === this.user) {
                        fields.push(<div className="UpdateGroupCard-end">{app.translator.trans(`hcl.lib.update_status.${update.status()}`)}</div>);
                    }

                    return fields;
                })}
                <div className="UpdateGroupCard-totaltext">{app.translator.trans(`hcl.forum.updates.total_tpe`)}</div>
                <div className="UpdateGroupCard-total UpdateGroupCard-center">
                    {this.updates.reduce((a, u) => {
                        if (Number.isInteger(u.tpe())) return a + u.tpe();

                        return a;
                    }, 0)}
                </div>
            </div>
        );
    }
}
