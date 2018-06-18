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
      <div class="links">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </div>
      <br />
      <Button type="ghost">Ghost</Button>
      <p class="test-red">This is Red</p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { Input, Button, Table } from 'iview';

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
