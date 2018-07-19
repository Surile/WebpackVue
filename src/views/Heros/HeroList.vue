<template>
    <div>
        <HeaderSection></HeaderSection>
        <!-- <div class="category">
            <span :class="tab === index && 'activie'" v-for="(category,index) in catrgories" :key="index" @click="onCategory(category.type,index)">
                {{category.text}}
            </span>
        </div> -->
        <HeroRender :heros="heroList"></HeroRender>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fetchHeroList } from '../../client.js'
import HeroRender from '../../components/HeroRender'

export default {
    name: 'HerosList',
    components: {
        HeaderSection,
        FooterSection,
        HeroRender
    },
    data: function() {
        return {
            heroList: '',
            catrgories: '',
            tab: 0,
            allHeroList: ''
        }
    },
    created() {
        this.fetchHeros()
    },
    methods: {
        fetchHeros: function() {
            fetchHeroList()
                .then(result => {
                    this.heroList = result.data.data.heroList
                    this.catrgories = result.data.data.nav
                    this.allHeroList = result.data.data.heroList
                })
                .catch(err => {
                    throw err
                })
        },
        onCategory: function(type, index) {
            if (type === 'all') {
                this.heroList = this.allHeroList
            } else {
                this.heroList = this.allHeroList.filter(
                    item => item.camptype === type
                )
            }
            this.tab = index
        }
    }
}
</script>

<style>
/* .category {
    display: flex;
    margin: 20px 0px;
}
.category span {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #03a9f4;
    margin-left: 32px;
    border-radius: 10px;
    cursor: pointer;
}
.activie {
    color: #ffffff;
    background: #03a9f4;
} */
</style>
