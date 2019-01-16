<template>
  <div class="home-container">
    HOME
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTodo: ''
    }
  }
}
</script>

<style scoped lang="less">
div {
  font-size: 14px;
}

.handle-box {
  margin-bottom: 10px;

  & .add-todo {
    width: 200px;
  }
}
</style>
