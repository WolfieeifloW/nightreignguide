    const weaponData = {
        'Axe of Godfrey': {
            attack: {
                values: ['181', '0', '0', '0', '0', '100']
            },
            guard: {
                values: ['100', '45', '45', '45', '45', '48']
            },
            scaling: {
                values: ['S', '--', '--', '--', '--']
            }
        }
    };

    const weaponNameElement = document.getElementById('weapon-name');
    if (!weaponNameElement) {
        console.warn('Weapon name element not found');
        return;
    }

    const weaponName = weaponNameElement.textContent.trim();
    const weaponDataPull = weaponData[weaponName];
    if (!weaponDataPull) {
        console.warn(`No data found for weapon: "${weaponName}"`);
        return;
    }

    // Attack values
    const attackValues = weaponDataPull.attack.values;
    const attackIds = [
        'attack-physical-value',
        'attack-magic-value',
        'attack-fire-value',
        'attack-lightning-value',
        'attack-holy-value',
        'attack-critical-value'
    ];

    attackIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = attackValues[i];
    });

    // Guard values
    const guardValues = weaponDataPull.guard.values;
    const guardIds = [
        'guard-physical-value',
        'guard-magic-value',
        'guard-fire-value',
        'guard-lightning-value',
        'guard-holy-value',
        'guard-boost-value'
    ];

    guardIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = guardValues[i];
    });