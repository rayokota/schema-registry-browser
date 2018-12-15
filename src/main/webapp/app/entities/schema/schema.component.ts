import SchemaService from './schema.service.vue';
import VueJsonPretty from 'vue-json-pretty'

const Schema = {
    mixins: [SchemaService],
    components: {
        VueJsonPretty
    },
    methods: {
        retrieveSchema(id) {
            this.findSchema(id).then(response => {
                this.$store.commit('setSchema', response.data.schema);
            });
        }
    },
    computed: {
        schemaId: {
            get () {
                return this.$store.state.schemaId;
            },
            set (value) {
                this.$store.commit('setSchemaId', value)
            }
        },
        schema: {
            get () {
                return this.$store.state.schema;
            },
            set (value) {
                this.$store.commit('setSchema', value)
            }
        }
    }
};

export default Schema;
