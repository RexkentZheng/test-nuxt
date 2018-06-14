<template>
  <div class="layout">
    <Layout>
      <LayoutHeader />
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto">
            <Submenu v-for="opConfig in sidebarConfig" :key="opConfig.classFirst" :name="opConfig.classFirst" >
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{opConfig.classFirst}}
              </template>
              <MenuItem
                v-for="opSecond in opConfig.classSecond"
                :key="opSecond"
                :name="opSecond"
              ><p @click="jumpToArticle(opSecond)">{{opSecond}}</p></MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb> -->
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <nuxt/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LayoutHeader from './layout-header';
import axios from 'axios';

export default {
  data () {
      return {
        sidebarConfig: [],
      }
  },
  components:{
    LayoutHeader,
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
      axios.get('http://localhost:8888/nuxtConf/List')
        .then((response) => {
          let res = response.data;
          if (res.status === 0) {
            this.sidebarConfig = res.result.class;
          } else {
            this.$Message.error('数据获取失败，请稍后再试');
          }
        })
    },
    jumpToArticle(title){
      this.$router.push({
        path:`/articles/${title}`
      })
    }
  }

}
</script>

<style>
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
