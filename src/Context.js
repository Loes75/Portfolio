import React ,{createContext}from 'react';
import imageFinder from './img/imageFinder.JPG';
import hotel from './img/hotel2.JPG';
import restaurant from './img/restaurant.JPG';
import nasa from './img/nasa.JPG';
import covid from './img/covid.jpg';
import phoneHotel from './img/PhoneHotel.png';
import phoneImg from './img/PhoneImg.png';
import phoneNasa from './img/PhoneNasa.png';
import phoneRestaurant from './img/PhoneRestaurant.png';
import tabletHotel from './img/TabletHotel.png';
import tabletCovid from './img/TabletCovid.png';
import tabletImg from './img/TabletImg.png';
import tabletNasa from './img/TabletNasa.png';
import tabletRestaurant from './img/TabletRestaurant.png';

const projectContext = createContext({});



var projects = [{k : 0, img : hotel, name : 'hotel', text : ' Hotel SPA, with room filter',
                code :"https://github.com/Loes75/HotelDeluxe", app:"https://hoteldeluxe.netlify.app/" , 
                languages :['REACT','SCSS','Contenful'],info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione hic dolores, fugit cumque deserunt harum perferendis nisi adipisci! Iusto quas suscipit a numquam soluta quo facilis enim expedita harum!',
                colors :['#a57a00','#000f45','#ececec'],
                tablet : tabletHotel, phone : phoneHotel },
                {k : 1, img : restaurant, name : 'restaurant',text : 'Restaurant website',
                code :"https://github.com/Loes75/RestaurantProject", app:"https://loes75.github.io/RestaurantProject/" , 
                languages :['HTML','CSS','VanillaJs'],info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione hic dolores, fugit cumque deserunt harum perferendis nisi adipisci! Iusto quas suscipit a numquam soluta quo facilis enim expedita harum!',
                colors :['#970C10','#EAEEF6','#FFFFFF'],
                tablet : tabletRestaurant, phone : phoneRestaurant },
                {k : 2, img : nasa, name : 'nasa', text : ' Webpage consuming Nasa Api',
                code :"https://github.com/Loes75/NasaPage", app:"https://loes75.github.io/NasaPage/" , 
                languages : ['HTML','Bootstrap','VanillaJs'],info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione hic dolores, fugit cumque deserunt harum perferendis nisi adipisci! Iusto quas suscipit a numquam soluta quo facilis enim expedita harum!',
                colors :['#B0A7A8','#1310CA','#FFFFFF'],
                tablet : tabletNasa, phone : phoneNasa},
                {k : 3, img : imageFinder, name : 'imageFinder',text : 'Image finder consuming Pixabay Api',
                code :"https://github.com/Loes75/image-finder", app:"https://loes75.github.io/image-finder/" , 
                languages :['HTML','CSS','React'], info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione hic dolores, fugit cumque deserunt harum perferendis nisi adipisci! Iusto quas suscipit a numquam soluta quo facilis enim expedita harum!',
                colors :['#888','#FF7851','#FFFFFF'],
                tablet : tabletImg, phone : phoneImg},
                {k : 4, img : covid, name : 'Covid Dashboard',text : ' Dashboard Covid Colombia consuming public Api',
                code :"https://github.com/Loes75/Dashborad_Covid", app:"https://app-covid-col.herokuapp.com/" , 
                languages : ['Python','Dash','CSS'],info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione hic dolores, fugit cumque deserunt harum perferendis nisi adipisci! Iusto quas suscipit a numquam soluta quo facilis enim expedita harum!',
                colors :['#B44646','#465442','#FFFFFF'],
                tablet : tabletCovid}];



function Context(props) {
    return (
        <projectContext.Provider value={projects}>
            {props.children}
        </projectContext.Provider>
    )
}




export {projectContext};
export default Context;