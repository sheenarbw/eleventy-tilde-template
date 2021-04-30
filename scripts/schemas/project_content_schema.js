const baseSchema = require("./content_base_partial_schema.js");
const { ALLOWED_PROJECT_SUBMISSION_TYPES } = require("../constants");

module.exports = {
  ...baseSchema,
  submission_type: {
    type: String,
    required: true,
    use: {
      valueOk: (val) => ALLOWED_PROJECT_SUBMISSION_TYPES.indexOf(val) != -1,
    },
  },
};
