<script>
import FileViewer from './components/FileViewer.vue'

export default {
  components: {
    FileViewer
  },
  data() {
    return {
      catalog: {
    "name": "lev",
    "children": [
        {
            "name": "file-1.txt",
            "children": []
        },
        {
            "name": "file-2.bin",
            "children": []
        }
    ]
}
    }
  }
}
</script>

<template>
  <file-viewer :catalog="catalog"></file-viewer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
