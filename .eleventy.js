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

let _nextNumber=0;
const nextNumber = () => {
    _nextNumber ++;
    
    return _nextNumber;
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
        // https://developers.google.com/youtube/player_parameters
        return `<iframe 
                    id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src="https://www.youtube.com/embed/${code}" 
                    frameborder="0"
                    ></iframe>`
    });


    eleventyConfig.addPairedShortcode("vega",function(content){
        const id = `vega${nextNumber()}`;
        return `<div><div id="${id}"></div>
                <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
                <script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
                <script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
                <script type="text/javascript">
                        const spec${id}=${content.trim()};
                        vegaEmbed('#${id}', spec${id});
                </script></div>`
        
    })

    eleventyConfig.addPairedShortcode("mermaid",function(content){
        return `<div class="mermaid">${content}</div>
        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({startOnLoad:true});</script>`
    })
  };