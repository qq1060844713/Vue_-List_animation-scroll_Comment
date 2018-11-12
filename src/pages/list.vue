<template xmlns:position="http://www.w3.org/1999/xhtml">
  <div class="list">
    <div.table>
      <tbody>
      <button @click="addTable()" style="display: none">
      点击查看上一条
      </button>
      <tr :ref="'tb'+index" :width=Weight border="1" v-for="(item,index) in TableData">
        <td class="td" :width=Height/TableLen-2 :height="Height/TableLen">
          <img :src="item.profile_image"
               :width=Height/TableLen-2 alt=""
               :onerror="img404"
               :height="Height/TableLen-2"/>
        </td>
        <td><p> {{item.name}}</p></td>
        <td>
          <button position:relative :width=Height/TableLen-2 v-show=Isedit @click="removeTable(index)">
            删除
          </button>
        </td>
      </tr>
      </tbody>
    </div.table>
    <!--<td class="td" :width=Height/TableLen-2 :height="Height/TableLen">-->
    <!--<slot name="imglist" :width=Height/TableLen-2 :height="Height/TableLen"></slot>-->
    <!--</td>-->
    <!--<td>-->
    <!--<slot name="namelist"></slot>-->
    <!--</td>-->
  </div>
</template>

<script>
  export default {
    name: "list",
    // 接收父组件的值
    props: {
      singerData: Array,
      TableLen: Number,
      Isedit: Boolean,
      Height: Number,
      Weight: Number,
    },
    data() {
      return {
        ArrayStartIndex: 0,
        h: 0,
        img404: "this.onerror='';this.src='" + require('../assets/logo.png') + "'",
        newlist: []
      }
    },
    mounted() {
    },
    methods: {
      removeTable(index) {
        console.log("remove", this.ArrayStartIndex + index);
        console.log(this.$refs['tb' + index]);
        this.newlist.splice(index, 1)
      },
      addTable() {
      }
    },
    created: function () {
      this.h = this.Height / this.TableLen;
      //debugger 20
      console.log("数据", this.singerData)
      let self = this;
      // setInterval(function (){
      //   self.ArrayStartIndex++;
      // console.log(self.ArrayStartIndex);
      // },2000)
    },
    computed: {
      TableData: function () {
        // debugger
        this.newlist = this.newlist.concat(this.singerData);
        if (this.newlist.length >= this.singerData.length) {
          this.ArrayStartIndex++;
          var list1 = this.newlist.slice(this.ArrayStartIndex, this.ArrayStartIndex + this.TableLen)
          console.log("------", this.newlist)
        }
        return list1;
      }
    }
  }
</script>

<style scoped>
  .list .td {
    display: block;
  }

  div.table {
    display: inline-block;
    border-bottom-width: 0;
    border-left-width: 0;
    text-align: left;
    /*line-height:40px;*/
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    table-layout: fixed;
    overflow: scroll;
  }
</style>
