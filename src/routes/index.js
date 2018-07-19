import Home from '../views/Home'
import HeroList from '../views/Heros/HeroList'
import Hero from '../views/Heros/Hero'
import WordList from '../views/Words/WordList'
import WordItem from '../views/Words/WordItem'
import Word from '../views/Words/Word'
import Skins from '../views/Skins'
const routes = [
    {
        path: '/',
        name: '首页',
        component: Home
    },
    {
        path: '/heros',
        name: '英雄列表',
        component: HeroList
    },
    {
        path: '/hero',
        name: '英雄详情',
        component: Hero
    },
    {
        path: '/words',
        name: '世界',
        component: WordList
    },
    {
        path: '/worditem',
        name: '世界详情',
        component: WordItem
    },
    {
        path: '/word/:id',
        name: '世界内容',
        component: Word
    },
    {
        path: '/skins',
        name: '皮肤鉴赏',
        component: Skins
    }
]

export default routes
