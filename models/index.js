// Import modules
const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
    through: { model: Trip },
    uniqueKey: false
})

Location.belongsToMany(Traveller, {
    through: { model: Trip },
    uniqueKey: false
})

module.exports = { Location, Traveller, Trip };