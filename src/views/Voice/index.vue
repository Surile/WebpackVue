<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="music_content">
            <ul class="meuns">
                <li :class="tab === index && 'active'" v-for="(hero,index) in heroNav" :key="index" @click="vosicDetail(hero,index)">
                    {{hero.YXMC_8f}}
                </li>
            </ul>
            <div class="vosic">
                <div class=vosic_content v-if="vosic.yxpfyy_fe">
                    <img :src="vosic.gszbannert01_ff" :alt="vosic.YXMC_8f" />
                    <div class="vosic_title">
                        <div>
                            <span>{{vosic.YXMC_8f}}</span>
                            <span v-if="vosic.yxpfyy_fe.pfmc_ff">|</span>
                            <span>{{vosic.yxpfyy_fe.pfmc_ff}}</span>
                        </div>
                        <div>
                            <span v-if="vosic.yxpfyy_fe.yxcv_ff">CV:</span>{{vosic.yxpfyy_fe.yxcv_ff}}
                        </div>
                    </div>
                    <div class="vosic_list">
                        <ul v-for="(item,index) in vosic.yxpfyy_fe.yylb1_c8" :key="index">
                            <li>
                                {{item.yywa1_f2}}
                                <span class="icon" :class="classIndex === index && show ? 'play' : 'init'" @click="startPlayOrPause(item,index)"></span>
                            </li>
                        </ul>
                        <audio ref="audio" :src="autionSrc" controls="controls"></audio>
                    </div>
                </div>
                <div v-else>
                    <div class="hero_detail">
                        <div class="tips">本故事纯属虚构</div>
                        <p style="margin:20px auto">
                            <img :src="vosic.blzpcyxdtbtmcc930x680_8d" />
                        </p>
                        <p style="text-indent:2rem" v-html="vosic.blzpcyxbjgs_e5"></p>
                    </div>
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
            heroNav: '',
            is_id: 187,
            tab: 0,
            show: false,
            classIndex: 0,
            autionSrc: '',
            playNumber: 0
        }
    },
    created() {
        this.getHeroNav()
        this.vosicDetail()
        // this.startPlayOrPause()
        console.log(this.$refs.audio)
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
        vosicDetail: function(hero, index) {
            if (hero || index) {
                this.is_id = hero.yxid_a7
                this.tab = index
            }
            voiceDetail(this.is_id)
                .then(result => {
                    this.vosic = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        startPlayOrPause: function(item, index) {
            if (this.playNumber === 0) {
                this.$refs.audio.src = item.yyyp1_1f
                !this.show ? this.$refs.audio.play() : this.$
                this.playNumber = 1
            } else if (this.playNumber === 1) {
                this.show ? this.$refs.audio.pause() : this.$refs.audio.play()
            }
            this.show = !this.show
            this.classIndex = index
        }
    }
}
</script>

<style>
.music_content {
    width: 100%;
    min-height: 1000px;
}
.meuns {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
}
.meuns li {
    min-width: 100px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    margin-top: 1rem;
}
.meuns li:hover {
    background: #153040;
    color: #ffffff;
}
.vosic {
    width: 600px;
    height: auto;
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

.vosic_list ul {
    background: #153040;
    list-style: none;
}
.vosic_list ul li {
    padding: 15px 20px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #52565a;
    display: flex;
    justify-content: space-between;
}
.icon {
    display: block;
    margin-left: 0.08rem;
    width: 2.5rem;
    position: relative;
    margin-top: -4px;
    height: 2.5rem;
    background-size: 100% 100%;
}
.pause,
.init {
    background-image: url(//game.gtimg.cn/images/yxzj/act/a20161209story/icon-play.png);
}
.play {
    background-image: url(http://game.gtimg.cn/images/yxzj/act/a20161209story/icon-pause.png);
}
</style>
