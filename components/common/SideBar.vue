<template>
  <Menu
    ref="leftMenu"
    :active-name="activeMenu"
    :open-names="openedMenu"
    accordion
    theme="dark"
    width="auto"
    @on-select="clickMenu">
    <template v-for="item in menuList">
      <template v-if="item.child && item.child.length">
        <Submenu
          :name="item.route"
          :key="item.route">
          <template slot="title">
            <Icon :type="item.icon"></Icon>{{ item.name }}
          </template>
          <template
            v-for="sub in item.child">
            <MenuItem
              :name="sub.route"
              :key="sub.route"
              :to="sub.route"
            >{{ sub.name }}</MenuItem>
          </template>
        </Submenu>
      </template>
      <template v-else>
        <MenuItem
          :name="item.route"
          :key="item.route"
          :to="item.route">
        <Icon
          :type="item.icon"
          :key="item.route"></Icon>
        {{ item.name }}
        </MenuItem>
      </template>
    </template>
  </Menu>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { joinType } from '../../utils/common'
import { StoreModuleName } from '../../utils/constant'
import { GET_MENU_LIST } from '../../types/action-types'
import { CHANGE_ACTIVE_MENU } from '../../types/mutation-types'

const module = StoreModuleName.sideBar
const { mapState, mapMutations } = createNamespacedHelpers(module)

export default {
  name: 'VSideBar',

  computed: {
    ...mapState(['activeMenu', 'menuList']),

    openedMenu() {
      let activeMenuParent = []
      this.menuList.forEach(s => {
        if (s.route === this.activeMenu || !s.child) return

        s.child.forEach(c => {
          if (c.route === this.activeMenu) activeMenuParent.push(s.route)
        })
      })

      return activeMenuParent
    }
  },

  watch: {
    activeMenu: function(newVal) {
      const topRoute = this.menuList.find(s => s.route === newVal)
      if (!topRoute) return

      const menu = this.$refs.leftMenu
      const openedMenu = menu.$children.find(s => s.opened)
      if (openedMenu) openedMenu.opened = false
    }
  },

  mounted: function() {
    this.$store.dispatch(joinType(module, GET_MENU_LIST))
  },

  methods: {
    ...mapMutations({
      clickMenu: CHANGE_ACTIVE_MENU
    })
  }
}
</script>

<style scoped lang="less">
.ivu-menu .ivu-menu-item > i {
  margin-right: 8px;
}

.ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-child-item-active
  > .ivu-menu-submenu-title {
  font-weight: bold;
}

.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
  padding-left: 46px !important;
}
</style>
