<script setup lang="ts"></script>

<template>
  <div class="h-screen">
    <UiContainer class="h-full" no-padding>
      <div class="h-header" />
      <div
        class="mt-[calc(theme(height.header)*-1)] h-full flex flex-col items-center justify-center"
      >
        <div class="flex-1 flex flex-col items-center justify-center">
          <h1
            class="main-header__text text-center main-gradient-text font-bold"
          >
            Mikhail Teslya
          </h1>
          <p class="text-center uppercase text-white text-5.5xl">
            Фронтенд разработчик
          </p>
        </div>

        <div class="w-full flex items-center justify-center">
          <div
            class="bg-primary-200 w-[350px] h-[350px] -mb-[205px] rounded-full"
          >
            <div
              class="w-full h-full bg-white rounded-full flex items-center justify-center"
            >
              <img src="/img/my_photo.png" />
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<style scoped>
.main-header__text {
  @apply text-big;
}

@media screen and (max-width: 1600px) {
  .main-header__text {
    @apply text-10xl;
  }
}
</style>
