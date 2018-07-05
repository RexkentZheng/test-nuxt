<template>
  <div>
    <Row class="m-t-2">
      <Col span="5" offset="1" class="ccenter">姓名：</Col>
      <Col span="15">
        <Input
          v-model="phoneNum"
          placeholder="请输入电话"
          clearable
        />
      </Col>
    </Row>
    <Row class="m-t-1">
      <Col span="5" offset="1" class="ccenter">密码：</Col>
      <Col span="15">
        <Input
          type="password"
          v-model="password"
          placeholder="请输入密码"
          clearable
        />
      </Col>
    </Row>
  </div>
  
</template>
<script>
  export default {
    name: 'login',
    props: ['loginCount'],
    data () {
      return {
        phoneNum: '',
        password: '',
        show: true,
      }            
    },
    watch: {
      loginCount() {
        if (this.phoneNum == '' ||
          this.password == ''
          ) {
          return this.$Message.error('信息填写不完整!')
        }
        if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
          return this.$Message.error('请正确填写电话号码!')
        }
        if (!(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/.test(this.password))) {
          return this.$Message.error('请正确填写密码，最小长度八位，包含数字符号以及大小写字母!')
        }
        console.log(`电话：${this.phoneNum}`);
        console.log(`密码：${this.password}`);
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
.ccenter {
  text-align: center;
  line-height: 32px;
}
.m-a-0 {
  margin: 0 0 !important;
}
</style>
