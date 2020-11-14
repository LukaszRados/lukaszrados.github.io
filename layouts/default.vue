<template>
    <div>
        <Navigation />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    },
}
</script>

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
