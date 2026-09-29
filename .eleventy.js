module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/api");

  eleventyConfig.addFilter("dateEN", function(date) {
    return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  eleventyConfig.addFilter("dateISO", function(date) {
    return new Date(date).toISOString();
  });
  eleventyConfig.addFilter("after", function(arr, n) {
    return Array.isArray(arr) ? arr.slice(n) : [];
  });

  eleventyConfig.addFilter("head", function(arr, n) {
    return Array.isArray(arr) ? arr.slice(0, n) : [];
  });

  eleventyConfig.addFilter("related", function(posts, currentUrl, limit) {
    if (!Array.isArray(posts)) return [];
    return posts.filter(p => p.url !== currentUrl).slice(0, limit || 2);
  });

  eleventyConfig.addFilter("excerpt", function(str, n) {
    if (!str) return "";
    const limit = n || 160;
    return str.length > limit ? str.slice(0, limit) + "…" : str;
  });


  const includeDrafts = process.env.INCLUDE_DRAFTS === "1";

  eleventyConfig.addCollection("posts", function(api) {
    return api.getFilteredByGlob("src/posts/*.md")
      .filter(p => includeDrafts || !p.data.draft);
  });

  eleventyConfig.addCollection("research", function(api) {
    return api.getFilteredByGlob("src/research/*.md")
      .filter(p => includeDrafts || !p.data.draft)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
