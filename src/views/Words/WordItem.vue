<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="con_box">
            <div class="cell_box">
                <p class="parting_line"></p>
                <div :class="index === 1 || index === 3 ? 'cell_right Top': 'cell_left'" v-for="(item,index) in wordList" :key="index">
                    <div class="cell_title">
                        <em class="rdo">
                            <i></i>
                        </em>
                        <p class="line"></p>
                        <span>{{item.time}}</span>
                    </div>
                    <div @click="$router.push(`/word/${item.id}`)">
                        <img :src="item.img" width="100%" :alt="item.title">
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
import { fecthwords } from '../../client'

export default {
    name: 'WordItem',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            wordList: ''
        }
    },
    created() {
        this.fetchWords()
    },
    methods: {
        fetchWords: function() {
            fecthwords()
                .then(result => {
                    this.wordList = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
.con_box {
    padding: 0 0 1rem 0.65rem;
    color: #346e8d;
    width: 1000px;
    margin: 0 auto;
}

.line {
    height: 0;
    border-top: 1px dotted #27759f;
    width: 60px;
    position: absolute;
    top: 50%;
    margin-top: 7px;
}

.cell_right,
.cell_left {
    padding-bottom: 0.55rem;
}

.cell_left {
    text-align: right;
    float: left;
    width: 487px;
}

.cell_right {
    float: right;
    width: 480px;
    text-align: left;
}

.cell_title {
    padding: 0 0 0 0;
    height: 38px;
    position: relative;
    margin-bottom: 15px;
}

.cell_left .rdo {
    right: -20px;
}

.cell_left .line {
    right: -0.2rem;
}

.cell_right .rdo {
    margin-left: -25px;
}

.rdo {
    width: 13px;
    height: 40px;
    text-align: center;
    position: absolute;
    z-index: 9;
    top: 50%;
    margin-top: -0.06rem;
    background: url(//game.gtimg.cn/images/yxzj/act/a20160510story/rdo.png)
        no-repeat 50% 50%;
    /* background-size: 100%; */
    margin-top: -0.38rem;
}

.parting_line {
    width: 2px;
    height: 100%;
    background: #194b66;
    background: -webkit-gradient(
        linear,
        0% 0%,
        0% 100%,
        from(#194b66),
        to(#11222a),
        color-stop(0.95, #14364a)
    );
    position: absolute;
    left: 50%;
}

.rdo_bg {
    width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    background: #0c202c;
}

.landscape {
    z-index: 9;
}

.cell_left .cell_title span {
    position: absolute;
    right: 75px;
    margin-top: 15px;
}

.cell_right .line {
    left: -0.2rem;
    right: 0;
}

.cell_right span {
    position: absolute;
    left: 75px;
    margin-top: 15px;
}

.pdm_ovh {
    padding-bottom: 1.5rem;
    overflow: hidden;
    height: 100%;
    -webkit-overflow-scrolling: touch;
}

.cell_box {
    position: relative;
    overflow: hidden;
    padding-top: 0.4rem;
}

.Top {
    margin-top: 80px;
}
</style>
