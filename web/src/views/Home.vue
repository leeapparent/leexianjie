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
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
          <span>{{news.categoryName}}</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list>
    <m-card icon=" card-hero" title="英雄列表"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: " .paginat-home"
        }
      },
      newsCats: [
        {
          name: "热门",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "新闻",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        },
        {
          name: "新闻",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "新闻",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        },
        {
          name: "公告",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        },
        {
          name: "活动",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "活动",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        },
        {
          name: "赛事",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "赛事",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        },
        {
          name: "热门",
          //eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "2月25日全服不停机更新公告",
            data: "02/24"
          }))
        }
      ]
    };
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
