console.log('mail list')

const app = new Vue({
    el: '#root',
    data: {
        randomMail: null,
        listRandomMail: []
    },
    mounted() {
        let i = 0;
        while (i < 10) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res)  => {
                console.log(res.data.response)
                this.randomMail = res.data.response
            })
            i ++
        }
        
    },
})
