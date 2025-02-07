<!--------@/pages/about.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Title -->
    <h1 class="text-[--primary-light] dark:text-[--primary-dark]">About</h1>

      <!-- Description -->
      <p class="m-0 p-0 pt-4">Technology Development Platform</p>

<!-- Logo -->
<NuxtImg src="/img/logo.svg" class="absolute top-[5rem] right-[1.2rem] w-[6rem] h-auto" />

<!-- Horiz Line -->
<hr class="m-0 mt-1 p-0" />

<!-- Links -->
<p class="m-0 p-0 pb-5 text-sm">

    <NuxtLink href="/devy/projects/dash" class="inline-block m-0 p-0 pt-[0.1rem]
        align-middle">
        Other Sites </NuxtLink>

    <span class="inline-block m-0 -mt-2 p-0 pb-1 align-top
        text-xl"> | </span>

    <NuxtLink href="/gunner/login" class="inline-block m-0 p-0 pt-[0.1rem] align-middle">
         Login
    </NuxtLink>

</p><!-- Links -->

</NuxtLayout>
</div></template>

<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'CMS Client',
    order: 50,
})
</script>
<!--------@/pages/about.vue---------------------------------------------------->
