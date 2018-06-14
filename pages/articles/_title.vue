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
  mounted() {
  },
  watch:{
    $route(){
      this.getData();
    }
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
          this.articleInfo.title = '假装这里有个标题';
          this.articleInfo.content = '假装这里有内容';
        }
      });
    }
  },
}
</script>
