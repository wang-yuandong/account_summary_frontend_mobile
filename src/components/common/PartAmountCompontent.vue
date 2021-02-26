<template>
  <div>
    <v-row>
      <v-col
        cols="12"
      >
        <v-chip
          class="ma-2"
          close
          v-for="(item,index) in partAmountData"
          :key="index"
          @click:close="closeChip(index)"
        >
          <span v-if="type==='trialCards'">{{item.trialCardsName}}{{item.name}}{{item.amount}}次</span>
          <span v-else>{{item.name}}{{item.amount}}次</span>
        </v-chip>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-if="type==='trialCards'"
        :cols="type==='trialCards'? 3 : 4 "
      >
        <v-select
          v-model="trialCard"
          :items="trialCardDict"
          :rules="[v => !!v || 'Item is required']"
          @input="selectTriaCard"
          label="体验卡"
          item-text="name"
          item-value="id"
          return-object
          required
        ></v-select>
      </v-col>
      <v-col
        :cols="type==='trialCards'? 3 : 4"
      >
        <v-select
          v-model="select"
          :items="bodyPartDict"
          item-text="name"
          item-value="id"
          label="身体部位"
          return-object
        ></v-select>
      </v-col>
      <v-col
        :cols="type==='trialCards'? 3 : 4"
      >
        <v-text-field
          v-model="amount"
          label="操作次数"
          placeholder="请输入次数"
        ></v-text-field>
      </v-col>

      <v-col
        :cols="type==='trialCards'? 3 : 4"
        class="d-flex align-center"
      >
        <v-btn @click="addEvent">
          添加
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import {trialCardDict} from '@/apis/trialCard'
  import {bodyPartDict} from '@/apis/bodyPart'
  export default {
    name: 'partAmountCompontent',
    // props: ['type','trialCardDict','bodyPartDict'],
    props: ['type'],
    data() {
      return {
        chip: true,
        trialCardDict: [],
        bodyPartDict: [],
        trialCard: {},//体验卡
        id: '',//选中得  身体部位id
        select: {},//选中身体部位
        amount: '',//操作次数
        // items1: [
        //   {
        //     id: '1',
        //     name: '体验卡1'
        //   },
        //   {
        //     id: '2',
        //     name: '体验卡2'
        //   },
        //   {
        //     id: '3',
        //     name: '体验卡3'
        //   },
        //   {
        //     id: '4',
        //     name: '体验卡4'
        //   },
        // ],
        // items: [
        //   {
        //     id: '1',
        //     name: '头部'
        //   },
        //   {
        //     id: '2',
        //     name: '脸部'
        //   },
        //   {
        //     id: '3',
        //     name: '颈部'
        //   },
        //   {
        //     id: '4',
        //     name: '手'
        //   },
        //
        // ],
        partAmountData: [],//身体部位数据
      }
    },
    created() {
      this.trialCardDictList()
      this.bodyPartDictList({})
    },
    methods: {
      selectTriaCard(value){
        // console.log(value)
        this.bodyPartDictList({
          trialCardId:value.id
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
      bodyPartDictList(param) {
        //身体部位
        bodyPartDict(param)
          .then(value => {
            if (value.code === 200) {
              this.bodyPartDict = value.data
            }
          })
      },
      addEvent() {
        if (this.type === 'trialCards' && (this.trialCard.id === undefined || this.select.id === undefined || this.amount === '')) {
          return
        }
        if (this.select.id === undefined || this.amount === '') {
          return
        }
        let item = {
          id: this.select.id,//身体部位id
          name: this.select.name,//身体部位名称
          amount: this.amount
        }
        console.log('this.type', this.type)
        if (this.type === 'trialCards') {
          item.trialCardsId = this.trialCard.id
          item.trialCardsName = this.trialCard.name
        }
        //选择身体部位得时候  如果已经选择了，再次选择覆盖之前(无体验卡选项)
        if (this.partAmountData.length > 0) {
          if (this.type === 'trialCards') {
            //无体验卡选项
            let tem = this.partAmountData.filter((pd) => {
              if (pd.trialCardsId !== this.trialCard.id ) {
                return pd
              }
              if(pd.trialCardsId === this.trialCard.id && pd.id !== this.select.id){
                return pd
              }
            })
            tem.push(item)
            this.partAmountData = tem
          } else {
            //无体验卡选项
            let tem = this.partAmountData.filter((pd) => {
              if (pd.id !== this.select.id) {
                return pd
              }
            })
            tem.push(item)
            this.partAmountData = tem
          }

        } else {
          this.partAmountData.push(item)
        }

        // this.partAmountData.push(item)
        console.log(this.partAmountData)
        //清空partId 和数字,清空体验卡
        this.trialCard = {}
        this.select = {}
        this.amount = ''
        this.$emit('callbackEvent', this.type, this.partAmountData)
      },

      closeChip(index) {
        //closeChip
        this.partAmountData.splice(index, 1)
      }
      ,
    }
  }
</script>
