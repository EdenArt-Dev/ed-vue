import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Whitepaper
import Introduction from '../views/whitepaper/introduction/Introduction.vue'
import BlockchainMachanic from '../views/whitepaper/introduction/BlockchainMachanic.vue'
import CoreGameMachanic from '../views/whitepaper/introduction/CoreGameMachanic.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    // Whitepaper
    {
        path: '/whitepaper/introduction',
        name: 'Introduction',
        component: Introduction
    },
    {
        path: '/whitepaper/introduction/blockchain-machanic',
        name: 'BlockchainMachanic',
        component: BlockchainMachanic
    }, {
        path: '/whitepaper/introduction/core-game-machanic',
        name: 'CoreGameMachanic',
        component: CoreGameMachanic
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router