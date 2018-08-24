<template>
  <div class="gallery">
    <div class="gallery_item" v-for="image in json.images" :key="image.id">
      <img :src="image.url" @click="handleClick(image.id)"/>
    </div>
  </div>
</template>

<script>
import json from '@/gallery.json'

export default {
  data () {
    return {
      json
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push({
        name: 'SingleImage',
        params: {
          id
        }
      })
    }
  }

}
</script>

<style lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
    &_item {
      flex: 0 0 20%;
      min-width: 20%;
      padding: 0 15px;

      img {
        width: 100%;
      }
    }
  }

</style>
