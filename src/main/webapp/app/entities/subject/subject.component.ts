import SubjectService from './subject.service.vue';

const Subject = {
    mixins: [SubjectService],
    data() {
        return {
            removeId: null,
            subjects: []
        };
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.retrieveAllSubjects();
        });
    },
    methods: {
        retrieveAllSubjects() {
            this.retrieveSubjects().then(response => {
                var service = this;
                var newSubjects = []
                var promises = response.data.map(function (element) {
                    service.findConfig(element).then(response => {
                        newSubjects.push({name: element, compatibilityLevel: response.data.compatibilityLevel});
                    })
                        .catch(() => {
                            newSubjects.push({name: element, compatibilityLevel: 'BACKWARD'});
                        })
                });
                Promise.all(promises).then(configs => {
                    this.subjects = newSubjects;
                });
            });
        },
        prepareRemove(instance) {
            this.removeId = instance.name;
            this.$refs.removeEntity.show();
        },
        removeSubject() {
            this.deleteSubject(this.removeId).then(() => {
                this.removeId = null;
                this.retrieveAllSubjects();
                this.closeDialog();
            });
        },
        closeDialog() {
            this.$refs.removeEntity.hide();
        }
    },
    computed: {
        sortedSubjects: function () {
            return this.subjects.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        }
    }
};

export default Subject;
