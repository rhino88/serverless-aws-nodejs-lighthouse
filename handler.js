const lighthouse = require("lighthouse");
const log = require("lighthouse-logger");

module.exports.lighthouse = async (event, context, callback, chrome) => {
  const flags = { logLevel: "info", port: chrome.port };
  const target = event.target;
  log.setLevel(flags.logLevel);

  try {
    const results = await lighthouse(target, flags);
    callback(null, {
      statusCode: 200,
      body: results.lhr
    });
  } catch (error) {
    callback(error);
  }
};
