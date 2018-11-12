<template>
  <div class="div_list">
    <list_comment :singerData="singerData"
                  :TableLen="6"></list_comment>
  </div>

</template>

<script>
  import List_comment from '../lib/List_comment'

  export default {
    name: 'Scroll',
    components: { List_comment},
    data() {
      return {
        invTime: 2000,
        singerData: [{"index":1,"image": "http://img15.3lian.com/2015/f2/8/d/96.jpg", "name": "一"},
          {"index":2,"image": "http://img15.3lian.com/2015/f2/8/d/97.jpg", "name": "二"},
          {"index":3,"image": "http://img15.3lian.com/2015/f2/8/d/98.jpg", "name": "三"},
          {"index":4,"image": "http://img15.3lian.com/2015/f2/8/d/99.jpg", "name": "四"},
          {"index":5,"image": "http://img15.3lian.com/2015/f2/8/d/111.jpg", "name": "五"},
          {"index":6,"image":"http://img15.3lian.com/2015/f2/8/d/2.jpg","name":"67777777"},
          {"index":7,"image":"http://img15.3lian.com/2015/f2/8/d/22.jpg","name":"4444444"},
          {"index":8,"image":"http://img15.3lian.com/2015/f2/8/d/11.jpg","name":"222222"},
        ],
        list: []
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
      add:function () {
        var list=[{
          "image":"http://img15.3lian.com/2015/f2/8/d/2.jpg",
          "name":"数据1"
        },{
          "image":"http://img15.3lian.com/2015/f2/8/d/3.jpg",
          "name":"数据2"
        }]
        this.singerData=this.singerData.concat(list);
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
      var that = this;
        var url = "https://www.apiopen.top/satinApi?type=1&page=1";
          this.$ajax(url).then(function (res) {
            console.log(url)
            console.log(res);
            that.singerData = res.data.data;
            that.list = that.singerData;
          })
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
</style>

