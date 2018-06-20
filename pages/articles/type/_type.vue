<template>
  <div>
    <p v-if="articleList.length === 0">当前分类目前没有文章</p>
    <ul v-if="articleList.length > 0">
      <li
        v-for="op in articleList"
        :key="op.title"
      >
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
import axios from 'axios';

export default {
  data(){
    return {
      articleList:[],
    };
  },
  created() {
    this.init();
  },
  watch: {
    '$route':'init'
  },
  methods:{
    init(){
      const classSecond = this.$route.params.type;
      axios.get('http://localhost:7777/articles/typeList', {
        params:{
          classSecond
        }
      }).then((response) =>{
        let res = response.data;
        if (res.status !== 0) {
          this.$Message.error('数据请求出错，请稍后再试');
        }
        if (res.result) {
          this.articleList = res.result.length > 0 ? res.result : []
        }
      })
    },
    jumpPage(title){
      this.$router.push({
        path: `/articles/title/${title}`,
      })
    }
  }
}
</script>

