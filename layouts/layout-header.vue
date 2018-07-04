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
          <p @click="modalVisible = true" >
            <Icon type="person"></Icon>
            登录
          </p>
        </MenuItem>
        <MenuItem name="3">
          <p @click="jumpPage('/settings')" >
            <Icon type="edit"></Icon>
            注册
          </p>
        </MenuItem>
      </div>
    </Menu>
    <Modal
      v-model="modalVisible"
      @on-cancel = "modalVisible = false"
    >
      <login
      />
    </Modal>
  </Header>
</template>
<script>

import request from '~/service';
import axios from 'axios';
import login from '~/components/modalLogin';

export default {
  data () {
    return {
      modalVisible: false
    }
  },
  components: {
    login
  },
  methods: {
    jumpPage(url){
      this.$router.push({
        path: url
      })
    },
    getVisible(){
      this.modalVisible = !this.modalVisible;
    }
    // handleRender () {
    //   this.$Modal.confirm({
    //     title: '用户登录',
    //     okText:'登录',
    //     render: (h) => {
    //       return h(login, {
    //         on: {
    //           phoneNum: (phoneNum) => {
    //             this.phoneNum = phoneNum;
    //           },
    //           password: (password) => {
    //             this.password = password;
    //           }
    //         }
    //       })
    //     },
    //     onOk: () => {
    //       if (this.phoneNum == '' ||
    //         this.password == ''
    //         ) {
    //         return this.$Message.error('信息填写不完整!')
    //       }
    //       if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
    //         return this.$Message.error('请正确填写电话号码!')
    //       }
    //       if (!(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/.test(this.password))) {
    //         return this.$Message.error('请正确填写密码，最小长度八位，包含数字符号以及大小写字母!')
    //       }
    //       const params = {
    //         phoneNum: this.phoneNum,
    //         password: this.password,
    //       }
    //       console.log(`电话：${this.password},密码：${this.phoneNum}`);
    //     }
    //   })
    // }
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


