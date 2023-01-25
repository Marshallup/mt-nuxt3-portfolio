<script setup lang="ts">
interface CardMyProjectProps {
  size?: "sm" | "md" | "lg";
}

withDefaults(defineProps<CardMyProjectProps>(), {
  size: "md",
});
</script>

<template>
  <div
    class="bg-secondary-100 bg-opacity-[0.1] rounded-[30px]"
    :class="{ 'w-full min-w-[200px] min-h-[300px]': size === 'md' }"
  ></div>
</template>

<style scoped></style>
