import UpController from './up.controller';

class UpDirective {
    
    constructor() {
        this.restrict = 'E';    
        this.replace = true;
        this.transclude = true;
        this.scope = true;
        this.template = require('./up.template.html');
        this.controller = UpController;
//        this.controllerAs = 'upCtrl';
    }
    
    link(scope, element, attributes, ctrl) {
        scope.files = ctrl.files;
        
//        scope.addFile = (file) => {
//            scope.files.push(file);
//        }
//
//        scope.removeFile = (indexToRemove) => {console.log('remove', scope);
//            scope.files = _.remove(scope.files, (value, index, list) => {
//                return index != indexToRemove;
//            });
//        }
    }
    
    static directiveFactory(){
        UpDirective.instance = new UpDirective();
        return UpDirective.instance;
    }
}

export default UpDirective;