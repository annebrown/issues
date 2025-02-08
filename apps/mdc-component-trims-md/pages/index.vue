<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

<div class="p-4">
    <!-- Title -->
    <h1>mdc-component-trims-md</h1>

    <!-- Description -->
    <h2>Description</h2>
    <p>Minimal Nuxt Issue Reproduction</p>

    <!-- Issue -->
    <h2>Issue</h2>
    
    <p>
        Referencing a component in markdown results in the remaining markdown content not being rendered, including subsequent components.
    </p>

    <p>
        This project is a minimal reproduction of the `mdc-component-trims-md` issue.
    </p>

    <!-- Usage -->
    <h2>Markdown Pages</h2>
    <p>
        These markdown pages include at least one component.  Content following the first component is not being rendered: 
    </p>
    <ul>
        <li><a href="/mdc-prob00">mdc-prob00</a></li>
        <li><a href="/mdc-prob01">mdc-prob01</a></li>
    </ul>

    <h2>Repo</h2>
    <p>
        <a href="https://github.com/annebrown/issues/tree/main/apps/mdc-component-trims-md">annebrown/issues/app/mdc-component-trims-md</a>
    </p>
    <h2>Demo</h2>
    <p>
        <a href="https://mdc-component-trims-md.annebrown.ca/">mdc-component-trims-md.annebrown.ca</a>
    </p>
</div>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'mdc-component-trims-md', 
        description: 'Minimal Reproduction',
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->
