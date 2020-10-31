<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
html {
  @apply font-sans;
  touch-action: manipulation;
}

::selection {
  background: rgba(253, 203, 110, .5);
  @apply text-black;
}
</style>
