<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="hero_detail">
            <div class="tips">{{title}}</div>
            <h4 class="history" v-if="details.historyTitle" @click="toShow"></h4>
            <div v-for="(detail,index) in details.heroDetail" :key="index">
                <p style="text-indent:2rem" v-if="detail.type === 'text'">{{detail.text}}</p>
                <p style="margin:20px auto" v-if="detail.type === 'img'">
                    <img :src="detail.text" :alt="title" />
                </p>
            </div>
            <transition name="fade">
                <div class="mode" v-if="show">
                    <div class="modeContent">
                        <h4>{{details.historyTitle}}
                            <i></i>
                        </h4>
                        <div class="history_conetnt">{{details.historyContent}}</div>
                        <div class="close_btn" @click="toShow" id="close_btn"></div>
                    </div>
                </div>
            </transition>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fetchhero, fetchHeroList } from '../../client.js'
import { mapState } from 'vuex'
export default {
    name: 'Hero',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            title: '',
            details: '',
            show: false
        }
    },
    methods: {
        toShow: function() {
            this.show = !this.show
        }
    },
    beforeMount() {
        let index = this.$route.query.index
        fetchHeroList()
            .then(result => {
                this.title = result.data.data.heroList[index].title
                fetchhero({
                    id: result.data.data.heroList[index].heroid,
                    url: result.data.data.heroList[index].infourl
                })
                    .then(result => {
                        this.details = result.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>

<style>
.hero_detail {
    margin: 20px auto;
    width: 740px;
    font-family: cursive;
    position: relative;
    overflow: hidden;
    background: url(//game.gtimg.cn/images/yxzj/act/a20160824jyj/righttop2.jpg)
        no-repeat right 0;
}
.tips {
    width: 100%;
    padding: 0px 0 20px;
    margin: 0 auto 20px;
    font-size: 24px;
    height: auto;
    text-align: center;
    border-bottom: 1px solid #313948;
    background: url(https://game.gtimg.cn/images/yxzj/act/a20170405stroyhero/storytips.png)
        no-repeat center 0.65rem;
    background-size: 66% auto;
    background-position-y: 20px;
}

.hero_detail h2 {
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
}
.hero_detail p {
    line-height: 50px;
}
.hero_detail p img {
    width: 731px;
    height: 343px;
}
.history {
    margin: auto;
    width: 223px;
    height: 61px;
    background: url(https://game.gtimg.cn/images/yxzj/act/a20170405stroyhero/storyimg5.png)
        no-repeat;
    background-size: 100% 100%;
    margin-bottom: 20px;
    cursor: pointer;
}

.mode {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modeContent {
    margin: auto;
    width: 921px;
    height: 493px;
    background: url(https://game.gtimg.cn/images/yxzj/act/a20170405stroyhero/storyimg1.png)
        no-repeat;
    background-size: 100% 100%;
}
.modeContent h4 {
    position: absolute;
    width: 32px;
    margin: 0.55rem 0 0 0.6rem;
    line-height: 1.1em;
    font-size: 28px;
    color: #3c382b;
    font-weight: bolder;
    margin-top: 7rem;
    margin-left: 2.5rem;
}
.modeContent h4 i {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 1.24rem auto;
    background: url(https://game.gtimg.cn/images/yxzj/act/a20170405stroyhero/storyimg3.png)
        no-repeat;
    background-size: 100% 100%;
}

.history_conetnt {
    width: 723px;
    margin: 40px 0px 0px 130px;
    height: 428px;
    overflow: auto;
    font-size: 22.5px;
    color: #333026;
    line-height: 40px;
    text-align: left;
    font-weight: 600;
    -webkit-mask-image: -webkit-gradient(
        linear,
        left 85%,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
    );
}
a {
    text-decoration: none;
    outline: 0;
    color: #fff;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}
.close_btn {
    position: absolute;
    margin-left: 54.7rem;
    width: 30px;
    height: 30px;
    background: url(https://game.gtimg.cn/images/yxzj/act/a20170405stroyhero/colse.png)
        no-repeat;
    background-size: 100% 100%;
    margin-top: -27.5rem;
    cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
