const { createApp } = Vue;
createApp({
    data() {
        return {
            email: []
        }
    },
    computed: {
    },
    methods: {
        RandomArray(a) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element) => {
                a.push(element.data.response)
            })
        },
        CleanArray() {
            this.email.splice(0);
            for (let i = 0; i < 10; i++) {
                this.RandomArray(this.email);
            }
        },
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.RandomArray(this.email);
        }
    }
}).mount('#app')