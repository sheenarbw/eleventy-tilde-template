var path = require('path');


module.exports = function(eleventyConfig) {
    // Enabled by default
    eleventyConfig.setDynamicPermalinks(false);

    eleventyConfig.addFilter("removeLastPathElement", function(value) { 
        return path.dirname(value)
     });

  };