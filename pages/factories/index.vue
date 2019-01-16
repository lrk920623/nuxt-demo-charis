<template>
  <div>
    <h1>store {{ name }}</h1>
    <nuxt-link to="/">
      返回到首页
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'test'
    }
  }
}
</script>

<style scoped>
div {
  font-size: 14px;
}
</style>
