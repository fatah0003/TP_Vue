<script setup>


</script>

<template>

    <nav class="bg-green-500 text-white p-4 flex  justify-between items-center">

        <RouterLink :to="{ name: 'list' }">Liste des taches</RouterLink>

        <RouterLink :to="{ name: 'NewTask' }">Ajouter une tache</RouterLink>

    </nav>
    <div>
        <RouterView></RouterView>
    </div>
</template>



<style scoped></style>