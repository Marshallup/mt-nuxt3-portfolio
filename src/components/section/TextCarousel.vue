<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { formatToDomID, MAIN_PAGE } from "@/utils/htmlElId";
import { onMountedSmothScrollBar } from "@/composables/onMountedSmothScrollBar";

const { height } = useWindowSize()

const textBlockWrapperRef = ref<HTMLDivElement>(null);
const textBlockInnerRef = ref<HTMLDivElement>(null);
const textBlocksRef = ref<HTMLDivElement[]>([]);
const textSectionkRef = ref<HTMLDivElement>(null);

const showSection = ref(false)

const textSectionPb = ref('0px')

// const styles = reactive<{ marginBottom?: string }>({
//   marginBottom: undefined,
// });

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

// function getStyleOffset() {
//   const lastTitleLastSection = document.querySelector(
//     formatToDomID(MAIN_PAGE.SECOND_TITLE_LAST)
//   );

//   if (lastTitleLastSection) {
//     styles.marginBottom = `-${
//       window.innerHeight / 2 - lastTitleLastSection.clientHeight / 2
//     }px`;
//   }
// }

function updateTextSectionPb() {
  textSectionPb.value = `${getProjectSectionSpace()}px`
}
function getProjectSectionSpace() {
  const blockTextWr = unref(textBlocksRef)[2]
  const blockTextEl = unref(textBlocksRef)[2].children[0]
  return blockTextWr.clientHeight - (blockTextWr.clientHeight - blockTextEl.clientHeight) / 2
}

function getProjectEnd() {
  const thirdSection = document.querySelector(formatToDomID(MAIN_PAGE.THIRD));
  let heightVal = 0;

  if (thirdSection) {
    heightVal = thirdSection.clientHeight;
  }

  return heightVal;
}

onMountedSmothScrollBar(($gsap, { updateGsapMarkersPosition }) => {
  const durationScale = 100 / unref(textBlocksRef).length;

  const tl3 = $gsap.timeline({
    scrollTrigger: {
      trigger: unref(textBlockWrapperRef),
      end: () => `top+=${
          window.innerHeight * unref(textBlocksContent).length + getProjectEnd()
        }px bottom`,
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

  tl3.to(formatToDomID(MAIN_PAGE.THIRD), {
    y: () => `${getProjectSectionSpace()}px`,
    duration: 33,
  });

  // getStyleOffset();
  showSection.value = true

  updateTextSectionPb()
  updateGsapMarkersPosition();
});

watch(height, () => {
  updateTextSectionPb()
})
</script>

<template>
  <div :id="MAIN_PAGE.SECOND_WRAPPER">
    <div ref="textBlockWrapperRef" class="w-full h-full relative">
      <div
        ref="textSectionkRef"
        :id="MAIN_PAGE.SECOND"
        class="w-full h-full overflow-x-hidden absolute top-0 left-0"
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
            class="w-screen h-screen flex justify-center items-center text-center main-gradient-text font-medium text-[6.4vw] leading-[100%]"
          >
            <span
              :id="
                textBlockIdx === textBlocksContent.length - 1
                  ? MAIN_PAGE.SECOND_TITLE_LAST
                  : undefined
              "
              v-html="textBlock.text"
            />
          </div>
        </div>
      </div>

      <div :style="{ paddingBottom: textSectionPb }">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
