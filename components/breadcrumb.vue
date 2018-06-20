<template>
  <Breadcrumb :style="{margin: '16px 0'}">
    <BreadcrumbItem to="/">主页</BreadcrumbItem>
    <BreadcrumbItem v-if="secondBread !== ''">{{secondBread}}</BreadcrumbItem>
    <BreadcrumbItem>{{paramBread}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from 'iview';
import _ from 'lodash';

export default {
  data(){
    return {
      breadConfig: {
        '/articles/type': '文章类型',
        '/articles/title': '文章内容',
      }
    }
  },
  computed:{
    secondBread(){
      return this.$route.matched.length > 2
        ? this.breadConfig[this.$route.matched[1].path]
        : '';
    },
    paramBread(){
      return _.values(this.$route.params)[0];
    }
  },
  
}
</script>

