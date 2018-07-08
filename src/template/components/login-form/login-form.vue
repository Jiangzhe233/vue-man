<template>
  <Form ref="loginForm" :model="form" :rules="rules">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="locked"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import MenuUtil from '@/libs/menuUtil'

export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      routers: [],
      form: {
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          sessionStorage.setItem('isLogin', 'true')
          
          try{
              MenuUtil(this.routers, [
                {path: '/home', component: 'home'}
              ]);
            this.$router.addRoutes(this.routers)
            console.log('挺欢')
            // this.$router.push('/home')
          }catch(e){
            console.log(e)
          }
          console.log(this.$router)
          // this.$emit('on-success-valid', {
          //   userName: this.form.userName,
          //   password: this.form.password
          // })
        }
      })
    }
  }
}
</script>
