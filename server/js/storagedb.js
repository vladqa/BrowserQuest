var cls = require("./lib/class"),
    _ = require("underscore");

module.exports = StorageDB = cls.Class.extend({
    init: function(db) {
        this.db = db;
    },

    saveProps: function(player) {
        var to_insert = {
            name   : player.name,
            x      : player.x,
            y      : player.y,
            weapon : player.weapon
        };

        // delete all player data and insert new data
        this.db.collection('users', function(err, collection) {
            collection.remove({name: to_insert.name}, function(err) {
                console.info("Saving props for " + player.name, to_insert);
                collection.insert(to_insert);
            });
        });
    }
});