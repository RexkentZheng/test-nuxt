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
    props: ['modalVisible'],
    data () {
      return {
          phoneNum: '',
          password: '',
          show: true,
      }            
    },
    methods: {
      getBackVisible() {
        this.$emit('getVisible');
      },
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
