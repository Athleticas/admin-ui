import Vue from 'vue'
import './style/reset.css'
import ThemeGenerator from './theme'

import Directives from './directives'

// import all comps
import Button from './components/button'
import Menu from './components/menu'
import Icon from './components/icon'
import Collapse from './components/collapse'
import Frame from './components/frame'
import Scroller from './components/scroller'
import Popover from './components/popover'
import Grid from './components/grid'
import Table from './components/table'
import Panel from './components/panel'
import Tree from './components/tree'
import Upload from './components/upload'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Switch from './components/switch'
import Radio from './components/radio'
import Select from './components/select'
import Cascading from './components/cascading'
import Datepicker from './components/datepicker'
import Timepicker from './components/timepicker'
import Toast from './components/toast'
import Modal from './components/modal'
import MessageBox from './components/message-box'

// add all comps into an array
const components = [
  Button,
  Menu,
  Icon,
  Collapse,
  Frame,
  Scroller,
  Popover,
  Grid,
  Table,
  Panel,
  Tree,
  Upload,
  Input,
  Checkbox,
  Switch,
  Radio,
  Select,
  Cascading,
  Datepicker,
  Timepicker,
  Toast,
  MessageBox,
  Modal
]

// export comps one by one
export {
  Button,
  Menu,
  Icon,
  Collapse,
  Frame,
  Scroller,
  Popover,
  Grid,
  Table,
  Panel,
  Tree,
  Upload,
  Input,
  Checkbox,
  Switch,
  Radio,
  Select,
  Cascading,
  Datepicker,
  Timepicker,
  Toast,
  Modal,
  MessageBox
}

// export all comps as an object
const adminUi = {
  Button,
  Menu,
  Icon,
  Collapse,
  Frame,
  Scroller,
  Popover,
  Grid,
  Table,
  Panel,
  Tree,
  Upload,
  Input,
  Checkbox,
  Switch,
  Radio,
  Select,
  Cascading,
  Datepicker,
  Timepicker,
  Toast,
  Modal,
  MessageBox
}

adminUi.install = function (Vue, options = {}) {
  // install all the comps
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$messageBox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$toast = Toast
}

// add direvtives installing function
adminUi.direvtive = function (Vue) {
  for (let name in Directives) {
    Vue.directive(name, Directives[name])
  }
}

// add theme generator function
adminUi.theme = function (theme) {
  let styleTag = window.document.querySelector('style#admin-ui-theme') || window.document.createElement('style')

  styleTag.id = 'admin-ui-theme'
  styleTag.innerHTML = ThemeGenerator(theme)
  window.document.querySelector('head').appendChild(styleTag)
}
// gen default theme
adminUi.theme()
// gen directive
adminUi.direvtive(Vue)
export default adminUi