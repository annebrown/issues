<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div class="mx-auto">

        <!-- Title -->
        <h1 class="w-full text-center text-[--primary-light] dark:text-[--primary-dark]">
            Nuxt
        </h1>
    
        <!-- Description -->
        <p class="w-full text-center mb-5">Nuxt Bug Reproductions</p>

        <!-- List -->
        <ul class="w-full">
            <li class="w-full">
                <NuxtLink external href="https://mdc-component-trims-md.annebrown.ca" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">mdc-component-trims-md</h2>
                        <p class="issue-descr">Referencing a component in markdown results in the remaining markdown content not being rendered, including subsequent components.</p>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full">
                <NuxtLink to="/issues/2" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">Issue 2</h2>
                        <p>Issue 2 Description</p>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full">
                <NuxtLink to="/issues/3" class="w-full">
                    <div class="issue">
                        <h2 class="text-lg">Issue 3</h2>
                        <p>Issue 3 Description</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </div><!-- Center -->

</NuxtLayout> 
</div></template>

<style scoped>
.issue { @apply w-full p-4 bg-[--primary-light] dark:bg-[--primary-dark] rounded-lg shadow-md; }
.issue-title { @apply text-lg text-black dark:text-white ; }
.issue-descr { @apply w-full p-4 text-white dark:text-black; }
</style>
<!---------@/pages/index.vue--------------------------------------------------->