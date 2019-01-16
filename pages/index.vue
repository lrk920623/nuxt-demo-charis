<template>
  <div/>
</template>

<script>
export default {
  mounted() {
    const currentPath = this.$router.history.current.path
    if (currentPath === '/') this.$router.push({ path: 'home' })
  }
}
</script>
