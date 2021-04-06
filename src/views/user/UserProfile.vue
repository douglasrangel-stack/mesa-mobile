<template>
  <div class="page-profile">
        <img :src="$store.state.user.avatar" :alt="$store.state.user.first_name">
        <h1>{{$store.state.user.first_name}} {{$store.state.user.last_name}}</h1>
        <p>{{$store.state.user.email}}</p>
        <p v-if="$store.state.user.job"><strong>Job: </strong>{{$store.state.user.job}}</p>
        <router-link :to="{name: 'Alter'}" class="btn">
            Editar perfil
        </router-link>
        <button class="btn" @click.prevent="logout">Deslogar</button>
  </div>
  
</template>

<script>
export default {
    name: "UserProfile",
    methods: {
        logout() {
            this.$store.dispatch("logoutUser");
            this.$router.push("/login");
        }
    }
};
</script>