<script lang="ts">
  $: theme = typeof localStorage !== undefined && localStorage.getItem("theme") != null ? localStorage.getItem("theme")! : "dark";
  $: otherTheme = (theme == "dark") ? "light" : "dark";

  const setTheme = (themeToSet: string) => {
    if (themeToSet == "dark") {
      theme = "dark";
    document.documentElement.classList.remove("light");
    } else {
      theme = "light";
    document.documentElement.classList.add("light");
    }
    
    localStorage.setItem("theme", themeToSet);
  }

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
</script>

<button class="button" on:click={() => toggleTheme()}>
  {otherTheme.charAt(0).toUpperCase() + otherTheme.slice(1)} mode
</button>

<style lang="scss">
  @use "../styles/variables.scss" as *;
  @use "../styles/components/button.scss" as *;

  .button {
    margin: 0.5em;
    border: none;
    font-size: 1.6rem;
  }

</style>