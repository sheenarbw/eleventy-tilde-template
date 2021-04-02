var path = require('path');

module.exports = {
	eleventyComputed: {
		permalink: ({page}) => `${path.dirname(page.filePathStem)}/` 
	}
};
