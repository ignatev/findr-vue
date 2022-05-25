<template>
    <div class="file-viewer">
        <div class="column">
            <div v-for="(item, key) in catalog.data" :key="key" @click="listChild(item, 0)">{{key}}</div>
        </div>
        <div v-for="(c, index) in count" :key=c class="column">
            <div v-for="(item, key) in columns[index]" :key="key" @click="listChild(item, index+1)">{{key}}</div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        listChild(child, index) {
            console.log(child)
            if (child.type == "dir") {
                for (let i = index; i <= Object.keys(this.columns).length; i+=1) {
                    delete this.columns[i]
                }
                this.count = index + 1
                this.columns[index] = child
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