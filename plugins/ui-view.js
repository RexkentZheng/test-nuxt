import Vue from 'vue'

if (process.BROWSER_BUILD) {
  require('iview')
}

import { Layout, Submenu, Menu, MenuItem, Sider, Content, Icon, Button, Input, Message } from 'iview'



Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Sider', Sider);
Vue.component('Content', Content);
Vue.component('Icon', Icon);
Vue.component('Submenu', Submenu);
Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.component('Message', Message);
// Vue.component('', );
// Vue.component('', );
// Vue.component('', );
// Vue.component('', );
// Vue.component('', );
