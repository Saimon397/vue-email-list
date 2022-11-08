const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: []
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
            this.emails.splice(0);
            for (let i = 0; i < 10; i++) {
                this.RandomArray(this.emails);
            }
        },
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.RandomArray(this.emails);
        }
    }
}).mount('#app')