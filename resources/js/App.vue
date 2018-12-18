<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">{{ 'Vue' }}</div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="home"/>
          <span>Home</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="space-between">
          <a-col>
            <!--<a-icon-->
              <!--class="trigger"-->
              <!--:type="collapsed ? 'menu-unfold' : 'menu-fold'"-->
              <!--@click="()=> collapsed = !collapsed"-->
            <!--/>-->
          </a-col>
          <a-col :style="{marginRight: '16px'}">
            <a-row type="flex" align="middle">
              <a-col>
                <a-input-search
                  placeholder="input search text"
                  style="width: 200px"
                  :style="{marginRight: '16px'}"
                  @search="onSearch"
                />
              </a-col>
              <a-col>
                <a-dropdown :trigger="['click']">
                  <a href="#" class="ant-dropdown-link" :style="{display: 'block'}">
                    <a-badge>
                      <a-avatar shape="square" icon="user"/>
                    </a-badge>
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a href="#">Profile</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#">Settings</a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a href="#">Logout</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: true,
      };
    },
    methods: {
      onSearch(val) {
        console.log(val);
      },
    },
  }
</script>

<style>
  #components-layout-demo-custom-trigger {
    min-height: 100vh;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    display: inline-block;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    margin: 16px;
  }
</style>
