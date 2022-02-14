<template>
  <div class="collapse">
    <div>
      <div style="width: 600px">
        <CollapsCard :list="list" title="234"></CollapsCard>
        <CollapsCard :list="list2" title="345"></CollapsCard>
      </div>
    </div>
  </div>
</template>

<script>
import CollapsCard from "@/components/CollapsCard";
export default {
  name: "Collapse",
  computed: {},
  components: {
    CollapsCard,
  },
  data() {
    return {
      list: [
        {
          content:
            "列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容",
        },
        {
          content:
            "列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容",
        },
        {
          content: "3333",
        },
      ],
      list2: [
        {
          content:
            "列表内${a}表内容列表内容列表内容列表内${b}容列表内容列表bcd内容列表内容列表内容列${c}表内容列表内容列表内容列表${d}内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容",
        },
        {
          content:
            "列表内${$a}表内容列表内容列表内容列表内${$b}容列表内容列表bcd内容列表内容列表内容列${$c}表内容列表内容列表内容列表${d}内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容",
        },
        {
          content: "3333",
        },
      ],
      data: [
        {
          a: "23",
          b: "212",
          c: "312",
          d: "123",
        },
        {
          a: 45,
          b: "1",
          c: "23",
          d: "###",
        },
        {
          a: "232",
          b: "###",
          c: "###",
          d: "###",
        },
      ],
    };
  },
  created() {
    this.replace(this.data);
  },
  methods: {
    replace(data) {
      // this.list2 = this.list2.map((item, index) => {
      //   const dataIndex = data[index];
      //   var re = /(?<=\{)(\w+)(?=\})/g;
      //   item.content = item.content.replace(re, (...m) => {
      //     console.log(m);
      //     return dataIndex[m.substr(1)];
      //   });
      //   return item;
      // });
      this.list2 = this.list2.map((item, index) => {
        const dataIndex = data[index];
        var re = /(\{)(\w+)(\})/g;
        item.content = item.content.replace(re, (a, b, c) => dataIndex[c]);
        return item;
      });
    },
  },
};
</script>

<style scoped>
</style>
s