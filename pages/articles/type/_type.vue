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
      const transfrom = {
        frontend: '5562b415e4b00c57d9b94ac8',
        android: '5562b410e4b00c57d9b94a92',
        backend: '5562b419e4b00c57d9b94ae2',
        ai: '57be7c18128fe1005fa902de',
        ios: '5562b405e4b00c57d9b94a41',
        freebie: '5562b422e4b00c57d9b94b53',
        article: '5562b428e4b00c57d9b94b9d',
      }
      const params = {
        category: transfrom[this.$route.params.type],
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

