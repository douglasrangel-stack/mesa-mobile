<template>
    <div class="page-login">
        <div class="container">
            <form class="form-style">
                <h1 class="page-login__title">Login</h1>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" v-model="login.email">
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" v-model="login.password">
                </div>
                <div class="aligh-div-between">
                    <div class="form-group">
                        <button class="btn" @click.prevent="loginApi" type="submit">Logar</button>
                    </div>
                    <router-link to="/register" class="btn-link">
                        Crie sua conta
                    </router-link>
                </div>
                <Error :error="error"/>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            login: {
                email: "",
                password: "",
                id: "",
            },
            error: [],
        }
    },
    methods: {
        loginApi() {
            this.error = [];
            this.$store.dispatch("loginUser", this.login).then((r) => {
                console.log(r.data.id);
                this.id = r.data.id;
                this.$store.dispatch("getUser", this.id);
                this.$router.push("/user");
            }).catch(error => {
                console.log(error.response.data.error);
                this.error.push(error.response.data.error);
            });
        }
    }
}
</script>