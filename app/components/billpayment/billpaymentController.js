angular
    .module('altairApp')
    .controller('billpaymentCtrl', [
        '$rootScope',
        '$scope',
        '$interval',
        '$timeout',
        function ($rootScope,$scope,$interval,$timeout) {
            $scope.bill_evn_providers = {
                options:[
                    {
                    id:1,
                    title:"Công ty Điện lực EVN Hà Nội",
                    value:"EVNHN",
                    parent_id:1
                    },
                    {
                    id:2,
                    title:"Công ty Điện lực EVN Hồ Chí Minh",
                    value:"EVNSG",
                    parent_id:1
                    }
                ]
            };

            $scope.bill_other_providers = {
                options:[
                    {
                    id:1,
                    title:"Vé máy bay VietJet",
                    value:"VJEB",
                    parent_id:1
                    },
                    {
                    id:2,
                    title:"Truyền hình, Internet SCTV HCM",
                    value:"SCTVSG",
                    parent_id:1
                    },
                    {
                    id:3,
                    title:"Truyền hình cable VTV Cab",
                    value:"VTCC",
                    parent_id:1
                    }
                ]
            };
            
            $scope.bill_evn_config = {
                create: false,
                maxItems: 1,
                placeholder: 'Nhà cung cấp dịch vụ...',
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