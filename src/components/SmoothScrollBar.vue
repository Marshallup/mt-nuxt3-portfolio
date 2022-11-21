<script setup lang="ts">
import { Ref } from "vue";
import SmoothScrollBar from "smooth-scrollbar";

export type TSmoothScrollBar = SmoothScrollBar | null;

export interface IProvideSmoothScrollBar {
  smoothScrollBar: Ref<TSmoothScrollBar>;
  stopScrolling: () => void;
  initScrolling: () => void;
}

const smoothScrollBar = ref<TSmoothScrollBar>(null);
const smoothContainer = ref<HTMLDivElement>(null);
const stopScrollingStatus = ref(false);

const damping = 0.02;

function stopScrolling() {
  if (unref(smoothScrollBar)) {
    console.log("stop");
    unref(smoothScrollBar).options.wheelEventTarget;
    stopScrollingStatus.value = true;
    // console.log(unref(smoothScrollBar).);
    // unref(smoothScrollBar).track.xAxis.element.remove();
  }
}

function initScrolling() {
  if (unref(smoothScrollBar)) {
    unref(smoothScrollBar).options.damping = damping;
  }
}

onMounted(() => {
  if (process.client) {
    smoothScrollBar.value = SmoothScrollBar.init(unref(smoothContainer), {
      damping,
    });

    unref(smoothScrollBar).addListener((status) => {
      if (unref(stopScrollingStatus)) {
        unref(smoothScrollBar).setPosition(status.offset.x, status.offset.y);
      }
    });
  }
});

provide<
  Omit<IProvideSmoothScrollBar, "smoothScrollBar"> & {
    smoothScrollBar: typeof smoothScrollBar;
  }
>("smoothScrollBar", {
  smoothScrollBar,
  stopScrolling,
  initScrolling,
});
</script>

<template>
  <div ref="smoothContainer" class="h-screen">
    <slot />
  </div>
</template>

<style scoped></style>
