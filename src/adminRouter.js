import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Index from './pages/Admin/Index.vue'
import Config from './pages/Admin/Config.vue'
import Node from './pages/Admin/Node.vue'
import NodeAdd from './pages/Admin/NodeAdd.vue'
import User from './pages/Admin/User.vue'
import TrafficLog from './pages/Admin/TrafficLog.vue'

import Logout from './pages/Auth/Logout.vue'
import Setting from './pages/Setting.vue'

const routes = [
    // Base
    {path: '/logout', name: 'logout', component: Logout},
    {path: '/setting', name: 'setting', component: Setting},

    {path: '/admin', name: 'index', component: Index},
    {path: '/admin/config', name: 'config', component: Config},
    {path: '/admin/nodes', name: 'nodes', component: Node},
    {path: '/admin/nodes/create', name: 'node-add', component: NodeAdd},
    {path: '/admin/trafficLogs', name: 'trafficLogs', component: TrafficLog},
    {path: '/admin/users', name: 'users', component: User},
];

const router = new VueRouter({
    routes,
    mode: 'history',
    history: true,
    linkActiveClass: 'active'
});

export default router;
