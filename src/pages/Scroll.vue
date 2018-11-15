<template>
  <div>
    <div class="div_list">
      <list_comment :singerData="singerData"
                    :TableLen="6" ref="list_com"></list_comment>
    </div>
    <div class="div_1">
      <button @click="up">上一张</button>
      <button @click="below1">下一张</button>
      <button @click="add1">添加</button>
      <button @click="delect1">删除</button>
    </div>
  </div>


</template>

<script>
  import List_comment from '../lib/List_comment'

  export default {
    name: 'Scroll',
    components: {List_comment},
    data() {
      return {
        invTime: 2000,
        singerData: [{"id": 1, "image": "http://img15.3lian.com/2015/f2/8/d/96.jpg", "name": "测试1"},
          {"id": 2, "image": "http://img15.3lian.com/2015/f2/8/d/97.jpg", "name": "测试2"},
          {"id": 3, "image": "http://img15.3lian.com/2015/f2/8/d/98.jpg", "name": "测试3"},
          {"id": 4, "image": "http://img15.3lian.com/2015/f2/8/d/99.jpg", "name": "测试4"},
          {"id": 5, "image": "http://img15.3lian.com/2015/f2/8/d/111.jpg", "name": "测试5"},
          {"id": 6, "image": "http://img15.3lian.com/2015/f2/8/d/2.jpg", "name": "测试6"},
          {"id": 7, "image": "http://img15.3lian.com/2015/f2/8/d/22.jpg", "name": "测试7"},
          {"id": 8, "image": "http://img15.3lian.com/2015/f2/8/d/11.jpg", "name": "测试8"},
        ],
        id: 0
      }
    }, methods: {
      refresh() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const appendList = []
            const temp = {}
            while (appendList.length < 3) {
              const index = Math.floor(Math.random() * 10)
              if (!temp[`attr${index}`]) {
                temp[`attr${index}`] = this.backup[index]
                appendList.push(this.backup[index])
              }
            }
            for (let i = 0; i < appendList.length; i++) {
              this.list.unshift(appendList[i])
            }
            resolve()
          }, 1000)
        })
      },
      up: function () {
        this.$refs.list_com.add();
      },
      below1: function () {
        this.$refs.list_com.below();
      },
      add1: function () {
        var lie = this.singerData[this.singerData.length - 1];
        console.log("数组" + this.singerData.length);
        this.id++;
        let _id = this.id + 8;
        var list = {"id": 8, "image": "http://img15.3lian.com/2015/f2/8/d/11.jpg", "name": "测试8"};
        list.id = this.id + 8;
        list.image = "http://img15.3lian.com/2015/f2/8/d/" + _id+".jpg";
        list.name = "测试" + _id;
        console.log(list);
        this.singerData.push(list);
        console.log(this.singerData);
      },
      delect1: function () {
        this.singerData.pop();
        console.log(this.singerData)
      }
    }
    , created() {
      // //设置10s刷新一次数据
      var index = 1;
      // if (this.timer) {
      //   clearInterval(this.timer);
      // } else {
      //   this.timer = setInterval(() => {
      //     var that = this;
      //     var url = "https://www.apiopen.top/satinApi?type=1&page=1";
      //     this.$ajax(url).then(function (res) {
      //       console.log(url)
      //       console.log(res);
      //       that.singerData = res.data.data;
      //       that.list = that.singerData;
      //       index++;
      //     });
      //   }, 1000)
      // }
      // var that = this;
      // var url = "https://www.apiopen.top/satinApi?type=1&page=1";
      // this.$ajax(url).then(function (res) {
      //   console.log(url)
      //   console.log(res);
      //   that.singerData = res.data.data;
      //   that.list = that.singerData;
      // })
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
    height: 500px;
    border: 1px solid #000000;
    /*overflow: scroll;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*color: #2c3e50;*/
  }

  .div_1 {
    margin: 0 auto;
    width: 300px;
  }
</style>
