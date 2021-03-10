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
          label="渠道"
          item-text="name"
          item-value="id"
          return-object
          required
          @input="selectVendor"
          :rules="[v => !!v || '渠道不能为空']"
        ></v-select>
        <v-select
          v-model="agent"
          :items="agentDict"
          label="代理商"
          item-text="name"
          item-value="id"
          return-object
          required
          :rules="[v => !!v || '代理商不能为空']"
        ></v-select>

        <v-select
          v-model="shop"
          :items="shopDict"
          label="门店"
          item-text="name"
          item-value="id"
          return-object
          required
          :rules="[v => !!v || '门店不能为空']"
        ></v-select>

        <v-text-field
          v-model="formData.customerName"
          label="顾客姓名"
          required
          :rules="[v => !!v || '顾客姓名不能为空']"
        ></v-text-field>

        <v-text-field
          v-model="formData.postSalesPerson"
          label="售后"
          :rules="[v => !!v || '售后不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.dealPreviousAmount"
          label="补款"
          :rules="[v => !!v || '补款不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.customerType"
          label="对象"
          :rules="[v => !!v || '对象不能为空']"
          required
        ></v-text-field>
        <div>
          体验卡与操作次数
        </div>
        <PartAmountCompontent type="trialCards" :trialCardDict="trialCardDict"
                              @callbackEvent='callbackFormat'/>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="formData.dd"
              label="dd"
              :rules="[v => !!v || 'dd不能为空']"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              cols="4"
              v-model="formData.lm"
              :rules="[v => !!v || 'lm不能为空']"
              label="lm"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              cols="4"
              v-model="formData.xc"
              :rules="[v => !!v || 'xc不能为空']"
              label="xc"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- 选择身体部位和操作次数 组件-->
        <div>
          成交部位与次数
        </div>
        <PartAmountCompontent type="dealBodyParts" @callbackEvent='callbackFormat' :bodyPartDict="bodyPartDict"/>
        <v-text-field
          v-model="formData.dealAmount"
          label="成交金额"
          :rules="[v => !!v || '成交金额不能为空']"
          required
        ></v-text-field>

        <v-select
          v-model="formData.linkedOrderBodyPartNames"
          :items="orderRelationDict"
          label="已有订单"
          item-text="name"
          item-value="id"
          required
          return-object
          :rules="[v => !!v || '已有订单不能为空']"
          @input="linkedOrderBodyPar"
        ></v-select>

        <v-text-field
          v-model="formData.linkedOrderOperation"
          label="已有订单操作次数"
          :rules="[v => !!v || '已有订单操作次数不能为空']"
          required
        ></v-text-field>

        <div>
          赠送部位与次数
        </div>
        <PartAmountCompontent type="freeBodyParts" @callbackEvent='callbackFormat' :bodyPartDict="bodyPartDict"/>
        <v-text-field
          v-model="formData.dealDueAmount"
          label="成交欠款"
          :rules="[v => !!v || '成交欠款不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.dealPayAmount"
          label="成交实收"
          :rules="[v => !!v || '成交实收不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.consultant"
          label="咨询师"
          :rules="[v => !!v || '咨询师不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.cooperator"
          label="配台人员"
          :rules="[v => !!v || '配台人员不能为空']"
          required
        ></v-text-field>

        <div>
          打版部位与次数
        </div>
        <PartAmountCompontent type="boardingBodyParts" @callbackEvent='callbackFormat' :bodyPartDict="bodyPartDict"/>

        <v-text-field
          v-model="formData.boardingDueAmount"
          label="打板欠款"
          :rules="[v => !!v || '打板欠款不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.boardingAmount"
          label="打版金额"
          :rules="[v => !!v || '打板金额不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.boardingPayAmount"
          label="打板实收"
          :rules="[v => !!v || '打板实收不能为空']"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.boardingPreviousAmount"
          label="打板补款"
          :rules="[v => !!v || '打板补款不能为空']"
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
              label="操作日期"
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
        <v-btn
          @click="submitEvent"
          class="submit-btn"
          color="primary"
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
  import ConsumeDetails from "@/components/common/ConsumeDetails";
  import {shopDict} from '@/apis/shop'
  import {agentDict} from '@/apis/agent'
  import {trialCardDict} from '@/apis/trialCard'
  import {bodyPartDict} from '@/apis/bodyPart'
  import {orderCreate, orderRelation} from '@/apis/order'


  export default {
    name: "OrderEntry",
    components: {PartAmountCompontent, NavBar, ConsumeDetails},
    data: () => ({
      valid: true,
      vendorDict: [],//渠道关联数据
      agentDict: [],
      shopDict: [],
      trialCardDict: [],
      bodyPartDict: [],
      orderRelationDict: [],
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
      // checkbox: false,
      date: moment().format('YYYY-MM-DD'),
      menu1: false,
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
        "dd": "",
        "lm": "",
        "xc": "",
        "dealBodyParts": [],
        "dealOperation": "",//'1,1,1'
        "dealAmount": '',
        'linkedOrderBodyPartNames': '',
        "linkedOrderOperation": "",
        "freeBodyParts": [],
        "freeBodyOperation": '',//'1,1,1'
        // "fullPaid": true,
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
          //        '操作次数':'1'
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
      this.orderRelationList({})
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
      //选中渠道查询代理商
      selectVendor(value) {
        //代理商查询
        this.agentDictList({vendorId: value.id})
      },
      linkedOrderBodyPar(value) {
        Vue.$set(this.formData,linkedOrderBodyPartNames, value.name)
        // this.formData.linkedOrderBodyPartNames = value.name
      },
      orderRelationList(param) {
        orderRelation(param)
          .then(value => {
            if (value.code === 200) {
              this.orderRelationDict = value.data
            }
          })
      },
      agentDictList(param) {
        //代理商
        agentDict(param)
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
        if (!this.validate()) {
          return
        }
        this.formData = {
          ...this.formData,
          vendorId: this.vendor.id,//渠道
          agentId: this.agent.id,//代理商
          shopId: this.shop.id,//渠道
          operatorId: this.operator.id,//渠道
          operationDate: this.computedDateFormattedMomentjs
        }

        orderCreate(this.formData)
          .then(value => {
            if (value.code === 200) {
              console.log('添加成功')
              this.$myToast.open({msg: '添加成功', type: 'success'})
              //回到订单列表页
              this.$router.push('/orderList')
            } else {
              console.log(value.msg)
              this.$myToast.open({msg: value.msg, type: 'warning'})
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
        // console.log('trialCards', trialCards)
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
