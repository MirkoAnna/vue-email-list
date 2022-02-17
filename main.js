const app = new Vue(
    {
        el: '#root',
        data: {
            arrayEmail: []
        },

        mounted() {
            
            for(let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((feedbackServer) => {
                    this.arrayEmail.push(feedbackServer.data.response);                    
                });
                
            }

        }
    }
)