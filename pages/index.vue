<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        test-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <p class="test-red">red</p>
      <div class="container1">
        green
      </div>
      <div class="links">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </div>
      <nuxt-link to="/demo">跳转一级路由测试</nuxt-link>
      <br/>
      <nuxt-link to="/demo1">中间件</nuxt-link>
      <br/>
      <nuxt-link :to="{path:'/demo/param',query:{id:2}}">跳转带参数路由</nuxt-link><br/>
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { Button, Table } from 'iview';

export default {
  data () {
      return {
          value: ''
      }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
