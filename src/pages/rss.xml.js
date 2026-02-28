import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { SITE_DESCRIPTION, SITE_TITLE } from "../config";

const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/blog/[id]` routes
			link: `/blog/${post.id}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
		})),
		customData: `<language>en-us</language>`,
	});
}
