new Vue({

    el: '#random-numbers',

    data: {
        max: '',
        min: '',
        numbers: []
    },

    methods: {

        addnumberClick: function () {

            const num = Math.floor(Math.random() * (parseInt(this.max) - parseInt(this.min) + 1) + parseInt(this.min));
            this.numbers.push(num);
        }
    }
});