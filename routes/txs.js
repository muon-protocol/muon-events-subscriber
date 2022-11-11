const db = require("../utils/db");

module.exports = (app) => {
  /**
   * Returns 100 newest requests
   */
  app.get(`/txs/latest`, function(req, res, next) {
    db.get("requests").then((collection) => {
      collection
        .find({})
        .sort({
          "requestData.data.timestamp": -1,
        })
        .limit(100)
        .toArray(function(err, rows) {
          res.send(rows);
        });
    });
  });
};