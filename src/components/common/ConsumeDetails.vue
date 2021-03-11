<template>
  <v-container>
    <div>消耗物品</div>
    <div v-for="(consume,index) in dataSource.list" :key="index">
      <v-row>
        <v-col
          cols="12"
        >
          <v-select
            v-model="consume.bodyCategoryId"
            :items="bodyCategory"
            :rules="[v => !!v || 'Item is required']"
            label="项目"
            item-text="name"
            item-value="id"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-for="(material,idx) in consume.materialList" :key="idx">
        <v-col
          cols="3"
          class="d-flex justify-center"
        >
          <v-select
            v-model="material.materialId"
            :items="materials"
            :rules="[v => !!v || 'Item is required']"
            label="本次消耗物品"
            item-text="name"
            item-value="id"
            required
          ></v-select>
        </v-col>
        <v-col
          cols="3"
          class="d-flex justify-center"
        >
          <v-text-field label="本次消耗数量"
                        v-model="material.num"
                        :rules="[v => !!v || 'Item is required']"
                        required/>
        </v-col>
        <v-col
          cols="3"
          class="d-flex align-center"
        >
          <v-btn @click="addMaterial(index)">增加</v-btn>
        </v-col>
        <v-col
          cols="3"
          class="d-flex align-center"
        >
          <v-btn @click="deleteMaterialList(index,idx)">删除</v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex justify-space-around">
      <v-btn @click="addConsumeGoods">新增项目消耗</v-btn>&nbsp;&nbsp;
    </div>
    <v-text-field label="备注" v-model="dataSource.remark"/>
    <v-btn
      @click="submitEvent"
      class="submit-btn"
      color="primary"
    >
      提交
    </v-btn>
  </v-container>
</template>

<script>
  import {dictBodyCategory} from '@/apis/bodyCategory'
  import {materialDict,consumeCreate} from '@/apis/material'

  export default {
    name: 'ConsumeDetails',
    data() {
      return {
        bodyCategory: [],
        materials: [],
        dataSource: {
          orderId: '',
          remark: '',
          list:
            [
              {
                'bodyCategoryId': '',
                'materialList': [{
                  "materialId": '',
                  "num": ''
                }],
              }
            ]
        },
      }
    },
    created() {
      this.dictBodyCategoryList()
      this.materialDictList()
    },
    methods: {
      // consumeCreateEvent(){
      //
      // },
      dictBodyCategoryList() {
        dictBodyCategory()
          .then(value => {
            if (value.code === 200) {
              this.bodyCategory = value.data
            }
          })
      },
      materialDictList() {
        materialDict()
          .then(value => {
            if (value.code === 200) {
              this.materials = value.data
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      addMaterial(pIndex) {
        let materia = {
          "materialId": '',
          "num": ''
        }
        this.dataSource.list[pIndex].materialList.push(materia)
      },
      deleteMaterialList(pIndex, index) {
        if (this.dataSource.list[pIndex].materialList.length < 2) {
          return
        }
        this.dataSource.list[pIndex].materialList.splice(index, 1)
      },
      addConsumeGoods() {
        let consume = {
          'bodyCategoryId': '',
          'materialList': [{
            "materialId": '',
            "num": ''
          }],
          "orderId": '',
          "remark": ""
        }
        this.dataSource.list.push(consume)
      },
      deleteConsumeGoods(index) {
        if (this.dataSource.list.length < 2) {
          return
        }
        this.dataSource.list.splice(index, 1)
      },
      submitEvent() {
        console.log(this.$route.query.orderId)
        console.log(this.dataSource)
        let param={
          ...this.dataSource,
          orderId:this.$route.query.orderId
        }
        consumeCreate(param)
        .then(value=>{
          if(value.code===200){
            //跳转到订单列表页
            this.$myToast.open({msg: '添加成功', type: 'success'})
            //回到订单列表页
            this.$router.push('/orderList')
          }else{
            this.$myToast.open({msg: value.msg, type: 'warning'})
          }
        })
      },
    },

  }

</script>

<style scoped>

</style>
