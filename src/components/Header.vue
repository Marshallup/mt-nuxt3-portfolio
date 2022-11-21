<script setup lang="ts"></script>

<template>
  <header class="fixed h-header w-full">
    <UiContainer class="h-full">
      <div class="h-full flex items-center justify-between">
        <NuxtLink to="/" class="main-gradient-text text-lg font-bold">
          <img src="/img/icons/logo.svg" />
        </NuxtLink>
        <UiBurger />
      </div>
    </UiContainer>
  </header>
</template>

<style scoped></style>
