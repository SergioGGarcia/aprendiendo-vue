<template>

    <section id="articles-component">

        <div id="articles-list" v-if="articles && articles.length >= 1">

            <article class="article-item" v-for="article in articles" :key="article._id">
                <div class="image-wrap">
                    <img :src="url + 'get-image/' + article.image" :alt="article.title" v-if="article.image" />

                    <img src="../assets/images/default.webp" :alt="article.title" v-if="!article.image" />
                </div>

                <h2>
                    <router-link :to="{name: 'article', params: {id: article._id}}">{{ article.title }}</router-link>
                </h2>

                <span class="date">
                    {{ article.date }}
                </span>
                <router-link :to="{name: 'article', params: {id: article._id}}">Leer más</router-link>

                <div class="clearfix"></div>
            </article>

        </div>

        <div v-else-if="articles && articles.length < 1">
            No hay artículos para mostrar
        </div>

        <div v-else>
            Cargando...
        </div>

    </section>

</template>

<script>
//import { useDateFormat } from '@vueuse/core';
//import moment from 'moment';
import { Global } from '../Global';

export default {
    name: 'ArticlesComponent',

    props: ['articles'],

    /*mounted() {
        for(let i = 0; i < this.articles.length; i++) {
            this.articles[i].date = useDateFormat(this.articles[i].date, 'YYYY-MM-DD (ddd)')
        }
    },*/

    data() {
        return {
            url: Global.url
        }
    }
}
</script>