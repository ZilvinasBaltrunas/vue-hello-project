<template>
  <div>
    <h1>Projects</h1>

    <ul>
      <li>
        1
      </li>
      <li>
        2
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    methods: {
      go (to) {
        this.$router.push(to)
      }
    }
  }
</script>
