class UpService {

    constructor($http) {
        this.files = [];
        this.$http = $http;
    }

    upload(url) {
        let form = new FormData();
        this.files.forEach( (file) => {
            console.log(file.name);
            form.append('files', file.file);
        });
        return this.$http.post(url, form, {
            headers: {
                'Content-Type': undefined
            }
        }).then(function(response) {
            return response;
        });
    }

}

UpService.$inject = ['$http'];

export default UpService;