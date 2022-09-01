console.log('mail list')

const app = new Vue({
    el: '#root',
    data: {
        
        listRandomMail: []
    },
    mounted() {
        let i = 0;
        while (i < 10) {
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                
                // console.log(res.data.response)
                const randomMail = res.data.response
                if (!this.listRandomMail.includes(randomMail)) {
                    this.listRandomMail.push(randomMail)
                }
            })
          i++;
        }
        
    },
})
