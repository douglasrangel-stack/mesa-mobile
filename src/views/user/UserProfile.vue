<template>
  <div>
      <h1>{{$store.state.user.first_name}}</h1>
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