<script lang="ts">
  import { shikiHighlighter } from ".";
  import CodeBlock from "./CodeBlock.svelte";

  let installSteps = $state<HTMLDivElement[]>([]);

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

    installSteps.forEach((step) => {
      if (step) {
        step.style.opacity = "0";
        step.style.transform = "translateY(30px)";
        step.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(step);
      }
    });

    return () => observer.disconnect();
  });

  const step2Code = `import { triggerkit } from 'triggerkit';

export default defineConfig({
  project: "your-project-id",
  build: {
    extensions: [triggerkit()]
  }
});`;

  const step3Code = `import { myFunction } from "virtual:triggerkit";

// That's it! 🎉`;

  const steps = [
    {
      title: "Install TriggerKit",
      code: "npm add -D triggerkit",
      language: "bash",
    },
    {
      title: "Add to trigger.config.ts",
      code: step2Code,
      language: "typescript",
    },
    {
      title: "Import & Use!",
      code: step3Code,
      language: "typescript",
    },
  ];

  const proTips = [
    {
      title: "Grouped exports:",
      code: 'exportStrategy: { mode: "grouped" }',
    },
    {
      title: "Clean logs:",
      code: 'debugLevel: "minimal"',
    },
    {
      title: "Custom dirs:",
      code: 'includeDirs: ["src/services"]',
    },
  ];

  async function loadCodeSnippet(code: string) {
    return await shikiHighlighter(code);
  }
</script>

<section id="install" class="py-16 text-center">
  <div class="max-w-6xl mx-auto px-8">
    <h2 class="text-5xl font-extrabold mb-8 text-white">
      Get Started in 30 Seconds
    </h2>
    <p class="text-zinc-400 text-xl mb-8">
      Three steps. That's it. No really, that's actually it. 🤯
    </p>

    <div class="flex flex-col gap-8 mb-12">
      {#each steps as step, i}
        <div
          bind:this={installSteps[i]}
          class="bg-zinc-800 border border-zinc-700 rounded-2xl"
        >
          {#await loadCodeSnippet(step.code) then codeSnippet}
            <CodeBlock title={step.title} code={codeSnippet} />
          {/await}
        </div>
      {/each}
    </div>

    <div class="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-left">
      <h3 class="text-2xl font-bold mb-4 text-green-400">🎯 Pro Tips</h3>
      <div class="grid md:grid-cols-3 gap-4">
        {#each proTips as tip}
          <div class="text-zinc-400">
            <strong class="text-white">{tip.title}</strong><br />
            {#await loadCodeSnippet(tip.code) then codeSnippet}
              <CodeBlock title={tip.title} code={codeSnippet} />
            {/await}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
