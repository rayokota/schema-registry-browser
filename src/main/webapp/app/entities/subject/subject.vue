<template>
    <div>
        <h2 id="page-heading">
            <span id="subject-heading">Subjects</span>
        </h2>
        <!--<jhi-alert></jhi-alert>-->
        <br/>
        <div class="table-responsive" v-if="subjects">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>Name</span></th>
                    <th><span>Compatibility</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="subject in sortedSubjects">
                    <td>
                        <router-link :to="{name: 'SubjectView', params: {subjectId: subject.name}}">{{subject.name}}
                        </router-link>
                    </td>
                    <td>{{subject.compatibilityLevel}}</td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'SubjectView', params: {subjectId: subject.name}}" tag="button"
                                         class="btn btn-info btn-sm">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'SubjectEdit', params: {subjectId: subject.name}}" tag="button"
                                         class="btn btn-primary btn-sm">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-btn v-on:click="prepareRemove(subject)"
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
                        v-on:click="removeSubject()">Delete
                </button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./subject.component.ts">
</script>
