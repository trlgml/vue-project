<template>
  <div class="EchartsTwo">
    <div style="width: 100%; height: 100%" ref="main" id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import WorldJson from "@/assets/worlds.json";
import baseTexture from "@/assets/world.topo.bathy.200401.jpg";
import heightTexture from "@/assets/bathymetry_bw_composite_4k.jpg";

export default {
  name: "EchartsTwo",
  data() {
    return {
      mapsChart: null,
    };
  },
  mounted() {
    this.map();
    window.addEventListener("resize", function () {
      mapsChart.resize();
    });
  },
  methods: {
    map() {
      this.$nextTick(() => {
        let maps = this.$refs.main;
        let mapsChart = echarts.init(maps);
        this.mapsChart = mapsChart;
        echarts.registerMap("world", WorldJson);
        let canvas = document.createElement("canvas");
        let mapChart = echarts.init(canvas, null, {
          width: 1920,
          height: 1080,
        });
        //航线终点位置
        const coord = [
          [61.210817, 35.650072],
          [16.326528, -5.87747],
        ];
        //航线起点终点位置
        const lines_coord = [
          {
            coords: [
              [2.691702, 6.258817],
              [61.210817, 35.650072],
            ],
          },
          {
            coords: [
              [2.691702, 6.258817],
              [16.326528, -5.87747],
            ],
          },
        ];
        //航线飞机模型
        var planePath =
          "path://m43.75,145.74l0,0c0,-51.64 41.86,-93.5 93.5,-93.5l0,0c24.8,0 48.58,9.85 66.11,27.38c17.53,17.53 27.38,41.32 27.38,66.11l0,0c0,51.64 -41.86,93.5 -93.5,93.5l0,0c-51.64,0 -93.5,-41.86 -93.5,-93.5zm46.75,0l0,0c0,25.82 20.93,46.75 46.75,46.75c25.82,0 46.75,-20.93 46.75,-46.75c0,-25.82 -20.93,-46.75 -46.75,-46.75l0,0c-25.82,0 -46.75,20.93 -46.75,46.75z";
        mapChart.setOption({
          backgroundColor: "#87CEFA",
          geo: {
            name: "地图",
            //  type: 'map',  //地图种类、
            map: "world", //地图类型。
            zlevel: 0,
            show: true,
            layoutCenter: ["50%", "50%"],
            roam: false,
            layoutSize: "90%",
            zoom: 1,

            label: {
              normal: {
                show: false,
                textStyle: {
                  fontSize: 8,
                  // 文字顔色
                  color: "#43D0D6",
                },
              },
            },
            itemStyle: {
              //地图区域的多边形 图形样式。
              emphasis: {
                //高亮状态下的样试
                label: {
                  show: true,
                },
                areaColor: "#FFB800",
              },
              normal: {
                areaColor: "#1b579c",
                borderWidth: 1, //设置外层边框
                borderColor: "#1ECEF4",
              },
            },
          },
          viewControl: {
            autoRotate: false,
          },
          series: [
            {
              // effectScatter画散点【起点】
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              symbolSize: 6,
              rippleEffect: {
                period: 3,
                brushType: "stroke",
                scale: 2,
              },
              itemStyle: {
                color: "#FFB800",
                opacity: 0.7,
              },
              data: coord.slice(2),
            },
            {
              // 画中心散点【终点】,这里是为了区分起点终点不同样式，所以分开写，如果二者样式一样那就直接合在一起写就好了
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              symbolSize: 10,
              rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4,
              },
              itemStyle: {
                color: "#FF5722",
                opacity: 1,
              },
              data: coord.slice(0, 2),
            },
            //这里设了2条不同效果的飞线是为了讲他们叠加起来，满足飞机后面白色的喷气动画效果
            {
              type: "lines",
              zlevel: 1,
              effect: {
                show: true,
                period: 5,
                trailLength: 0.7,
                color: "#fff",
                symbolSize: 3,
              },
              lineStyle: {
                normal: {
                  color: "#FFB800",
                  width: 0,
                  curveness: 0.4,
                },
              },
              data: lines_coord,
            },
            {
              // lines画线
              type: "lines",
              coordinateSystem: "geo",
              zlevel: 2,
              symbol: ["none", "arrow"], //设置飞线的起点终点处的绘制图形
              symbolSize: 12,
              effect: {
                show: true,
                period: 5, //箭头指向速度，值越小速度越快
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: planePath, //飞机图标
                symbolSize: 15, //图标大小
                color: "#01AAED",
              },
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  lineStyle: {
                    type: "solid",
                    shadowBlur: 10,
                  },
                },
              },
              lineStyle: {
                //飞线的样式
                normal: {
                  width: 1.2,
                  opacity: 0.6,
                  curveness: 0.2,
                  color: "#FFB800",
                },
              },
              data: lines_coord,
            },
          ],
        });

        let option = {
          globe: {
            globeRadius: 100,
            globeOuterRadius: 150,
            silent: true,
            shading: "color",
            // environment: "#000",
            baseTexture: mapChart,
            viewControl: {
              autoRotate: true,
            },
            light: {
              main: {
                color: "#fff",
                intensity: 1,
                shadow: false,
                alpha: 55,
                beta: 10,
              },
              ambient: {
                color: "#fff",
                intensity: 1,
              },
              postEffect: {
                enable: true,
                SSAO: {
                  enable: true,
                  radius: 10,
                },
              },
            },
          },
        };

        mapsChart.setOption(option);
      });
    },
  },
};
</script>

<style scoped>
.EchartsTwo {
  height: 500px;
  width: 500px;
}
</style>