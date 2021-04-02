var path = require('path');
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    // see https://www.11ty.dev/docs/plugins/image/
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ["avif", "jpeg"],
      outputDir: "./_site/img/"
    });
  
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };
  
    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  }



module.exports = function(eleventyConfig) {
    // Enabled by default
    eleventyConfig.setDynamicPermalinks(false);

    eleventyConfig.addFilter("removeLastPathElement", function(value) { 
        return path.dirname(value)
    });

    eleventyConfig.addShortcode("contentLink", function(collections,link) {
        const filtered = collections.all.filter((value)=>value.data.permalink === link)
        if (filtered.length !== 1) return `No content matches permalink: "${link}"`

        const page = filtered[0];
        return `[${page.data.title}](${page.url})`

    });


    eleventyConfig.addShortcode("image", imageShortcode);
    eleventyConfig.addShortcode("youtube", function(code){
        return `<iframe 
                    id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src="https://www.youtube.com/embed/${code}" 
                    frameborder="0"
                    ></iframe>`
    });


  };