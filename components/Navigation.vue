<template>
    <header
        class="sticky top-0 left-0 w-full transform transition duration-300 ease-in-out z-20 p-4 md:flex md:justify-between lg:p-8"
        :class="{
            'opacity-0 -translate-y-20': (previousPosition > 20) && !showScrolledNavigation,
        }"
    >
        <nuxt-link :to="localePath('/')" class="text-2xl leading-none inline-block mb-4 md:text-3xl lg:text-4xl lg:mb-0">
            Łukasz Rados
            <transition
                enter-class="h-0 opacity-0"
                enter-to-class="h-12 md:h-15 lg:h-18 opacity-100"
                enter-active-class="transition-all duration-300"
                leave-class="opactiy-100 h-12 md:h-15 lg:h-18"
                leave-to-class="h-0 opacity-0"
                leave-active-class="transition-all duration-300"
            >
                <div v-show="showSubheader">
                    <div class="h-12 md:h-15 lg:h-18">
                        Front End Developer<br>
                        {{ $t('globals.photographer') }}
                    </div>
                </div>
            </transition>
        </nuxt-link>
        <nav class="flex items-center h-10 lg:h-auto" :class="menuHideClass">
            <button type="button" class="text-0 focus:outline-none md:hidden" @click="open = !open" :aria-label="$t('globals.menu')">
                <menu-icon :open="open" />
            </button>
            <ul
                class="flex items-center overflow-hidden transition-width duration-300 md:flex"
                :class="{ 'w-0 md:w-auto': !open, 'w-full': open }"
            >
                <li><nuxt-link :to="localePath('/photography')" class="link">{{ $t('navigation.photography') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/blog')" class="link">blog</nuxt-link></li>
                <li><nuxt-link :to="localePath('/contact')" class="link">info</nuxt-link></li>
                <li v-if="$i18n.locale === 'pl'"><nuxt-link :to="switchLocalePath('en')" class="inline-block text-lg ml-5 lg:text-xl hover:underline">english?</nuxt-link></li>
                <li v-if="$i18n.locale === 'en'"><nuxt-link :to="switchLocalePath('pl')" class="inline-block text-lg ml-5 lg:text-xl hover:underline">polski?</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data () {
        return {
            open: false,
            showScrolledNavigation: false,
            previousPosition: 0,
            currentPosition: 0,
        }
    },

    computed: {
        showSubheader () {
            return (this.$route.name.startsWith('index_') || this.$route.name.startsWith('photography_')) && (this.currentPosition === 0)
        },
        menuHideClass () {
            const routeName = this.$route.name
            if (routeName.startsWith('blog-slug') || routeName.startsWith('photography-slug')) {
                return 'hidden'
            }
            return ''
        },
    },

    watch: {
        '$route' () {
            this.open = false
        }
    },

    methods: {
        onScroll () {
            this.currentPosition = window.scrollY
            if (Math.abs(window.scrollY - this.previousPosition) > 80) { 
                this.showScrolledNavigation = window.scrollY > 0 && window.scrollY < this.previousPosition
                this.previousPosition = window.scrollY
            }
        },
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll, { passive: true })
    },

    destroyed () {
        window.removeEventListener('scroll', this.onScroll, { passive: true })
    }
}
</script>

<style lang="postcss" scoped>
.link {
    @apply inline-block text-lg ml-5;
}
.link.is-active,
.link:hover {
    @apply underline;
}
@screen lg {
    .link {
        @apply text-xl;
    }
    li:not(:first-child):before {
        content: '/';
        @apply inline-block ml-5 opacity-50;
    }
}
</style>
