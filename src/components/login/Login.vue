<template>
  <div class="login">
    <el-row class="login" type="flex" justify="center" align="middle">
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <el-form
          label-position="top"
          :model="loginForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        // if (valid) {
        //   alert('submit!')
        // } else {
        //   console.log('error submit!!')
        //   return false
        // }
        if (!valid) {
          return false
        }
        axios
          .post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            // console.log(res)
            if (res.data.meta.status === 200) {
              localStorage.setItem('token', res.data.data.token)
              this.$router.push('/home')
              this.$message({
                message: res.data.meta.msg,
                type: 'success',
                duration: 800
              })
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: 'error',
                duration: 1000
              })
            }
          })
      })
    },
    resetForm (formName) {
      this.$refs.ruleForm.resetField()
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
.login {
  height: 100%;
  background-color: #2d434c;
}
.login-form {
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
}
</style>
