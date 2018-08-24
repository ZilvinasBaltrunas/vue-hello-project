<template>
    <nav class="nav">
        <LogoComponent/>
        <NavigationComponent :lis="lis" />
    </nav>
</template>

<script>
import LogoComponent from './LogoComponent';
import NavigationComponent from './NavigationComponent'

export default {
  name: 'index',
  components: {
    LogoComponent,
    NavigationComponent
  },
  data () {
        return {
            lis: [
                {
                    name: "Home",
                    target: "/",
                    routeName: "Home"
                },
                {
                    name: "About",
                    target: "/about",
                    routeName: "About"
                },
                {
                    name: "Projects",
                    target: "/projects",
                    routeName: "Projects"
                },
                {
                    name: "Blog",
                    target: "/blog",
                    routeName: "Blog"
                },
                {
                    name: "Contacts",
                    target: "/contacts",
                    routeName: "Contacts"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.nav {
    background: #A9A9A9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
}
</style>
