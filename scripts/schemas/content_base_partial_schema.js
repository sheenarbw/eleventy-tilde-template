const contentTypeSchema = require("./content_type_partial_schema.js");

module.exports = {
  ...contentTypeSchema,
  title: { type: String, required: true },
  eleventyNavigation: {
    title: { type: String, required: false },
  },
};
