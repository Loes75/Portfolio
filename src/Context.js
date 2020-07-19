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



var projects = [{k : 0, img : hotel, name : 'hotel', text : 'SPA Hotel Deluxe',
                code :"https://github.com/Loes75/HotelDeluxe", app:"https://hoteldeluxe.netlify.app/" , 
                languages :['REACT','SASS','Contenful'],info : 'Web SPA realizada para un hotel, donde se puede filtrar las habitaciones según el precio, cantidad de personas, entre otros datos.Este proyecto se realizó en REACT y para la gestión de contenidos se usó Contentul.Diseño Full responsive',
                colors :['#a57a00','#000f45','#ececec'],
                tablet : tabletHotel, phone : phoneHotel },
                {k : 1, img : restaurant, name : 'restaurante',text : 'Restaurante Déliciuse',
                code :"https://github.com/Loes75/RestaurantProject", app:"https://loes75.github.io/RestaurantProject/" , 
                languages :['HTML','CSS','VanillaJs'],info : 'Sitio web realizado para un restaurante, en este proyecto se usó Vanilla Javascript en todo el desarrollo.Para el formulario se usó PHP para enviar los datos a una cuenta de correo y se validaronlos datos primero con JS y luego con  PHP. Diseño Full responsive',
                colors :['#970C10','#EAEEF6','#FFFFFF'],
                tablet : tabletRestaurant, phone : phoneRestaurant },
                {k : 2, img : nasa, name : 'nasa', text : ' Página web NASA',
                code :"https://github.com/Loes75/NasaPage", app:"https://loes75.github.io/NasaPage/" , 
                languages : ['HTML','Bootstrap','VanillaJs'],info : 'Página web con un diseño sencillo, donde se puede consultar la imagen o video astronómico del día proporcionados por una API de la Nasa. Diseño Full responsive',
                colors :['#B0A7A8','#1310CA','#FFFFFF'],
                tablet : tabletNasa, phone : phoneNasa},
                {k : 3, img : imageFinder, name : 'buscador de imágenes',text : 'Buscador de imágenes',
                code :"https://github.com/Loes75/image-finder", app:"https://loes75.github.io/image-finder/" , 
                languages :['HTML','CSS','React'], info : 'SPA para buscar imágenes realizado usando REACT y consumiendo la API de Pixabay.',
                colors :['#888','#FF7851','#FFFFFF'],
                tablet : tabletImg, phone : phoneImg},
                {k : 4, img : covid, name : 'Dashboard Covid19',text : ' Dashboard sobre Covid-19 en Colombia',
                code :"https://github.com/Loes75/Dashborad_Covid", app:"https://app-covid-col.herokuapp.com/" , 
                languages : ['Python','Dash','CSS'],info : 'Dashboard realizado con python y su herramienta Dash, en este proyecto se consume la API del gobierno, los filtrados y análisis de datos se realizaron usando la librería Pandas y para los gráficos se usó Plotly',
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