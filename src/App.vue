<template>
  <main>
    <AppHeader/>
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from './components/header'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
