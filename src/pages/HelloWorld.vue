<template>

    <div>
        <div class="item">
            <div class="container">
                <convenienceimage src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg2" :src-err="defaultImg"/>
            </div>
            图片不存在
        </div>

        <div class="item">
            <div class="container">
                <convenienceimage src-nor="http://img15.3lian.com/2015/f1/173/d/40.jpg" :src-err="defaultImg"/>
            </div>
            w&lth,居中
        </div>

        <div class="item">
            <div class="container">
                <convenienceimage src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg" :src-err="defaultImg"/>
            </div>
            w>h,居中
        </div>

        <br>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="left" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg2" :src-err="defaultImg"/>
            </div>
            图片不存在
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="left" src-nor="http://img15.3lian.com/2015/f1/173/d/40.jpg" :src-err="defaultImg"/>
            </div>
            w&lth,左对齐
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="left" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg" :src-err="defaultImg"/>
            </div>
            w>h,左对齐
        </div>

        <br>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg2" :src-err="defaultImg"/>
            </div>
            图片不存在
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top" src-nor="http://img15.3lian.com/2015/f1/173/d/40.jpg" :src-err="defaultImg"/>
            </div>
            w&lth,上对齐
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg" :src-err="defaultImg"/>
            </div>
            w>h,上对齐
        </div>

        <br>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top-left" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg2" :src-err="defaultImg"/>
            </div>
            图片不存在
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top-left" src-nor="http://img15.3lian.com/2015/f1/173/d/40.jpg" :src-err="defaultImg"/>
            </div>
            w&lth,上对齐左对齐
        </div>
        <div class="item">
            <div class="container">
                <convenienceimage alignment="top-left" src-nor="http://img15.3lian.com/2015/f2/8/d/96.jpg" :src-err="defaultImg"/>
            </div>
            w>h,上对齐左对齐
        </div>

    </div>

</template>

<script>
 import convenienceimage from './ConvenienceImage'
    export default {
        name: 'HelloWorld',
      components: { convenienceimage},
        props: {
            msg: String
        },
        data() {
            return {
                defaultImg: require('../assets/logo.png')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
    }

    .container {
        background: #ccc;
        width: 150px;
        height: 150px;
    }
</style>
