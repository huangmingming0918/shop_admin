<template>
  <el-container class="home">
    <el-header class="home-header"
      ><el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <img src="@/assets/images/logo.png" alt="黑马程序员" />
        </el-col>
        <el-col class="title" :span="6">电商后台管理系统 </el-col>
        <el-col class="desc" :span="4"
          >欢迎上海前端27期星曜会员<a
            class="logout"
            @click.prevent="logout"
            href="javescript:;"
            >退出</a
          >
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <!--
          菜单：

          el-menu 菜单组件：
            default-active 默认选中菜单的 index 值
            @open sub-menu 菜单展开的回调
            @close sub-menu 菜单收起的回调
            text-color 菜单文字颜色
            active-text-color 激活菜单文字颜色

          el-submenu 子级菜单：表示一个可展开的二级菜单
            <el-submenu index="1">
              template 用来设置可展开菜单标题以及小图标
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              el-menu-item-group 表示菜单分组
              <el-menu-item-group>
                template 在这表示设置该菜单组的标题
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          el-menu-item 每一个菜单项（ 不能展开 ）
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>    菜单的小图标
              <span slot="title">导航二</span> 菜单名称
            </el-menu-item>
        -->
        <!--
          :router="true" 才表示给 router 属性的值为：布尔值
          如果使用 router="true" 此时，true就是字符串，而不是布尔值
        -->
        <el-menu
          :router="true"
          default-active="1-1"
          class="home-header-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 第一个菜单： -->
          <el-submenu index="1">
            <!-- 一级菜单标题： -->
            <template slot="title">
              <i class="el-icon-location"></i> <span>用户管理</span>
            </template>

            <!-- 二级菜单： -->
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i> <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 第二个菜单： -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i> <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i> <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i> <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 第三个菜单： -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i> <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i> <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i> <span slot="title">分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i> <span slot="title">商品分类</span>
            </el-menu-item>
          </el-submenu>

          <!-- 第四个菜单： -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i> <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i> <span slot="title">订单列表</span>
            </el-menu-item>
          </el-submenu>

          <!-- 第五个菜单： -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i> <span>数据统计</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i> <span slot="title">数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- 子路由出口： -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    logout () {
      this.$confirm('您是否确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功'
          })

          localStorage.removeItem('token')

          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          })
        })
    }
  }
}
</script>

<style lang="less">
.el-header {
  padding: 0;
}

.home {
  height: 100%;
  background-color: #eaeef1;

  &-header {
    line-height: 60px;
    background-color: #b3c1cd;
    img {
      width: 200px;
    }

    .title {
      font-size: 30px;
      color: #fff;
      font-weight: bolder;
    }

    .desc {
      min-width: 234px;
      font-weight: bolder;

      .logout {
        color: #daa520;
      }
    }

    &-menu {
      height: 100%;
    }
  }
}
</style>
