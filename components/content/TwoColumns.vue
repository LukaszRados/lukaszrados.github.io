<template>
  <div class="columns">
      <slot />
  </div>
</template>

<style lang="postcss" scoped>
.columns {
  display: grid;
  gap: 16px;
  margin: 0 auto;

  @media screen and (min-width: 700px) {
    align-items: flex-start;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    margin: 16px auto;
    max-width: 1500px;
  }

  @media screen and (min-width: 900px) {
    gap: 32px;
    margin: 32px auto;
  }

  @media screen and (min-width: 900px) {
    gap: 48px;
    margin: 48px auto;
  }

  :deep(.photo) {
    margin: 0 auto;
  }
}
</style>