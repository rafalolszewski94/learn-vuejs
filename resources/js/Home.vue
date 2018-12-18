<template>
  <div>
    <h1>Dashboard</h1>
    <a-row type="flex" :gutter="30">
      <a-col>
        <a-card>
          <h2>Timeline</h2>

          <a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>

      <a-col>
        <a-card>
          <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>

      <a-col>
        <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <a-calendar :fullscreen="false"/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      confirm(e) {
        this.$message.success('Click on Yes');
      },
      cancel(e) {
        this.$message.error('Click on No');
      },
    },
  }
</script>
