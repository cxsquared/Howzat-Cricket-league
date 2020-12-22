import { settings } from '@fof-components';
import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';

const {
    SettingsModal,
    items: { NumberItem }
} = settings;

app.initializers.add('cxsquared/howzat-cricket-league', () => {
    extend(PermissionGrid.prototype, 'moderateItems', (items) => {
        items.add(
            'updatePlayer',
            {
                icon: 'fas fa-running',
                label: 'Update Players',
                permission: 'player.edit',
            },
            75
        ),
            items.add(
                'updateUpdates',
                {
                    icon: 'fas fa-pen-nib',
                    label: 'Manged Updates',
                    permission: 'update.edit',
                },
                80
            );
    });

    app.extensionSettings['cxsquared-howzat-cricket-league'] = () => {
        app.modal.show(SettingsModal , {
            title: app.translator.trans('hcl.admin.title'),
            type: 'small',
            items: (s) => [
                <div className="Forum-group">
                    <legend classname="hcl-legend">{app.translator.trans('hcl.admin.headings.bot_id')}</legend>
                    <NumberItem name="hcl.bot-id" setting={s} />
                    <legend classname="hcl-legend">{app.translator.trans('hcl.admin.headings.player_tag_id')}</legend>
                    <NumberItem name="hcl.player-tag-id" setting={s} />
                    <legend classname="hcl-legend">{app.translator.trans('hcl.admin.headings.captain_group_id')}</legend>
                    <NumberItem name="hcl.captain-group-id" setting={s} />
                </div>
            ]
        });
    };
});
