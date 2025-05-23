<script lang="ts">
  let particlesContainer = $state<HTMLDivElement>();

  $effect(() => {
    if (particlesContainer) {
      createParticles();
    }
  });

  function createParticles() {
    if (!particlesContainer) return;

    const particleCount = 50;
    const colors = [
      "theme(--color-accent-blue)",
      "theme(--color-accent-purple)",
      "theme(--color-accent-orange)",
      "theme(--color-accent-green)",
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-0.5 h-0.5 rounded-full animate-float";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      particlesContainer.appendChild(particle);
    }
  }
</script>

<div class="fixed inset-0 bg-gradient-animated -z-20"></div>
<div
  bind:this={particlesContainer}
  class="fixed inset-0 -z-10 opacity-10"
></div>
