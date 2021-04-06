<template>
  <div id="app" class="app">
    <TheHeader/>
    <main class="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default ({
  components: {
    TheHeader,
    TheFooter
  },
})
</script>


<style>

</style>
