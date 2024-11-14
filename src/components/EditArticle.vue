<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './Sidebar.vue';
import Article from '../models/Article';
import { Global } from '../Global';
import axios from 'axios';
//import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

export default {
    name: 'EditArticle',

    components: {
        Sidebar
    },

    data() {
        return {
            url: Global.url,
            file: '',
            article: new Article('', '', null, ''),
            isEdit: true
            //submitted: false
        }
    },

    /*validations: {
        article: {
            title: {
                required
            },

            content: {
                required
            },
        }
    },*/

    mounted() {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },

    methods: {
        fileChange() {
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },

        getArticle(articleId) {
            axios.get(this.url + 'article/' + articleId).then(res => {
                if(res.data.status == 'success') {
                    this.article = res.data.article;
                }
            });
        },

        save() {

            var articleId = this.$route.params.id;

            axios.put(this.url + 'article/' + articleId, this.article).then(res => {

                if (res.data.status == 'success') {

                    // Subida de archivo
                    if (this.file != null && this.file != undefined && this.file != '') {

                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.file,
                            this.file.name
                        );

                        axios.post(this.url + 'upload-image/' + res.data.article._id, formData).then(response => {

                            if (response.data.article) {

                                swal(
                                    'Artículo editado',
                                    'El artículo se ha editado correctamente :)',
                                    'success'
                                );

                                this.article = response.data.article;
                                this.$router.push('/articulo/' + this.article._id);
                            } else {
                                // Mostrar alerta de error
                                swal(
                                    'Edición fallida',
                                    'El artículo no se ha editado bien',
                                    'error'
                                );
                            }

                        }).catch(error => {
                            console.log(error);
                        })

                    } else {

                        swal(
                            'Artículo editado',
                            'El artículo se ha editado correctamente :)',
                            'success'
                        );

                        this.article = res.data.article;
                        this.$router.push('/articulo/' + this.article._id);
                    }
                }

            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>