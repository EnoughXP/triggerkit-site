<script lang="ts">
  $effect(() => {
    // Konami code easter egg
    let konamiCode: number[] = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    const handleKeydown = (e: KeyboardEvent) => {
      konamiCode.push(e.keyCode);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }

      if (
        konamiCode.length === konamiSequence.length &&
        konamiCode.every((code, i) => code === konamiSequence[i])
      ) {
        // Easter egg activated!
        document.body.style.animation = "rainbow 2s infinite";

        setTimeout(() => {
          document.body.style.animation = "";
        }, 4000);

        console.log("🎉 Easter egg activated! You found the Konami code!");
      }
    };

    document.addEventListener("keydown", handleKeydown);

    // Fun console message
    console.log(`
🚀 TriggerKit - Bridge SvelteKit to Trigger.dev!

Enjoying the site? Check out the source code:
https://github.com/yourusername/triggerkit

Made with ❤️ by a developer who got tired of rewriting functions!
    `);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });

  const footerLinks = [
    {
      href: "https://github.com/EnoughXP/triggerkit",
      text: "GitHub",
      target: "_blank",
    },
    {
      href: "https://www.npmjs.com/package/triggerkit",
      text: "npm Package",
      target: "_blank",
    },
    { href: "https://trigger.dev", text: "Trigger.dev", target: "_blank" },
    { href: "https://svelte.dev", text: "SvelteKit", target: "_blank" },
    {
      href: "buymeacoffee.com/cptcrunchy",
      text: "☕ Coffee",
      target: "_blank",
    },
  ];
</script>

<footer class="py-16 text-center border-t border-zinc-800 mt-24">
  <div class="max-w-6xl mx-auto px-8">
    <div class="flex justify-center items-center gap-8 mb-8 flex-wrap">
      <ul class="flex gap-8 list-none flex-wrap justify-center">
        {#each footerLinks as link}
          <li>
            <a
              href={link.href}
              target={link.target}
              class="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              {link.text}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="text-zinc-500 text-sm">
      <p>Made with ❤️ for the SvelteKit and Trigger.dev communities</p>
      <p class="mt-2 opacity-70">
        TriggerKit is not affiliated with Trigger.dev or Svelte. Just a dev tool
        that makes your life easier! 🚀
      </p>
    </div>
  </div>
</footer>
