<template>
    <div class="page-login">
        <div class="container">
            <form class="form-edit">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="name">Nome Completo</label>
                    <input type="text" name="name" id="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="first_name">Nome</label>
                    <input type="text" name="first_name" id="first_name" v-model="first_name">
                </div>
                <div class="form-group">
                    <label for="last_name">Sobrenome</label>
                    <input type="text" name="last_name" id="last_name" v-model="last_name">
                </div>
                <div class="form-group">
                    <label for="job">Job</label>
                    <input type="text" name="job" id="job" v-model="job">
                </div>
                <div class="form-group">
                    <button class="btn" @click.prevent="updateUser" type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapFields } from "@/helpers.js";
import {api} from "@/services.js";

export default {

    computed: {
    ...mapFields({
      fields: [
        "email",
        "name",
        "first_name",
        "last_name",
        "job",
      ],
      base: "user",
      mutation: "UPDATE_USER"
    })
  },
  methods: {
      updateUser() {
        api.put(`/users/${this.$store.state.user.id}`, this.$store.state.user).then(()=>{
            this.$store.dispatch("getUserUpdate",  this.$store.state.user.id);
            this.$router.push("/user");
        })
        .catch(error => {
            console.log(error);
        });
      }
  }
}
</script>