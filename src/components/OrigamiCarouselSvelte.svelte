<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  // Import Swiper Svelte components
  import { register } from "swiper/element/bundle";

  onMount(() => register());
  register();
  export let images;
</script>

<swiper-container
  class="swiper"
  navigation="true"
  pagination="true"
  pagination-type="fraction"
>
  {#each images as image}
    <swiper-slide
      ><img
        class="origami-image"
        src={image}
        alt="origami instruction"
        loading="lazy"
      />
      <div class="swiper-lazy-preloader"></div></swiper-slide
    >
  {/each}
</swiper-container>

<style lang="scss">
  @use "../styles/variables.scss" as *;

  .swiper {
    margin-top: 2rem;
  }

  .origami-image {
    height: calc(($article-width / 2) * 2.414); // sqrt(2) + 1
  }
</style>
