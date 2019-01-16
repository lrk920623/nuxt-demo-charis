import { StoreModuleName } from '../utils/constant'
import { CHANGE_ACTIVE_MENU } from '../types/mutation-types'

export default function({ route, store }) {
  // 路由变化时 更新侧边栏的activeMenu
  store.commit(`${StoreModuleName.sideBar}/${CHANGE_ACTIVE_MENU}`, route.name)
}
