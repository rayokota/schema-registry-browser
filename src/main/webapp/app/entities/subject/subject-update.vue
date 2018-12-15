<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form inline name="editForm" role="form" novalidate v-on:submit.prevent="save()">
                <h2 id="srApp.subject.home.createOrEditLabel">Edit Subject</h2>
                <div>
                    Subject Name: {{subject.name}}
                    <div class="form-group">
                        <label class="form-control-label">Compatibility: </label>
                        <b-form-select v-model="subject.compatibility" class="mb-3">
                            <option :value="null">Please select an option</option>
                            <option value="BACKWARD">BACKWARD</option>
                            <option value="BACKWARD_TRANSITIVE">BACKWARD_TRANSITIVE</option>
                            <option value="FORWARD">FORWARD</option>
                            <option value="FORWARD_TRANSITIVE">FORWARD_TRANSITIVE</option>
                            <option value="FULL">FULL</option>
                            <option value="FULL_TRANSITIVE">FULL_TRANSITIVE</option>
                            <option value="NONE">NONE</option>
                        </b-form-select>
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
<script lang="ts" src="./subject-update.component.ts">
</script>
