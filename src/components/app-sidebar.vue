<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#">正在热播</a>
      </li>
      <li>
        <a href="#">即将上映</a>
      </li>
      <li>
        <a href="#">Top250</a>
      </li> -->
      <!-- tag属性是指外层包裹的标签 -->
      <!-- 高亮显示 -->
      <router-link active-class="active" :to="{ name: 'in_theaters' }" tag="li">
        <a href="#">正在热播</a>
      </router-link>
      <router-link active-class="active" :to="{ name: 'coming_soon'}" tag="li">
        <a href="#">即将上映</a>
      </router-link>
      <router-link active-class="active" :to="{ name: 'top250' }" tag="li">
        <a href="#">Top50</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
