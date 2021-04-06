<template>
    <div class="page-login">
        <div class="container">
            <form class="form-style">
                <h1 class="page-login__title">Crie sua conta</h1>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" v-model="password">
                </div>
                <div class="aligh-div-between">
                    <div class="form-group">
                        <button class="btn" @click.prevent="createUser" type="submit">Criar</button>
                    </div>
                    <router-link to="/login" class="btn-link">
                        Login
                    </router-link>
                </div>
                <Error :error="error"/>
            </form>
        </div>
    </div>
</template>


<script>
import { mapFields } from "@/helpers.js";
export default {
data() {
        return {
            error: [],
        }
    },
    computed: {
    ...mapFields({
      fields: [
        "email",
        "password",
      ],
      base: "user",
      mutation: "UPDATE_USER"
    })
  },
  methods: {
     async createUser() {
         try {
             this.error = [];
            await  this.$store.dispatch("createUser", this.$store.state.user);
            await this.$store.dispatch("getUser", this.$store.state.user.id);
            this.$router.push("/user");
         } catch (error) {
             this.error.push(error.response.data.error);
         }
      }
  }
}
</script>