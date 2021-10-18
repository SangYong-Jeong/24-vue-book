<template>
  <div class="info-wrap" :style="style">
    <div class="title">{{ datas.title }}</div>
    <div class="content">
      <div v-if="datas.content">
        <img :src="datas.content" :alt="datas.title" class="img" />
      </div>
      <div v-if="datas.fileName">
        <a :href="datas.filePath">{{ datas.fileName }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import mixinInfo from "@/components/mixins/mixinInfo";

export default {
  name: "InfoImg",
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
    .img {
      max-width: 120px;
    }
  }
}
</style>
