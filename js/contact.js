new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        message: ''
    },
    methods: {
        validateEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        submitForm: function() {
            if (!this.name || !this.email || !this.message) {
                alert('All fields are required.');
                return;
            }

            if (!this.validateEmail(this.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            localStorage.setItem('formData', JSON.stringify({ name: this.name, email: this.email, message: this.message }));
            window.location.href = 'form-data.html';
        },
        resetForm: function() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
});