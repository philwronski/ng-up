class UpClearDirective {
    
    constructor() {
        this.restrict = 'EA';
        this.scope = false;
        this.require = '^up';
    }
    
    link(scope, element, attributes, ctrl) {
        element.bind("click", (event) => {
            scope.$apply(() => {
//                scope.removeFile(attributes.upClear);    
                ctrl.removeFile(attributes.upClear);
            });
        });
    }
    
    static directiveFactory(){
        UpClearDirective.instance = new UpClearDirective();
        return UpClearDirective.instance;
    }
}

export default UpClearDirective;