<template>
  <div class="pager-wrap">
    <a href="/?page=1" class="fa fa-step-backward pager"></a>
    <a href="/?page=1" class="fa fa-backward pager"></a>
    <a href="/?page=1" class="fa fa-caret-left pager"></a>
    <a href="/?page=1" class="pager active">1</a>
    <a href="/?page=1" class="pager">2</a>
    <a href="/?page=1" class="fa fa-caret-right pager"></a>
    <a href="/?page=1" class="fa fa-forward pager"></a>
    <a href="/?page=1" class="fa fa-step-forward pager"></a>
  </div>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  created() {
    console.log(this.pager);
  },
};
</script>

<style lang="scss" scoped>
.pager-wrap {
  margin: 2em auto;
  @include flex($h: center);
  .pager {
    padding: 0.625em 0.875em;
    border: 1px solid $success-color;
    margin-right: -1px;
    color: $accent-color;
    &.active {
      background-color: $grey-color;
      color: $light-color;
    }
  }
}
</style>
