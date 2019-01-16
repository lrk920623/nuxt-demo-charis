<template>
  <div>
    <h1>supplier {{ name }}</h1>
    <nuxt-link to="/store">
      跳转到门店页面
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
