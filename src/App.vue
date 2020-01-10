<template>
   <v-app>
      <cv-appbar v-if="signedIn" />
      <v-content>
         <div class="d-flex flex-no-wrap">
            <router-view />
         </div>
      </v-content>
   </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Appbar from "./components/layouts/Appbar";
export default {
   name: "App",
   components: {
      "cv-appbar": Appbar
   },
   computed: {
      ...mapGetters(["signedIn"])
   }
};
</script>

<style lang="scss">
.d-flex {
   display: flex;
}
.flex-no-wrap {
   flex-wrap: nowrap;
}
.p-3 {
   padding: 1rem;
}
</style>