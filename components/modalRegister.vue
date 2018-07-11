<template>
  <div>
    <Row class="m-t-2">
      <Col span="5" offset="1" class="ccenter">电话：</Col>
      <Col span="15">
        <Input
          v-model="phoneNum"
          placeholder="请输入电话"
          clearable
        />
      </Col>
    </Row>
    <Row class="m-t-2">
      <Col span="5" offset="1" class="ccenter">密码：</Col>
      <Col span="15">
        <Input
          type="password"
          v-model="passwordFirst"
          placeholder="请输入密码"
          clearable
        />
      </Col>
    </Row>
    <Row class="m-t-2">
      <Col span="5" offset="1" class="ccenter">密码：</Col>
      <Col span="15">
        <Input
          type="password"
          v-model="passwordSecond"
          placeholder="请再次输入密码"
          clearable
        />
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      phoneNum: '',
      passwordFirst: '',
      passwordSecond: '',
    }
  },
  methods:{
    registerAccount (){
      if (this.phoneNum === '' || this.passwordFirst === ''|| this.passwordSecond === '') {
        return this.$Message.error('信息填写不完整!');
      }
      if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
        return this.$Message.error('请正确填写电话号码!')
      }
      if (!(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/.test(this.passwordFirst)) ||
        !(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/.test(this.passwordSecond))
      ) {
        return this.$Message.error('请正确填写密码，最小长度八位，包含数字符号以及大小写字母!')
      }
      console.log(`电话：${this.phoneNum}`);
      console.log(`密码：${this.passwordFirst}`);
    }
  }
}
</script>

