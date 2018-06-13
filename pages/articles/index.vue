<template>
  <div>
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
      axios.get('http://localhost:8888/nuxt/List')
        .then((response) => {
          let res = response.data;
          if (res.status === 0) {
            this.articleList = res.result;
            console.log(this.articleList);
          } else {
            this.$Message.error('获取数据失败，请稍后重试');
          }
        })
    },
    jumpPage(title){
      this.$router.push({
        path: `/articles/${title}`,
      });
    }
  }
}
</script>
