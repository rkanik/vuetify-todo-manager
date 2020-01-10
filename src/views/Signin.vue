<template>
   <v-container>
      <v-card outlined max-width="512" class="mx-auto my-12">
         <v-card-text class="success white--text">
            <v-card-title class="d-block text-center pb-0">
               <h1 class="headline">
                  <span class="font-weight-light">TODO</span> MANAGER
               </h1>
            </v-card-title>
            <v-card-title>Signin</v-card-title>
            <v-card-subtitle
               class="grey--text text--lighten-2"
            >Signin with your username and password</v-card-subtitle>
         </v-card-text>
         <v-container>
            <v-form ref="form" class="mx-12 mt-4">
               <v-text-field
                  prepend-icon="account_circle"
                  v-model="user.username"
                  name="username"
                  label="Username"
                  required
               ></v-text-field>
               <v-text-field
                  :type="password?'password':'text'"
                  :append-icon="password?'visibility_off':'visibility'"
                  v-model="user.password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  required
                  @click:append="password=!password"
               ></v-text-field>
               <v-checkbox label="Remember me?" v-model="user.rememberMe"></v-checkbox>
            </v-form>
         </v-container>
         <v-divider></v-divider>
         <v-container>
            <v-card-actions class="pa-0 py-3 px-6">
               <v-btn @click="signinAdmin(user)" outlined color="success">Signin</v-btn>
               <v-btn text color="info">Register here</v-btn>
            </v-card-actions>
         </v-container>
      </v-card>
   </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   name: "signin",
   path: "/signin",
   data: () => ({
      password: true,
      user: {
         username: "",
         password: "",
         rememberMe: false
      }
   }),
   created() {
      this.signedIn && this.$router.replace("/");
   },
   computed: {
      ...mapGetters(["signedIn"])
   },
   methods: {
      ...mapActions("Admin", ["signinAdmin"])
   }
};
</script>

<style>
</style>