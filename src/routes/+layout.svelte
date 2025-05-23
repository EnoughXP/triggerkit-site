<script lang="ts">
  import "../app.css";
  import BackgroundEffects from "./BackgroundEffects.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  let { children } = $props();
</script>

<BackgroundEffects />
<Header />
{@render children()}
<Footer />
