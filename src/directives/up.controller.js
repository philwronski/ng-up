class UpController {
    constructor(UpService) {
        this.files = [];
        this.UpService = UpService;
    }

    addFile(file) {
        this.files.push(file);
        this.UpService.files = this.files;
    }

    removeFile(indexToRemove) {
        _.remove(this.files, (value, index, list) => {
            return index == indexToRemove;
        })

        this.UpService.files = this.files;
    }

}

UpController.$inject = ['UpService'];

export default UpController;