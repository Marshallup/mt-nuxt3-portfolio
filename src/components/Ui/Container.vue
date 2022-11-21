<script setup lang="ts">
interface UiContainerProps {
  noPadding?: boolean;
}

withDefaults(defineProps<UiContainerProps>(), {
  noPadding: false,
});
</script>

<template>
  <div class="container mx-auto" :class="{ 'px-2': !noPadding }">
    <slot />
  </div>
</template>

<style scoped></style>
