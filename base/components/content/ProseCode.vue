<!--------@@/base/components/content/ProseCode.vue----------------------------->
<template>
    <span class="md-code">
        <code><slot /></code>
    </span>
</template>
<style scoped>
.md-code {
    @apply w-fit inline-block text-wrap text-xs
    rounded-sm bg-[--body-bg-light] dark:bg-gray-950;
}
</style>
<!--------@@/base/components/content/ProseCode.vue----------------------------->