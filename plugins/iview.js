import Vue from 'vue'
import {
  Button,
  Header,
  Menu,
  MenuItem,
  Icon,
  Submenu,
  Layout,
  Sider,
  Content
} from 'iview'

export default () => {
  Vue.component(Button.name, Button)
  Vue.component(Header.name, Header)
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Submenu.name, Submenu)
  Vue.component(Icon.name, Icon)
  Vue.component(Layout.name, Layout)
  Vue.component(Sider.name, Sider)
  Vue.component(Content.name, Content)
}
