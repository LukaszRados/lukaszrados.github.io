<template>
    <div
        class="inline-flex items-center justify-center h-6 w-8 relative"
    >
        <span
            class="line transform top-0"
            :class="{ 'rotate-45 top-1/2': open }"
        ></span>
        <span
            class="line top-1/2"
            :class="{ 'opacity-0': open }"
        ></span>
        <span
            class="line transform"
            :class="{ '-rotate-45 top-1/2': open, 'top-100': !open }" 
        ></span>
    </div>
</template>

<script>
export default {
    props: ['open']
}
</script>

<style lang="postcss" scoped>
.line {
    @apply w-full absolute transition-all duration-300 left-0 h-px bg-black dark:bg-white;
}
</style>