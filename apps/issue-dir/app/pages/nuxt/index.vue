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
        <p class="w-full text-center">Nuxt Bug Reproductions</p>

        <!-- List -->
        <ul class="w-full">

            <li class="w-full">
                <NuxtLink external href="https://repro-template.annebrown.ca" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">repro-template</h2>
                        <p class="issue-descr">Issue Reproduction Template</p>
                    </div>
                </NuxtLink>
            </li>

            <li class="w-full">
                <NuxtLink external href="https://mdc-test.annebrown.ca" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">MDC Syntax</h2>
                        <p class="issue-descr">Testing MDC Syntax Variations</p>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full">
                <NuxtLink to="/issues/3" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">Third Issue</h2>
                        <p class="issue-descr">Issue 3 Description</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </div><!-- Center -->

</NuxtLayout> 
</div></template>

<style scoped>
.issue { @apply w-full p-4 bg-[--primary-light] dark:bg-[--primary-dark] rounded-lg shadow-md; }
.issue-title { @apply m-0 p-0 text-lg text-black dark:text-white ; }
.issue-descr { @apply w-full p-4 text-white dark:text-black; }
</style>
<!---------@/pages/index.vue--------------------------------------------------->