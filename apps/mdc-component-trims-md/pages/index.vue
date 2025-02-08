<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

<div class="p-4">
    <!-- Title -->
    <h1>mdc-component-trims-md</h1>

    <!-- Description -->
    <h2>Description</h2>

    <ul>
        <li>Issue</li>
        <li>Minal Reproduction</li>
    </ul>

    <!-- Issue -->
    <h2>Issue</h2>

    <p>
        Referencing a component in markdown results in the remaining markdown content not being rendered, including subsequent components.
    </p>

    <!-- Usage -->
    <h2>Markdown Pages</h2>

    <p>This markdown <a href="/mdc-prob">page</a> includes component, followed by additional content, which is being trimmed..</p>

    <ul>
        <li><a href="/basic">Basic Page</a></li>
        <li><a href="/mdc-prob">Problematic Markdown Page</a></li>
    </ul>

</div>

</NuxtLayout>
</div></template>
<!--------@/pages/index.vue---------------------------------------------------->
