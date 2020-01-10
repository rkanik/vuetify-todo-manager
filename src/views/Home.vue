<template>
   <div class="home p-3">
      <v-container>
         <p>Home</p>
      </v-container>
   </div>
</template>

<script>
//import Texts from "../components/Texts";

export default {
   name: "home",
   path: "/",
   components: {
      //Texts
   },
   data() {
      return {
         links: [
            { icon: "dashboard", text: "Dashboard", route: "/" },
            { icon: "folder", text: "My Projects", route: "/projects" },
            { icon: "person", text: "Team", route: "/team" }
         ]
      };
   }
};
</script>
