<script setup lang="ts">
interface BurgerProps {
  modelValue: boolean;
}
interface BurgerEmits {
  (e: "update:modelValue", val: BurgerProps["modelValue"]): void;
}

const props = defineProps<BurgerProps>();
const emit = defineEmits<BurgerEmits>();

const active = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

function onClickBurger() {
  active.value = !unref(active);
}
</script>

<template>
  <div
    class="group cursor-pointer transition"
    :class="{ active, 'rotate-45': active }"
    @click="onClickBurger"
  >
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="28.5"
        stroke="url(#paint0_linear_418_264)"
        stroke-width="3"
        :class="{ 'stroke-secondary-600': active }"
      />
      <line
        x1="14"
        y1="25.5"
        x2="46"
        y2="25.5"
        stroke="url(#paint1_linear_418_264)"
        stroke-width="3"
        class="transition group-hover:rotate-90 group-hover:-translate-x-[4px] origin-center"
        :class="{ 'stroke-secondary-600 -translate-x-[4px] rotate-90': active }"
      />
      <line
        x1="14"
        y1="35.5"
        x2="46"
        y2="35.5"
        stroke="url(#paint2_linear_418_264)"
        stroke-width="3"
        class="transition group-hover:-translate-y-[6px]"
        :class="{ 'stroke-secondary-600 -translate-y-[6px]': active }"
      />
      <defs>
        <linearGradient
          id="paint0_linear_418_264"
          x1="-1.40307"
          y1="34.6876"
          x2="70.6503"
          y2="33.7593"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.141166" stop-color="var(--primary-200)" />
          <stop offset="0.896551" stop-color="var(--primary-400)" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_418_264"
          x1="12.2283"
          y1="27.5781"
          x2="45.797"
          y2="13.3069"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.141166" stop-color="var(--primary-200)" />
          <stop offset="0.896551" stop-color="var(--primary-400)" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_418_264"
          x1="12.2283"
          y1="37.5781"
          x2="45.797"
          y2="23.3069"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.141166" stop-color="var(--primary-200)" />
          <stop offset="0.896551" stop-color="var(--primary-400)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
/* .active {
  background-color: white;
}
.active line,
.active circle {
  stroke: var(--secondary-600);
} */
</style>
