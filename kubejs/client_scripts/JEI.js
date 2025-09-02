// priority: 0

// hide items from jei
global.blacklist.forEach(item => {
    JEIEvents.hideItems(e => {
        e.hide(item)
    })
});


console.info('Loaded client script')

