<script setup lang="ts">
import SmoothScrollBar from "smooth-scrollbar";
import {
  TSmoothScrollBar,
  IProvideSmoothScrollBar,
  onMountedScrollBarCb,
} from "@/types/smoothScrollBar";

const { $gsap, $ScrollTrigger } = useNuxtApp();

const smoothScrollBar = ref<TSmoothScrollBar>(null);
const smoothContainer = ref<HTMLDivElement>(null);

function initOnMountedScrollBar() {
  const cbs: Array<onMountedScrollBarCb> = [];

  return {
    onMountedScrollBar: (cb: onMountedScrollBarCb) => {
      cbs.push(cb);
    },
    onTriggerScrollbar: (smoothScrollBarEx: SmoothScrollBar) => {
      cbs.forEach((cb) => cb(smoothScrollBarEx));
      cbs.length = 0;
    },
  };
}

function updateGsapMarkersPosition() {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = $gsap.utils.toArray('[class *= "gsap-marker"]');

    unref(smoothScrollBar).addListener(({ offset }) => {
      $gsap.set(markers, { marginTop: -offset.y });
    });
  }
}

const { onMountedScrollBar, onTriggerScrollbar } = initOnMountedScrollBar();

const damping = 0.02;

function initScrolling() {
  if (unref(smoothScrollBar)) {
    unref(smoothScrollBar).options.damping = damping;
  }
}

onMounted(() => {
  if (process.client) {
    smoothScrollBar.value = SmoothScrollBar.init(unref(smoothContainer), {
      damping,
      delegateTo: document.body,
    });

    $ScrollTrigger.scrollerProxy(unref(smoothContainer), {
      scrollTop(value) {
        if (arguments.length) {
          unref(smoothScrollBar).scrollTop = value; // setter
        }
        return unref(smoothScrollBar).scrollTop; // getter
      },
    });

    $ScrollTrigger.defaults({
      scroller: unref(smoothContainer),
    });

    unref(smoothScrollBar).addListener($ScrollTrigger.update);

    onTriggerScrollbar(unref(smoothScrollBar) as SmoothScrollBar);
  }
});

provide<
  Omit<IProvideSmoothScrollBar, "smoothScrollBar"> & {
    smoothScrollBar: typeof smoothScrollBar;
  }
>("smoothScrollBar", {
  smoothContainer,
  smoothScrollBar,
  initScrolling,
  onMountedScrollBar,
  updateGsapMarkersPosition,
});
</script>

<template>
  <div ref="smoothContainer" class="h-screen">
    <slot />
  </div>
</template>

<style scoped></style>
