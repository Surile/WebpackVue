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
                <div class=vosic_content v-if="vosic.yxpfyy_fe">
                    <img :src="vosic.gszbannert01_ff" :alt="vosic.YXMC_8f" />
                    <div class="vosic_title">
                        <div>
                            <span>{{vosic.YXMC_8f}}</span> |
                            <span>{{vosic.yxpfyy_fe.pfmc_ff}}</span>
                        </div>
                        <div>
                            <span>CV:</span>{{vosic.yxpfyy_fe.yxcv_ff}}
                        </div>
                    </div>
                    <div class="vosic_list">
                        <ul v-for="(item,index) in vosic.yxpfyy_fe.yylb1_c8" :key="index">
                            <li>{{item.yywa1_f2}}</li>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    抱歉，暂无数据
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
    width: 600px;
    margin: 3rem auto;
}
.vosic_content img {
    width: 100%;
    object-fit: cover;
    z-index: 10;
}
.vosic_title {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    height: 100px;
    line-height: 155px;
    margin: -103px 0px 0px 0px;
    background: linear-gradient(0deg, #000 0, #000 30%, transparent);
    position: relative;
    padding: 0px 20px;
}
.vosic_list {
    margin: 2rem 0px;
}
</style>
