<template>
  <div class="div-relative">
    <div class="div-b" style="text-align:center">
      <img src="../assets/up.png" height="30" width="30" @click="add"/>
    </div>
    <div class="clean"></div>
    <div class="content">
      <ul>
        <transition-group name="list-complete" tag="p">
          <li class="list-complete-item" v-bind:key="item.user_id" v-for="(item,index) in TableData">
            <img v-if="show" class="img" :src="item.profile_image" :width="height/TableLen"
                 :height="height/TableLen-4"
                 :onerror="img404"
            />
            {{item.name}}
          </li>
        </transition-group>
      </ul>

    </div>
    <div class="div-c  " style="text-align:center">
      <img src="../assets/down.png" height="30" width="30" @click="below"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'List_comment',
    props: {
      singerData: {
        type: Array,
        default: []
      },
      TableLen: Number,

    },
    data: function () {
      return {
        msg: '',
        height: 0,
        // singerData: [],
        ArrayStartIndex: 0,
        PlayTimer: Number,
        show: true,
        img404: "this.onerror='';this.src='" + require('../assets/logo.png') + "'",
      }
    },
    computed: {
      // 根据坐标找到对应的值ArrayStartindex-1 定义一个数组这个数组负责管理添加数据
      // 定义一个数组负责管理查看上一张的数据
      TableData: function () {
        if (this.$el) this.height = this.$el.parentElement.offsetHeight;
        let data = this.singerData.slice(this.ArrayStartIndex, this.ArrayStartIndex + this.TableLen);
        if (data.length < this.TableLen) {
          data.push.apply(data, this.singerData.slice(0, this.TableLen - data.length));
        }
        return data;
      }
    },
    methods: {
      add: function () {
        this.ArrayStartIndex--;
        if (this.ArrayStartIndex < 0) this.ArrayStartIndex = 0;
        clearTimeout(this.PlayTimer);
        this.autoPlay();
      },
      below: function () {
        this.ArrayStartIndex++;
        clearTimeout(this.PlayTimer);
        this.autoPlay();
      },
      rem: function () {
        this.singerData.splice(this.ArrayStartIndex, 1)
      },
      autoPlay() {
        let length = this.singerData.length;
        if (this.ArrayStartIndex >= length) {
          this.ArrayStartIndex = 0;
          this.autoPlay();
        } else {
          this.PlayTimer = setTimeout(() => {
            this.ArrayStartIndex++;
            this.autoPlay();
          }, 3000)
        }
      },
    },
    mounted() {

      //this.height = this.$el.parentElement.offsetHeight;
      this.autoPlay();
    },
    created() {
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .content {
    overflow: auto;
    display: block;
  }

  .img {
    margin: auto;
  }

  .list-enter-active, .list-leave-active {
    /*transition: all 1s;*/
    /*transition: opacity .1s*/
  }

  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(0px);
  }

  .list-complete-item {
    transition: all 1s;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .clean {
    clear: both;
  }

  .div-b {
    position: absolute;
    /**div居中**/
    margin: auto;
    width: 300px;
    opacity: 0.50; /**其他浏览器（0.5为透明度，在0-1之间的浮点数）**/
    filter: alpha(opacity=40);
    /*display: none;*/
  }

  .div-c {
    position: absolute;
    /**div居中**/
    margin: auto;
    bottom: 2px;
    width: 300px;
    opacity: 0.50; /**其他浏览器（0.5为透明度，在0-1之间的浮点数）**/
    filter: alpha(opacity=40);
    /*display: none;*/
  }
.div-relative{
  position:relative;
  }
</style>
