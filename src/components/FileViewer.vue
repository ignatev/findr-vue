<template>
    <div>{{ catalog.name }}</div>
</template>

<script>
export default {
    name: "FileViewer",
    props: {
        catalog: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>