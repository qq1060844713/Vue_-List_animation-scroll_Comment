<template>
  <div class="content">
    <ul>
      <transition-group name='flip-list' tag='ul' mode='in-out'>
        <li class='flip-list-item' :key="item.id" v-for="(item,index) in TableData">
          <img v-if="show" class="img" :src="item.image" :width="height/TableLen"
               :height="height/TableLen-4"/>
          {{item.name}}
        </li>
      </transition-group>
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
        ArrayStartIndex: 0,
        PlayTimer: Number,
        show: true,
        chakanlist: [],
        length1: this.singerData.length
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

  .flip-list-item {
    list-style-type: none;
    /**
       * 可以在v-enter-active和v-move中分别用transition过渡，也可以在item中用transition，包含了这两项
       * 要用all不用transform，有可能是因为splice删除效果不是transform
       */
    /* transition: all 1s; */
  }

  .flip-list-leave-active {
    transition: all .5s;
  }

  .flip-list-enter-active {
    transition: all 1s;
  }

  .flip-list-move {
    transition: transform 1s;
  }

  .flip-list-enter, .flip-list-leave-to {
    opacity: 0;
    transform: translateY(0);
  }

  /**
   * 要让删除的元素先脱离文档流，旁边的元素才能过渡过来
   */
  .flip-list-leave-active {
    position: absolute;
  }
</style>
