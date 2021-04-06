<template>
    <div>
        <section class="modal_vx" v-if="item" @click="closeModal">
            <div class="modal_container">
                <div class="modal_box">
                    <button @click="item = false" class="modal_close">X</button>
                    <h2>{{item.name}}</h2>
                    <h3>{{item.state}}</h3>
                    <p>{{item.description}}</p>
                    <div class="reviews">
                        <h5>Reviews</h5>
                        <div class="review" v-for="review in item.reviews" :key="review.name">
                            <p class="review_name">
                                {{review.name}} | {{review.star}} estrelas
                            </p>
                            <p class="review_description">{{review.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <form class="search-form">
                <div class="form-group">
                        <input type="text" name="search" id="search" v-model="search" placeholder="Buscar local">
                </div>
            </form>
            <transition-group mode="out-in">       
                <div v-if="result  && result.length" class="row" key="locations">
                    <div class="col-md-3" v-for="location in result"  @click="openModal(location.id)" :key="location.id">
                        <div class="location_box">
                            <img :src="location.image" alt="">
                            <h2>{{location.name}}</h2>
                            <p>{{location.state}}</p>
                        </div>
                    </div>
                </div>
                <div v-else-if="result && result.length === 0" key="notfound">
                        <p class="notfound">Nenhum local encontrado</p>
                </div>
                <div v-else key="loader">
                    <Loader/>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>

export default {

 data() {
     return {
            itens: [],
            item: false,
            search: "",
     }
  },
  computed: {
      result: function() {
          if(this.search == '' || this.search == ' ') {
              return this.itens;
          } else {
              return this.itens.filter(itens => itens.name.toLowerCase().includes(this.search.toLowerCase()));
          }
      }
  },
  methods: {
    fetchLocations() {
        fetch("https://douglasrangel.com/api/locations.json")
        .then((r) => r.json())
        .then((r) => {
            this.itens = r;
        });
    },
    fetchLocation(id) {
      fetch(`https://douglasrangel.com/api//${id}/location.json`)
        .then((r) => r.json())
        .then((r) => {
          this.item = r;
        });
    },
    openModal(id) {
      this.fetchLocation(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    closeModal(event) {
      if (event.target.className === "modal_vx") this.item = false;
    }
  },
  created() {
    this.fetchLocations();
  }
  
}
</script>