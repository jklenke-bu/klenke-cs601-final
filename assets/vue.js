const app = Vue.createApp({
    el: '#app',
    data() {
        return {
            collections: [
                {
                    image: 'assets/images/ember.jpg', 
                    opacity: 'opacity: 10%',
                    hoverOpacity: 'opacity: 100%',
                    alt: 'Ember!', 
                    description: 'Ember is a beagle and terrier mix and loves to hide under covers.'
                },
                { 
                    image: 'assets/images/jenny.jpg', 
                    opacity: 'opacity: 10%',
                    hoverOpacity: 'opacity: 100%',
                    alt: 'Jenny!', 
                    description: 'Jenny is a border collie mix and loves to jump on top of tables.'}
            ]
        }
    },
    methods: {
        hoverText(imageIndex) {
            const swap = this.collections[imageIndex].opacity;
            this.collections[imageIndex].opacity = this.collections[imageIndex].hoverOpacity
            this.collections[imageIndex].hoverOpacity = swap;

            const textSwap = this.collections[imageIndex].text;
            this.collections[imageIndex].text = this.collections[imageIndex].description;
            this.collections[imageIndex].description = textSwap;
        }
    
}
}).mount('#app')