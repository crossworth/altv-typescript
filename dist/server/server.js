import * as alt from 'alt-server';
alt.log('Log from server');
alt.on('playerConnect', player => {
    player.model = 'u_m_y_abner';
    player.spawn(-1062.4483642578125, -2985.73193359375, 13.17138671875, 0);
});
alt.on('weaponDemage', (source, target, weapon, offest, bodyPart) => {
    return false;
});
//# sourceMappingURL=server.js.map