<template>
  <Menu
    v-if="menuList"
    ref="leftMenu"
    :active-name="activeMenu"
    :open-names="openedMenu"
    accordion
    theme="dark"
    width="auto"
    @on-select="changeMenu">
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

const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers(StoreModuleName.sideBar)

export default {
  name: 'VSideBar',

  computed: {
    ...mapState(['menuList', 'activeMenu']),
    ...mapGetters(['openedMenu'])
  },

  watch: {
    openedMenu: function() {
      this.updateMenuState()
    }
  },

  mounted: function() {
    this.getMenuList()

    const unwatch = this.$watch('menuList', function() {
      this.changeMenu(this.$route.name)
      this.updateMenuState()

      unwatch()
    })
  },

  methods: {
    ...mapMutations({
      changeMenu: CHANGE_ACTIVE_MENU
    }),

    ...mapActions({
      getMenuList: GET_MENU_LIST
    }),

    updateMenuState() {
      this.$nextTick(() => {
        this.$refs.leftMenu.updateActiveName()
        this.$refs.leftMenu.updateOpened()
      })
    }
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
