var publicationRoute = require("./data/Publications/v1/Publications.json");
var businessroleRoute = require("./data/Roles/v1/Roles.json");
var glossaryRoute = require("./data/Glossary/v1/Glossary.json");
var FIPS199Route = require("./data/FIPS199/v1/FIPS199.json");
var FIPS200Route = require("./data/FIPS200/v1/FIPS200.json");

module.exports = function () {
  return {
    Publications: publicationRoute,
    Roles: businessroleRoute,
    Glossary: glossaryRoute,
    MinimumRequirements: FIPS200Route,
    FIPS199: FIPS199Route
  };
};
