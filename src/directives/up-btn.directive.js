class UpBtnDirective {
    
    constructor() {
        this.restrict = 'EA';
        this.scope = false;
        this.require = '^up';
        this.template = '<input type="file" name="file" />';
    }
    
    link(scope, element, attributes, ctrl) {
        scope.input = angular.element(element[0].querySelector('[type="file"]'));
        scope.isMultiple = (attributes.multiple != undefined || attributes.multiple == "multiple");
        if(scope.isMultiple) {
            scope.input.attr('multiple', 'multiple');
        }
        
        scope.input.attr('accept', attributes.accept);
        element.bind("change", (event) => {
            if(scope.isMultiple) {
                scope.files = scope.$parent.files;
                scope.$apply(function() {
                    _.forEach(event.target.files, (file) => {
                        ctrl.addFile(file);
                    });
                });
            } else {
                scope.$apply(function() {
                    ctrl.files[0] = event.target.files[0];
                });
            }
            scope.input.val('');
        });
    }
    
    static directiveFactory(){
        UpBtnDirective.instance = new UpBtnDirective();
        return UpBtnDirective.instance;
    }
}

export default UpBtnDirective;