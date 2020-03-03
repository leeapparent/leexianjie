<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/01046c6f3ccfeaed4491d22efb58df59.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/e3ce1d42d93eb45414322e3634a04598.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/e38db707a96d8458101c78ecf644e467.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination paginat-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- nav -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div>爆料</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- iconsy -->
    <m-list icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">{{ news.categoryName }}</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis">{{ news.title }}</span>
          <!-- <span>{{ news.createdAt | date }}</span> -->
        </router-link>
      </template>
    </m-list>
    <m-list icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0  -0.5rem">
          <div
            class="p-1 text-center"
            style="width:20%"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" alt="" class="w-100">
            <div>{{hero.name}}</div>
          </div>
        </div>
      </template>
    </m-list>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: " .paginat-home"
        }
      },
      newsCats: [],
      heroCats: []
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("/news/list");
      this.newsCats = res.data;
    },
    async fetchHeros() {
      const res = await this.$http.get("/heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeros();
  }
};
</script>

<style lang="scss">
.paginat-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #4b67af;
    }
  }
}

// nav
.nav-icons {
  border-bottom: 1px solid #ccc;
  .nav-item {
    width: 25%;
    border-right: 1px solid #d4d9de;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
