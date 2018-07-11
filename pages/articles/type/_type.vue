<template>
  <div>
    <Spin size="large" fix v-if="spinShow"></Spin>
    <ul v-if="articleList.length > 0">
      <li
        v-for="op in articleList"
        :key="op.objectId"
      >
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
import axios from 'axios';
import request from '~/service'
import { routeTrans } from '~/static/config'

export default {
  data(){
    return {
      articleList:[],
      spinShow: true,
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
      this.getArticleList().then((res) => {
        if (res.s === 1) {
          this.articleList = res.d.entrylist;
          this.articleList.forEach(item => {
            if (!item.content) {
              item.content = '假装这里有点内容';
            }
          });
          this.spinShow = false;
        }
      })
    },
    getArticleList(){
      const params = {
        category: routeTrans[this.$route.params.type],
        ab: 'welcome_3',
        src: 'web'
      }
      const response = async (params) => {
        return await request.get('/tapi/v1/get_entry_by_rank', params)
      }
      return new Promise((resolve) => {
        resolve(response(params));
      })
    },
  }
}
</script>

