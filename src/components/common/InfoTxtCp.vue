<template>
  <div class="info-wrap" :style="style">
    <div class="title">{{ datas.title }}</div>
    <div class="content">{{ datas.content }}</div>
  </div>
</template>

<script>
import mixinInfo from "@/components/mixins/mixinInfo";

export default {
  name: "InfoTxt",
  mixins: [mixinInfo],
};
</script>

<style lang="scss" scoped>
.info-wrap {
  @include flex;
  border-bottom: 1px solid $secondary-color;
  .title {
    color: $primary-color;
    width: 20%;
  }
  .content {
    color: $dark-color;
    width: 80%;
  }
}
</style>
