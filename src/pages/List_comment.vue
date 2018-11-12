<template>
  <div class="content">
    <ul>
       <!--<li @click="add" id="hide">&gt;</li>-->

      <transition-group name="list-complete" tag="p">
        <li class="list-complete-item" v-bind:key="item.user_id" v-for="(item,index) in TableData">
          <img v-if="show" class="img" :src="item.profile_image" :width="height/TableLen"
               :height="height/TableLen-4"/>
          {{item.name}}
        </li>
      </transition-group>
             <!--<li @click="below">&gt;</li>-->

      <button @click="add">上一张</button>
      <button @click="below">下一张</button>
    </ul>
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
        chakanlist: [],
      }
    },
    computed: {
      // 根据坐标找到对应的值ArrayStartindex-1 定义一个数组这个数组负责管理添加数据
      // 定义一个数组负责管理查看上一张的数据
      TableData: function () {
        if (this.$el) this.height = this.$el.parentElement.offsetHeight;
        let data = this.singerData.slice(this.ArrayStartIndex, this.ArrayStartIndex + this.TableLen);
        console.log(data.length);
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

        // var list = [];
        // this.chakanlist = list.concat(this.singerData.unshift({
        //   "image": "http://img15.3lian.com/2015/f2/8/d/35.jpg",
        //   "name": "new"
        // }))
        // console.log(this.chakanlist);
      },
      below: function () {
        this.ArrayStartIndex++;
        clearTimeout(this.PlayTimer);
        this.autoPlay();
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

  .list-complete-enter, .list-complete-leave-to
  {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

</style>
