<template>
    <div :style="indent">{{ catalog.name }}</div>
    <div v-if=catalog.children.length>
    <file-viewer v-for="file in catalog.children" :depth="depth+1" :catalog="file" :key="file.name"></file-viewer>
</div>
</template>

<script>
export default {
    name: "FileViewer",
    props: {
        catalog: {
            type: Object,
            required: true,
        },
        depth: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        indent() {
            return {
                transform: `translate(${this.depth * 50}px)`
            }
        }
    }
}

</script>

<style>

</style>