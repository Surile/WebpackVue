<template>
    <div>
        <HeaderSection></HeaderSection>
        <HeroRender :heros="heros"></HeroRender>
        <div class="more">
            <button @click="jump">
                更多英雄
            </button>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fetchHeroList } from '../../client'
import HeroRender from '../../components/HeroRender'

export default {
    name: 'Home',
    components: {
        HeaderSection,
        FooterSection,
        HeroRender
    },
    data: function() {
        return {
            heros: ''
        }
    },
    created() {
        this.fetchHeroList()
    },
    methods: {
        fetchHeroList: function() {
            fetchHeroList()
                .then(result => {
                    this.heros = result.data.data.heroList.slice(0, 12)
                })
                .catch(err => {
                    throw err
                })
        },
        jump: function() {
            this.$router.push('/heros')
        }
    }
}
</script>

<style>
.more {
    text-align: center;
}
.more button {
    background: #252c36;
}
</style>
