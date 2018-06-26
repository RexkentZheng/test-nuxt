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
import { breadTrans } from '~/static/config'

export default {
  data(){
    return {
    }
  },
  computed:{
    secondBread(){
      return this.$route.matched.length > 2
        ? '文章类型'
        : '';
    },
    paramBread(){
      return breadTrans[_.values(this.$route.params)[0]];
    }
  },
  
}
</script>

