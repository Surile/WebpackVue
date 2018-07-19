<template>
    <div>
        <div class="card">
            <div class="hero" v-for="(hero,index) in heros" :key="hero.heroid">
                <img @click="$router.push({ path:`hero`, query:{
                    index:index
                }})" :src="hero.heroimg" :alt="hero.title" :ads="hero.heroid" />
                <!-- <div class="title">{{hero.title}}</div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroRender',
    props: ['heros']
}
</script>

<style>
.card {
    display: flex;
    flex-wrap: wrap;
}
.hero {
    margin: 20px 3.5rem;
}
.hero img {
    object-fit: cover;
    cursor: pointer;
}
.hero img:hover {
    box-shadow: 1px 5px 14px;
    transition-duration: 0.5s, 0.5s;
}
.title {
    font-size: 21px;
    font-weight: 400;
    color: #7e9aa9;
}
.more {
    margin: 20px 0px;
}
.more button {
    border: 0px;
    font-size: 20px;
    color: #7e9aa9;
}
</style>
