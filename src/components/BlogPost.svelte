<script lang="ts">
	let { blogPost } = $props();
</script>

<a
	class={`button blog-post ${blogPost.data.tags.toString().replaceAll(",", " ")}`}
	href={`/blog/${blogPost.id}/`}
>
	<div class="title">
		<!-- Check if posts are newer than 30 days, and if so, add a New span tag (using CSS ::after) -->
		<span
			class={Math.floor(
				(new Date().getTime() - blogPost.data.pubDate.getTime()) /
					(24 * 60 * 60 * 1000),
			) <= 30
				? "new"
				: "hidden"}
		></span>
		{blogPost.data.title}
	</div>
	<div class="tags">
		{#each blogPost.data.tags as tag}
			<div class={`tag ${tag}`}>{tag}</div>
		{/each}
	</div>
	<span class="date">
		{blogPost.data.pubDate.toDateString().slice(4, 16)}
	</span>
</a>

<!-- svelte-ignore css_unused_selector -->
<style lang="scss">
	@use "../styles/components/button.scss" as *;
	@use "../styles/variables.scss" as *;
	.blog-post {
		// Post aligning
		display: grid;
		align-items: baseline;
		text-align: left;

		.title {
			grid-row: 1;
			grid-column: span 2;
			font-family: $article-font;
			font-size: $base-font-size * 1.05;
			line-height: $base-font-size * 1.5;
			font-weight: 700;

			.new {
				color: $light;
				background-color: $light3;
				padding: 0 0.5rem;

				&::after {
					content: "New";
				}
			}
		}

		.date {
			width: max-content;
			font-family: $article-font;
			grid-row: 2;
			grid-column: 1;
		}
	}

	.tag {
		border-radius: 0.375rem;
		/* stylelint-disable no-descending-specificity */
		&.linux + .close-button,
		&.linux {
			background-color: $linux-tag;
		}

		&.security + .close-button,
		&.security {
			background-color: $security-tag;
		}

		&.origami + .close-button,
		&.origami {
			background-color: $origami-tag;
		}

		&.android + .close-button,
		&.android {
			background-color: $android-tag;
		}

		&.coding + .close-button,
		&.coding {
			background-color: $coding-tag;
		}

		&.hardware + .close-button,
		&.hardware {
			background-color: $hardware-tag;
		}
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		justify-content: right;
		margin-top: 0.5em;
		font-weight: 500;

		.tag {
			padding: 0 0.375em;
			text-shadow: none;
			color: $light;
			font-size: 1.4rem;
		}
	}

	.hidden {
		display: none;
	}

	.not-hidden {
		display: inherit;
	}
</style>
