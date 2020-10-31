<template>
  <header class="p-4 lg:flex lg:justify-between lg:p-8">
    <nuxt-link to="/" class="text-2xl leading-none inline-block mb-4 md:text-3xl lg:text-4xl">
      Łukasz Rados<br>
      Front End Developer<br>
      Landscape Photographer
    </nuxt-link>
    <nav class="flex items-center h-8">
      <button type="button" class="text-0 focus:outline-none lg:hidden" @click="open = !open">
        <menu-icon :open="open" />
      </button>
      <ul
        class="flex items-center lg:flex"
        :class="{ 'hidden': !open }"
      >
        <li><nuxt-link to="/" class="link">gallery</nuxt-link></li>
        <li><nuxt-link to="/" class="link">blog</nuxt-link></li>
        <li><nuxt-link to="/" class="link">info</nuxt-link></li>
        <li><nuxt-link to="/" class="link">polski?</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      open: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply inline-block text-lg ml-5;
}
.link:hover {
  @apply underline;
}
@screen lg {
  .link {
    @apply text-xl;
  }
  li:not(:first-child):before {
    content: '/';
    @apply inline-block ml-5;
  }
}
</style>
