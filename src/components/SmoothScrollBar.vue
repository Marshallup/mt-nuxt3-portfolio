<script setup lang="ts">
import SmoothScrollBar from "smooth-scrollbar";

const smoothContainer = ref<HTMLDivElement>(null);

onMounted(() => {
  if (process.client) {
    SmoothScrollBar.init(unref(smoothContainer), {
      damping: 0.02,
    });
  }
});
</script>

<template>
  <div ref="smoothContainer" class="h-screen">
    <slot />
  </div>
</template>

<style scoped></style>
