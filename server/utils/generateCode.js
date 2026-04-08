const shortid = require("shortid");

const generateCode = () => shortid.generate();

module.exports = generateCode;