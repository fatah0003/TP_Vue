<script setup>


</script>

<template>

    <nav class="bg-green-500 text-white p-4 flex  justify-between items-center">

        <RouterLink :to="{ name: 'NewTask' }">Ajouter une tache</RouterLink>

        <RouterLink :to="{ name: 'list' }">Liste des taches</RouterLink>

    </nav>
    <div>
        <RouterView v-slot="{Component}">
            <KeepAlive>
                <component :is="Component"></component>
            </KeepAlive>
        </RouterView>
    </div>
</template>



<style scoped></style>