<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './Sidebar.vue';
import Article from '../models/Article';
import { Global } from '../Global';
import axios from 'axios';
//import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

export default {
    name: 'CreateArticle',

    components: {
        Sidebar
    },

    data() {
        return {
            url: Global.url,
            file: '',
            article: new Article('', '', null, ''),
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

    methods: {
        fileChange() {
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },

        save() {

            axios.post(this.url + 'save', this.article).then(res => {

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
                                    'Artículo creado',
                                    'El artículo se ha creado correctamente :)',
                                    'success'
                                );

                                this.article = response.data.article;
                                this.$router.push('/blog');
                            } else {
                                // Mostrar alerta de error
                                swal(
                                    'Creación fallida',
                                    'El artículo no se ha guardado bien',
                                    'error'
                                );
                            }

                        }).catch(error => {
                            console.log(error);
                        })

                    } else {

                        swal(
                            'Artículo creado',
                            'El artículo se ha creado correctamente :)',
                            'success'
                        );

                        this.article = res.data.article;
                        this.$router.push('/blog');
                    }
                }

            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>