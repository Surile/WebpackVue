<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="music_content">
            <ul>
                <li v-for="hero in heroNav" :key="hero.YXMC_8f" @click="vosicDetail(hero)">
                    {{hero.YXMC_8f}}
                </li>
            </ul>
            <div class="vosic">
                <img :src="vosic.gszbannert01_ff" :alt="vosic.YXMC_8f" />
                <p>{{vosic.YXMC_8f}}</p>
                <div v-if="vosic.yxpfyy_fe">
                    <p>{{vosic.yxpfyy_fe.pfmc_ff}}</p>
                    <p>{{vosic.yxpfyy_fe.yxcv_ff}}</p>
                </div>

            </div>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fetchvoiceNav, voiceDetail } from '../../client.js'
export default {
    name: 'Voice',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            vosic: '',
            heroNav: ''
        }
    },
    created() {
        this.getHeroNav()
        if (!this.vosic) {
            return null
        }
    },
    methods: {
        getHeroNav: function() {
            fetchvoiceNav()
                .then(result => {
                    this.heroNav = result.data.data.dhty_e9
                })
                .catch(err => {
                    console.log(err)
                })
        },
        vosicDetail: function(hero) {
            console.log(hero)
            voiceDetail(hero.yxid_a7)
                .then(result => {
                    console.log(result.data.data)
                    this.vosic = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
.music_content ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.music_content ul li {
    min-width: 100px;
    height: 50px;
    color: #ffffff;
}
.vosic {
    width: 700px;
    margin: 3rem auto;
}
</style>
