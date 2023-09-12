  import{PRODUCT_IMG_URL} from "./utility/constant";
  
      const RestaurantComponent = (props) =>{
      
        //console.log(props)
        const {restoData}=props;
       console.log(restoData);
        return(
          
              <div className="resto">
      
                <img src=
                {
                  PRODUCT_IMG_URL + restoData.cloudinaryImageId} height="300px" width="300px" alt=""></img>
              
              <h2>{restoData.name}</h2>
              <h4>{restoData.avgRating}</h4>
              <h5>{restoData.locality}</h5>
              <h5>{restoData.costForTwo}</h5>
              <h6>{restoData.cuisines.join(", ")}</h6>
                
              </div>
          )
      };

      export default RestaurantComponent;
    