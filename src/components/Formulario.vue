<template>
    <div class="general">

        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>

                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre" />

                        <span v-if="!v$.nombre.required">Este campo es requerido</span>
                        <span v-if="!v$.nombre.minLength">Este campo debe tener más caracteres</span>
                    </div>

                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" v-model="user.apellidos" />
                    </div>

                    <div class="form-group">
                        <label for="bio">Biografia</label>
                        <textarea name="bio" v-model="user.bio"></textarea>
                    </div>

                    <div class="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" v-model="user.genero" /> Hombre
                        <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
                        <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
                    </div>

                    <div class="clearfix"></div>

                    <input type="submit" value="Enviar" class="btn btn-success" />

                </form>

                <div class="datos" v-if="user.nombre && user.apellidos">
                    <h3>{{ user.nombre + ' ' + user.apellidos }}</h3>
                </div>

            </section>

            <Sidebar></Sidebar>

            <div class="clearfix"></div>

        </div>
    </div>
</template>


<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators';
import Sidebar from './Sidebar.vue';

export default {
    name: 'FormularioComponent',

    components: {
        Sidebar
    },

    setup () {
        return {
            v$: useVuelidate()
        }
    },

    data() {
        return {
            submitted: false,
            user: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            }
        }
    },

    validations() {
        return {
            nombre: {
                required,
                minLength: minLength(2)
            },

            apellidos: {
                required,
                minLength: minLength(2)
            },

            bio: {
                required,
                minLength: minLength(10)
            }
        }
    },

    methods: {
        mostrarUsuario() {
            console.log(this.user);
            this.submitted = true;
            this.v$.$touch;

            if(this.v$.$invalid) {
                return false;
            }

            alert('Validación exitosa');
        }
    }
}
</script>