<script setup lang="ts">
import { onMountedSmothScrollBar } from "@/composables/onMountedSmothScrollBar";
import { MAIN_PAGE, formatToDomID } from "@/utils/htmlElId";

const sectionRef = ref<HTMLElement>(null);
const sectionInnerRef = ref<HTMLElement>(null);
// const styles = reactive<{ marginTop?: string }>({
//   marginTop: undefined,
// });

// function getStyleOffset() {
//   const lastTitleLastSection = document.querySelector(
//     formatToDomID(MAIN_PAGE.SECOND_TITLE_LAST)
//   );

//   if (lastTitleLastSection) {
//     styles.marginTop = `-${
//       window.innerHeight / 2 - lastTitleLastSection.clientHeight / 2
//     }px`;
//   }
// }

// onMountedSmothScrollBar(($gsap, { updateGsapMarkersPosition }) => {
//   // getStyleOffset();

//   const tl1 = $gsap.timeline({
//     scrollTrigger: {
//       trigger: unref(sectionRef),
//       start: () => `start bottom`,
//       end: () => `start start`,
//       scrub: 0.5,
//       markers: {
//         startColor: "blue",
//         endColor: "blue",
//       },
//       invalidateOnRefresh: true,
//     },
//   });

//   tl1.to(unref(sectionInnerRef), {
//     y: "0",
//   });

//   updateGsapMarkersPosition();
// });
</script>

<template>
  <div
    ref="sectionRef"
    :id="MAIN_PAGE.THIRD"
    class="min-h-[100vh] relative z-0 translate-y-full"
  >
    <!-- <div ref="sectionInnerRef" class="h-full translate-y-[50vh]"> -->
    <!-- px-[60px] -->
    <div ref="sectionInnerRef" class="h-full">
      <UiContainer no-padding class="absolute w-full h-full -z-10">
        <div class="w-full h-full bg-primary-100 rounded-[90px]" />
      </UiContainer>
      <div>
        <div class="py-[100px] rounded-[90px]">
          <h3
            class="uppercase text-center text-[90px] text-secondary-600 mb-[92px]"
          >
            Мои
            <span
              class="bg-main-gradient rounded-[90px] inline-block px-[51px] py-[10px]"
              >проекты</span
            >
          </h3>

          <div class="-mx-[50px] overflow-hidden">
            <CarouselProjects />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
