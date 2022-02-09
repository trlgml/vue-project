<template>
  <div>
    <p>静态数据 {{ msg }}</p>
    <p>静态数据 {{ num }}</p>
    <p>动态计算 {{ reversedMessage }}</p>
    <p>函数方法 {{ plus() }}</p>
    <button @click="set">点击吧</button>
  </div>
</template>

<script>
// import VHeader from "@/components/VHeader.vue";
// components: {
//   VHeader,
// }
export default {
  data() {
    return {
      msg: "数据",
      num: 2,
    };
  },
  props: {
    //数组或对象，用于接收来自父组件的数据
    height: "Number",
  },
  computed: {
    //计算属性函数
    reversedMessage: function () {
      return this.msg.split("").reverse().join("");
    },
  },
  methods: {
    //方法
    plus: function () {
      return "方法返回";
    },
    set: function () {
      this.num++;
    },
  },
  watch: {
    //监听
    msg: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    },
    num: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    },
  },
  //生命周期
  beforeCreate() {
    //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    console.log("beforeCreate");
  },
  created() {
    //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    console.log("created");
  },
  beforeMount() {
    //在挂载开始之前被调用：相关的 render 函数首次被调用。
    console.log("beforeMount");
  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
    console.log("mounted");
  },
  beforeUpdate() {
    //数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    console.log("beforeUpdate");
  },
  updated() {
    //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    console.log("updated");
  },
  activated() {
    //keep-alive 组件激活时调用。
    console.log("activated");
  },
  deactivated() {
    //keep-alive 组件停用时调用。
    console.log("deactivated");
  },
  beforeDestroy() {
    //实例销毁之前调用。在这一步，实例仍然完全可用。
    console.log("beforeDestroy");
  },
  destroyed() {
    //Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    console.log("destroyed");
  },
  errorCaptured() {
    //keep-alive 组件激活时调用。
    console.log("errorCaptured");
  },
};
</script>

<style>
</style>