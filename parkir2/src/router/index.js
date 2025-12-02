import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TarifPage from '../views/TarifPage.vue'
import TambahTarif from '../views/TambahTarif.vue'
import HistoryPage from '../views/HistoryPage.vue'
import CCTV from '../views/CCTV.vue'
import PrinterPage from '../views/PrinterPage.vue'
import AkunPage from '../views/AkunPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import AdminView from '@/views/AdMin.vue'
import AkunOperator from '@/views/AkunOperator.vue'
import EditOperator from '@/views/EditOperator.vue'
import EditTarif from '@/views/EditTarif.vue'

const routes = [
  // === ADMIN AREA ===
    {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
    },

    {
    path: '/akun-operator/:id',
    name: 'AkunOperator',
    component: AkunOperator,
    props: true
    },

    {
    path: '/edit-operator/:id',
    name: 'EditOperator',
    component: EditOperator,
    props: true
    },
    { 
    path: '/editta/:id', 
    name: 'EditTarif', 
    component: EditTarif,
    props: true
  },

{ path: '/', name: 'HomePage', component: HomePage },
{ path: '/tarif', name: 'TarifPage', component: TarifPage },
{ path: '/tambah/tarif', name: 'TambahTarif', component: TambahTarif },
{ path: '/history', name: 'HistoryPage', component: HistoryPage },
{ path: '/cctv', name: 'CCTV', component: CCTV },
{ path: '/printerpage', name: 'PrinterPage', component: PrinterPage },
{ path: '/akun', name: 'AkunPage', component: AkunPage },
{ path: '/login', name: 'LoginPage', component: LoginPage },
{ path: '/signup', name: 'SignUp', component: SignUp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
