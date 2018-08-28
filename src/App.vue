<template>
  <div id="app">
   <vue-pre-view :info-data="viewInfo"></vue-pre-view>  
  </div>
</template>

<script>
import vuePreView from './lib/vue-preview'
export default {
  name: 'app',
  components: {
    vuePreview
  },
  data () {
    return {
      viewInfo: {
        // 淘口令
        code: '',
        // 期刊主题信息
        name: 'vue-pre-view',
        edition: '1.0.0',
        introduction: 'vue-pre-view 组件',
        // 周刊背景列表
        bgUrls: [],
        contentUrls: [],
        // 推荐商品列表
        goodsList: [],
        // 往期主题
        history: []
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
