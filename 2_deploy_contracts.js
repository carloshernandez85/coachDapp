const Coach = artifacts.require("Coach");

module.exports = function(deployer) {
  deployer.deploy(Coach);
};
