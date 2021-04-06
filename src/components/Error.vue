<template>
   <transition>
    <ul class="error" v-if="error.length > 0">
      <li v-for="(item, index) in error" :key="index" v-html="item"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: Array
  }
};
</script>