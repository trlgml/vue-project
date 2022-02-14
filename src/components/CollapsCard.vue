<template>
  <div class="box-card">
    <div class="title">
      <h2>{{ title }}</h2>
      <div ref="more" class="more">x</div>
    </div>
    <div class="content">
      <div v-for="(item, index) in list" :key="item.id">
        <div
          :class="[{ retract: item.status }, 'item']"
          :style="{ 'max-height': item.status ? textHeight : '' }"
          ref="textContainer"
        >
          <i
            :class="
              item.enable
                ? item.status
                  ? 'el-icon-arrow-right'
                  : 'el-icon-arrow-down'
                : 'el-icon-arrow-right'
            "
            @click="show(index)"
          ></i>
          <span>
            {{ item.content }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapsCard",
  props: ["list", "title"],
  data() {
    return {
      textHeight: "40px",
    };
  },
  mounted() {
    this.resetText();
    this.$nextTick(() => {
      this.calculateText();
    });
    window.onresize = () => {
      this.resetText();
      setTimeout(() => {
        this.calculateText();
      }, 0);
    };
  },
  methods: {
    show(index) {
      if (this.list[index].enable) {
        this.list[index].status = !this.list[index].status;
      }
    },
    resetText() {
      this.list.forEach((ele, index) => {
        this.$set(this.list, index, Object.assign({}, ele, { status: null }));
      });
    },
    calculateText() {
      let maxHeight = this.$refs.more.scrollHeight;
      this.textHeight = `${maxHeight}px`;
      let txtDom = this.$refs.textContainer;

      for (let i = 0; i < txtDom.length; i++) {
        let curHeight = txtDom[i].offsetHeight;
        if (curHeight > maxHeight + 2) {
          this.$set(
            this.list,
            i,
            Object.assign({}, this.list[i], { status: true, enable: true })
          );
        } else {
          this.$set(
            this.list,
            i,
            Object.assign({}, this.list[i], { status: null })
          );
        }
      }
      this.$set(
        this.list,
        0,
        Object.assign({}, this.list[0], { status: null })
      );
    },
  },
};
</script>

<style scoped>
.title {
  padding: 15px 0 0;
}
.title h2 {
  margin: 0;
  display: inline-block;
}
.content {
  height: 100px;
  overflow: auto;
}
.box-card {
  /* height: 100px; */
  padding: 0 15px 10px 15px;
  /* overflow: auto; */
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
}
.item {
  margin: 15px 0;
}
.retract {
  position: relative;
  overflow: hidden;
}
.more {
  display: inline-block;
  visibility: hidden;
}
.retract:after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 25px;
  padding-left: 25px;
  background: linear-gradient(to right, transparent, #fff 45%);
}
</style>
