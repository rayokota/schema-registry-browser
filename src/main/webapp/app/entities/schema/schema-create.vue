<template>
    <div class="row justify-content-center">
        <div class="col-8">

            <div class="alert alert-danger" role="alert" v-if="error">
                <strong>An error has occurred!</strong> {{error}}
            </div>

            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
                <h2 id="srApp.schema.home.createLabel">Create a Schema</h2>
                <div>
                    <div class="form-group">
                        <label class="form-control-label" for="schema-subject">Subject</label>
                        <input type="text" class="form-control" name="subject" id="schema-subject"
                               v-model="schema.subject"/>
                        <label class="form-control-label" for="schema-schema">Schema</label>
                        <input type="text" class="form-control" name="schema" id="schema-schema"
                               v-model="schema.schema"/>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./schema-create.component.ts">
</script>
