<template>
  <div>
    <p>文章详情页</p>
    <h2>{{articleInfo.title}}</h2>
    <p>{{articleInfo.content}}</p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      articleInfo:{},
    }
  },
  mounted() {
  },
  created() {
    this.getData();
  },
  watch:  {
    '$route':'getData'
  },
  methods: {
    getData(){
      axios.post('http://localhost:7777/articles/Details',{
        title: this.$route.params.title
      }).then((response) => {
        let res = response.data;
        if (res.result) {
          this.articleInfo = res.result;
        } else {
          this.articleInfo.title = '假装这里有个标题';
          this.articleInfo.content = '假装这里有内容';
        }
      });
    }
  },
}
</script>
