<template>
  <div class="container">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <ul class="main-content">
      <li
        v-if="articleList.length > 0"
        v-for="op in articleList"
        :key="op.objectId">
        <div class="one-article">
          <div class="title">
            <a :href="`http://fe.qiangdada.cn/entry/${op.objectId}`" target="_blank">{{op.title}}</a>
          </div>
          <div class="short-cut">
            <p>{{op.content}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Input, Button, Table } from 'iview';
import axios from 'axios';
import 'normalize.css'
import request from '~/service'

export default {
  data () {
    return {
      articleList: [],
      spinShow: true,
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.getArticleList().then((res) => {
        if (res.s === 1) {
           this.articleList = res.d;
           this.articleList.forEach(item => {
             if (!item.content) {
               item.content = '假装这里有点内容'
             }
           });
           this.spinShow = false;
        }
      })
    },
    getArticleList(){
      const params = {
        suid: 'aemu3ZqVijiqQj2QEFiB',
        ab: 'welcome_3',
        src: 'web'
      };
      const response = async (params) => {
        return await request.get('/rapi/v1/get_recommended_entry', params)
      }
      return new Promise((resolve) => {
        resolve(response(params));
      });
    },
    jumpPage(title){
      this.$router.push({
        path: `/articles/title/${title}`,
      });
    }
  }
}
</script>
