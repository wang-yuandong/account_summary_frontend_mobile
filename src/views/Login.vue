<template>
  <v-app>
<!--    登录页-->
    <v-container class="title" >
      <span style="font-size: larger">用户登录</span>
    </v-container>
    <v-form v-model="valid">
      <v-container>
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
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
  export default {
    name: "Login",
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
      loginEvent(){
        // const {name,passWord} = this
        console.log(this.name,this.passWord)
        //调用登录接口，登录成功--》主页面
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
  ::v-deep .v-application--wrap{
    margin-top: 10%;
}
  .title{
    text-align: center;
    font-size: 2rem !important;
  }
</style>
