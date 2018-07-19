<template>
    <div>
        <HeaderSection></HeaderSection>
        <div>

        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import HeaderSection from '../../components/HeaderSection'
import FooterSection from '../../components/FooterSection'
export default {
    name: 'Hero',
    components: {
        HeaderSection,
        FooterSection
    },
    data: function() {
        return {
            aritle: ''
        }
    },
    watch() {
        this.fetchAritle()
    },
    methods: {
        fetchAritle: function() {}
    }
}
</script>

<style>
</style>
