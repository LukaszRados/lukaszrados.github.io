<template>
    <button type="button" @click="toggleDarkMode" class="focus:outline-none">
        <span class="flex items-center" v-if="isDarkMode">
            <light-mode-icon v-if="isDarkMode" class="w-6 h-6 mr-2" />
            {{ $t('footer.light') }}
        </span>
        <span class="flex items-center" v-else>
            <dark-mode-icon class="w-6 h-6 mr-2" />
            {{ $t('footer.dark') }}
        </span>
    </button>
</template>

<script>
import DarkModeIcon from '@/assets/icons/dark.svg?inline'
import LightModeIcon from '@/assets/icons/light.svg?inline'

export default {
    components: {
        DarkModeIcon,
        LightModeIcon,
    },

    computed: {
        isDarkMode () {
            return this.$colorMode.preference === 'dark'
        },
    },

    methods: {
        toggleDarkMode () {
            this.$colorMode.preference = this.isDarkMode ? 'light' : 'dark'
        },
    }
}
</script>