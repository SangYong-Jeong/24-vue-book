<template>
  <section class="wrapper list-wrapper">
    <TableCp />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp.vue";

export default {
  name: "PaginationCp",
  components: { TableCp },
  props: ["page"],
  created() {
    console.log(this.page);
    this.$store.dispatch("ACT_BOOKS", this.page);
  },
};
</script>

<style lang="scss" scoped></style>
