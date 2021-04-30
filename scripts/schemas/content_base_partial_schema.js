const contentTypeSchema = require("./content_type_partial_schema.js");

module.exports = {
  ...contentTypeSchema,
  title: { type: String, required: true },
  eleventyNavigation: {
    title: { type: String, required: false },
  },
  prerequisites: {
    hard: [{ type: String, required: false }],
    soft: { type: Array, required: false },
  },
};
