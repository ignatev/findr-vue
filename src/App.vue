<script>
import FileViewer from './components/FileViewer.vue'

export default {
  components: {
    FileViewer
  },
  data() {
    return {
      catalog: [{
    "name": "directory-1st-level",
    "children": [
        {
            "name": "file-1.txt",
            "children": [
              {"name": "directory-2nd-level",
                "children": []
              }
            ]
        },
        {
            "name": "file-2.bin",
            "children": [
              {
            "name": "file-2-3.bin",
            "children": []
        },
        {
            "name": "file-2-3.bin",
            "children": [
              {
            "name": "file-2.bin",
            "children": [
              {
            "name": "file-2.bin",
            "children": []
        }
            ]
        }
              
            ]
        }
              
            ]
        }
    ]
}]
    }
  }
}
</script>

<template>
  <file-viewer :catalog="catalog"></file-viewer>
</template>

<style>
</style>
