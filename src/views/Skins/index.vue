<template>
    <div>
        <HeaderSection></HeaderSection>
        <div class="skin-flex">
            <div class="skin" v-for="skin in skins" :key="skin.title">
                <a :href="skin.url">
                    <img :src="skin.img" :alt="skin.title" />
                </a>
            </div>
        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
import { fetchSkins } from '../../client.js'

export default {
    name: 'Skins',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            skins: ''
        }
    },
    created() {
        this.fetchSkins()
    },
    methods: {
        fetchSkins: function() {
            fetchSkins()
                .then(result => {
                    this.skins = result.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
.skin-flex {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
}
.skin {
    margin: 1rem 0px 0px 4rem;
}
</style>
