const contentTypeSchema = require("./content_type_partial_schema.js");

module.exports = {
  ...contentTypeSchema,
  _db_id: { type: Number, required: false },
  title: { type: String, required: true },
  eleventyNavigation: {
    title: { type: String, required: false },
  },
  prerequisites: {
    hard: [{ type: String, required: false }],
    soft: [{ type: String, required: false }],
  },
  tags: [{ type: String, required: false }],
};
