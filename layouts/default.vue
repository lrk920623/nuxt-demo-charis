<template>
  <Layout class="hs-container">
    <v-header></v-header>
    <Layout>
      <Sider hide-trigger>
        <v-side-bar></v-side-bar>
      </Sider>
      <Content class="hs-content">
        <nuxt></nuxt>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import VHeader from '~/components/common/Header.vue'
import VSideBar from '~/components/common/SideBar.vue'

export default {
  components: {
    VHeader,
    VSideBar
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.hs-container {
  height: 100vh;
}

.hs-content {
  margin: 20px;
}

.ivu-layout {
  background: #fff;
}
</style>
