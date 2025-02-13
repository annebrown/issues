<!--------@/pages/about.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Title -->
    <h1 class="text-[--primary-light] dark:text-[--primary-dark]">About</h1>

      <!-- Description -->
      <p class="m-0 p-0 pt-4">Issues</p>

<!-- Logo -->
<NuxtImg src="logo.svg" class="absolute top-[5.45rem] right-[1.2rem] w-[5rem] h-auto" />

<!-- Horiz Line -->
<hr class="m-0 mt-1 p-0" />

<!-- Links -->
<p class="m-0 p-0 pb-5 text-sm">

    <NuxtLink href="https://www.annebrown.ca/dash" class="inline-block m-0 p-0 pt-[0.1rem]
        align-middle">
        Other Sites </NuxtLink>

    <span class="inline-block m-0 -mt-[0.4rem] p-0 pb-1 align-top
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
