<script setup lang="ts">
const burgerActive = ref(false);
</script>

<template>
  <header class="fixed h-header w-full z-10">
    <NavMenu v-model="burgerActive" />
    <UiContainer class="h-full">
      <div class="h-full flex items-center justify-between">
        <NuxtLink
          to="/"
          class="main-gradient-text text-lg font-bold text-secondary-600 z-10"
        >
          <IconLogo :current-color="burgerActive" />
        </NuxtLink>
        <UiBurger v-model="burgerActive" class="z-10" />
      </div>
    </UiContainer>
  </header>
</template>

<style scoped></style>
