<template>
<div class="line1">
  <div id="line1" class="" style="width: 90%;height:450px;"></div>
</div>
</template>

<script>
// 引入 echarts 主模块。
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入折线图。
import 'echarts/lib/chart/line';
// 引入标题组件。
import 'echarts/lib/component/title';
// 引入图例组件。
import 'echarts/lib/component/legend';
// 引入工具箱组件。
import 'echarts/lib/component/toolbox';
// 引入数据标注组件。
import 'echarts/lib/component/markPoint';
// 引入提示框组件。
import 'echarts/lib/component/tooltip';
export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById('line1'));
    this.initData();
  },
  props: ['sevenDate', 'sevenDay'],
  methods: {
    initData() {
      const colors = ['#d14a61', '#5793f3', '#675bba', '#13CE66'];
      const option = {
        color: colors,
        title: {
          text: '走势图',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['API请求量', '新注册用户', '新增订单', '新增管理员']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false
            },
            magicType: {
              type: ['bar', 'line']
            },
            restore: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.sevenDay
        },
        yAxis: [{
            type: 'value',
            name: 'API请求量',
            // min: 0,
            // max: 200000,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '用户、订单',
            min: 0,
            max: 400,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [{
            name: 'API请求量',
            type: 'line',
            data: this.sevenDate[0],
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            }
          },
          {
            name: '新注册用户',
            type: 'line',
            data: this.sevenDate[1],
            yAxisIndex: 1,
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            }
          },
          {
            name: '新增订单',
            type: 'line',
            data: this.sevenDate[2],
            yAxisIndex: 1,
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            }
          },
          {
            name: '新增管理员',
            type: 'line',
            data: this.sevenDate[3],
            yAxisIndex: 1,
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            }
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  watch: {
    sevenDate: function() {
      this.initData();
    },
    sevenDay: function() {
      this.initData();
    }
  }
};
</script>
<!-- lang="less" -->
<style lang="scss">
// @import '../style/mixin';
// .line1 {
//     display: flex;
//     justify-content: center;
// }
</style>
