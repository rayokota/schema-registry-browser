import SubjectService from './subject.service.vue';
import VueJsonPretty from 'vue-json-pretty'

const SubjectDetails = {
    mixins: [SubjectService],
    components: {
        VueJsonPretty
    },
    data() {
        return {
            subjectId: null,
            versions: []
        };
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.params.subjectId) {
                vm.retrieveSubject(to.params.subjectId);
            }
        });
    },
    methods: {
        retrieveSubject(subjectId) {
            this.subjectId = subjectId;
            var service = this;
            var newVersions = []
            this.findSubject(subjectId).then(response => {
                var promises = response.data.map(function (element) {
                    service.findVersion(subjectId, element).then(response => {
                        newVersions.push(response.data);
                    })
                });
                Promise.all(promises).then(() =>
                    this.versions = newVersions
                );
            })
                .catch(() => {
                    this.previousState();
                })
        },
        prepareRemove(instance) {
            this.removeId = instance.version;
            this.$refs.removeEntity.show();
        },
        removeVersion() {
            this.deleteVersion(this.subjectId, this.removeId).then(() => {
                this.removeId = null;
                this.retrieveSubject(this.subjectId);
                this.closeDialog();
            })
        },
        previousState() {
            this.$router.go(-1);
        },
        closeDialog() {
            this.$refs.removeEntity.hide();
        }
    }
};

export default SubjectDetails;
