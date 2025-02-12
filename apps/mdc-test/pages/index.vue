<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

<div class="p-4">
    <!-- Title -->
    <h1>MDC Test Reproduction</h1>

    <!-- Description -->
    <h2>Description</h2>
    <p>Markdown MDC component syntax testing</p>

    <h2>Purpose</h2>

    <p>Minimal reproduction</p>
    
    <p>
        Testing syntax variations for MDC components in markdown content files.
    </p>

    <!-- Usage -->
    <h2>Markdown Assets</h2>
    <p>
        Syntax variations:
    </p>

    <ul>
        <li><a href="/html">HTML Syntax</a></li>
        <li><a href="/mdc">MDC Syntax</a></li>
    </ul>

    <h2>Repo</h2>
    <p>
        <a href="https://github.com/annebrown/issues/tree/main/apps/mdc-test">annebrown/issues/app/mdc-test</a>
    </p>
    <h2>Demo</h2>
    <p>
        <a href="https://mdc-test.annebrown.ca/">mdc-test.annebrown.ca</a>
    </p>
</div>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'mdc-test',
        description: 'Minimal Reproduction',
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->
