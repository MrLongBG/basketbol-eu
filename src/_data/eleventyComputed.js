const includeDrafts = process.env.INCLUDE_DRAFTS === "1";

module.exports = {
  // Exclude drafts from all collections (unless INCLUDE_DRAFTS=1)
  eleventyExcludeFromCollections: (data) => {
    return !includeDrafts && data.draft === true;
  },

  // Prevent draft pages from being built to _site/ (unless INCLUDE_DRAFTS=1)
  // CRITICAL: Returns undefined for non-drafts to preserve frontmatter permalink
  permalink: (data) => {
    if (!includeDrafts && data.draft === true) return false;
    return data.permalink;  // ← respect frontmatter permalink
  },
};
