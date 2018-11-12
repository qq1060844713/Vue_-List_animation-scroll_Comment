<template>
  <!--<InfiniteScroll :list="cells" :scrollViewHeight="736">-->
  <!--<div slot="cell" slot-scope="props"-->
  <!--:style="props.cell.style">{{props.cell.text}}</div>-->
  <!--</InfiniteScroll>-->
  <div class="div_list">
    <div.table>
      <tbody>
      <tr :ref="'tb'+index" border="1" v-for="(item,index) in TableData">
        <!--singerData：数据源 img：展示的图片 content:展示的内容 table-len:展示的数量 -->
        <!--isedit:是否编辑 weight:宽 height:高 -->
        <item_list :singerData="list" :img="item.profile_image"
                   :content="item.name" :table-len="6"
                   :isedit=false :weight="300" :height="498"
                   ref="RemoveIndex"/>
       <td>
          <!--<button :width=100  @click="removeTable(index)">-->
            <!--删除-->
          <!--</button>-->
        </td>
      </tr>
      </tbody>
    </div.table>
  </div>
</template>

<script>
  // import InfiniteScroll from '@/src/infiniteScroll/InfiniteScroll'
  import List from './list'
  import item_list from './item_list'

  export default {
    name: 'Scroll',
    components: {List, item_list},
    data() {
      return {
        singerData: [],
        list: [],
        newlist: [],
        ArrayStartIndex: 0,
        TableLen: 6,
      }
    }, methods: {
      RemoveIndex: function () {
        // console.log(this.index)
        // this.newlist.splice(index, 1)
        this.$refs.RemoveIndex.removeTable();
      },
      removeTable(index) {
        this.newlist.splice(index,1);
        console.log("删除第"+this.ArrayStartIndex+"几条");
      }
    }
    , created() {
      //设置10s刷新一次数据
      var index = 1;
      if (this.timer) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          var that = this;
          var url = "https://www.apiopen.top/satinApi?type=1&page=" + index;
          this.$ajax(url).then(function (res) {
            console.log(url)
            console.log(res);
            that.singerData = res.data.data;
            that.list = that.singerData;
            index++;
          });
        }, 1000)
      }

      window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        //滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
          //写后台加载数据的函数
          var that = this;

          console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
        }
      }

    },
    computed: {
      TableData: function () {
        // debugger
        this.newlist = this.newlist.concat(this.list);
        if (this.newlist.length >= this.list.length) {
          this.ArrayStartIndex++;
          var list1 = this.newlist.slice(this.ArrayStartIndex, this.ArrayStartIndex + this.TableLen)
          console.log("------", this.newlist)
        }
        return list1;
      }
    },
    destroyed() {
      clearInterval(this.timer);//页面销毁时清除定时器
    }
  }
</script>
<style>
  .div_list {
    margin: 0 auto;
    width: 300px;
    height: 498px;
    border: 1px solid #000000;
    display: block;
    /*overflow: scroll;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*color: #2c3e50;*/
  }
</style>

