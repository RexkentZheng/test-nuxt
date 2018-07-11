<template>
  <div class="layout">
    <Layout>
      <layoutheader />
      <Layout :style="{padding: '0 400px'}">
        <bread />
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu :active-name="this.$route.params.type" theme="light" width="auto">
                <Submenu :name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    分类
                  </template>
                  <MenuItem
                    v-for="category in breadTrans_keys"
                    :key="category"
                    :name="category"
                  >
                    <p @click="jumpToArticle(category)">{{breadTrans[category]}}</p>
                  </MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', background: '#fff'}">
              <div class="container">
                <nuxt/>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import bread from '~/components/breadcrumb';
import layoutheader from '~/components/layoutHeader';
import _ from 'lodash';
import { breadTrans } from '~/static/config';

export default {
  data () {
      return {
        breadTrans,
      }
  },
  components:{
    layoutheader,
    bread,
  },
  computed:{
    breadTrans_keys(){
      return _.keys(this.breadTrans)
    }
  },
  methods: {
    jumpToArticle(path){
      this.$router.push({
        path: `/articles/type/${path}`
      })
    }
  }

}
</script>

<style>
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
