<template>
  <v-main>
    <NavBar/>
    <v-container class="d-flex justify-space-between">
      <div>订单列表</div>
      <v-btn
        depressed
        color="primary"
        @click="addEvent"
      >
        新增
      </v-btn>
    </v-container>
    <!--      <v-data-table-->
    <!--        :headers="headers"-->
    <!--        :items="desserts"-->
    <!--        :page.sync="page"-->
    <!--        :items-per-page="itemsPerPage"-->
    <!--        hide-default-footer-->
    <!--        class="elevation-1"-->
    <!--        @page-count="pageCount = $event"-->
    <!--      ></v-data-table>-->
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      :server-items-length="total"
      @update:options="changePagination"
    ></v-data-table>

    <!--      <div class="text-center pt-2">-->
    <!--        <v-pagination-->
    <!--          v-model="page"-->
    <!--          :length="pageCount"-->
    <!--        ></v-pagination>-->
    <!--        <v-text-field-->
    <!--          :value="itemsPerPage"-->
    <!--          label="Items per page"-->
    <!--          type="number"-->
    <!--          min="-1"-->
    <!--          max="15"-->
    <!--          @input="itemsPerPage = parseInt($event, 10)"-->
    <!--        ></v-text-field>-->
    <!--      </div>-->
  </v-main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars
import CardList from '@/components/CardList.vue'
// @ is an alias to /src
import NavBar from "@/components/NavBar";

export default {
  name: 'OrderList',
  components: {
    NavBar
  },
  data() {
    return {
      total: 0,//总数
      headers: [
        {
          text: 'ID',
          align: 'start',
          // sortable: false,
          value: 'id',
        },
        {text: '姓名', value: 'customerName'},
        {text: '售后', value: 'postSalesPerson'},
        {text: '状态', value: 'state'},
      ],
      desserts: [],
    }
  },
  methods: {
    addEvent() {
      //订单录入页
      this.$router.push('/orderEntry')
    },
    changePagination(pagePrams) {
      const {
        page,
        itemsPerPage,
      } = pagePrams
      let param = {"pageNum": page, "pageSize": itemsPerPage}
      this.queryList(param)
    },
    queryList(param) {
      this.$store.dispatch('order/queryOrderList', param)
        .then(value => {
          //处理接口返回的数据
          if (value.code === 200) {
            const {data} = value
            this.desserts = data.list
            this.total = data.total
          }else{
            this.$myToast.open({msg: value.msg, type: 'warning'})
          }
          console.log(value)
        })
    }
  },
  created() {
    //发起请求
    let param = {"pageNum": 1, "pageSize": 5}
    // this.queryList(param)
  },
  // computed:{
  //   orderListData(){
  //     console.log(this.$store.state.order.orderListData)
  //     return this.$store.state.order.orderListData;
  //   }
  // }
}
</script>
