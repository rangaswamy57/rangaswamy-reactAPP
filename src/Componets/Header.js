import{SITE_LOGO } from "./utility/constant";

const HeaderComponent = () =>{
        return(
        
          <div className="header">
      
              <div className="logo">
                <img src= {SITE_LOGO } alt=""></img>
              </div>
      
              <div className="navitem">
      
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Top Offers</li>
                  <li>My Card</li>
                </ul>
              </div>
      
          </div>
        )
      };

      export default HeaderComponent;