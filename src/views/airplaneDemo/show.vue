<template>
    <div>
        <div class="ECharts">
            <!--散点图-->
            <div id="ScatterPlotECharts_A" class="EChartBox"></div>
            <div id="ScatterPlotECharts_L" class="EChartBox"></div>
            <div id="ScatterPlotECharts_V" class="EChartBox"></div>
            <div id="ScatterPlotECharts_W" class="EChartBox"></div>
            <!--<div id="ScatterPlotECharts_A" class="EChartBox"></div>-->
        </div>

        <v-chart :options="data"/>

        <Modal
                title="Title"
                v-model="warn_Modal"
                :mask="false"
                :scrollable="true"
                :styles="{top: '20px'}">
            <header>警告！！</header>
            <div id="layerBox" class="layerBox">
                <div class="tit">
                    电压值异常、电流值异常，推测：线圈绝缘层磨损故障!
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>

  export default {
    name: "show",
    data(){
      return {
        warn_Modal:false,
      }
    }
  }
</script>

<style scoped lang="scss">
    body{
        background-color: #262a41;
    }
    .ECharts{
        /*display: flex;*/
        width: 100%;
        /*margin-left: 1% ;*/
        margin-top: 20px;
        text-align: center;
    }
    .EChartBox{
        display: inline-block;
        width: 49%;
        height: 450px;
        margin-top: 10px;
    }
    /*弹窗样式*/
    .layerBox{
        text-align: center;
        margin:46px 40px 30px 40px;
    }
</style>