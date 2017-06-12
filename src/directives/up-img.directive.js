class UpImgDirective {
    
    constructor() {
        this.restrict = 'EA';
        this.replace = true;
        this.scope = true;
        this.template = require('./up-img.template.html');
        this.require = '^up';
    }
    
    link(scope, element, attributes) {
        scope.$watch(attributes.upImg, (file) => {
            scope.file = file;
            if(!file) {
                return;
            }
            
            if(file.type.includes('image/')) {
                scope.isImg = true;
                let img = angular.element(element[0].querySelector('img'));
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = (event) => {
                    scope.$apply(() => {
                        scope.isImg = true;
                        let img = angular.element(element[0].querySelector('img'));
                        img.attr('src', event.target.result);
                    });
                };
            } else {
                let img = angular.element(element[0].querySelector('img'));
                switch(file.type) {
                    case "application/pdf":
                        scope.fileType = 'pdf';
                        break;
                    case "text/plain":
                        scope.fileType = 'txt';
                        break;
                    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                        scope.fileType = 'doc';
                        break;
                }
                
                scope.$apply(() => {
                    let img = angular.element(element[0].querySelector('img'));
                    img.attr('src', 'images/file-' + scope.fileType+'.png');
                });
            }
        });
    }
    
    static directiveFactory(){
        UpImgDirective.instance = new UpImgDirective();
        return UpImgDirective.instance;
    }
}

export default UpImgDirective;