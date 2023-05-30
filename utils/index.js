// Read Luxon documentation here: https://moment.github.io/luxon/#/formatting
const { DateTime } = require("luxon");

module.exports = {
  format_date: (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
  },
};
