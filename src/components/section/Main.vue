<script setup lang="ts">
import { onMountedSmothScrollBar } from "@/composables/onMountedSmothScrollBar";
import { getAbsolutePositionHtmlEl } from "@/utils/helpers";
import { formatToDomID, MAIN_PAGE } from "@/utils/htmlElId";

const mainPhotoSectionRef = ref<HTMLDivElement>(null);
const mainPhotoWrapperRef = ref<HTMLDivElement>(null);
const mainPhotoWrapperInnerRef = ref<HTMLDivElement>(null);
const mainPhotoCircleRef = ref<HTMLDivElement>(null);
const mainPhotoImgWrapper = ref<HTMLDivElement>(null);

function getScaleMainPhotoToWindow() {
  const mainHeight = unref(mainPhotoCircleRef).offsetWidth;

  return window.innerWidth / mainHeight + 1;
}

onMountedSmothScrollBar(($gsap, { updateGsapMarkersPosition }) => {
  $gsap.timeline({
    scrollTrigger: {
      trigger: unref(mainPhotoSectionRef),
      pin: true,
      end: () => `bottom+=${window.innerHeight * 2} bottom`,
      markers: {
        startColor: "white",
        endColor: "white",
      },
      invalidateOnRefresh: true,
    },
  });

  const tl2 = $gsap.timeline({
    scrollTrigger: {
      trigger: unref(mainPhotoSectionRef),
      scrub: 0.5,
      start: () =>
        `-${getAbsolutePositionHtmlEl(unref(mainPhotoSectionRef)).top}px top`,
      end: () =>
        `bottom+=${window.innerHeight * 2} start-=${window.innerHeight / 3}px`,
      markers: {
        startColor: "grey",
        endColor: "grey",
      },
      invalidateOnRefresh: true,
    },
  });

  tl2
    .to(unref(mainPhotoCircleRef), {
      duration: 20,
      scale: 2,
    })
    .to(unref(mainPhotoImgWrapper), {
      duration: 50,
      scale: 1.3,
    })
    .to(
      unref(mainPhotoCircleRef),
      {
        duration: 80,
        scale: () => getScaleMainPhotoToWindow(),
      },
      20
    )
    .fromTo(
      unref(mainPhotoImgWrapper),
      {
        top: "50%",
        left: "50%",
      },
      {
        duration: 20,
        top: "40%",
        left: "40%",
        rotate: "-45deg",
      },
      50
    )
    .to(
      unref(mainPhotoImgWrapper),
      {
        duration: 30,
        top: "-10%",
        left: "30%",
        rotate: "-180deg",
      },
      70
    )
    .to(
      unref(mainPhotoCircleRef),
      {
        ease: "slow",
        duration: 30,
        y: "-200%",
      },
      70
    )
    .fromTo(
      formatToDomID(MAIN_PAGE.SECOND),
      {
        y: "100%",
        opacity: 0,
        scale: 0,
      },
      {
        duration: 30,
        y: 0,
        opacity: 1,
        scale: 1,
      },
      70
    );

  updateGsapMarkersPosition();
});
</script>

<template>
  <div :id="MAIN_PAGE.FIRST">
    <UiContainer class="h-full" no-padding>
      <div class="h-[50vh] relative">
        <div
          class="absolute top-0 left-0 pt-h w-full h-screen flex flex-col items-center justify-center"
        >
          <div
            class="-mt-[100px] flex-1 flex flex-col items-center justify-center"
          >
            <h1
              class="main-header__text text-center main-gradient-text font-bold"
            >
              Mikhail Teslya
            </h1>
            <p class="text-center uppercase text-white text-5.5xl">
              Фронтенд разработчик
            </p>
          </div>
        </div>
      </div>
    </UiContainer>

    <div
      ref="mainPhotoSectionRef"
      class="h-screen min-h-[350px] w-full flex items-center justify-center relative"
    >
      <div class="w-[350px] mx-auto">
        <div ref="mainPhotoWrapperRef">
          <div ref="mainPhotoWrapperInnerRef">
            <div
              ref="mainPhotoCircleRef"
              class="bg-primary-200 w-[350px] h-[350px] rounded-full"
            />
            <div
              ref="mainPhotoImgWrapper"
              class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[350px] h-[350px] bg-white rounded-full flex items-center justify-center"
            >
              <img src="/img/my_photo.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
