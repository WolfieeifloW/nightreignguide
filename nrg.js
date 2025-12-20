// Changing Shifting Earth tabs
function f(t) {
    ['crater', 'mountaintop', 'rotted-woods', 'noklateo'].map(x => document.getElementById(x).style.setProperty('display', 'none')); // Hide the tab we're navigating away from
    ['crater-tab', 'mountaintop-tab', 'rotted-woods-tab', 'noklateo-tab'].map(x => document.getElementById(x).classList.remove("tab-active")); // Show the tab we're navigating to
    document.getElementById(t).style.setProperty('display', 'flex'); // Keep flex layout for tabs
    document.getElementById(t + '-tab').classList.add("tab-active"); // Add the 'tab-active' class to the new tab to show underline
}

document.addEventListener('DOMContentLoaded', function () {
    // Storing different elements for future use
    const modal = document.getElementById('nightlord-modal');
    const container = document.getElementById('container');
    const images = document.querySelectorAll('.nightlord-grid img');
    const selectedNightlordImg = document.getElementById('nightlord-img');
    let weaknessElement;

    // Nightlord data: icon + details (images and values)
    const nightlordData = {
        'Tricephalos': {
            icon: 'Holy',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-', '-', '+10%'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '-50%', '-', '+35%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['542', '252', '252', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['542', '154', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Gaping Jaw': {
            icon: 'Poison',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-', '-', '-'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '-20%', '-50%', '-'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['154', '154', '542', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['154', '154', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Sentient Pest': {
            icon: 'Fire',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-10%', '-20%', '+20%', '+10%'],
                    extras: ['+15%', '+25%', '+15%', '+25%']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-10%', '+35%', '-10%', '-10%'],
                    extras: ['-50%', '+40%', '-10%', '-10%']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['252', '154', '154', ''],
                    extras: ['542', '154', '154', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['154', '154', '-', ''],
                    extras: ['154', '542', '-', '']
                }
            }
        },
        'Augur': {
            icon: 'Lightning',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '+15%', '-20%', '-10%'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-20%', '-50%', '+40%', '-15%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['-', '252', '-', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['252', '-', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Equilibrious Beast': {
            icon: 'Madness',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '+10%', '-', '-'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-20%', '+20%', '-', '+35%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['154', '154', '252', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['252', '-', '154', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Darkdrift Knight': {
            icon: 'Lightning',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-', '-', '-'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '-', '+20%', '-30%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['154', '154', '154', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['154', '154', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Fissure in the Fog': {
            icon: 'Fire',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-15%', '+15%', '-10%'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-20%', '+35%', '-20%', '-20%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['252', '252', '252', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['542', '542', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Night Aspect': {
            icon: 'Holy',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-10%', '+10%', '+15%'],
                    extras: ['-', '+15%', '-10%', '+10%']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '-', '+20%', '+20%'],
                    extras: ['-', '+20%', '-', '+35%']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['-', '252', '-', ''],
                    extras: ['-', '252', '-', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['-', '542', '-', ''],
                    extras: ['-', '542', '-', '']
                }
            }
        },
        'Balancers': {
            icon: 'Sleep',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '-8%', '+10%', '-'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '-8%', '-10%', '-30%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['252', '252', '252', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['252', '84', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
        'Dreglord': {
            icon: 'Holy',
            details: {
                weapon: {
                    icons: ['Standard.png', 'Slash.png', 'Strike.png', 'Pierce.png'],
                    values: ['-', '+10%', '-', '+10%'],
                    extras: ['', '', '', '']
                },
                element: {
                    icons: ['Magic.png', 'Fire.png', 'Lightning.png', 'Holy.png'],
                    values: ['-', '+20%', '-10%', '+25%'],
                    extras: ['', '', '', '']
                },
                ailment: {
                    icons: ['Poison.png', 'Scarlet_Rot.png', 'Bleed.png', ''],
                    values: ['542', '542', '252', ''],
                    extras: ['', '', '', '']
                },
                ailment2: {
                    icons: ['Frostbite.png', 'Sleep.png', 'Madness.png', ''],
                    values: ['252', '252', '-', ''],
                    extras: ['', '', '', '']
                }
            }
        },
    };

    // When a Nightlord is clicked
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            const name = img.alt;
            const imageFileName = name.replace(/\s+/g, '_') + '.png';
            const data = nightlordData[name];

            // If array doesn't contain data for selected Nightlord
            if (!data) {
                alert('No data for ' + name);
                return;
            }

            // Hide modal and display page
            modal.style.display = 'none';
            container.style.display = 'grid';

            // Set selected Nightlord image
            selectedNightlordImg.src = './images/' + imageFileName;
            selectedNightlordImg.alt = name;

            const detailIds = {
                weapon: {
                    valueIds: ['standard-value', 'slash-value', 'strike-value', 'pierce-value'],
                    extraIds: ['standard-value-extra', 'slash-value-extra', 'strike-value-extra', 'pierce-value-extra']
                },
                element: {
                    valueIds: ['magic-value', 'fire-value', 'lightning-value', 'holy-value'],
                    extraIds: ['magic-value-extra', 'fire-value-extra', 'lightning-value-extra', 'holy-value-extra']
                },
                ailment: {
                    valueIds: ['poison-value', 'scarlet-rot-value', 'bleed-value'],
                    extraIds: ['poison-value-extra', 'scarlet-rot-value-extra', 'bleed-value-extra']
                },
                ailment2: {
                    valueIds: ['frostbite-value', 'sleep-value', 'madness-value'],
                    extraIds: ['frostbite-value-extra', 'sleep-value-extra', 'madness-value-extra']
                }
            };

            // Set values from the nightlord details
            const details = data.details;

            // const weaknessBorder = document.getElementById((data.icon+'-cell').toLowerCase());
            // weaknessBorder.style.border = '1px solid red';
            weaknessElement = document.getElementById((data.icon + '-cell').toLowerCase());
            weaknessElement.style.border = '1px solid red';

            // Loop over each category in details (weapon, element, ailment, ailment2)
            for (const category in details) {
                if (!details.hasOwnProperty(category)) continue;

                const detailGroup = details[category];
                const valueIds = detailIds[category].valueIds;
                const extraIds = detailIds[category].extraIds;

                // For each icon index (0, 1, 2, 3)
                for (let i = 0; i < detailGroup.icons.length; i++) {
                    const value = detailGroup.values[i] || '';
                    const extra = detailGroup.extras[i] || '';

                    // Set value
                    if (valueIds[i]) {
                        const valueElem = document.getElementById(valueIds[i]);
                        if (valueElem) {
                            valueElem.textContent = value;

                            valueElem.classList.remove('positive', 'middle', 'negative');

                            // Conditional coloring for weapon & element categories only
                            if (category === 'weapon' || category === 'element') {
                                if (value.startsWith('+') && value.includes('%')) {
                                    valueElem.classList.add('positive');
                                } else if (value.startsWith('-') && value.includes('%')) {
                                    valueElem.classList.add('negative');
                                }
                            } else if (category === 'ailment' || category === 'ailment2') {
                                if (value === '154') {
                                    valueElem.classList.add('positive');
                                } else if (value === '252') {
                                    valueElem.classList.add('middle');
                                } else if (value === '542') {
                                    valueElem.classList.add('negative');
                                }
                            }
                        }
                    }

                    // Set extra
                    if (extraIds[i]) {
                        const extraElem = document.getElementById(extraIds[i]);
                        if (extraElem) {
                            extraElem.textContent = extra;

                            extraElem.classList.remove('positive', 'middle', 'negative');

                            // Optional: also color extras if needed
                            if (category === 'weapon' || category === 'element') {
                                if (extra.startsWith('+') && extra.includes('%')) {
                                    extraElem.classList.add('positive');
                                } else if (extra.startsWith('-') && extra.includes('%')) {
                                    extraElem.classList.add('negative');
                                }
                            } else if (category === 'ailment' || category === 'ailment2') {
                                if (extra === '154') {
                                    extraElem.classList.add('positive');
                                } else if (extra === '252') {
                                    extraElem.classList.add('middle');
                                } else if (extra === '542') {
                                    extraElem.classList.add('negative');
                                }
                            }
                        }
                    }
                }
            }
        });
    });

    // Resetting the page when selected Nightlord image is clicked
    selectedNightlordImg.addEventListener('click', function () {
        container.style.display = 'none';
        modal.style.display = 'grid';

        selectedNightlordImg.src = '';
        selectedNightlordImg.alt = '';

        weaknessElement.style.border = '1px solid rgb(30, 30, 30)';
    });

});