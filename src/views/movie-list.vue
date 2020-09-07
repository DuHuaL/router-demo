<template>
  <div>
    <h1 class="page-header">{{ title }}</h1>

    <div
      class="media"
      v-for="item in subjects"
      :key="item.id">
      <div class="media-left">
        <a href="#">
          <img class="media-object" :src="item.images.small" alt="...">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ item.title }}</h4>
        <!-- 电影介绍 -->
        {{ item.genres }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  // 发请求调actions获取数据
  created() {
    // 调用actions
    this.setData();
  },
  // 拿数据
  computed: {
    ...mapState('movieList', ['title', 'subjects'])
  },
  // 映射mapActions
  methods: {
    ...mapActions('movieList', ['setData'])
  }
};
</script>

<style>

</style>
