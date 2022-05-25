<template>
    <div class="file-viewer">
        <div class="column">
            <div v-for="child in catalog" :key="child.name" @click="listChild(child, 0)">{{child.name}}</div>
        </div>
        <div v-for="(c, index) in count" :key=c class="column">
            <div v-for="child in columns[index]" :key="child.name" @click="listChild(child, index+1)">{{child.name}}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    methods: {
        listChild(child, index) {
            if (child.children.length) {
                for (let i = index; i <= Object.keys(this.columns).length; i+=1) {
                    delete this.columns[i]
                }
                this.count = index + 1
                this.columns[index] = child.children
            }
        }
    },
    data() {
        return {
            count: 1,
            columns: {},
        }
        
    },
    name: "FileViewer",
    props: {
        catalog: {
            type: Array,
            required: true,
        }
    }
}

</script>

<style>
.file-viewer {
    display: flex;
    overflow-y: auto;
}
.column {
    width: 300px;
}
</style>