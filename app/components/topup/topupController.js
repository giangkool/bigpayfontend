angular
    .module('altairApp')
    .controller('topupCtrl', [
        '$rootScope',
        '$scope',
        '$interval',
        '$timeout',
        function ($rootScope,$scope,$interval,$timeout) {
            $scope.topup_mobile = {};
            $scope.Topup = function(provider){
                console.log('topup_mobile:',$scope.topup_mobile);
            }
            
            $scope.topup_mobile_prices = {
                options: [
                    {
                        id: 1,
                        title: "50,000",
                        value: "50",
                        parent_id: 1
                    },
                    {
                        id: 2,
                        title: "100,000",
                        value: "100",
                        parent_id: 1
                    },
                    {
                        id: 3,
                        title: "200,000",
                        value: "200",
                        parent_id: 1
                    },
                    {
                        id: 4,
                        title: "500,000",
                        value: "500",
                        parent_id: 1
                    }
                ]
            };

            $scope.topup_mobile_config = {
                create: false,
                maxItems: 1,
                placeholder: 'Mệnh giá...',
                optgroupField: 'parent_id',
                optgroupLabelField: 'title',
                optgroupValueField: 'ogid',
                valueField: 'value',
                labelField: 'title',
                searchField: 'title'
            };
       }
    ])
    
;