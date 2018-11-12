<template>
  <div class="list">
    <div.table>
      <tbody>
        <td class="td" :width=height/TableLen-2 :height="height/TableLen">
          <img :src="img"
               :width=height/TableLen-2 alt=""
               :onerror="img404"
               :height="height/TableLen-2"/>
        </td>
        <td><p> {{content}}</p></td>
        <td>
          <!--<button :width=height/TableLen-2 v-show=isedit @click="removeTable">-->
            <!--删除-->
          <!--</button>-->
        </td>
      <!--</tr>-->
      </tbody>
    </div.table>
  </div>
</template>

<script>
  export default {
    name: "item_list",
    props: {
      singerData: Array,
      TableLen: Number,
      isedit: Boolean,
      height: Number,
      weight: Number,
      img: String,
      content: String,
    },
    data() {
      return {
        ArrayStartIndex: 0,
        h: 0,
        img404: "this.onerror='';this.src='" + require('../assets/logo.png') + "'",
        newlist: []
      }
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
    }, created: function () {
      this.h = this.Height / this.TableLen;
      //debugger 20
      console.log("数据", this.singerData)
      let self = this;
    },
    methods: {
      removeTable(index) {
        // this.$emit('remove_click',this.ArrayStartIndex+index);
        // console.log("remove", this.ArrayStartIndex + index);
        console.log("父组件调用了我"+index);
      },
    }
  }
</script>

<style scoped>
  .list .td {
    display: block;
  }
</style>
