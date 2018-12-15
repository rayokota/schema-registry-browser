<template>
    <div>
        <h2 id="page-heading">
            <span id="subject-heading">Versions</span>
        </h2>
        <!--<jhi-alert></jhi-alert>-->
        <br/>
        <div class="table-responsive" v-if="versions">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th colspan="4"><span>Subject: {{subjectId}}</span></th>
                </tr>
                <tr>
                    <th><span>Version</span></th>
                    <th><span>ID</span></th>
                    <th><span>Schema</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="version in versions">
                    <td>{{version.version}}</td>
                    <td>{{version.id}}</td>
                    <td>
                        <vue-json-pretty
                            :data="JSON.parse(version.schema)">
                        </vue-json-pretty>
                    </td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <b-btn v-on:click="prepareRemove(version)"
                                   class="btn btn-danger btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-btn>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity">
            <span slot="modal-title"><span id="srApp.subject.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-subject-heading">Are you sure you want to delete this Subject?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-subject"
                        v-on:click="removeVersion()">Delete
                </button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./subject-details.component.ts">
</script>

<!--
<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="subject">
                <h2><span >Subject</span> {{subject.id}}</h2>
                <dl class="row jh-entity-details">

                        <dt><span >Name</span></dt>
                        <dd>
                                <span>{{subject.name}}</span>
                        </dd>

                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span > Back</span>
                </button>

                <router-link :to="{name: 'SubjectEdit', params: {subjectId: subject.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span > Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./subject-details.component.ts">
</script>

-->
