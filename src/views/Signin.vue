<template>
   <v-container>
      <v-card outlined max-width="512" class="mx-auto">
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
               <v-text-field prepend-icon="account_circle" name="username" label="Username"></v-text-field>
               <v-text-field
                  prepend-icon="lock"
                  :append-icon="password?'visibility_off':'visibility'"
                  name="password"
                  label="Password"
                  :type="password?'password':'text'"
                  @click:append="password=!password"
               ></v-text-field>
               <v-checkbox label="Remember me?" v-model="rememberMe"></v-checkbox>
            </v-form>
         </v-container>
         <v-divider></v-divider>
         <v-container>
            <v-card-actions class="pa-0 py-3 px-6">
               <v-btn outlined color="success">Signin</v-btn>
               <v-btn text color="info">Register here</v-btn>
            </v-card-actions>
         </v-container>
      </v-card>
   </v-container>
</template>

<script>
export default {
   name: "signin",
   path: "/signin",
   data: () => ({
      password: true,
      rememberMe: false
   })
};
</script>

<style>
</style>