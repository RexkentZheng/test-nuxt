<template>
  <div class="container">
    <ul class="main-content">
      <li
        v-if="articleList.length > 0"
        v-for="op in articleList"
        :key="op.title">
        <div class="one-article">
          <div class="title">
            <a @click="jumpPage(op.title)">{{op.title}}</a>
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

export default {
  data () {
    return {
      articleList: [],
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get('http://localhost:7777/articles/allList')
        .then((response) => {
          let res = response.data;
          if (res.status === 0) {
            this.articleList = res.result;
          } else {
            this.$Message.error('获取数据失败，请稍后重试');
          }
        })
    },
    jumpPage(title){
      this.$router.push({
        path: `/articles/title/${title}`,
      });
    }
  }
}
</script>
