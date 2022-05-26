<template>
    <div class="file-viewer" :style="containerWidth">
        <div class="column">
            <div v-for="(item, key) in catalog.data" :key="key" @click="listChild(item, 0)">{{key}}</div>
        </div>
        <div v-for="(c, index) in count" :key=c class="column">
            <div v-for="(item, key) in columns[index]" :key="key" @click="listChild(item, index+1)">{{key}}</div>
        </div>
    </div>
</template>

<script>

import api from "../api";

export default {
    methods: {
        async listChild(child, index) {
            if (child.type == "dir") {
                for (let i = index; i <= Object.keys(this.columns).length; i+=1) {
                    delete this.columns[i]
                }
                this.count = index + 1
                const childPath = child.path.split("/./")[1] + "/"
                const res = await api.getCatalog(childPath)
                this.columns[index] = res.data
            }
        }
    },
    data() {
        return {
            count: 1,
            columns: [],
        }
        
    },
    name: "FileViewer",
    props: {
        catalog: {
            type: Object,
            required: true,
        }
    },
    computed: {
        containerWidth() {
            return {
                width: `300 * ${this.columns.length}px`
            }
        }
    }
}
</script>

<style>
.file-viewer {
    display: flex;
    height: 100%;
}
.column {
    width: 300px;
    min-width: 300px;
}
</style>