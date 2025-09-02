// priority: 0

// list of all items to be deleted
const remove_items = global.blacklist

remove_items.forEach(item => {
    // remove all recipes that use the item
    ServerEvents.recipes(e => {
        e.remove([{input: item}, {output: item}])
    })
    
    // remove all tags from the item
    ServerEvents.tags('item', e => {
        e.removeAllTagsFrom(item)
    })
})

console.info('Loaded remove_items')

