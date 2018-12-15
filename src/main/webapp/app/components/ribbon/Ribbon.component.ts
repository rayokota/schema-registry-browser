import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Ribbon extends Vue {
    public ribbonEnv: string;

    constructor() {
        super();
        this.ribbonEnv = null;
    }
}
