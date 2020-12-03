import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';

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
});
