console.log('mail list')

const app = new Vue({
    el: '#root',
    data: {
        randomMail: null,
    },
    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res)  => {
            console.log(res.data.response)
            this.randomMail = res.data.response
        })
    },
})
