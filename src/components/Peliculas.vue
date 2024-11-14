<template>
    <div class="general">

        <div class="center">
            <section id="content">
                <h1 class="subheader">Películas</h1>

                <div class="mis-datos" v-if="misDatos">
                    <p v-html="misDatos"></p>
                </div>

                <div class="favorita" v-if="favorita">
                    La película marcada es:
                    <h2>{{ favorita.title }}</h2>
                </div>

                <!--Listado articulos-->
                <div id="articles">
                    <!--v-for="pelicula in peliculas" v-bind:key="pelicula.title"-->
                    <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
                        <Pelicula
                            :pelicula="pelicula"
                            @favorita="haLlegadoLaPeliculaFavorita"
                        ></Pelicula>
                    </div>
                </div>
                        
            </section>
            <Sidebar></Sidebar>

            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Pelicula from './Pelicula.vue';
import Sidebar from './Sidebar.vue';

export default {

    name: 'PeliculasComponent',

    components: {
        Pelicula,
        Sidebar
    },

    methods: {
        haLlegadoLaPeliculaFavorita(favorita) {
            this.favorita = favorita
        }
    },

    computed: {
        peliculasMayuscula() {
            var peliculasMod = this.peliculas;
            for(var i = 0; i < this.peliculas.length; i++) {
                peliculasMod[i].title = this.peliculas[i].title.toUpperCase();
            }

            return peliculasMod;
        },

        misDatos() {
            return this.nombre + ' ' + this.apellidos + '<br/>' + '<strong>Sitio web:</strong> ' + this.web;
        }
    },

    data() {
        return {
            nombre: 'Sergio',
            apellidos: 'García',
            web: 'sergiogarciaweb.es/academy',
            favorita: null,
            peliculas: [
                {title: 'Batman vs Superman', year: 2017, image: 'https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg'},
                {title: 'Gran Torino', year: 2015, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRdIvKBw8E6Yout-tRDNe2m1ipaXeDDsFTVjJQZKGVn_opVfOpZ_xseJE7-SSp2agbF3zfIXeTWgsF-ZbsNWq5Cz99LhS0QYRA8GgneLan6fXlHiHymixM3cnixX6F8_PqtkuwFrAP_7U/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg'},
                {title: 'El señor de los anillos', year: 2003, image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/12/423428-123-anos-tolkien-critica-senor-anillos-comunidad-anillo.jpg?tf=3840x'},
                {title: 'Batman vs Superman 1', year: 2017, image: 'https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg'}
            ]
        }
    }
}
</script>