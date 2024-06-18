<script setup>


</script>

<template>

<nav class="bg-red-500 text-white p-4 flex  justify-between items-center">

<RouterLink :to="{ name: 'userlist' }">Afficher Liste des Utilisateurs</RouterLink>

<RouterLink :to="{ name: 'newuser' }">Ajouter un utilisateur</RouterLink>


</nav>
<div>
<RouterView></RouterView>
</div>
</template>



<style scoped>



</style>