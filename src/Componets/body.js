
import { useEffect, useState } from "react";
import RestaurantComponent from "./resto";
import shimmer from "./shimmer";


const BodyComponent = () =>{
       let [RestaurantData, filteredRestaurants]= useState([ ]);

       useEffect ( () => {
                fectData();
        }, []);

                const fectData = async()=>{

const resdata = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.41113717402138&lng=78.4521259367466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
const orginalData = await resdata.json();
//const apiRestolist = orginalData.data.cards[0].card.card.gridElements.infoWithStyle.Restaurants;

const apiResponseResto =  [
      {
        
          id: "156138",
          name: "The Good Bowl",
          cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
          locality: "Mehdipatnam FC",
          areaName: "Humayun Nagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "156138",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 3100
          },
          parentId: "7918",
          avgRatingString: "4.1",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 03:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/the-good-bowl-mehdipatnam-fc-humayun-nagar-hyderabad-156138",
          type: "WEBLINK"
        }
      },
      {
       
          id: "376914",
          name: "Theobroma",
          cloudinaryImageId: "j56oxlpkhbhofqshycov",
          locality: "Central Zone",
          areaName: "Somajiguda & Khairtabad",
          costForTwo: "₹500 for two",
          cuisines: [
            "Desserts"
          ],
          avgRating: 4.5,
          feeDetails: {
            restaurantId: "376914",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4000
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 4000
          },
          parentId: "1040",
          avgRatingString: "4.5",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 00:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png"
                    }
                  }
                ]
              },
              textBased: {},
              textExtendedBadges: {}
            }
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
          type: "WEBLINK"
        }
      },
      {
       
          id: "32124",
          name: "Natural Ice Cream",
          cloudinaryImageId: "qqegmnp7k3hl2kt9tdzl",
          locality: "Raghvendras Grand, Srinagar Colony",
          areaName: "Banjara Hills",
          costForTwo: "₹150 for two",
          cuisines: [
            "Ice Cream",
            "Desserts"
          ],
          avgRating: 4.6,
          veg: true,
          feeDetails: {
            restaurantId: "32124",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 3100
          },
          parentId: "2093",
          avgRatingString: "4.6",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "23 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:30:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/natural-ice-cream-raghvendras-grand-srinagar-colony-banjara-hills-hyderabad-32124",
          type: "WEBLINK"
        }
      },
      {
        
          id: "142670",
          name: "Shah Ghouse Cafe & Restaurant",
          cloudinaryImageId: "bk26jkkqpg55veii0aj9",
          locality: "Santh Nirankari Satsang Bhavan",
          areaName: "Lakdikapul",
          costForTwo: "₹350 for two",
          cuisines: [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Mughlai",
            "North Indian"
          ],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "142670",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 3100
          },
          parentId: "18992",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:59:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/shah-ghouse-cafe-and-restaurant-santh-nirankari-satsang-bhavan-lakdikapul-hyderabad-142670",
          type: "WEBLINK"
        }
      },
      {
        
          id: "410945",
          name: "EatFit",
          cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
          locality: "Pizza hut building, Circle No.10",
          areaName: "Jubilee Hils",
          costForTwo: "₹270 for two",
          cuisines: [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani"
          ],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "410945",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5000
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 5000
          },
          parentId: "76139",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            slaString: "30 mins",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:59:00",
            opened: true
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "brand"
                    }
                  }
                ]
              }
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/eatfit-pizza-hut-building-circle-no-10-jubilee-hils-hyderabad-410945",
          type: "WEBLINK"
        }
      },
      {
       
          id: "367769",
          name: "Lucky Restaurant",
          cloudinaryImageId: "qems028i3da5rxf81rbp",
          locality: "Banjara Hills",
          areaName: "MasabTank",
          costForTwo: "₹300 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Tandoor"
          ],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "367769",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "293683",
          avgRatingString: "3.9",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 01:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/lucky-restaurant-banjara-hills-masabtank-hyderabad-367769",
          type: "WEBLINK"
        }
      },
      {
       
          id: "23698",
          name: "McDonald's",
          cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
          locality: "City Center Mall",
          areaName: "Banjara Hills",
          costForTwo: "₹400 for two",
          cuisines: [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "23698",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "630",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "26 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 22:45:00",
            opened: true
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available"
                    }
                  }
                ]
              }
            }
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/mcdonalds-city-center-mall-banjara-hills-hyderabad-23698",
          type: "WEBLINK"
        }
      },
      {
       
          id: "8784",
          name: "Burger King",
          cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          locality: "Road no 1",
          areaName: "Banjara Hills",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "American"
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "8784",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "166",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/burger-king-road-no-1-banjara-hills-hyderabad-8784",
          type: "WEBLINK"
        }
      },
      {
        
          id: "124165",
          name: "Starbucks Coffee",
          cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
          locality: "GVK1 Mall",
          areaName: "Banjara Hills",
          costForTwo: "₹400 for two",
          cuisines: [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "124165",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "195515",
          avgRatingString: "4.2",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 22:00:00",
            opened: true
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available"
                    }
                  }
                ]
              }
            }
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/starbucks-coffee-gvk1-mall-banjara-hills-hyderabad-124165",
          type: "WEBLINK"
        }
      },
      {
        
          id: "262382",
          name: "Istah - The Mediterranean Way",
          cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
          locality: "Sheikpet Village",
          areaName: "Banjara Hills",
          costForTwo: "₹250 for two",
          cuisines: [
            "Mediterranean",
            "Snacks",
            "Biryani",
            "Grill",
            "Kebabs",
            "Arabian",
            "Lebanese",
            "Beverages",
            "Desserts",
            "Italian",
            "Turkish"
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "262382",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "3518",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:30:00",
            opened: true
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available"
                    }
                  }
                ]
              }
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-sheikpet-village-banjara-hills-hyderabad-262382",
          type: "WEBLINK"
        }
      },
      {
       
          id: "26324",
          name: "KFC",
          cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
          locality: "Gvk One Mall",
          areaName: "Banjara Hills",
          costForTwo: "₹400 for two",
          cuisines: [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          avgRating: 4,
          feeDetails: {
            restaurantId: "26324",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "547",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/kfc-gvk-one-mall-banjara-hills-hyderabad-26324",
          type: "WEBLINK"
        }
      },
      {
        
          id: "173458",
          name: "CakeZone",
          cloudinaryImageId: "efc14609d005a8c28828ff1ace41989d",
          locality: "BANJARA HILLS ROAD",
          areaName: "VST Colony, Punjagutta",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Sweets",
            "Ice Cream"
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "173458",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 5100
          },
          parentId: "7003",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:59:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/cakezone-banjara-hills-road-vst-colony-punjagutta-hyderabad-173458",
          type: "WEBLINK"
        }
      },
      {
       
          id: "44119",
          name: "Baskin Robbins - Ice Cream Desserts",
          cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
          locality: "SHANTI NAGAR PARK",
          areaName: "Masab Tank",
          costForTwo: "₹400 for two",
          cuisines: [
            "Ice Cream",
            "Beverages"
          ],
          avgRating: 4.1,
          veg: true,
          feeDetails: {
            restaurantId: "44119",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "5588",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 01:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹1000",
            discountTag: "FLAT DEAL"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shanti-nagar-park-masab-tank-hyderabad-44119",
          type: "WEBLINK"
        }
      },
      {
        
          id: "24622",
          name: "Domino's Pizza",
          cloudinaryImageId: "gronja3yeannuvwwjwua",
          locality: "Masab Tank",
          areaName: "Banjara Hills",
          costForTwo: "₹400 for two",
          cuisines: [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "24622",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "2456",
          avgRatingString: "3.9",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 23:59:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/dominos-pizza-masab-tank-banjara-hills-hyderabad-24622",
          type: "WEBLINK"
        }
      },
      {
        
          id: "1546",
          name: "Subway",
          cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
          locality: "GVK Mall",
          areaName: "Banjara Hills",
          costForTwo: "₹350 for two",
          cuisines: [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "1546",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "2",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 22:40:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/subway-gvk-mall-banjara-hills-hyderabad-1546",
          type: "WEBLINK"
        }
      },
      {
       
          id: "7224",
          name: "Santosh Dhaba Exclusive",
          cloudinaryImageId: "v1ao5r5o3ph0xuz48cym",
          locality: "Road No 12",
          areaName: "Banjara Hills",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Biryani",
            "Chinese",
            "Italian"
          ],
          avgRating: 4,
          veg: true,
          feeDetails: {
            restaurantId: "7224",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "8784",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 03:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/santosh-dhaba-exclusive-road-no-12-banjara-hills-hyderabad-7224",
          type: "WEBLINK"
        }
      },
      {
       
          id: "173464",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Banjara Hills",
          areaName: "Banjara Hills",
          costForTwo: "₹350 for two",
          cuisines: [
            "Pizzas"
          ],
          avgRating: 3.8,
          feeDetails: {
            restaurantId: "173464",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4000
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 4000
          },
          parentId: "721",
          avgRatingString: "3.8",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-06 22:45:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/pizza-hut-banjara-hills-hyderabad-173464",
          type: "WEBLINK"
        }
      },
      {
        
          id: "16655",
          name: "Behrouz Biryani",
          cloudinaryImageId: "pimxgwnyxz5mdzszbggf",
          locality: "Union Bank of India Colony",
          areaName: "Banjara Hills",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          avgRating: 4,
          feeDetails: {
            restaurantId: "16655",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 5100
          },
          parentId: "1803",
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 01:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/behrouz-biryani-union-bank-of-india-colony-banjara-hills-hyderabad-16655",
          type: "WEBLINK"
        }
      },
      {
        
          id: "62870",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId: "hqyppa6z1h9yxxbp16j8",
          locality: "Union Bank of India Colony",
          areaName: "Banjara Hills",
          costForTwo: "₹200 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "62870",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3100
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 3100
          },
          parentId: "4925",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "26 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 03:00:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-union-bank-of-india-colony-banjara-hills-hyderabad-62870",
          type: "WEBLINK"
        }
      },
      {
       
          id: "15160",
          name: "Faasos - Wraps & Rolls",
          cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
          locality: "Union Bank of India Colony",
          areaName: "Banjara Hills",
          costForTwo: "₹200 for two",
          cuisines: [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "15160",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2500
              },
              {
                name: "BASE_TIME"
              },
              {
                name: "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 2500
          },
          parentId: "21809",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 2.9,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "2.9 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-07 03:00:00",
            opened: true
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available"
                    }
                  }
                ]
              }
            }
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-union-bank-of-india-colony-banjara-hills-hyderabad-15160",
          type: "WEBLINK"
        }
      }
    ]
    filteredRestaurants (apiResponseResto)
}

}

if (RestaurantData.length === 0){

  return <shimmer></shimmer>
}

        return(
          <div className="body">

                <div className="top-rated">

        <button className="top-resto" 
        onClick={()=>{
                        let filterdResto = apiResponseResto.filter((resto)=>resto.avgRating>4);
                        //console.log(filterdResto);
                        filteredRestaurants(filterdResto);
                }}>Top Rated Restaurant</button>
                </div>

            <div className="resto-container">   
            
            {
                RestaurantData.map( (Restaurant) =>
                 (<RestaurantComponent restoData = {Restaurant} />
                 ))
              }
      
            
       
          </div>
          </div>
          
          )
    

      export default BodyComponent;
      