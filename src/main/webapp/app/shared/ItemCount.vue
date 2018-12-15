<template>
    <div class="info jhi-item-count">
        <span v-if="i18nEnabled"
        >Showing {{first}} - {{second}} of {{total}} items.</span>
        <span v-if="!i18nEnabled">
            Showing {{((page - 1) * itemsPerPage) === 0 ? 1 : ((page - 1) * itemsPerPage + 1)}} -
            {{(page * itemsPerPage) < total ? (page * itemsPerPage) : total}}
            of {{total}} items.
        </span>
    </div>
</template>

<script>
    const JhiItemCountComponent = {
        name: 'JhiItemCountComponent',
        props: ['page', 'total', 'itemsPerPage'],
        data() {
            return {
                i18nEnabled: false
            };
        },
        computed: {
            first() {
                return ((this.page - 1) * this.itemsPerPage) === 0 ? 1 : ((this.page - 1) * this.itemsPerPage + 1);
            },
            second() {
                return (this.page * this.itemsPerPage) < this.total ? (this.page * this.itemsPerPage) : this.total;
            }
        }
    };

    export default JhiItemCountComponent;
</script>

<style scoped>

</style>
