<template>
    <div class="word">
        <img v-for="(item,index) in words" @click="goUrl(item,index)" :key="index" :src="item.img" />
    </div>
</template>

<script>
export default {
    name: 'WordRender',
    props: ['words', 'isWidth', 'isHeight'],
    methods: {
        goUrl: function(item, index) {
            if (item.type === '1') {
                alert('敬请期待')
            } else if (item.type === '0') {
                this.$router.push(`/worditem`)
            } else {
                this.$router.push({ path: `/word`, query: { index: index } })
            }
            // alert('敬请期待')
        }
    }
}
</script>

<style>
.word {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
}
.word img {
    object-fit: contain;
    margin: 10px 20px;
}
</style>
