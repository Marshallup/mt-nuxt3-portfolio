<script setup lang="ts">
import { MAIN_PAGE } from "@/utils/htmlElId";
import { onMountedSmothScrollBar } from "@/composables/onMountedSmothScrollBar";

const textBlockWrapperRef = ref<HTMLDivElement>(null);
const textBlockInnerRef = ref<HTMLDivElement>(null);
const textBlocksRef = ref<HTMLDivElement[]>([]);
const textSectionkRef = ref<HTMLDivElement>(null);

const textBlocksContent = reactive([
  {
    text: "Опыт работы<br /> 4 года",
  },
  {
    text: "Работа <br /> в команде",
  },
  {
    text: "Ориентация <br /> на результат",
  },
]);

onMountedSmothScrollBar(($gsap, { updateGsapMarkersPosition }) => {
  const durationScale = 100 / unref(textBlocksRef).length;

  const tl3 = $gsap.timeline({
    scrollTrigger: {
      trigger: unref(textBlockWrapperRef),
      end: () =>
        `top+=${window.innerHeight * unref(textBlocksContent).length} bottom`,
      markers: {
        startColor: "yellow",
        endColor: "yellow",
      },
      pin: true,
      // scrub: 0.5,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  tl3.to(unref(textBlockInnerRef), {
    duration: 100,
    ease: "linear",
    x: () => -window.innerWidth * (unref(textBlocksContent).length - 1),
  });

  tl3.to(
    unref(textBlocksRef)[0],
    {
      scale: 0,
      duration: durationScale * 2,
    },
    0
  );

  tl3.fromTo(
    unref(textBlocksRef)[1],
    {
      scale: 0.3,
    },
    {
      duration: durationScale * 2,
      keyframes: {
        scale: [0.3, 1, 0.3],
      },
    },
    durationScale / 2
  );

  tl3.fromTo(
    unref(textBlocksRef)[2],
    {
      scale: 0.3,
    },
    {
      duration: durationScale,
      scale: 1,
    },
    durationScale * 2
  );

  updateGsapMarkersPosition();
});
</script>

<template>
  <div>
    <div ref="textBlockWrapperRef" class="w-full h-full">
      <div
        ref="textSectionkRef"
        :id="MAIN_PAGE.SECOND"
        class="w-full h-full overflow-x-hidden"
      >
        <div
          ref="textBlockInnerRef"
          class="flex items-center"
          :style="{ width: `${unref(textBlocksContent).length * 100}vw` }"
        >
          <div
            v-for="(textBlock, textBlockIdx) in textBlocksContent"
            :key="textBlock.text"
            :ref="(el => textBlocksRef[textBlockIdx] = el as HTMLDivElement)"
            v-html="textBlock.text"
            class="w-screen h-screen flex justify-center items-center text-center main-gradient-text font-medium text-[6.4vw] leading-[100%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
