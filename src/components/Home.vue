<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 退出功能
    logout() {
      // 清除浏览器 token
      window.sessionStorage.clear()
      // 页面重定向
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
