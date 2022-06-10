<template>
    <div class="header">header</div>
    <div class="file-viewer" :style="containerWidth">
        
        <div class="column">
            <div v-for="(item, key) in catalog.data" :key="key" @click="listChild(item, 0)" :class="{active:checkClass(item.path)}">{{key}}</div>
        </div>
        <div v-for="(c, index) in count" :key=c class="column">
            <div v-for="(item, key) in columns[index]" :key="key" @click="listChild(item, index+1)" :class="{active:checkClass(item.path)}">{{key}}</div>
        </div>
    </div>
</template>

<script>

import api from "../api";

export default {
    methods: {
        async listChild(child, index) {
            this.activePath = child.path
            if (child.type == "dir") {
                for (let i = index; i <= Object.keys(this.columns).length; i+=1) {
                    delete this.columns[i]
                }
                this.count = index + 1
                const childPath = child.path.split("/./")[1] + "/"
                const res = await api.getCatalog(childPath)
                this.columns[index] = res.data
            }
        },
        checkClass(itemPath) {
            return itemPath == this.activePath
        }
    },
    data() {
        return {
            count: 1,
            columns: [],
            activePath: [],
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
    padding-top: 25px;
    min-height: 100vh;
}
.column {
    width: 300px;
    min-width: 300px;
    border-right: 1px solid black;
    padding: 0 3px;
}
.header {
    position: fixed;
    width: 100%;
    height: 25px;
    padding: 3px;
    border-bottom: 1px solid black;
}

.active {
    color:antiquewhite;
}
</style>