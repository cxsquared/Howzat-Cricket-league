import { settings } from '@fof-components';
import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';

const {
    SettingsModal,
    items: { NumberItem },
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
        app.modal.show(SettingsModal, {
            title: app.translator.trans('hcl.admin.title'),
            type: 'small',
            items: (s) => [
                <div className="Forum-group">
                    <NumberItem label={app.translator.trans('hcl.admin.headings.bot_id')} name="hcl.bot-id" setting={s} />
                    <NumberItem label={app.translator.trans('hcl.admin.headings.player_tag_id')} name="hcl.player-tag-id" setting={s} />
                    <NumberItem label={app.translator.trans('hcl.admin.headings.captain_group_id')} name="hcl.captain-group-id" setting={s} />
                    <NumberItem
                        label={app.translator.trans('hcl.admin.headings.league_movement_tag_id')}
                        name="hcl.league-movements-tag-id"
                        setting={s}
                    />
                    <NumberItem label={app.translator.trans('hcl.admin.headings.retirement_tag_id')} name="hcl.retirement-tag-id" setting={s} />
                    <NumberItem label={app.translator.trans('hcl.admin.headings.season')} name="hcl.season" setting={s} />
                </div>,
            ],
        });
    };
});
