<script>
import FileViewer from './components/FileViewer.vue'
import api from './api'

export default {
  components: {
    FileViewer
  },
  data() {
    return {
      catalog: []
    
    }
  },
  async created() {
    try {
      const data = await api.getCatalog()
      console.log(data)
      this.catalog = data
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <file-viewer :catalog="catalog"></file-viewer>
</template>

<style>
</style>
