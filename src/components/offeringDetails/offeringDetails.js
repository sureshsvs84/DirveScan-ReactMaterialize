import React, {Component}  from 'react';
import PropTypes  from 'prop-types';
import  * as Products  from '../products';
import arrayUtil from 'arrayUtil';

 const productComponents =  [{
    "productCode": "broadband",
    "productComponent": Products.BroadBand,
    "productData":{}
},
{
    "productCode": "iptv",
    "productComponent": Products.IPTV,
    "productData":{}
},
{
    "productCode": "voip",
    "productComponent": Products.VOIP,
    "productData":{}
}];

class Offering extends Component {
        constructor(props){
            super(props);
        }

        componentDidMount(){
            this.initializeProducts(offerDetail);
        }

        // componentWillReceiveProps(nextProps){
        //     if(this.props.offerDetail !== nextProps.offerDetail){
        //         initializeProducts();
        //     }
        // }

        initializeProducts(){
          const mappedOfferingProduct =  subFun.MapProductsToComponents(offerDetail.products); 
          return (
              <InitializeProducts
               ComponentCollection = {mappedOfferingProduct}
                />  
            )
        }

        render(){
            return (
                <div>
                    <div className="header">
                    <label>Promotion Name</label>
                    {this.props.offerDetail.promotionName}
                    </div>
                   {this.initializeProducts()}
                </div>
            )
        }
    }
 // An object with property values of a certain type,
    Offering.propTypes= {
        offerDetail:PropTypes.objectOf(
            PropTypes.shape({
                offerName	:	PropTypes.string.isRequired,
                offerCode	:   PropTypes.string.isRequired,
                description	:	PropTypes.string.isRequired,
                products    :   PropTypes.array.isRequired
              }).isRequired
        ).isRequired
    };

    export default Offering;

    const InitializeProducts = ({
      ComponentCollection
    }) => (
      <div >
        {  
          ComponentCollection.map((ProductComponent) =>{
                let Component = ProductComponent.productComponent;
                return <Component productData = {ProductComponent.productData} key={ProductComponent.productCode}/>
              })
            }
      </div>
    );

    
 
 let subFun = {};
 subFun.MapProductsToComponents =  (offerProducts) => {
     let components = [];
     for (var i = offerProducts.length - 1; i >= 0; i--) {
      for(var j = 0; j != productComponents.length; ++j) {
        let productCode= offerProducts[i].code.toLowerCase();
          if(productComponents[j].productCode === productCode)
          {
            productComponents[j].productData = offerProducts[i];
            components.push(productComponents[j]);
            break;
          }
      }
  }
    return components;
}
 
var offerDetail = {
  "offerName": "MyT 100",
  "offerCode": "MyT100",
  "description": "MyT 100",
  "technology": "Fiber",
  "basePrice": "120",
  "price": "110",
  "chargeType": "Monthly",
  "promotionName": "Christmas Discount",
  "discount": "10%",
  "currency": "MUR",
  "charges": [
    {
      "chargeName": "Rental",
      "basePrice": "110",
      "price": "110",
      "chargeType": "Monthly"
    },
    {
      "chargeName": "Security Deposit",
      "basePrice": "110",
      "price": "110",
      "chargeType": "UpFront"
    },
    {
      "chargeName": "Installation",
      "basePrice": "110",
      "price": "110",
      "chargeType": "UpFront"
    }
  ],
  "contract": {
    "contractTerms": [
      {
        "contractPeriod ": {
          "code": "1Year",
          "name": "1 Year"
        },
        "default": "true"
      },
      {
        "contractPeriod ": {
          "code": "2Years",
          "name": "2 Years"
        }
      },
      {
        "contractPeriod ": {
          "code": "3Years",
          "name": "3 Years"
        }
      }
    ],
    "startDate": "",
    "endDate": ""
  },
  "emi": {
    "emiPlans": [
      {
        "plan ": {
          "code": "none",
          "name": "None"
        },
        "default": "true"
      },
      {
        "plan ": {
          "code": "plan1",
          "name": "6 Months Plan"
        }
      },
      {
        "plan ": {
          "code": "plan2",
          "name": "10 Months Plan"
        }
      }
    ]
  },
  "products": [
    {
      "code": "IPTV",
      "name": "Bouquet Essentials",
      "description": "Internet Ultra",
      "lineOfBusiness": {
        "code": "FXL"
      },
      "productType": {
        "code": "ADSL"
      },
      "technicalChannels": {
        "technicalChannel": [
          {
            "code": "Fiber"
          }
        ]
      },
      "associatedResources": {
        "associatedResource": [
          {
            "resource": {
              "code": "BroadBand",
              "name": "Broad Band",
              "description": "Broad Band",
              "resourceType": {
                "code": "Technical"
              },
              "serviceResource": false,
              "isChargeable": true,
              "resourceAttributes": {
                "resourceAttribute": [
                  {
                    "code": "AppointmentDates",
                    "name": "AppointmentDates",
                    "description": "Appointment Dates for installation",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  },
                  {
                    "code": "EquipmentPayment",
                    "name": "Equipment Payment",
                    "description": "Select Equipment Payment",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "List"
                    },
                    "isAgregated": true,
                    "resourceAttributeValues": {
                      "resourceAttributeValue": [
                        {
                          "name": "Monthly Rental",
                          "value": "MonthlyRental"
                        },
                        {
                          "name": "Quaterly Rental",
                          "value": "QuaterlyRental"
                        },
                        {
                          "name": "Yearly Rental",
                          "value": "YearlyRental"
                        }
                      ]
                    }
                  },
                  {
                    "code": "RouterModel",
                    "name": "Router Make/Model",
                    "description": "Select Router Make/Model",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "List"
                    },
                    "isAgregated": true,
                    "resourceAttributeValues": {
                      "resourceAttributeValue": [
                        {
                          "name": "D-Link",
                          "value": "dlink"
                        },
                        {
                          "name": "TP-Link",
                          "value": "tplink"
                        }
                      ]
                    }
                  },
                  {
                    "code": "SerialNumber",
                    "name": "Serial Number",
                    "description": "Enter Serial Number",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": false,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  },
                  {
                    "code": "AllocatedUserNumber",
                    "name": "Allocated User Number",
                    "description": "Allocated User Number",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  }
                ]
              }
            },
            "preRequisite": false
          }
        ]
      },
      "businessType": {
        "code": "Postpaid"
      },
      "mandatory": true
    },
    {
      "code": "BroadBand",
      "name": "Internet Ultra",
      "description": "Internet Ultra",
      "lineOfBusiness": {
        "code": "FXL"
      },
      "productType": {
        "code": "ADSL"
      },
      "technicalChannels": {
        "technicalChannel": [
          {
            "code": "Fiber"
          }
        ]
      },
      "associatedResources": {
        "associatedResource": [
          {
            "resource": {
              "code": "BroadBand",
              "name": "Broad Band",
              "description": "Broad Band",
              "resourceType": {
                "code": "Technical"
              },
              "serviceResource": false,
              "isChargeable": true,
              "resourceAttributes": {
                "resourceAttribute": [
                  {
                    "code": "AppointmentDates",
                    "name": "AppointmentDates",
                    "description": "Appointment Dates for installation",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  },
                  {
                    "code": "EquipmentPayment",
                    "name": "Equipment Payment",
                    "description": "Select Equipment Payment",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "List"
                    },
                    "isAgregated": true,
                    "resourceAttributeValues": {
                      "resourceAttributeValue": [
                        {
                          "name": "Monthly Rental",
                          "value": "MonthlyRental"
                        },
                        {
                          "name": "Quaterly Rental",
                          "value": "QuaterlyRental"
                        },
                        {
                          "name": "Yearly Rental",
                          "value": "YearlyRental"
                        }
                      ]
                    }
                  },
                  {
                    "code": "RouterModel",
                    "name": "Router Make/Model",
                    "description": "Select Router Make/Model",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "List"
                    },
                    "isAgregated": true,
                    "resourceAttributeValues": {
                      "resourceAttributeValue": [
                        {
                          "name": "D-Link",
                          "value": "dlink"
                        },
                        {
                          "name": "TP-Link",
                          "value": "tplink"
                        }
                      ]
                    }
                  },
                  {
                    "code": "SerialNumber",
                    "name": "Serial Number",
                    "description": "Enter Serial Number",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": false,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  },
                  {
                    "code": "AllocatedUserNumber",
                    "name": "Allocated User Number",
                    "description": "Allocated User Number",
                    "dataType": {
                      "code": "String"
                    },
                    "mandatory": true,
                    "isChargeable": false,
                    "restrictionType": {
                      "code": "None"
                    }
                  }
                ]
              }
            },
            "preRequisite": false
          }
        ]
      },
      "businessType": {
        "code": "Postpaid"
      },
      "mandatory": true
    }
  ]
};