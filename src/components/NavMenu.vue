<script setup lang="ts">
interface NavMenuProps {
  modelValue: boolean;
}
interface NavMenuEmits {
  (e: "update:modelValue", val: NavMenuProps["modelValue"]): void;
}

const props = withDefaults(defineProps<NavMenuProps>(), {});
const emit = defineEmits<NavMenuEmits>();

const active = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <Transition>
    <div
      v-if="active"
      class="absolute left-0 top-0 w-screen h-screen bg-nav-menu z-0"
    >
      <UiContainer>
        <div class="h-header" />
        sss
      </UiContainer>
    </div>
  </Transition>
</template>

<style scoped>
.bg-nav-menu {
  background: linear-gradient(
      89.24deg,
      var(--primary-200) -1.75%,
      var(--primary-400) 108.59%
    ),
    linear-gradient(
      89.24deg,
      var(--primary-200) -1.75%,
      var(--primary-400) 108.59%
    ),
    #141f31;
}
</style>
