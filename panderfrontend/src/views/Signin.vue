<template>
  <el-container style="width: 600px">
    <el-card class="box-card">
      <el-form ref="signInForm" :model="signInForm" >
        <div class="panda">
          <pandaimage />
        </div>
        <el-form-item>
          <el-input
            v-model="signInForm.username"
            placeholder="Username"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="signInForm.password"
            show-password
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: center" ref="button">
          <el-button type="primary" @click="submitForm('signInForm')"
            >Log In</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
import pandaimage from '../components/Panda.vue';

export default {
  components: {
    pandaimage,
  },
  data() {
    return {
      signInForm: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      if (
        this.signInForm.username.length > 3 &&
        this.signInForm.password.length > 6
      ) {
        this.$apollo.query.loginUser({username: this.signInForm.username, password: this.signInForm.password});
        console.log('passed')
        return true;
      }
      console.log('not working');
    },
  },
};
</script>

<style scoped>
.el-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-form-item {
  margin-bottom: -5px;
}
.el-input {
  padding: 1rem 0;
}
.box-card {
  width: 100%;
}
.panda {
  text-align: center;
}
</style>
