<template>
  <div>
    <img :src="image.url" alt="">
  </div>
</template>

<script>
import json from '@/gallery.json'

export default {
  computed: {
    id () {
      return parseFloat(this.$route.params.id)
    },
    image () {
      return this.json.images.filter((image) => {
        return this.id === image.id
      })[0]
    }
  },
  data () {
    return {
      json
    }
  }

}
</script>
