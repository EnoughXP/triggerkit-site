<script lang="ts">
  let coffeeBtn = $state<HTMLAnchorElement>();

  function handleCoffeeClick() {
    if (!coffeeBtn) return;

    // Create floating coffee emoji
    for (let i = 0; i < 5; i++) {
      const coffee = document.createElement("div");
      coffee.innerHTML = "☕";
      coffee.style.position = "fixed";
      coffee.style.left =
        coffeeBtn.getBoundingClientRect().left + Math.random() * 100 + "px";
      coffee.style.top = coffeeBtn.getBoundingClientRect().top + "px";
      coffee.style.fontSize = "2rem";
      coffee.style.pointerEvents = "none";
      coffee.style.zIndex = "9999";
      coffee.style.animation = "floatUp 2s ease-out forwards";

      document.body.appendChild(coffee);

      setTimeout(() => {
        if (document.body.contains(coffee)) {
          document.body.removeChild(coffee);
        }
      }, 2000);
    }
  }
</script>

<div
  class="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-16 text-center"
>
  <h3 class="text-2xl font-bold mb-4 text-white">☕ Enjoying TriggerKit?</h3>
  <p class="text-zinc-400 mb-6">
    If this tool saves you time and makes your life easier, consider buying me a
    coffee! ☕
  </p>
  <a
    bind:this={coffeeBtn}
    href="buymeacoffee.com/cptcrunchy"
    target="_blank"
    onclick={handleCoffeeClick}
    class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
  >
    ☕ Buy Me a Coffee
  </a>
</div>
