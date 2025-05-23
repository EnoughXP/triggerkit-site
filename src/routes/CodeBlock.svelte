<script lang="ts">
  interface Props {
    title: string;
    code: string;
  }

  let { title, code }: Props = $props();
</script>

<div
  class="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
>
  <div
    class="px-6 py-4 bg-zinc-900 border-b border-zinc-700 flex items-center gap-2"
  >
    <div class="flex gap-2">
      <div class="size-3 rounded-full bg-red-500"></div>
      <div class="size-3 rounded-full bg-yellow-500"></div>
      <div class="size-3 rounded-full bg-green-500"></div>
    </div>
    <div class="ml-4 font-mono text-sm text-zinc-400">
      {title}
    </div>
  </div>

  <div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
    <pre class="text-zinc-300 text-start wrap-normal text-pretty"><code
        >{@html code}</code
      ></pre>
  </div>
</div>
