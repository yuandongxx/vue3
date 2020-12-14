<template>
  <a-menu
  mode="inline"
  theme="dark"
  >
  
      <a-menu-item>
        <DashboardOutlined />
        Navigation Two
      </a-menu-item>
      <a-menu-item>
        <ClusterOutlined />
        Navigation Two
      </a-menu-item>
      <a-menu-item>
        <ScheduleOutlined />
        Navigation Two
      </a-menu-item>
      <a-menu-item>
        <DeploymentUnitOutlined />
        Navigation Two
      </a-menu-item>
      <a-menu-item>
        <SettingOutlined />
        Navigation Two
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
} from "@ant-design/icons-vue"
export default {
  components: {
    DashboardOutlined,
    ClusterOutlined,
    ScheduleOutlined,
    DeploymentUnitOutlined,
    SettingOutlined
    }
}
</script>