<template>
    <div
        class="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full h-full z-30"
    >
        <div
            v-if="index >= 0"
            @click="onClick"
        >
            <div
                class="flex items-center justify-center absolute top-0 w-screen h-screen transform"
                :class="{
                    '-left-100': index === 0,
                    'left-0': index === 1,
                    'left-100': index === 2,
                    'transition-all ease-in-out duration-150': needsTransition
                }"
                :style="`transform: translateX(${translate})`"
                v-for="(photo, index) in surroundingPhotos"
                :key="photo.url"
            >
                <img
                    :src="buildImageUrl(photo.url)" 
                    class="max-w-screen max-h-screen"
                >
            </div>
        </div>
        <button
            type="button"
            class="fixed top-0 right-0 h-10 w-10 mt-5 mr-3 flex items-center justify-center focus:outline-none"
            @click="$emit('close')"
            :aria-label="$t('lightbox.close')"
        >
            <close-button />
        </button>
        <button
            type="button"
            class="fixed top-1/2 right-0 h-10 w-10 -mt-5 mr-5 hidden lg:flex items-center justify-center transform rotate-180 focus:outline-none"
            @click="navigate(1)"
            :aria-label="$t('lightbox.prev')"
        >
            <back-button />
        </button>
        <button
            type="button"
            class="fixed top-1/2 left-0 h-10 w-10 -mt-5 ml-5 hidden lg:flex items-center justify-center focus:outline-none"
            @click="navigate(-1)"
            :aria-label="$t('lightbox.next')"
        >
            <back-button />
        </button>
    </div>
</template>

<script>
import { buildImageUrl } from './helpers'

export default {
    props: ['photos', 'photo'],

    data () {
        return {
            index: -1,
            needsTransition: false,
            translate: '0',
            touch: {
                initial: undefined,
                delta: 0,
            }
        }
    },

    computed: {
        surroundingPhotos () {
            return [
                this.photos[this.fixIndex(this.index - 1)],
                this.photos[this.index],
                this.photos[this.fixIndex(this.index + 1)],
            ]
        }
    },

    methods: {
        handleKeyPressed (event) {
            switch (event.which) {
                case 27:
                    this.$emit('close')
                    break
                case 39:
                    this.navigate(1)
                    break
                case 37:
                    this.navigate(-1)
                    break
            }
        },

        fixIndex (index) {
            if (index < 0) index = this.photos.length + index
            else if (index >= this.photos.length) index = index % this.photos.length
            return index
        },

        navigate (direction) {
            if (this.needsTransition) return

            this.needsTransition = true
            this.translate = `${direction * -100}vw`

            new Promise(resolve => {
                setTimeout(resolve, 150)
            }).then(() => {
                this.needsTransition = false
                this.$nextTick().then(() => {
                    this.translate = `0`
                    this.index = this.fixIndex(this.index + direction)
                })
            })
        },

        onClick () {
            if (this.touch.initial || this.needsTransition) return
            this.navigate(1)
        },
        
        onTouchStart (event) {
            this.touch.delta = 0
            this.touch.initial = event.touches[0].clientX
        },

        onTouchMove (event) {
            if (this.touch.initial === undefined) return;

            this.touch.delta = this.touch.initial - event.touches[0].clientX;
            this.translate = `${-this.touch.delta}px`
        },

        onTouchEnd () {
            if (this.touch.initial === undefined) return;
            if (Math.abs(this.touch.delta) < 50) {
                this.translate = 0
                this.touch.delta = 0
                this.touch.initial = undefined
                return
            }
            this.navigate(this.touch.delta > 0 ? 1 : -1)
        },

        preloadPhotos () {
            [-2, -1, 0, 1, 2].map(i => {
                const index = this.fixIndex(this.index + i)
                this.preloadPhoto(this.photos[index])
            });
        },

        preloadPhoto (photo) {
            if (photo.isLoaded) return

            const image = new Image()
            image.addEventListener('load', () => {
                photo.isLoaded = true
            })
            image.src = buildImageUrl(photo.url)
        },

        buildImageUrl (photoUrl) {
            return buildImageUrl(photoUrl)
        }
    },

    mounted () {
        document.addEventListener('keyup', this.handleKeyPressed)
        document.addEventListener('touchstart', this.onTouchStart, { passive: true })
        document.addEventListener('touchmove', this.onTouchMove, { passive: true })
        document.addEventListener('touchend', this.onTouchEnd, { passive: true })
        document.body.classList.add('overflow-hidden')
        this.index = this.photos.indexOf(this.photo)
        this.preloadPhotos()
    },

    destroyed () {
        document.body.classList.remove('overflow-hidden')
        document.removeEventListener('keyup', this.handleKeyPressed)
        document.removeEventListener('touchstart', this.onTouchStart, { passive: true });
        document.removeEventListener('touchmove', this.onTouchMove, { passive: true });
        document.removeEventListener('touchend', this.onTouchEnd, { passive: true });
    }
}
</script>