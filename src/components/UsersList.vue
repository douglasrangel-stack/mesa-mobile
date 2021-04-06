<template>
   <section class="list-users">
       <div class="container">
            <transition-group mode="out-in">
                    <div v-if="users  && users.length" class="row" key="users">
                        <h2 class="list-users__title col-md-12">Usuários cadastrados</h2>
                        <div class="col-md-4" v-for="user in users" :key="user.id">
                            <div class="box-users">
                                <div class="image" v-bind:style="{'background': 'url(' + user.avatar +') center/cover no-repeat'}">
                                    
                                </div>
                                <div class="user-content">
                                    <h2>{{user.first_name}} {{user.last_name}}</h2>
                                    <p>{{user.email}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="users && users.length === 0" key="notfound">
                        <p>Nenhum usuário encontrado</p>
                    </div>
                    <div v-else key="loader">
                        <Loader/>
                    </div>
            </transition-group>
        </div>
   </section>
</template>

<script>
import {api} from "@/services.js"

export default {
   data() {
       return {
           users: null,
           UsersPerPage: 12,
           UsersTotal: 0
       }
   },
   computed: {
       url() {
           let queryString = "";
           for(let key in this.$route.query) {
               queryString += `&${key}=${this.$route.query[key]}`;
           }
     
            return `/users?per_page=${this.UsersPerPage}${queryString}`;

       }
   },
   methods: {
       
        getUsers() {
            this.users = null;
            api.get(this.url).then((r) => {
            this.users = r.data.data;
    
        });
       
       
       }
    },
    watch: {
        url() {
        this.getUsers();
        }
    },
   created() {
       this.getUsers();
   }
}
</script>