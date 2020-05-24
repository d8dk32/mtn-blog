// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');

// Override renderer used by marked
const renderer = {
  image(href, title, text) {
    return ('<img src="' + href + '" alt="' + text + '" style="width: 70%" />');
  },
  hr() {
    return ('<hr style="border: 1px solid black">');
  }
};
marked.use({ renderer });

const posts = fs.readdirSync('./src/posts').map(postFilename => {
  const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
    encoding: 'utf8'
  });
  const postFrontMatter = frontMatter(postContent);
  return {
    title: postFrontMatter.attributes.title,
    slug: postFrontMatter.attributes.slug,
    order: postFrontMatter.attributes.order,
    html: marked(postFrontMatter.body)
  }
});

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

posts.sort(function(a, b){return b.order - a.order})

export default posts;
