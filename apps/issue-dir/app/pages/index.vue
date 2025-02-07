<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div class="mx-auto">

        <!-- Title -->
        <h1 class="w-full mx-auto text-[--primary-light] dark:text-[--primary-dark]">
            Issues
        </h1>
    
        <!-- Description -->
        <p class="w-full mx-auto mb-5">Bug Reproduction List</p>

        <!-- Logo -->
        <ImgLogo class="mx-auto m-0 mt-5 p-0 pb-10 pl-6 w-70 h-auto"/>

    </div><!-- Center -->

</NuxtLayout> 
</div></template>

<script lang="ts" setup>
definePageMeta({
    title: 'Issues',
    description: 'Bug Reproduction List',
})
</script>
<!---------@/pages/index.vue--------------------------------------------------->