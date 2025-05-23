<script lang="ts">
  import HeroSection from "./HeroSection.svelte";
  import FeaturesSection from "./FeaturesSection.svelte";
  import InstallationSection from "./InstallationSection.svelte";
</script>

<svelte:head>
  <title>TriggerKit - Bridge SvelteKit to Trigger.dev with Zero Effort</title>
  <meta
    name="description"
    content="Use your SvelteKit functions directly in Trigger.dev projects. Classes, TypeScript, environment variables - everything just works!"
  />

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="TriggerKit - SvelteKit ↔ Trigger.dev Bridge"
  />
  <meta
    property="og:description"
    content="Zero-config integration between SvelteKit and Trigger.dev"
  />
  <meta property="og:type" content="website" />
</svelte:head>

<HeroSection />
<FeaturesSection />
<InstallationSection />
