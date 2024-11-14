import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Artilce from './components/Artilce.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';

const routes = [
    {path: '/', component: LastArticles},
    {path: '/home', name: 'Home', component: LastArticles},
    {path: '/blog', name: 'Blog', component: Blog},
    {path: '/articulo/:id', name: 'article', component: Artilce},
    {path: '/crear-articulo', name: 'create', component: CreateArticle},
    {path: '/editar/:id', name: 'edit', component: EditArticle},
    {path: '/formulario', name: 'Formulario', component: Formulario},
    {path: '/pagina/:id?', name: 'pagina', component: Pagina},
    {path: '/peliculas', name: 'peliculas', component: Peliculas},
    {path: '/ultimos-articulos', name: 'LastArticles', component: LastArticles},
    {path: '/buscador/:searchString', name: 'Search', component: Search},
    {path: '/redirect/:searchString', name: 'Redirect', component: Redirect},
    {path: '/mi-componente', name: 'MiComponente', component: MiComponente},
    {path: '/hola-mundo', name: 'HelloWorld', component: HelloWorld},
    {path: '/:pathMatch(.*)*', component: ErrorComponent}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')