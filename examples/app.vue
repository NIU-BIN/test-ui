<template>
  <div>
    <!-- button -->
    <h2>按钮</h2>
    <h3>Button</h3>
    <div>
      <t-button>default</t-button>
      <t-button type="primary">primary</t-button>
      <t-button type="success">success</t-button>
      <t-button type="info">info</t-button>
      <t-button type="warning">warning</t-button>
      <t-button type="danger">danger</t-button>
    </div>
    <h3>Button size</h3>
    <div style="margin-bottom: 10px">
      <t-button type="primary" size="small">primary</t-button>
      <t-button type="success" size="small">success</t-button>
      <t-button type="info" size="small">info</t-button>
      <t-button type="warning" size="small">warning</t-button>
      <t-button type="danger" size="small">danger</t-button>
    </div>
    <div>
      <t-button type="primary" size="mini">primary</t-button>
      <t-button type="success" size="mini">success</t-button>
      <t-button type="info" size="mini">info</t-button>
      <t-button type="warning" size="mini">warning</t-button>
      <t-button type="danger" size="mini">danger</t-button>
    </div>
    <h3>Button round</h3>
    <div style="margin-bottom: 10px">
      <t-button round>default</t-button>
      <t-button type="primary" round>primary</t-button>
      <t-button type="success" round>success</t-button>
      <t-button type="info" round>info</t-button>
      <t-button type="warning" round>warning</t-button>
      <t-button type="danger" round>danger</t-button>
    </div>

    <h3>Button disabled</h3>
    <div>
      <t-button type="primary" disabled>primary</t-button>
      <t-button type="success" disabled>success</t-button>
      <t-button type="info" disabled>info</t-button>
      <t-button type="warning" disabled>warning</t-button>
      <t-button type="danger" disabled>danger</t-button>
    </div>

    <h3>Button icon</h3>

    <div>
      <t-button type="primary" icon="chart-bar">primary</t-button>
      <t-button type="success" icon="calendar">success</t-button>
      <t-button type="info" icon="data-view"></t-button>
      <t-button type="primary" icon="download"></t-button>
    </div>

    <h3>Button loading</h3>

    <div>
      <t-button type="primary" :loading="loading">加载中</t-button>
    </div>
    <!-- message -->
    <h2>消息</h2>
    <h3>Message</h3>
    <t-button type="success" @click="handleMessage('success')"
      >success</t-button
    >
    <t-button type="info" @click="handleMessage('info')">info</t-button>
    <t-button type="warning" @click="handleMessage('warning')"
      >warning</t-button
    >
    <t-button type="danger" @click="handleMessage('error')">danger</t-button>
    <h3>Message close</h3>
    <t-button type="success" @click="handleMessage('success', true)"
      >success</t-button
    >
    <t-button type="info" @click="handleMessage('info', true)">info</t-button>
    <t-button type="warning" @click="handleMessage('warning', true)"
      >warning</t-button
    >
    <t-button type="danger" @click="handleMessage('error', true)"
      >danger</t-button
    >
    <h3>Message time</h3>
    <t-button type="success" @click="handleMessage('success', true, 1000)"
      >1s</t-button
    >
    <t-button type="success" @click="handleMessage('success', true, 5000)"
      >5s</t-button
    >
    <!-- tree -->
    <h2>树</h2>
    <h3>Tree</h3>
    <h3>基础树</h3>
    <t-tree :data="JSON.parse(JSON.stringify(treeData))" node-key="id" />
    <h3>默认展开</h3>
    <t-tree
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :default-expand-all="true"
    />
    <h3>可选择</h3>
    <t-tree
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :showCheckbox="true"
      :default-expand-all="true"
      @handleClickNode="handleClickNode"
    />
    <h3>获取选中节点/设置选中节点</h3>
    <t-button type="primary" @click="getCheckedNodes">获取选中的key</t-button>
    <t-button type="primary" @click="setCheckedNodes">设置选中的key</t-button>
    <t-tree
      ref="treeRef"
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :showCheckbox="true"
      @handleClickNode="handleClickNode"
    />
    <h2>步骤条 Steps</h2>
    <h3>基础使用</h3>
    <div style="margin-bottom: 10px">
      <t-button type="primary" @click="handleNextStep">下一步</t-button>
      当前节点{{ active }}
    </div>
    <t-steps :active="active">
      <t-step title="第一步" description="打开微信扫一扫" />
      <t-step title="第二步" description="添加好友" />
      <t-step title="第三步" description="选择我的头像" />
      <t-step title="第四步" description="转款1000万" />
    </t-steps>
    <h3>居中的步骤条</h3>
    <t-steps :active="active" align="center">
      <t-step title="第一步" description="打开微信扫一扫" />
      <t-step title="第二步" description="添加好友" />
      <t-step title="第三步" description="选择我的头像" />
      <t-step title="第四步" description="转款1000万" />
    </t-steps>
    <h3>自定义图标1</h3>
    <t-steps :active="active">
      <t-step title="起床" icon="notification" />
      <t-step title="炒股" icon="data-view" />
      <t-step title="加仓" icon="good" />
      <t-step title="亏大了" icon="cry" />
    </t-steps>
    <h3>自定义图标2</h3>
    <t-steps :active="active" align="center">
      <t-step title="起床">
        <template #icon> &#127774; </template>
      </t-step>
      <t-step title="又亏了">
        <template #icon> &#128201;</template>
      </t-step>
      <t-step title="继续加仓">
        <template #icon> + </template>
      </t-step>
      <t-step title="亏成狗">
        <template #icon> &#128021; </template>
      </t-step>
    </t-steps>
    <h2>分页Pagination</h2>
    <h3>基础使用</h3>
    <t-pagination :total="100" v-model:current-page="currentPage1" />
    <h3>跳转功能</h3>
    <t-pagination
      :total="300"
      v-model:current-page="currentPage2"
      :showJump="true"
    />
    <h2>表格 Table</h2>
    <h3>基础使用</h3>
    <t-table :column-data="columnData" :table-data="tableData" />
    <h3>带斑马纹表格</h3>
    <t-table :column-data="columnData" :table-data="tableData" stripe />
    <h3>边框</h3>
    <t-table :column-data="columnData" :table-data="tableData" border />
    <h3>自定义列</h3>
    <t-table :column-data="columnData" :table-data="tableData">
      <template #address="{ scoped, $index }">
        这是第{{ $index }}行数据，内容是{{ scoped }}
      </template>
    </t-table>
    <h3>固定表头</h3>
    <t-table
      :column-data="columnData"
      :table-data="bigTableData"
      :height="260"
      border
    >
    </t-table>
    <h3>列对齐</h3>
    <t-table :column-data="columnData2" :table-data="tableData" stripe border>
      <template #name="{ scoped, $index }">
        <div style="width: 50px; height: 20px; background-color: pink"></div>
      </template>
    </t-table>
    <h3>列固定</h3>
    <t-table
      :column-data="columnData3"
      :table-data="bigTableData2"
      stripe
      :height="260"
      border
      style="width: 860px"
    />
    <h2>折叠面板 Collapse</h2>
    <h3>基础使用</h3>
    <t-collapse v-model="activeNames1">
      <t-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </t-collapse-item>
    </t-collapse>
    <h3>手风琴效果</h3>
    <t-collapse v-model="activeNames2" accordion>
      <t-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </t-collapse-item>
    </t-collapse>
    <h3>自定义面板标题和图标</h3>
    <t-collapse v-model="activeNames2">
      <t-collapse-item name="1">
        <template #title>
          Consistency
          <i class="t-icon icon-email" />
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Feedback" name="2">
        <template #icon="{ isActive }">
          <i
            :class="`t-icon ${
              isActive ? 'icon-arrow-down-filling' : 'icon-arrow-right-filling'
            }`"
          />
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </t-collapse-item>
      <t-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </t-collapse-item>
    </t-collapse>
    <h2>日历 Calendar</h2>
    <h3>基础使用</h3>
    <t-calendar />
    <h3>自定义内容</h3>
    <t-calendar>
      <template #date-cell="{ date, dateFormated }">
        <div>
          <span>{{ dateFormated }}</span>
        </div>
      </template>
    </t-calendar>
    <h3>待办示例</h3>
    <t-calendar class="todo-demo">
      <template #date-cell="{ date, dateFormated }">
        <div class="todo-cell">
          <span>{{ dateFormated }}</span>
          <ul v-if="todoList[dateFormated]" class="todo_list">
            <li
              v-for="item in todoList[dateFormated]"
              :key="item.title"
              class="todo_item"
            >
              <span>{{ item.time }}</span>
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </template>
    </t-calendar>
    <h2>Layout 布局</h2>
    <h3>基础布局</h3>
    <t-row>
      <t-col :span="24">
        <div class="grid-content ep-bg-purple-dark" />
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="12">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="12">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="8">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="8">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="8">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="10">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="2">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="2">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <h3>分栏间隔</h3>
    <t-row :gutter="16">
      <t-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="10">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="2">
        <div class="grid-content ep-bg-purple-light" />
      </t-col>
      <t-col :span="2">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <t-row :gutter="20">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <h3>列偏移</h3>
    <t-row :gutter="20">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <t-row :gutter="20">
      <t-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
      <t-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <t-row :gutter="20">
      <t-col :span="12" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </t-col>
    </t-row>
    <h3>对齐方式</h3>
    <t-row class="row-bg">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <t-row class="row-bg" justify="center">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <t-row class="row-bg" justify="end">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <t-row class="row-bg" justify="space-between">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <t-row class="row-bg" justify="space-around">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <t-row class="row-bg" justify="space-evenly">
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple-light" /></t-col>
      <t-col :span="6"><div class="grid-content ep-bg-purple" /></t-col>
    </t-row>
    <h2>Carousel</h2>
    <h3>箭头显示</h3>
    <h4>always</h4>
    <t-carousel height="150px" arrow="always">
      <t-carousel-item uid="1">1</t-carousel-item>
      <t-carousel-item uid="2">2</t-carousel-item>
      <t-carousel-item uid="3">3</t-carousel-item>
      <t-carousel-item uid="4">4</t-carousel-item>
    </t-carousel>
    <h4>hover</h4>
    <t-carousel height="150px" arrow="hover">
      <t-carousel-item uid="1">1</t-carousel-item>
      <t-carousel-item uid="2">2</t-carousel-item>
      <t-carousel-item uid="3">3</t-carousel-item>
      <t-carousel-item uid="4">4</t-carousel-item>
    </t-carousel>
    <h4>never</h4>
    <t-carousel height="150px" arrow="never">
      <t-carousel-item uid="1">1</t-carousel-item>
      <t-carousel-item uid="2">2</t-carousel-item>
      <t-carousel-item uid="3">3</t-carousel-item>
      <t-carousel-item uid="4">4</t-carousel-item>
    </t-carousel>
    <h2>Loading</h2>
    <h3>区域加载</h3>
    <t-table
      :column-data="columnData"
      :table-data="tableData"
      border
      v-loading="loading"
      loading-text="加载中"
    />
    <!-- <t-table
      :column-data="columnData"
      :table-data="tableData"
      border
      v-loading="loading"
      loading-text="等待中"
      loading-background="rgba(122, 122, 122, 0.6)"
    /> -->
    <t-button @click="loading = !loading">切换加载状态</t-button>
    <h3>让加载组件铺满整个屏幕</h3>
    <t-button type="primary" @click="openFullScreenLoading">
      As a service
    </t-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TMessage, TLoading } from "@test-ui/components";
import {
  treeData,
  columnData,
  columnData2,
  columnData3,
  tableData,
} from "./lib";

const loading = ref(true);
const treeRef = ref(null);
const active = ref(0);
const currentPage1 = ref(1);
const currentPage2 = ref(6);
const bigTableData = [...Array(50).keys()].map((i) => {
  return {
    name: `张三${i}`,
    date: 18 + i,
    address: `北京市海淀区${i}号`,
  };
});

const bigTableData2 = [...Array(50).keys()].map((i) => {
  return {
    date: 0 + i,
    name: `Tom${i}`,
    state: "California",
    city: "Los Angeles",
    address: `No. ${i}, Grove St, Los Angeles`,
    zip: "CA 90036",
    tag: "Office",
  };
});
const activeNames1 = ref([]);
const activeNames2 = ref([]);
const todoList = {
  "2025-02-06": [
    { title: "待办1", time: "09:00" },
    { title: "待办2", time: "10:00" },
  ],
  "2025-02-10": [
    { title: "炒股", time: "09:00" },
    { title: "干饭", time: "10:00" },
    { title: "夜生活开始", time: "10:00" },
  ],
};
const handleMessage = (type, showClose, time) => {
  TMessage({
    type,
    message: type,
    showClose,
    duration: time,
  });
};

const handleClickNode = (node) => {
  console.log(node);
};

const getCheckedNodes = () => {
  const keys = treeRef.value?.getCheckedNodes();
  console.log("keys: ", keys);
};

const setCheckedNodes = () => {
  treeRef.value?.setCheckedNodes(["1-1", "3-3"]);
};

const handleNextStep = () => {
  active.value += 1;
  if (active.value > 4) {
    active.value = 0;
  }
};

const openFullScreenLoading = () => {
  const loading = TLoading.service({
    text: "全屏加载",
    background: "rgba(0, 0, 0, 0.7)",
  });

  setTimeout(() => {
    loading.close();
  }, 3000);
};
</script>

<style scoped>
.todo-cell {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.todo_list {
  flex: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.todo_item {
  margin: 6px 0;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  box-sizing: border-box;
  font-size: 14px;
}
.todo-demo :deep(.t-calendar-table) tbody .t-calendar-day {
  height: 120px;
}

.t-row {
  margin-bottom: 20px;
}

.t-row:last-child {
  margin-bottom: 0;
}

.t-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple-dark {
  background-color: #99a9bf;
}
.ep-bg-purple {
  background-color: #d3dce6;
}
.ep-bg-purple-light {
  background-color: #e5e9f2;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.t-carousel-item {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.t-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.t-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
