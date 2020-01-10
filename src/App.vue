<template>
   <v-app>
      <cv-appbar />
      <v-content>
         <div class="d-flex flex-no-wrap">
            <router-view />
         </div>
      </v-content>
   </v-app>
</template>

<script>
import Appbar from "./components/layouts/Appbar";

export default {
   name: "App",

   components: {
      "cv-appbar": Appbar,
   },

   data: () => ({
      //
   })
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