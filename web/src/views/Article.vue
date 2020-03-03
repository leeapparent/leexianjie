<template>
    <div class="page-article" v-if="model">
        <div class="d-flex py-2 px-2 border-Back">
            <div class="iconfont icon-back text-blue"></div>
            <div class="flex-1 text-blue">{{model.title}}</div>
            <div class="text-grey fs-xs">2020-03-02</div>
        </div>
        <div v-html="model.body" class="px-2 body fs-lg"></div>
        <div class="px-2 py-2 border-top">
            <div class="d-flex ai-center">
                <i class="iconfont icon-back fs-lg text-blue"></i>
                <strong class="text-blue fs-lg ml-1">相关资讯</strong>
            </div>
            <div class="pt-1">
                <router-link
                    class="py-1"
                    tag="div"
                    :to="`/articles/${item._id}`"
                    v-for="item in model.related"
                    :key="item._id"
                >{{item.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
  .border-Back {
    border-bottom: 1px solid #ccc;
  }
  .border-top {
    border-top: 4px solid #ccc;
  }
}
</style>
