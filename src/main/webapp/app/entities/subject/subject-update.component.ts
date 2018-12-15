import {integer, maxLength, minLength, pattern, required} from 'vuelidate/lib/validators';

import SubjectService from './subject.service.vue';

const SubjectUpdate = {
    mixins: [SubjectService],
    data() {
        return {
            subject: {
                name: null,
                compatibility: null
            },
            isSaving: false
        };
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.params.subjectId) {
                vm.subject.name = to.params.subjectId;
            }
        });
    },
    methods: {
        save() {
            this.isSaving = true;
            this.updateSubject(this.subject).then(() => {
                this.$router.go(-1);
                this.isSaving = false;
            });
        },
        retrieveSubject(subjectId) {
            this.findSubject(subjectId).then(response => {
                this.subject = response.data;
            });
        },
        previousState() {
            this.$router.go(-1);
        }
    }
};

export default SubjectUpdate;
