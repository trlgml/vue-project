<template>
  <div class="Echarts">
    <div style="width: 100%; height: 100%" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import worl from "@/assets/world.json";
import baseTexture from "@/assets/world.topo.bathy.200401.jpg";
import heightTexture from "@/assets/bathymetry_bw_composite_4k.jpg";

export default {
  name: "Echarts",
  data() {
    return {
      chinachart: null,
    };
  },
  mounted() {
    // 初始化echarts实例
    this.chinachart = echarts.init(this.$refs.main);

    function getAirportCoord(idx) {
      return [worl.airports[idx][3], worl.airports[idx][4]];
    }
    var routes = worl.routes.map(function (airline) {
      return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
    });

    const option = {
      globe: {
        baseTexture: baseTexture,
        heightTexture: heightTexture,

        shading: "lambert",

        light: {
          ambient: {
            intensity: 0.4,
          },
          main: {
            intensity: 0.4,
          },
        },

        viewControl: {
          autoRotate: false,
        },
      },
      series: {
        type: "lines3D",

        coordinateSystem: "globe",

        blendMode: "lighter",

        lineStyle: {
          width: 1,
          color: "rgb(50, 50, 150)",
          opacity: 0.1,
        },

        data: routes,
      },
    };

    this.chinachart.setOption(option);
  },
};
</script>

<style scoped>
.Echarts {
  height: 500px;
  width: 500px;
}
</style>