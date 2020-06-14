<template>
  <div class="overview">
    <el-card>统计</el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['roles'])
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
</style>
