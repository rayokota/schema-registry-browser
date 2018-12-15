import {mapGetters} from 'vuex';

const Home = {
    name: 'Home',
    computed: {
        ...mapGetters(['authenticated'])
    }
};

export default Home;
