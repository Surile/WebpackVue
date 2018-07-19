<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="ovhbox">
            <div class="history_nav">
                <ul>
                    <li :class="tab === index && 'active'" v-for="(wordNav,index) in wordNavs" :key="wordNav.id" @click="switchTab(wordNav,index)">{{wordNav.title}}</li>
                </ul>
            </div>
            <div class="hero_detail txtbox">
                <div class="tips">{{WordData.title}}</div>
                <p class="time">{{WordData.time}}</p>
                <div class="txtcon">
                    <p v-for="(wordDetail,index) in WordData.textContent" :key="index" style="text-indent: 2em;">{{wordDetail}}</p>
                </div>
            </div>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fecthwords, fetchWord, fetchWordNav } from '../../client'
export default {
    name: 'Word',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            url: '',
            WordData: '',
            wordNavs: '',
            tab: 0
        }
    },
    created() {
        this.getWordDetails()
        this.getWordNavs()
    },
    methods: {
        getWordDetails: function() {
            fetchWord({
                id: this.$route.params.id
            })
                .then(result => {
                    this.WordData = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getWordNavs: function() {
            fetchWordNav(this.$route.params.id)
                .then(result => {
                    this.wordNavs = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        switchTab: function(wordNav, index) {
            fetchWord({
                id: wordNav.InfoId,
                url: wordNav.infourl
            })
                .then(result => {
                    this.WordData = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
            this.tab = index
        }
    }
}
</script>

<style>
.ovhbox {
    width: 100%;
    /* background: url(//game.gtimg.cn/images/yxzj/act/a20160510story/detail_bg5.jpg)
        no-repeat 50% 50%;
    background-size: 100%; */
    padding-bottom: 50px;
}

.txtbox {
    height: -webkit-fill-available;
}
.time {
    padding-bottom: 20px;
    text-align: center;
    font-size: 20px;
}
.txtcon p {
    padding-bottom: 15px;
    line-height: 45px;
    /* font-size: 23px; */
    font-weight: normal;
}
.history_nav {
    width: 100%;
    padding-top: 5%;
    text-align: center;
}
.history_nav ul {
    width: 740px;
    margin: 0px auto;
    list-style: none;
    display: flex;
}
.history_nav ul li {
    min-width: 100px;
    height: 50px;
    line-height: 50px;
    margin-left: 21px;
    background: #121c25;
    border: 1px solid #153040;
    cursor: pointer;
}
.history_nav ul li:hover {
    color: #ffffff;
    background: #153040;
}
.active {
    color: #ffffff;
    background: #153040;
}
</style>
