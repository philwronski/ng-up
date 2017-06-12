class UpImgDirective {
    
    constructor() {
        this.restrict = 'EA';
        this.replace = true;
        this.scope = false;
        this.template = require('./up-img.template.html');
        this.require = '^up';
    }
    
    link(scope, element, attributes) {
        var img = angular.element(element[0].querySelector('img'));
        scope.$watch(attributes.upImg, (file) => {
            if(!file) {
                return;
            }
            
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (event) => {
                scope.$apply(() => {
//                    attributes.$set('src', event.target.result);
                    img.attr('src', event.target.result);
                });
            };
        });
    }
    
    static directiveFactory(){
        UpImgDirective.instance = new UpImgDirective();
        return UpImgDirective.instance;
    }
}

export default UpImgDirective;