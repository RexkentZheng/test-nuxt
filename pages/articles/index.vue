<template>
  <div>
    <p>这里是文章基准页</p>
    <ul>
      <li
        v-if="articleList.length > 0"
        v-for="op in articleList"
        :key="op.title">
        <a @click="jumpPage(op.title)">{{op.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

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
      axios.get('http://39.106.140.189:7777/articles/allList')
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
