const validateSchema = require("yaml-schema-validator");
const tildeSchema = require("./schemas/tilde_schema.js");
const contentTypeSchema = require("./schemas/content_type_partial_schema.js");
const projectContentSchema = require("./schemas/project_content_schema");
const courseContentSchema = require("./schemas/course_content_schema");
const topicContentSchema = require("./schemas/topic_content_schema");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const fm = require("front-matter");
const { exit } = require("process");
const { NONE, COURSE, PROJECT, TOPIC } = require("./constants");

const checkIdNotRepeated = (filePath, frontmatter) => {
  console.log("todo");
};

const logValidatingFile = (filePath) => {
  const FgGreen = "\x1b[32m";
  const Reset = "\x1b[0m";
  const Bright = "\x1b[1m";
  console.log(
    `${Bright}${FgGreen}VALIDATING ${Reset}${FgGreen}${filePath} ...`
  );
};

/* This would be used for checking .tilde.yaml */
const validateSingleFile = (filePath, schema) => {
  logValidatingFile(filePath);
  validateSchema(filePath, {
    schema,
  });
  console.log();
};

const validateCourseFrontmatter = (frontmatter) => {
  validateSchema(frontmatter, { schema: courseContentSchema });
};

const validateProjectFrontmatter = (frontmatter) => {
  validateSchema(frontmatter, { schema: projectContentSchema });
};

const validateTopicFrontmatter = (frontmatter) => {
  validateSchema(frontmatter, { schema: topicContentSchema });
};

const validateSingleFileFrontMatter = (filePath) => {
  logValidatingFile(filePath);

  data = fs.readFileSync(filePath, "utf8");
  const content = fm(data);
  frontmatter = content.attributes;

  const contentTypeOnly = { content_type: frontmatter.content_type };
  let errors = validateSchema(contentTypeOnly, {
    schema: contentTypeSchema,
  });
  if (errors.length != 0) return;
  const contentType = frontmatter.content_type;
  switch (contentType) {
    case NONE:
      break;
    case COURSE:
      validateCourseFrontmatter(frontmatter);
      break;
    case PROJECT:
      validateProjectFrontmatter(frontmatter);
      break;
    case TOPIC:
      validateTopicFrontmatter(frontmatter);
      break;
    default:
      throw new Error(
        f`Content type validation is not implemented for ${contentType}`
      );
  }
  checkIdNotRepeated(filePath, frontmatter);
};

const validateDirectory = (directoryPath) => {
  const validateDirectoryContents = (err, contents) => {
    contents.forEach((item) => {
      const filePath = path.join(directoryPath, item);
      if (fs.lstatSync(filePath).isDirectory()) {
        //recurse
        validateDirectory(filePath);
      } else {
        // it's a file
        const name = path.parse(item).name;
        if (name === "index" || name === "_index") {
          validateSingleFileFrontMatter(filePath);
        }
      }
    });
  };
  fs.readdir(directoryPath, validateDirectoryContents);
};

validateSingleFile(".tilde.yaml", tildeSchema);
// get the content path from the main settings file

try {
  const doc = yaml.load(fs.readFileSync(".tilde.yaml", "utf8"));
  contentLocation = doc.content_location;
  // now we need to validate all the content files
} catch (e) {
  console.log(e);
  exit();
}
validateDirectory(contentLocation);
