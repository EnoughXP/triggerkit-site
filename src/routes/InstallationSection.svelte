<script lang="ts">
  import { shikiHighlighter } from ".";
  import CodeBlock from "./CodeBlock.svelte";

  let installSteps = $state<HTMLDivElement[]>([]);
  let configSections = $state<HTMLDivElement[]>([]);

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

    [...installSteps, ...configSections].forEach((element) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(element);
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

  const fullConfigCode = `import { triggerkit } from 'triggerkit';

export default defineConfig({
  project: "your-project-id",
  build: {
    extensions: [
      triggerkit({
        // Directories to scan for functions
        includeDirs: ["src/lib", "src/services", "src/utils"],
        
        // File extensions to include
        filePatterns: [".ts", ".js"],
        
        // Patterns to exclude
        exclude: ["test.", "spec.", ".d.ts", "*.config.*"],
        
        // Export organization strategy
        exportStrategy: {
          mode: "grouped", // "individual" | "grouped" | "mixed"
          groupBy: "folder", // "file" | "folder"
          groupPrefix: "triggerkit"
        },
        
        // Types of exports to include
        includeTypes: {
          functions: true,
          classes: true,
          constants: false,
          variables: false
        },
        
        // Debug logging level
        debugLevel: "minimal" // "minimal" | "verbose" | "off"
      })
    ]
  }
});`;

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

  const configOptions = [
    {
      title: "Include Directories",
      description:
        "Specify which directories to scan for exportable functions and classes.",
      options: [
        {
          name: "includeDirs",
          type: "string[]",
          default: '["src/lib"]',
          description: "Folders to scan for function files",
        },
      ],
      example: 'includeDirs: ["src/lib", "src/services", "src/utils"]',
    },
    {
      title: "File Patterns",
      description:
        "Control which file types and patterns to include or exclude.",
      options: [
        {
          name: "filePatterns",
          type: "string[]",
          default: '[".ts", ".js"]',
          description: "File extensions to look for",
        },
        {
          name: "exclude",
          type: "string[]",
          default: '["test.", "spec.", ".d.ts"]',
          description: "Patterns to exclude from scanning",
        },
      ],
      example:
        'filePatterns: [".ts", ".js"]\nexclude: ["test.", "spec.", ".d.ts", "*.config.*"]',
    },
    {
      title: "Export Strategy",
      description:
        "Configure how exports are organized and grouped in your virtual import.",
      options: [
        {
          name: "mode",
          type: '"individual" | "grouped" | "mixed"',
          default: '"individual"',
          description: "How to organize exports",
        },
        {
          name: "groupBy",
          type: '"file" | "folder"',
          default: "undefined",
          description: "When grouped, group by file or folder",
        },
        {
          name: "groupPrefix",
          type: "string",
          default: "undefined",
          description: "Namespace prefix for groups",
        },
      ],
      example:
        'exportStrategy: {\n  mode: "grouped",\n  groupBy: "folder",\n  groupPrefix: "triggerkit"\n}',
    },
    {
      title: "Include Types",
      description:
        "Choose which types of exports to include in the virtual module.",
      options: [
        {
          name: "functions",
          type: "boolean",
          default: "true",
          description: "Include exported functions",
        },
        {
          name: "classes",
          type: "boolean",
          default: "true",
          description: "Include exported classes",
        },
        {
          name: "constants",
          type: "boolean",
          default: "false",
          description: "Include exported constants",
        },
        {
          name: "variables",
          type: "boolean",
          default: "false",
          description: "Include exported variables",
        },
      ],
      example:
        "includeTypes: {\n  functions: true,\n  classes: true,\n  constants: false,\n  variables: false\n}",
    },
    {
      title: "Debug Level",
      description:
        "Control the verbosity of logging during build and development.",
      options: [
        {
          name: "debugLevel",
          type: '"minimal" | "verbose" | "off"',
          default: '"minimal"',
          description: "Debug logging level",
        },
      ],
      example: 'debugLevel: "verbose" // See detailed scanning information',
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

    <!-- Configuration Options -->
    <div class="text-left mb-16">
      <h3 class="text-3xl font-bold mb-8 text-center text-white">
        🛠️ Complete Configuration Guide
      </h3>
      {#await loadCodeSnippet(fullConfigCode) then codeSnippet}
        <CodeBlock title="" code={codeSnippet} />
      {/await}
    </div>
  </div>
</section>
