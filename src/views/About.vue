<template>
   <div class="about">
      <h1>This is an about page {{ $route.params.id }}</h1>
   </div>
</template>
<script>
export default {
   name: "about",
   path: "/about/:id"
};
</script>