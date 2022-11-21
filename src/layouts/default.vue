<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-secondary-600 text-regular">
    <Header />
    <SmoothScrollBar>
      <main class="grow">
        <slot />
      </main>
      <Footer />
    </SmoothScrollBar>
  </div>
</template>

<style scoped></style>
