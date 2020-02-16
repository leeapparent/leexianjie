<template>
  <div class="about">
    <h1>广告位列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="260"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="$router.push(`/abs/edit/${scope.row._id}`)">编辑</el-button>
          <el-button size="mini" type="text" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      //eslint-disable-next-line no-unused-vars
      const res = await this.$http.get("rest/abs");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定删除"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        //eslint-disable-next-line no-unused-vars
        const res = this.$http.delete(`rest/abs/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>
