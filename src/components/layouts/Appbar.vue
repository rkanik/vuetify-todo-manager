<template>
   <nav>
      <v-app-bar app flat class="elevation-1">
         <v-app-bar-nav-icon @click="drawer=!drawer" />
         <!-- <v-btn @click="drawer=!drawer" fab depressed color="white">
            <v-icon>menu</v-icon>
         </v-btn>-->
         <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">Todo</span>
            <span> Manager</span>
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn depressed class="grey--text text--darken-3">
            <span>Signout</span>
            <v-icon right>exit_to_app</v-icon>
         </v-btn>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" color="teal">
         <v-list shaped>
            <v-list-item-group>
               <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                  <v-list-item-icon>
                     <v-icon v-text="link.icon" class="white--text"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                     <v-list-item-title v-text="link.text" class="white--text"></v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
            </v-list-item-group>
         </v-list>
      </v-navigation-drawer>
   </nav>
</template> 
<script>
export default {
   name: "Appbar",
   data: () => ({
      drawer: false,
      links: [
         { icon: "dashboard", text: "Dashboard", route: "/" },
         { icon: "folder", text: "My Projects", route: "/projects" },
         { icon: "person", text: "Team", route: "/team" },
         { icon: "build", text: "Practice", route: "/practice" },
         { icon: "delete", text: "Delete", route: "/delete" },
         { icon: "about", text: "About", route: "/about" }
      ]
   })
};
</script>