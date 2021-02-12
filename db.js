var publicationRoute = require("../NIST-Crosswalks/data/Publications/Publications.json");
var businessroleRoute = require("../NIST-Crosswalks/data/Roles/Roles.json");
var FIPS200Route = require("../NIST-Crosswalks/data/FIPS200/FIPS200.json");

module.exports = function () {
  return {
    Publications: publicationRoute,
    BusinessRoles: businessroleRoute,
    FIPS200: FIPS200Route
  };
};
