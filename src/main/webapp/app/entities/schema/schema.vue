<template>
    <div>
        <h2 id="page-heading">
            <span id="schema-heading">Schema</span>
            <router-link to="/entity/schema/new" tag="button" id="jh-create-entity"
                         class="btn btn-primary float-right jh-create-entity create-schema">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span>
                    Create new Schema
                </span>
            </router-link>
        </h2>
        <br/>
        <div>
            <b-form inline role="form" v-on:submit.prevent="retrieveSchema(schemaId)">
                <label class="mr-sm-2">Schema ID:</label>
                <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="schemaId" type="text" name="schemaId" autofocus
                              v-model.number="schemaId">
                </b-form-input>
                <div>
                    <b-button type="submit" variant="primary">View</b-button>
                </div>
            </b-form>
        </div>
        <br/>
        <div class="table-responsive" v-if="schema">
            <table class="table">
                <thead>
                <tr>
                    <th><span>Schema: {{schemaId}}</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <vue-json-pretty
                            :data="JSON.parse(schema)">
                        </vue-json-pretty>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" src="./schema.component.ts">
</script>
