<template>
    <header class="main-header">
        <div class="container">
            <nav class="main-header__nav">
                <router-link to="/" class="logo">
                    <img class="main-header__logo" src="@/assets/images/logo.svg" alt="Mesa Mobile">
                </router-link>
                <router-link v-if="$store.state.login" to="/user" class="btn">
                    {{name}}
                </router-link>
                <router-link v-else to="/login" class="btn">
                    Login
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    computed: {
        name() {
            return this.$store.state.user.first_name;
        }
    }
}
</script>