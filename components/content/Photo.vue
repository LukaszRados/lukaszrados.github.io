<template>
  <div>HELLO THERE {{ url }}</div>
</template>

<script lang="ts" setup>
type Props = {
  url: string
}

defineProps<Props>()
</script>

<style lang="postcss" scoped>

</style>