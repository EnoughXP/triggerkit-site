<script lang="ts">
  let featureCards = $state<HTMLDivElement[]>([]);

  $effect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    featureCards.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  });

  const features = [
    {
      icon: "⚡",
      title: "Zero Configuration",
      description:
        "Install, import, done. No configs, no setups, no headaches. Your SvelteKit functions just work in Trigger.dev.",
    },
    {
      icon: "🏗️",
      title: "Full Class Support",
      description:
        "Import classes with methods, properties, constructors, and inheritance. TypeScript types preserved perfectly.",
    },
    {
      icon: "📁",
      title: "Smart Organization",
      description:
        "Group exports by file, folder, or custom logic. Keep your imports clean and organized however you like.",
    },
    {
      icon: "🔍",
      title: "Rich TypeScript",
      description:
        "Generics, complex types, method signatures - everything preserved. Full IntelliSense and type checking.",
    },
    {
      icon: "🌐",
      title: "Environment Magic",
      description:
        "SvelteKit env imports automatically work in Trigger.dev. $env/static/* just works everywhere.",
    },
    {
      icon: "🎛️",
      title: "Debug Levels",
      description:
        "Control logging from silent to verbose. Clean development experience with powerful debugging when needed.",
    },
  ];
</script>

<section id="features" class="py-24 bg-zinc-800 mx-8 rounded-[2rem] my-24">
  <div class="max-w-6xl mx-auto px-8">
    <h2
      class="text-center text-5xl font-extrabold mb-12 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
    >
      Why Developers Love TriggerKit
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature, i}
        <div
          bind:this={featureCards[i]}
          class="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl relative overflow-hidden group"
        >
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <div class="text-5xl mb-4">
            {feature.icon}
          </div>

          <h3 class="text-xl font-bold mb-4 text-white">
            {feature.title}
          </h3>

          <p class="text-zinc-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
