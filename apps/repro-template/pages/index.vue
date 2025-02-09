<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

<div class="p-4">
    <!-- Title -->
    <h1>repro-template</h1>

    <!-- Description -->
    <h2>Description</h2>
    <p>Minimal Nuxt Issue Reproduction</p>

    <!-- Issue -->
    <h2>Issue</h2>
    
    <p>
        Description goes here.
    </p>

    <p>
        This project is a minimal reproduction of the `repro-template` issue.
    </p>

    <!-- Usage -->
    <h2>Markdown Assets</h2>
    <p>
        Descibe the issue in these markdown content files:
    </p>

    <ul>
        <li><a href="/prob00">prob00</a></li>
        <li><a href="/prob01">prob01</a></li>
    </ul>

    <h2>Repo</h2>
    <p>
        <a href="https://github.com/annebrown/issues/tree/main/apps/repro-template">annebrown/issues/app/repro-template</a>
    </p>
    <h2>Demo</h2>
    <p>
        <a href="https://repro-template.annebrown.ca/">repro-template.annebrown.ca</a>
    </p>
</div>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'repro-template', 
        description: 'Minimal Reproduction',
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->
