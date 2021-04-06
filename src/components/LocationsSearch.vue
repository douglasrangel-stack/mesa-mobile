<template>
   <div class="container">
       <form class="search-form">
            <div class="form-group">
                    <input type="text" name="search" id="search" v-model="search" placeholder="Buscar local">
            </div>
            <input class="btn" type="submit" value="Buscar" @click.prevent="searchLocations">
       </form>
   </div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
        }
    },
    methods: {
        searchLocations() {
            this.$router.push({query: { s: this.search}})
        }
    }
}
</script>