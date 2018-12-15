import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/home/Home.vue');
const Subject = () => import('../entities/subject/subject.vue');
const SubjectUpdate = () => import('../entities/subject/subject-update.vue');
const SubjectDetails = () => import('../entities/subject/subject-details.vue');
const Schema = () => import('../entities/schema/schema.vue');
const SchemaCreate = () => import('../entities/schema/schema-create.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {path: '/entity/subject', name: 'Subject', component: Subject},
        {path: '/entity/subject/:subjectId/edit', name: 'SubjectEdit', component: SubjectUpdate},
        {path: '/entity/subject/:subjectId/view', name: 'SubjectView', component: SubjectDetails}, // prettier-ignore
        {path: '/entity/schema', name: 'Schema', component: Schema},
        {path: '/entity/schema/new', name: 'SchemaCreate', component: SchemaCreate},
        // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
    ]
});
