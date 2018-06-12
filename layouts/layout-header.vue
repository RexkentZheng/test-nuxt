<template>
  <Header>
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <div class="layout-logo">
        <p>假装这里是个Logo</p>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <p @click="jumpPage('/')" >
            <Icon type="home"></Icon>
            主页
          </p>
        </MenuItem>
        <MenuItem name="2" >
          <p @click="jumpPage('/articles')" >
            <Icon type="document"></Icon>
            文章列表
          </p>
        </MenuItem>
        <MenuItem name="3">
          <p @click="jumpPage('/personal')" >
            <Icon type="person"></Icon>
            个人中心
          </p>
        </MenuItem>
        <MenuItem name="4">
          <p @click="jumpPage('/settings')" >
            <Icon type="gear-b"></Icon>
            设置
          </p>
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    jumpPage(url){
      this.$router.push({
        path: url
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.layout-logo{
    width: 150px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    p {
      color: white;
      line-height: 30px;
      text-align: center;
    }
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>


