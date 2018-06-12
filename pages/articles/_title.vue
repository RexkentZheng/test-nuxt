<template>
  <div>
    <h2>23</h2>
    <p></p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {

    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData(){
      axios.post('http://localhost:8888/nuxt/Details',{
        title: this.$route.params.title
      }).then((response) => {
        let res = response.data;
        console.log(res);
      })
    }
  },
}
</script>
