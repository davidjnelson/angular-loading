angular.module('angular-loading', [])
    .directive('angularLoading', function() {
        return {
            restrict: 'E',
            controller: ['$scope', function($scope) {
                $scope.evalExpression = function(expression) {
                    $scope.$eval(expression);
                };
            }],
            link: function(scope, iElement, iAttrs, controller) {

            },
            // TODO: add default styles here, which the api consumer can override
            template:   '<div ng-show="loading">' +
                            '<div style="position: relative; left: 50%; width: 420px; margin-left: -210px;">' +
                                '<div style="text-align: center;" ng-show="!errorOccured">' +
                                    '{{ loadingMessage }}' +
                                '</div>' +
                                '<div style="text-align: center;" ng-show="!errorOccured">' +
                                    '<img src="/img/loading.gif" style="height: 32px; width: 32px;" />' +
                                '</div>' +
                                '<div style="text-align: center;" ng-show="errorOccured">' +
                                '    <i class="icon-warning-sign"></i> {{ errorOccuredMessage }} <br /><a href ng-click="evalExpression(reload)">{{ reloadMessage }}</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>',
            replace: true,
            scope: {
                loading: '=',
                errorOccured: '=',
                reload: '&',
                loadingMessage: '@',
                errorOccuredMessage: '@',
                reloadMessage: '@'
            }
        };
    });

