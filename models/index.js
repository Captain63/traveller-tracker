// Import modules
const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Trip.hasMany(Traveller, {
    foreignKey: "traveller_id",
    onDelete: "CASCADE"
})

Trip.hasMany(Location, {
    foreignKey: "location_id",
    onDelete: "CASCADE"
})

Traveller.belongsTo(Trip, {
    foreignKey: "traveller_id",
})

Location.belongsTo(Trip, {
    foreignKey: "location_id"
})

module.exports = { Location, Traveller, Trip };