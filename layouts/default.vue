<template>
  <div class="layout">
    <Layout>
      <LayoutHeader />
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto">
            <Submenu v-for="opConfig in sidebarConfig" :key="opConfig.name" :name="opConfig.name" >
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{opConfig.firstTitle}}
              </template>
              <MenuItem
                v-for="opSecond in opConfig.secondTitle"
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
export default {
  data () {
      return {
        sidebarConfig: [{
          "firstTitle": "一级标题",
          "name": "1",
          "secondTitle": ["二级标题1","二级标题2","二级标题3","二级标题4","二级标题5","二级标题6","二级标题7"]
        },{
          "firstTitle": "一级标题",
          "name": "2",
          "secondTitle": ["二级标题11","二级标题22","二级标题33","二级标题44","二级标题55","二级标题66","二级标题77"]
        }],
      }
  },
  components:{
    LayoutHeader,
  },
  methods: {
    jumpToArticle(title){
      console.log(title);
      this.$router.push({
        path:'/articles',
        query:{'title':title}
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
