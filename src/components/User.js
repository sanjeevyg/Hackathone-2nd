import React from 'react';


 const ravenclaw = "https://images-na.ssl-images-amazon.com/images/I/71sdJZ2JN9L._AC_UX342_.jpg";
 const gryffindor = "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-111773-1-productimagenowatermark.jpg";
 const hufflepuff = "https://images-na.ssl-images-amazon.com/images/I/81DMoguknhL._AC_SL1400_.jpg";
 const slytherin = "https://images-na.ssl-images-amazon.com/images/I/61czQ6%2BLgVL._AC_UY395_.jpg";

 let URL =""

function User(props) {

 const displayUserCard = () => props.userInfo.map(user => {
     imageURL(user.house)
     return (
         <div className="card-container" id={user.house}>
             <div className="user-card">
                <img src={URL} alt="abc"/>
                <div className="info">{user.name}</div>
                <div className="info">{user.house}</div>
            </div>
         </div>
    )
 })



 const imageURL = (house) => {
    if(house === "Ravenclaw" ) {
        URL = ravenclaw;
    } else if(house === "Gryffindor") {
        URL = gryffindor
    } else if(house === "Hufflepuff") {
        URL = hufflepuff
    }  else if(house === "Slytherin") {
        URL = slytherin 
    }
 }



  return(
      <div>{displayUserCard()}</div>
  )
}
export default User; 



