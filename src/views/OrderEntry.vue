<template>
  <v-main>
    <NavBar/>
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-select
          v-model="vendor"
          :items="vendorDict"
          :rules="[v => !!v || 'Item is required']"
          label="渠道"
          item-text="name"
          item-value="id"
          return-object
          required
        ></v-select>
        <v-select
          v-model="agent"
          :items="agentDict"
          :rules="[v => !!v || 'Item is required']"
          label="代理商"
          item-text="name"
          item-value="id"
          return-object
          required
        ></v-select>

        <v-select
          v-model="shop"
          :items="shopDict"
          :rules="[v => !!v || 'Item is required']"
          label="门店"
          item-text="name"
          item-value="id"
          return-object
          required
        ></v-select>

        <v-text-field
          v-model="formData.customerName"
          :counter="10"
          :rules="nameRules"
          label="姓名"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.postSalesPerson"
          :counter="10"
          :rules="nameRules"
          label="售后"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.dealPreviousAmount"
          :counter="10"
          :rules="nameRules"
          label="补款"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.customerType"
          :counter="10"
          :rules="nameRules"
          label="对象"
          required
        ></v-text-field>
        <div>
          体验卡与操作次数
        </div>
        <!--        <v-select-->
        <!--          v-model="trialCard"-->
        <!--          :items="items1"-->
        <!--          :rules="[v => !!v || 'Item is required']"-->
        <!--          label="体验卡"-->
        <!--          item-text="name"-->
        <!--          item-value="id"-->
        <!--          return-object-->
        <!--          required-->
        <!--        ></v-select>-->
        <PartAmountCompontent type="trialCards" :trialCardDict="trialCardDict" :bodyPartDict="bodyPartDict"
                              @callbackEvent='callbackFormat'/>


        <!--        <v-text-field-->
        <!--          v-model="name"-->
        <!--          :counter="10"-->
        <!--          :rules="nameRules"-->
        <!--          label="体验卡操作次数"-->
        <!--          required-->
        <!--        ></v-text-field>-->


        <v-text-field
          v-model="formData.dd"
          :counter="10"
          :rules="nameRules"
          label="Dd"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.lm"
          :counter="10"
          :rules="nameRules"
          label="Lm"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.xc"
          :counter="10"
          :rules="nameRules"
          label="Xc"
          required
        ></v-text-field>
        <!-- 选择身体部位和操作次数 组件-->
        <!--        <v-select-->
        <!--          v-model="select"-->
        <!--          :items="items"-->
        <!--          :rules="[v => !!v || 'Item is required']"-->
        <!--          label="成交部位"-->
        <!--          required-->
        <!--        ></v-select>-->
        <!--        <v-text-field-->
        <!--          v-model="name"-->
        <!--          :counter="10"-->
        <!--          :rules="nameRules"-->
        <!--          label="成交操作次数"-->
        <!--          required-->
        <!--        ></v-text-field>-->


        <div>
          成交部位与次数
        </div>
        <PartAmountCompontent type="dealBodyParts" @callbackEvent='callbackFormat'/>


        <v-text-field
          v-model="formData.dealAmount"
          :counter="10"
          :rules="nameRules"
          label="成交金额"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.linkedOrderOperation"
          :counter="10"
          :rules="nameRules"
          label="已有订单操作次数"
          required
        ></v-text-field>


        <!--        <v-select-->
        <!--          v-model="select"-->
        <!--          :items="items"-->
        <!--          :rules="[v => !!v || 'Item is required']"-->
        <!--          label="赠送部位"-->
        <!--          required-->
        <!--        ></v-select>-->

        <!--        <v-text-field-->
        <!--          v-model="name"-->
        <!--          :counter="10"-->
        <!--          :rules="nameRules"-->
        <!--          label="赠送操作次数"-->
        <!--          required-->
        <!--        ></v-text-field>-->


        <div>
          赠送部位与次数
        </div>
        <PartAmountCompontent type="freeBodyParts" @callbackEvent='callbackFormat'/>

        <v-switch
          v-model="formData.fullPaid"
          :label="`fullPaid: ${formData.fullPaid.toString()}`"
          color="primary"
        ></v-switch>

        <v-text-field
          v-model="formData.dealDueAmount"
          :counter="10"
          :rules="nameRules"
          label="成交欠款"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.dealPayAmount"
          :counter="10"
          :rules="nameRules"
          label="成交实收"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.consultant"
          :counter="10"
          :rules="nameRules"
          label="咨询师"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.cooperator"
          :counter="10"
          :rules="nameRules"
          label="配台人员"
          required
        ></v-text-field>

        <!--        <v-select-->
        <!--          v-model="select"-->
        <!--          :items="items"-->
        <!--          :rules="[v => !!v || 'Item is required']"-->
        <!--          label="打版部位"-->
        <!--          required-->
        <!--        ></v-select>-->
        <!--        <v-text-field-->
        <!--          v-model="formData.boardingBodyPartsOperation"-->
        <!--          :counter="10"-->
        <!--          :rules="nameRules"-->
        <!--          label="打板操作次数"-->
        <!--          required-->
        <!--        ></v-text-field>-->

        <div>
          打版部位与次数
        </div>
        <PartAmountCompontent type="boardingBodyParts" @callbackEvent='callbackFormat'/>

        <v-text-field
          v-model="formData.boardingDueAmount"
          :counter="10"
          :rules="nameRules"
          label="打板欠款"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.boardingAmount"
          :counter="10"
          :rules="nameRules"
          label="打版金额"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.boardingPayAmount"
          :counter="10"
          :rules="nameRules"
          label="打板实收"
          required
        ></v-text-field>


        <v-text-field
          v-model="formData.boardingPreviousAmount"
          :rules="nameRules"
          label="打板补款"
          required
        ></v-text-field>
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="computedDateFormattedMomentjs"
              clearable
              label="Formatted with Moment.js"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @change="menu1 = false"
            required
          ></v-date-picker>
        </v-menu>
        <!--          <v-select-->
        <!--            v-model="operator"-->
        <!--            :items="items"-->
        <!--            :rules="[v => !!v || 'Item is required']"-->
        <!--            label="操作人"-->
        <!--            item-text="name"-->
        <!--            item-value="id"-->
        <!--            return-object-->
        <!--            required-->
        <!--          ></v-select>-->


        <!--        <v-checkbox-->
        <!--          v-model="checkbox"-->
        <!--          :rules="[v => !!v || 'You must agree to continue!']"-->
        <!--          label="Do you agree?"-->
        <!--          required-->
        <!--        ></v-checkbox>-->

        <!--        <v-btn-->
        <!--          :disabled="!valid"-->
        <!--          color="success"-->
        <!--          class="mr-4"-->
        <!--          @click="validate"-->
        <!--        >-->
        <!--          Validate-->
        <!--        </v-btn>-->

        <!--        <v-btn-->
        <!--          color="error"-->
        <!--          class="mr-4"-->
        <!--          @click="reset"-->
        <!--        >-->
        <!--          Reset Form-->
        <!--        </v-btn>-->

        <!--        <v-btn-->
        <!--          color="warning"-->
        <!--          @click="resetValidation"-->
        <!--        >-->
        <!--          Reset Validation-->
        <!--        </v-btn>-->
        <v-btn
          @click="submitEvent"
          class="submit-btn"
        >
          提交
        </v-btn>
      </v-form>
    </v-container>
  </v-main>
</template>

<script>
import moment from 'moment'
import PartAmountCompontent from "@/components/common/PartAmountCompontent";
import NavBar from "@/components/NavBar";
import {shopDict} from '@/apis/shop'
import {agentDict} from '@/apis/agent'
import {trialCardDict} from '@/apis/trialCard'
import {bodyPartDict} from '@/apis/bodyPart'
import {orderCreate} from '@/apis/order'

export default {
  name: "OrderEntry",
  components: {PartAmountCompontent, NavBar},
  data: () => ({
    valid: true,
    vendorDict: [],//渠道关联数据
    agentDict: [],
    shopDict: [],
    trialCardDict: [],
    bodyPartDict: [],
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items1: [
      {
        id: '1',
        name: '体验卡1'
      },
      {
        id: '2',
        name: '体验卡2'
      },
      {
        id: '3',
        name: '体验卡3'
      },
      {
        id: '4',
        name: '体验卡4'
      },
    ],
    items: [
      {
        id: '1',
        name: '头部'
      },
      {
        id: '2',
        name: '脸部'
      },
      {
        id: '3',
        name: '颈部'
      },
      {
        id: '4',
        name: '手'
      },
    ],
    checkbox: false,
    switch1: true,
    date: null,
    menu1: false,
    menu2: false,
    vendor: {},//渠道
    agent: {},//代理商
    shop: {},//门店
    operator: {},//操作者
    trialCard: {},//体验卡
    formData: {
      "vendorId": '',
      "agentId": '',
      "shopId": '',
      "customerName": "",
      "postSalesPerson": "",
      "dealPreviousAmount": '',
      "customerType": "",
      // "trialCardOperation": "",
      "dd": "",
      "lm": "",
      "xc": "",
      "dealBodyParts": [],
      "dealOperation": "",//'1,1,1'
      "dealAmount": '',
      "linkedOrderOperation": "",
      "freeBodyParts": [],
      "freeBodyOperation": '',//'1,1,1'
      "fullPaid": true,
      "dealDueAmount": '',
      "dealPayAmount": '',
      "consultant": "",
      "cooperator": "",
      "boardingBodyParts": [],
      "boardingOperation": "",//'1,2,3'
      "boardingDueAmount": '',
      "boardingAmount": '',
      "boardingPayAmount": '',
      "boardingPreviousAmount": '',
      "operationDate": "",//日期
      "operatorId": '',
      "trialCards": [
        // {
        //   "id":10009,
        //   "name":"980",
        //   "bodyParts":[
        //     {
        //       "id":10005,
        //       "name":"太阳穴"
        //     }
        //   ]
        // },
        // {
        //   "id":10010,
        //   "name":"980",
        //   "bodyParts":[
        //     {
        //       "id":10006,
        //       "name":"额头纹"
        //     }
        //   ]
        // }
      ]
    },//表单数据
  }),
  created() {
    //发起请求
    this.$store.dispatch('vendor/queryVendorDictList', {})
      .then(value => {
        //处理接口返回的数据
        console.log(value)
        if (value.code === 200) {
          this.vendorDict = value.data
        }
      })
    this.shopDictList()
    this.trialCardDictList()
    this.bodyPartDictList()
    this.agentDictList()

  },
  methods: {
    validate() {
      return this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    agentDictList() {
      //代理商
      agentDict()
        .then(value => {
          if (value.code === 200) {
            this.agentDict = value.data
          }
        })
    },
    bodyPartDictList() {
      //身体部位
      bodyPartDict({})
        .then(value => {
          if (value.code === 200) {
            this.bodyPartDict = value.data
          }
        })
    },
    shopDictList() {
      //门店
      shopDict()
        .then(value => {
          if (value.code === 200) {
            this.shopDict = value.data
          }
        })
    },
    trialCardDictList() {
      trialCardDict()
        .then(value => {
          if (value.code === 200) {
            this.trialCardDict = value.data
          }
        })
    },
    submitEvent() {
      console.log('form:', this.$refs.form)
      this.formData = {
        ...this.formData,
        vendorId: this.vendor.id,//渠道
        agentId: this.agent.id,//代理商
        shopId: this.shop.id,//渠道
        operatorId: this.operator.id,//渠道
        operationDate: this.computedDateFormattedMomentjs
      }
      console.log('提交', this.formData)
      if (!this.validate()) {
        return
      }
      orderCreate(this.formData)
        .then(value => {
          if (value.code === 200) {
            console.log('添加成功')
          } else {
            console.log(value.msg)
          }
        })
    },
    callbackFormat(type, data) {
      //回调以后处理数据
      let parts = this.formatData(data, type)
      switch (type) {
        case 'dealBodyParts':
          //成交部位
          this.formData = {
            ...this.formData,
            dealBodyParts: parts.content,
            dealOperation: parts.amount
          }
          break;
        case 'freeBodyParts':
          //赠送部位
          this.formData = {
            ...this.formData,
            freeBodyParts: parts.content,
            freeBodyOperation: parts.amount
          }
          break;
        case 'boardingBodyParts':
          console.log('boardingBodyParts')
          //打板部位
          this.formData = {
            ...this.formData,
            boardingBodyParts: parts.content,
            boardingOperation: parts.amount
          }
          break;
        case 'trialCards':
          let trialCards = this.formatTrialCards(data)
          //体验卡
          this.formData = {
            ...this.formData,
            trialCards
          }
          break;
        default:
          break;
      }
      console.log(type, this.formData)
    },
    /**
     * 格式化数据
     * @param data
     * @param type
     * @returns {{amount: string, content: []}}
     */
    formatData(data, type) {
      console.log(data, type)
      let content = []
      let amountList = []
      data.forEach((item) => {
        content.push(item.id)//操作部位id
        amountList.push(item.amount)
      })
      return {
        content: content,//身体部位
        amount: amountList.join(','),//1,1,2 操作次数
      }
    },
    /**
     * 格式化体验卡项数据
     * @param data
     */
    formatTrialCards(list) {
      // let list = [
      //   {
      //     id: 1,//身体部位id
      //     name: 1,//身体部位名称
      //     amount: 11,
      //     trialCardsId: '01',
      //     trialCardsName: '体验卡项1'
      //   },
      //   {
      //     id: 2,//身体部位id
      //     name: 2,//身体部位名称
      //     amount: 22,
      //     trialCardsId: '01',
      //     trialCardsName: '体验卡项1'
      //   },
      //   {
      //     id: 2,//身体部位id
      //     name: 1,//身体部位名称
      //     amount: 22,
      //     trialCardsId: '02',
      //     trialCardsName: '体验卡项2'
      //   }
      // ]

      /*处理体验卡数据*/
      var b = list.map((item) => {
        return item.trialCardsId
      })
      let trialCardsIds = []
      //去重
      trialCardsIds = Array.from(new Set(b))
      let trialCards = []
      for (var tc of trialCardsIds) {
        let tItem = {
          id: tc
        }
        //过滤出有相同 体验卡id
        let sample = list.filter(item => {
          if (item.trialCardsId === tc) {
            return item
          }
        })
        if (sample && sample.length > 1) {
          //表示有2个以上相同的体验卡项
          tItem.trialCardsNam = sample[0].trialCardsNam
          let bodyParts = []
          sample.forEach(si => {
            let bi = {
              id: si.id,
              name: si.name,
              operation: si.amount
            }
            bodyParts.push(bi)
          })
          tItem.bodyParts = bodyParts
        } else if (sample && sample.length === 1) {
          //表示没有2个相同的体验卡项
          let bitem = {
            id: sample[0].id,//身体部位id
            name: sample[0].name,//身体部位名称
            operation: sample[0].amount,
          }
          tItem.bodyParts = [bitem]
        }
        trialCards.push(tItem)
      }
      console.log('trialCards', trialCards)
      return trialCards
    },
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('YYYY-MM-DD') : ''
    },
    // vendorDictList(){
    //   return this.$store.getters.vendorDictList
    // },
  },
}
</script>

<style scoped>
.submit-btn {
  width: 100%;
}
</style>
