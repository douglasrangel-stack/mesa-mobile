<template>
  <div>
    <section class="places-home">
      <div class="container">
        <h1 class="places-home__title">Lugares</h1>
        <p class="places-home__description">Divulgue e conheça locais incriveis que fazem parte do nosso precioso mundo.</p>
      </div>
    </section>
    <LocationsList/>
    <UsersList/>
  </div>
</template>

<script>
import LocationsList from '@/components/LocationsList.vue';
import UsersList from '@/components/UsersList.vue';

export default {
  name: 'Home',
  components: {
    LocationsList,
    UsersList,
  }
}
</script>


