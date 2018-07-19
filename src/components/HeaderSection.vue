<template>
  <header>
    <ul class="menus">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/words">世界</router-link>
      </li>
      <li>
        <router-link to="/skins">皮肤鉴赏</router-link>
      </li>
      <li>
        <router-link to="/voice">语音鉴赏</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import routes from '../routes'
export default {
    name: 'HeaderSection'
}
</script>

<style>
.menus {
    list-style: none;
    display: -webkit-box;
    background: #123041;
    padding: 10px;
}
.menus li {
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-left: 20px;
}
.menus li a {
    color: #7e9aa9;
    text-decoration: none;
}
</style>
