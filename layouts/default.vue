<template>
  <div class="layout">
    <Layout>
      <LayoutHeader />
      <Layout :style="{padding: '0 50px'}">
        <BreadcrumbComponent />
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
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
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <nuxt/>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import BreadcrumbComponent from '~/components/breadcrumb';
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
    BreadcrumbComponent,
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
      axios.get('http://localhost:7777/config/Class')
        .then((response) => {
          let res = response.data;
          if (res.status === 0) {
            this.sidebarConfig = res.result.class;
          } else {
            this.$Message.error('数据获取失败，请稍后再试');
          }
        })
    },
    jumpToArticle(type){
      this.$router.push({
        path:`/articles/type/${type}`
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
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
