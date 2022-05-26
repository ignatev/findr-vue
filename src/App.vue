<script>
import FileViewer from './components/FileViewer.vue'
import api from './api'

export default {
  components: {
    FileViewer
  },
  data() {
    return {
      catalog: {}
    }
  },
  async created() {
    try {
      const data = await api.getCatalog()
      this.catalog = data
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <div class="container">
    <file-viewer :catalog="catalog"></file-viewer>
  </div>
</template>

<style>
.container {
  display: flex;
  overflow-x: auto;
  height: 100%;
}

body {
  min-height: 100vh;
}

#app {
  height: 100%;
}

</style>
