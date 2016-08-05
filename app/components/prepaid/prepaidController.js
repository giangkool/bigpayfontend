angular
    .module('altairApp')
    .controller('prepaidCtrl', [
        '$rootScope',
        '$scope',
        '$interval',
        '$timeout',
        function ($rootScope,$scope,$interval,$timeout) {
            // $scope.bill_evn_providers = {
            //     options:[
            //         {
            //         id:1,
            //         title:"Công ty Điện lực EVN Hà Nội",
            //         value:"EVNHN",
            //         parent_id:1
            //         },
            //         {
            //         id:1,
            //         title:"Công ty Điện lực EVN Hồ Chí Minh",
            //         value:"EVNSG",
            //         parent_id:1
            //         }
            //     ]
            // };
            
            // $scope.bill_evn_config = {
            //     create: false,
            //     maxItems: 1,
            //     placeholder: 'Công ty điện lực...',
            //     optgroupField: 'parent_id',
            //     optgroupLabelField: 'title',
            //     optgroupValueField: 'ogid',
            //     valueField: 'value',
            //     labelField: 'title',
            //     searchField: 'title'
            // };
            
            
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

            $scope.prepaid_other_providers = {
                options: [
                    {
                        id: 1,
                        title: "Vietnam Mobile",
                        value: "VNM",
                        parent_id: 1
                    },
                    {
                        id: 2,
                        title: "GTel Telecom",
                        value: "GTEL",
                        parent_id: 1
                    }
                ]
            };

            $scope.prepaid_provider_config = {
                create: false,
                maxItems: 1,
                placeholder: 'Mạng di động...',
                optgroupField: 'parent_id',
                optgroupLabelField: 'title',
                optgroupValueField: 'ogid',
                valueField: 'value',
                labelField: 'title',
                searchField: 'title'
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