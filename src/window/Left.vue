<template>
  <a-menu mode="inline" theme="dark" :inline-collapsed="menu_collapsed">
    <a-menu-item>
      <router-link to="/">
        <DashboardOutlined />
        <span>首页</span>
      </router-link>
    </a-menu-item>
    <a-menu-item>
      <router-link to="/about">
        <ClusterOutlined />
        <span>资产管理</span>
      </router-link>
    </a-menu-item>
    <a-menu-item>
      <ScheduleOutlined />
      <span>任务调度</span>
    </a-menu-item>
    <a-menu-item>
      <DeploymentUnitOutlined />
      <span>安装部署</span>
    </a-menu-item>
    <a-menu-item>
      <SettingOutlined />
      <span>系统设置</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
import {
  DashboardOutlined,
  ClusterOutlined,
  ScheduleOutlined,
  DeploymentUnitOutlined,
  SettingOutlined
} from "@ant-design/icons-vue";
import { inject } from 'vue';
export default {
  components: {
    DashboardOutlined,
    ClusterOutlined,
    ScheduleOutlined,
    DeploymentUnitOutlined,
    SettingOutlined
  },
  setup(){
    const menu_collapsed = inject("collapsed", false);
    return {
      menu_collapsed
    }
  }
};
</script>
