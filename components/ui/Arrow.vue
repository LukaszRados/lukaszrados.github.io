<template>
  <span class="arrow" :class="{ animate }">
    <span class="shape" :class="direction"></span>
  </span>
</template>

<script lang="ts" setup>
type Props = {
  direction: "left" | "right";
  animate?: boolean
};

const props = withDefaults(defineProps<Props>(), {
  direction: "right",
  animate: false,
});
const { direction, animate } = toRefs(props);
</script>

<style lang="postcss" scoped>
.arrow {
  display: inline-block;
  height: 35px;
  position: relative;
  width: 80px;
}

.shape {
  background-color: var(--font-color);
  display: block;
  height: 1px;
  position: absolute;
  transition: width 300ms var(--transition-timing);
  top: 17px;
  width: 48px;

  &:before,
  &:after {
    background-color: var(--font-color);
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    width: 16px;
  }

  &.left {
    left: 0;

    &:before {
      transform-origin: left center;
      transform: rotate(-45deg)
    }

    &:after {
      transform-origin: left center;
      transform: rotate(45deg)
    }
  }

  &.right {
    right: 0;

    &:before {
      right: 0;
      transform-origin: right center;
      transform: rotate(-45deg)
    }

    &:after {
      right: 0;
      transform-origin: right center;
      transform: rotate(45deg)
    }
  }
}

.arrow.animate:hover .shape {
  width: 100%;
}
</style>
