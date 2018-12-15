import {integer, maxLength, minLength, pattern, required} from 'vuelidate/lib/validators';

import SchemaService from './schema.service.vue';

const SchemaCreate = {
    mixins: [SchemaService],
    data() {
        return {
            schema: {
                subject: null,
                schema: null
            },
            isSaving: false,
            error: null
        };
    },
    methods: {
        save() {
            this.isSaving = true;
            this.createSchema(this.schema)
                .then(response => {
                    this.$store.commit('setSchemaId', response.data.id);
                    this.$store.commit('setSchema', this.schema.schema);
                    this.$router.go(-1);
                    this.isSaving = false;
                })
                .catch(error => {
                    // See https://github.com/axios/axios/issues/960
                    let errorObject = JSON.parse(JSON.stringify(error));
                    this.error = errorObject.response.data.message;
                    this.isSaving = false;
                });
        },
        previousState() {
            this.$router.go(-1);
        }
    }
};

export default SchemaCreate;
