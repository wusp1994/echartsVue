<template>
    <div class="home">
        <div class="back">
            <div class="img-box">
                <img :src="pictures.airplane" alt="">
            </div>
            <div class="tip">
                <div class="text">
                    文案输入区域
                </div>
                <div class="button" @click="$router.push({name:'home'})">
                    参数采集 <span> > </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import airplane from "@/assets/images/airplane.jpg"

  export default {
    name: "home",
    data(){
      return {
        pictures:{
          airplane:airplane
        }
      }
    }
  }
</script>

<style scoped lang="scss">

    .back{
        width: 100%;
        height: 100vh;
        img{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            margin-bottom: -1px;
        }
    }
    .tip{
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 60px;
        .text{
            display: inline-block;
            width: 80%;
            margin-left: 60px;
            font-size: 24px;
            /*background-color: rgba(146, 184, 177, 0.22);*/
        }
        .button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: rgba(22, 163, 175, 0.57); /* Green */
            color: #ffffff;
            border-radius: 50%;
            span{
                position: absolute;
                font-size: 20px;
                color: #ffffff;
                top: 13px;
            }
        }
    }
</style>