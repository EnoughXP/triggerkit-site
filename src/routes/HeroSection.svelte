<script lang="ts">
  import CoffeeSection from "./CoffeeSection.svelte";
</script>

<section class="py-24 text-center relative">
  <div class="max-w-6xl mx-auto px-8">
    <div
      class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-8 animate-pulse-glow"
    >
      ✨ Zero Config Required
    </div>

    <h1
      class="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-6 text-gradient-secondary"
    >
      Bridge <span class="text-gradient">SvelteKit</span> to<br />
      <span class="text-gradient">Trigger.dev</span> with Zero Effort
    </h1>

    <p class="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
      Use your SvelteKit functions, classes, and exports directly in Trigger.dev
      projects. No rewrites, no configuration, no headaches. It just works! 🎉
    </p>

    <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
    >
      <a
        href="#install"
        class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300"
      >
        🚀 Get Started
      </a>
      <a
        href="https://github.com/yourusername/triggerkit"
        target="_blank"
        class="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:border-blue-500 transition-all duration-300"
      >
        ⭐ GitHub
      </a>
    </div>

    <CoffeeSection />
  </div>
</section>
