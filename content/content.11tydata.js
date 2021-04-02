var path = require('path');

const getPermalink = ({page}) => `${path.dirname(page.filePathStem)}/`

module.exports = {
	eleventyComputed: {
		permalink: getPermalink,
        eleventyNavigation: ({page})=> {
            const permalink = getPermalink({page})
            parent = path.dirname(permalink) + '/';
            if (parent === "/content/")
                parent = "/"
            return {
                key: permalink,
                parent: parent,
                // excerpt: "Vertebrate animals of the class Mammalia."
        }}
	}
};
