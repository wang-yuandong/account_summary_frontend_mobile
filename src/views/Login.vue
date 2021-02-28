<template>
  <v-main>
    <!--    登录页-->
    <div class="login-con">
      <v-container>
        <v-container class="title">
          <span style="font-size: larger" class="d-flex justify-center">用户登录</span>
        </v-container>
        <v-form v-model="valid">
          <v-row
            justify="center">
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                autocomplete="new-password"
                type="password"
                v-model="passWord"
                :rules="passWordRules"
                label="passWord"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              cols="12"
              md="4"
            >
              <v-btn
                block
                color="primary"
                @click="loginEvent"
              >
                Login In
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>
    <v-btn
      @click="testEvent"
    >
      测试全局提示
    </v-btn>
  </v-main>
</template>

<script>
import {userLogin} from '@/apis/user'
import signIn from '@/utils/sign-in'
export default {
  name: "Login",
  components:{},
  data: () => ({
    valid: false,
    name: '',
    passWord: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    passWordRules: [v => !!v || 'passWord is required'],
  }),
  methods: {
    loginEvent() {
      // const {name,passWord} = this
      console.log(this.name, this.passWord)
      let param = {
        username: this.name,
        password: this.passWord
      }
      userLogin(param)
        .then(value => {
          console.log(value)
          if (value.code === 200) {
            //设置token
            const {accessToken, expiredIn} = value.data
            signIn({accessToken, expiresIn: expiredIn})
            // console.log('跳转到列表页')
            this.$router.push('/orderList')
          } else {
            // this.$myToast('error')
          }
        })
        .catch(err => {
          console.log(err)
        })
      //调用登录接口，登录成功--》主页面
      // this.$router.push('/home')
    },
    testEvent() {
      console.log(11)
      this.$myToast.open({msg: '提示内容'})
      // this.$store.dispatch('alerts/openAlerts',{
      //   msg:'瓦拉伊利五路',
      //   type:'success'
      // })

    },
  }
}
</script>

<style scoped>
.login-con {
  margin-top: 15%;
}
</style>
