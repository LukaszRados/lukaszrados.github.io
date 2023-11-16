<template>
  <div class="columns">
      <slot />
  </div>
</template>

<style lang="postcss" scoped>
.columns {
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  max-width: 1400px;
  margin: 16px auto;

  @media screen and (min-width: 900px) {
    margin: 32px auto;
  }
}
</style>