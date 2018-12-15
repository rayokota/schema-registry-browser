<script>
    import axios from 'axios';

    const baseApiUrl = 'schemas';

    const SchemaService = {
        methods: {
            findSchema(id) {
                return axios.get(`${baseApiUrl}/ids/${id}`);
            },
            createSchema(schema) {
                return axios.post(`subjects/${schema.subject}/versions`, {schema: schema.schema});
            }
        }
    };

    export default SchemaService;

</script>
