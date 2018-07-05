<template>
  <Header :style="{padding: '0'}">
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
        <MenuItem name="2">
          <p @click="loginModalVisible = true" >
            <Icon type="person"></Icon>
            登录
          </p>
        </MenuItem>
        <MenuItem name="3">
          <p @click="registerModalVisible = true" >
            <Icon type="edit"></Icon>
            注册
          </p>
        </MenuItem>
      </div>
    </Menu>
    <Modal
      v-model="loginModalVisible"
      @on-cancel="loginModalVisible = false"
      @on-ok="loginCount += 1"
    >
      <login
        :loginCount="loginCount"
      />
    </Modal>
    <Modal
      v-model="registerModalVisible"
      @on-cancel="registerModalVisible = false"
      @on-ok="registerCount += 1"    
    >
      <register
        :registerCount="registerCount"
      />
    </Modal>
  </Header>
</template>
<script>

import request from '~/service';
import axios from 'axios';
import login from '~/components/modalLogin';
import register from '~/components/modalRegister';

export default {
  name: 'layoutheader',
  data () {
    return {
      loginModalVisible: false,
      loginCount: 0,
      registerModalVisible: false,
      registerCount: 0,
    }
  },
  components: {
    login,
    register
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
    left: 70px;
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


