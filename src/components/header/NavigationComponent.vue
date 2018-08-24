<template>
    <ul class="list">
        <li v-for="li in lis" class="list-element">
            <router-link :to="{name: li.routeName}">
                {{li.name}}
            </router-link>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'NavigationComponent',
  components: {
    
  },
  props: {
      lis: Array
  }
}
</script>

<style lang="scss">
.list {
    display: flex;
    .list-element {
        list-style-type: none;
        margin-right: 1rem;
        a {
            padding: 0.5rem;
            color: #000080;
            text-decoration: none;
            border-radius: 15px;
            font-size: 1.2rem;
        }
        a:hover {
            background: #DCDCDC;
            color: #7B68EE;
        }
    }
}

</style>
