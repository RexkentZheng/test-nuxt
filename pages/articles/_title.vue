<template>
  <div>
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
  watch:{
    '$route':'getData'
  },
  methods: {
    getData(){
      axios.post('http://localhost:8888/nuxt/Details',{
        title: this.$route.params.title
      }).then((response) => {
        let res = response.data;
        if (res.result) {
          this.articleInfo = res.result;
        } else {
          console.log('在内容为空的情况下给予提示文字');
          this.articleInfo.title = '假装这里这里有个文章标题';
          this.articleInfo.content = '假装这里是文章内容';
        }
      })
    }
  },
}
</script>
