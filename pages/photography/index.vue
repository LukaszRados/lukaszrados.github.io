<template>
  <fade-in-section>
    <div
      class="row"
      :class="{
        'row--active': activeRow === rowIndex  
      }"
      v-for="(row, rowIndex) in chunks"
      :key="JSON.stringify(row)"
    >
      <div
        class="card"
        v-for="(gallery, index) in row"
        :key="gallery.slug"
        @mouseenter="activeColumn = index; activeRow = rowIndex"
        @mouseleave="activeColumn = null; activeRow = null"
        :class="{
          'card--active': activeColumn !== null && activeColumn % 3 === index % 3,
          'card--inactive': activeColumn !== null && activeColumn  % 3 !== index,
        }"
      >
        <h2 class="text-xl leading-tight mb-4 relative z-10" v-html="gallery.title"></h2>
        <div
          class="image"
          :style="`background-image: url(${gallery.background})`"
        >
          <!-- <img src="" alt="" class="absolute top-0 left-0 w-full h-full"> -->
        </div>
        <nuxt-link
          :to="`/photography/${gallery.slug}`"
          class="absolute top-0 left-0 w-full h-full opacity-0 z-20"
        >
          {{ gallery.title }}
        </nuxt-link>
      </div>
    </div>
  </fade-in-section>
</template>

<script>
export default {
  data () {
    return {
      activeColumn: null,
      activeRow: null,
    }
  },

  async asyncData({ $content, $app }) {
    const galleries = await $content('galleries').fetch()
    return {
      chunks: galleries.reduce((output, value) => {
        if (output[output.length - 1].length % 3 === 0) {
          output.push([])
        }
        output[output.length - 1].push(value)
        return output
      }, [[]]).filter(row => row.length !== 0)
    }
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white border-t border-b border-gray-400 -mt-px p-4 flex flex-col transition-all duration-500 ease-in-out relative;
}

.image {
  @apply bg-right-top bg-no-repeat relative self-end w-2/3;
  background-size: auto 100%;
}

.image:after {
  content: '';
  padding-bottom: 80%;
  @apply block h-0;
}

@screen md {
  .row {
    @apply flex items-stretch;
  }

  .card {
    @apply w-1/3 h-64;
  }

  .card:not(:nth-child(3)) {
    @apply border-r;
  }
}

@screen lg {
  .card {
    @apply p-8 flex-row justify-between relative;
  }

  .row--active .card {
    @apply h-96;
  }

  .card--active {
    @apply w-1/2;
  }

  .card--inactive {
    @apply w-1/4;
  }

  .image {
    @apply absolute top-0 right-0 w-0 mt-8 mr-8 transition-all duration-500 ease-in-out;
    height: calc(100% - 4rem);
  }

  .row--active .card--active .image {
    @apply w-2/3;
  }

  .image:after {
    @apply hidden;
  }
}
</style>
