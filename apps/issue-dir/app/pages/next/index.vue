<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div class="mx-auto">

        <!-- Title -->
        <h1 class="w-full text-center text-[--primary-light] dark:text-[--primary-dark]">
            Next.js
        </h1>
    
        <!-- Description -->
        <p class="w-full text-center">Next Bug Reproductions</p>

        <!-- List -->
        <ul class="w-full">

            <li class="w-full">
                <NuxtLink href="/undefined" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">First Issue</h2>
                        <p class="issue-descr">First Issue Description</p>
                    </div>
                </NuxtLink>
            </li>

            <li class="w-full">
                <NuxtLink to="/undefined" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">Second Issue</h2>
                        <p class="issue-descr">Issue 2 Description</p>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full">
                <NuxtLink to="/undefined" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">Third Issue</h2>
                        <p class="issue-descr">Issue 3 Description Text</p>
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