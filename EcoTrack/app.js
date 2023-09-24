const app = Vue.createApp({
    data() {
        return {
            miles: 0
        };
    },
    methods: {
        calculateCO2() {
            // Simple carbon emissions calculation (adjust as needed)
            return (this.miles * 0.4).toFixed(2);
        }
    }
});

app.mount('#app');
