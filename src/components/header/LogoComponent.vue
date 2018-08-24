<template>
    <div class="box-logo">
        <router-link :to="{name: 'Home'}">
            <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppZ9L3k4GbSTtM_Aif_NvFwXPnA0IdfcffaQGbAVprXQud7TMNQ" alt="logo">
        </router-link>
    </div>
</template>

<script>

export default {
  name: 'LogoComponent',
  components: {
  }
}
</script>

<style lang="scss">
.box-logo {
    height: 3rem;
    .logo {
        height: 100%;
        border-radius: 15px;
    }
}
</style>
