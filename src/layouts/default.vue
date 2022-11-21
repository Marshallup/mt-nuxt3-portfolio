<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-secondary-600 text-regular">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
