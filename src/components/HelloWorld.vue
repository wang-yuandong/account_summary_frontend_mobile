<template>
  <v-container>
    <v-card
      elevation="2"
      class="ma-2"
    >
      <v-card-title>订单录入</v-card-title>
      <v-card-text>
        <div>对订单进行录入相关描述</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          color="primary"
        >
          录入
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      elevation="2"
      class="ma-2"
    >
<!--      <v-card-title>Cafe Badilico</v-card-title>-->
<!--      <v-card-text>-->
<!--        <v-row-->
<!--          align="center"-->
<!--          class="mx-0"-->
<!--        >-->
<!--          <v-rating-->
<!--            :value="4.5"-->
<!--            color="amber"-->
<!--            dense-->
<!--            half-increments-->
<!--            readonly-->
<!--            size="14"-->
<!--          ></v-rating>-->

<!--          <div class="grey&#45;&#45;text ml-4">-->
<!--            4.5 (413)-->
<!--          </div>-->
<!--        </v-row>-->

<!--        <div class="my-4 subtitle-1">-->
<!--          $ • Italian, Cafe-->
<!--        </div>-->

<!--        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->
<!--      </v-card-text>-->

      <v-card-title>库存消耗</v-card-title>
      <v-card-text>
        <div>库存消耗相关描述</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="primary"
          text
        >
          录入
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
  }),
}
</script>
