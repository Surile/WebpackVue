<template>
    <div>
        <HeaderSection></HeaderSection>
        <WordRender :words="wordList"></WordRender>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import WordRender from '../../components/WordRender'
import { wordList } from '../../const.js'
export default {
    name: 'WordList',
    components: {
        HeaderSection,
        FooterSection,
        WordRender
    },
    data: function() {
        return {
            wordList: wordList
        }
    }
}
</script>

<style>
</style>
