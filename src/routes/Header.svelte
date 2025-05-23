<script lang="ts">
  let headerElement = $state<HTMLElement>();

  $effect(() => {
    if (!headerElement) return;

    const handleScroll = () => {
      if (!headerElement) return;

      if (window.scrollY > 100) {
        headerElement.style.background = "rgba(10, 10, 15, 0.95)";
      } else {
        headerElement.style.background = "rgba(10, 10, 15, 0.8)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  bind:this={headerElement}
  class="fixed top-0 w-full px-8 py-4 bg-black/80 backdrop-blur-xl border-b border-zinc-800 z-[1000] transition-all duration-300"
>
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <div class="text-2xl font-extrabold text-gradient">🚀 TriggerKit</div>

    <nav class="hidden md:block">
      <ul class="flex gap-8 list-none">
        <li>
          <a
            href="#features"
            class="text-zinc-400 hover:text-blue-400 font-medium transition-colors"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#install"
            class="text-zinc-400 hover:text-blue-400 font-medium transition-colors"
            >Install</a
          >
        </li>
        <li>
          <a
            href="https://github.com/EnoughXP/triggerkit"
            target="_blank"
            class="text-zinc-400 hover:text-blue-400 font-medium transition-colors"
            >GitHub</a
          >
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/triggerkit"
            target="_blank"
            class="text-zinc-400 hover:text-blue-400 font-medium transition-colors"
            >npm</a
          >
        </li>
      </ul>
    </nav>
  </div>
</header>
