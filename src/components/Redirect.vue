<template>
    <h1>Redirigiendo...</h1>
</template>

<script>
export default {
    name: 'RedirectComponent',

    mounted() {
        var searchString = this.$route.params.searchString;
        this.$router.push('/buscador/' + searchString);
    }
}
</script>