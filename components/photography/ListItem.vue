<template>
  <div class="item">
    <pre>{{ category }}</pre>
    <br>
  </div>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";

type Props = {
  category: PhotographyCategory;
};

const props = defineProps<Props>();
</script>

<style lang="postcss" scoped>

</style>
