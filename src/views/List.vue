<template>
  <PaginationCp :page="page || 1" />
</template>

<script>
import PaginationCp from "../components/list/PaginationCp.vue";

export default {
  name: "Pager",
  props: ["page"],
  components: { PaginationCp },
};
</script>
