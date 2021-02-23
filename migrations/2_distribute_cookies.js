const Cookie = artifacts.require("Cookie");

module.exports = async function (deployer) {
    await deployer.deploy(Cookie, 1000000);
};
