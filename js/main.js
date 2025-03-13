console.log("ok");

document.addEventListener("DOMContentLoaded",async function() {
    try {

        //etiquetas html del header
        const headercontainer = document.querySelector(".headercontainer");
        const regioncontainer_input = document.querySelector(".regioncontainer input")
        const tempcontainer = document.querySelector(".tempcontainer")
        const feelslikecontainer = document.querySelector(".feelslikecontainer")
        const imgweathercontainer = document.querySelector(".imgweathercontainer")
        const imgweathercontainer_img = document.querySelector(".imgweathercontainer img")
        const imgweathercontainer_p = document.querySelector(".imgweathercontainer p")
        const datecontainer = document.querySelector(".datecontainer")
        const daynightcontainer = document.querySelector(".daynightcontainer")
        
        headercontainer.style.backgroundColor = "rgba(226, 211, 250, 1)";
        //etiquetas html del main 
        
       


        
        //diablo que dificil me la pusite , diablo.
        //funcion POWEROSA para efectos de transision
        let lastScrollTop = 0;
        window.addEventListener("scroll",function() {
            
            let scrollTop  = window.scrollY || document.documentElement.scrollTop;
            
            

            //Pa poder cambiar las propiedades cuando se baja
            if(scrollTop > lastScrollTop){
                //estilos del header
                headercontainer.style.background = "rgba(226, 211, 250, 1)";
                headercontainer.style.height = "42.71vw"; 
                headercontainer.style.color = "black"; 
                
                //estilos de la barra de busqueda
                regioncontainer_input.style.color = "black"; 
                
                //estilos de la temperatura espeficica
                tempcontainer.style.fontSize ="13.83vw"
                tempcontainer.style.top = "11.16vw"
                
                //estilos de la sensacion termica
                feelslikecontainer.style.top = "19.41vw"
                feelslikecontainer.style.fontSize ="3.88vw"
                feelslikecontainer.style.left = "18.68vw"
                
                //estilos del contenedor de la imagen
                imgweathercontainer.style.width = "14.32vw";
                imgweathercontainer.style.height = "14.32vw";
                imgweathercontainer.style.top = "10.92vw";
                imgweathercontainer.style.left = "78.64vw"
                imgweathercontainer.style.display = "flex"
                imgweathercontainer.style.flexDirection = "column"
                
                    //estilos de la imagen
                    imgweathercontainer_img.style.width = "1s4.32vw";
                    imgweathercontainer_img.style.height = "14.32vw";
                    imgweathercontainer_img.objectFit= "scale-down";

                    //estilos del texto dentro del contenerdor 
                    imgweathercontainer_p.style.display = "none";

                //estilos de la fecha actual
                datecontainer.style.display = "none";
                
                //estilos del contenedor temperatura diurna nocturna
                daynightcontainer.style.display = "none";
                
            } else{ //Pa poder cambiar las propiedades cuando se sube
                
                headercontainer.style.background = " url(../storage/img/background.png)";
                headercontainer.style.backgroundColor = "rgba(226, 211, 250, 1)";
                headercontainer.style.backgroundRepeat = "no-repeat";
                headercontainer.style.backgroundPositionY ="100% " ;
                headercontainer.style.backgroundSize = "cover";
                headercontainer.style.height = "87.37vw";
                headercontainer.style.color = "white"; 

                regioncontainer_input.style.color = "white"; 
                                
                tempcontainer.style.fontSize ="27.18vw"
                tempcontainer.style.top = "33.73vw";

                feelslikecontainer.style.top = "49.75vw"
                feelslikecontainer.style.left = "24.27vw"
                feelslikecontainer.style.fontSize ="4.36vw";

                imgweathercontainer.style.top = "17.96vw";
                imgweathercontainer.style.left = "68.20vw";
                imgweathercontainer.style.width = "25.97vw";
                imgweathercontainer.style.height = "36.16vw";
                


                    imgweathercontainer_img.style.width = "25.97vw";
                    imgweathercontainer_img.style.height = "25.97vw";

                    imgweathercontainer_p.style.display = "block"

                datecontainer.style.display = "block"
               
                daynightcontainer.style.display = "block";


                
                
                
            }
            
            lastScrollTop = scrollTop;


        });


        //variables de la api
        const apiKey = "key=3147a7f586c64f2abba154614251003"
        const baseUrlRequest = "http://api.weatherapi.com/v1"
        const currentJson = "current.json?"
        const forecastJson = "forecast.json?"
        const currentDay = "days=1"
        
        async function wheatherApi() {
            
            regioncontainer_input.addEventListener("input",async function (e) {
                
                let country = e.target.value;
                
                
                let response = await fetch(` ${baseUrlRequest}/${currentJson}${apiKey}&q=${country}`)
                let countryobject = await response.json();

                //añade la temperatura de la ciudad o sitio que se dijita en la barra de busqueda
                tempcontainer.innerHTML = `<p>${countryobject.current.temp_c}<span>°</span></p>`
                
                feelslikecontainer.innerHTML = `<p>Feels like ${countryobject.current.feelslike_c}<span>°</span></p>`

                imgweathercontainer.innerHTML = 
                    `<img src="${countryobject.current.condition.icon}" > 
                     <p>${countryobject.current.condition.text}</p>`



                function formatLocalTime(localtime) {
                    const date = new Date(localtime.replace(" ", "T")); // Convertir a formato válido de JS
                    const options = { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false };
                    return date.toLocaleString("en-US", options).replace("at", ",");
                }
                let datatime = `${countryobject.location.localtime}`

                datecontainer.innerHTML = `${formatLocalTime(datatime)}`;

                // http://api.weatherapi.com/v1/forecast.json?key=3147a7f586c64f2abba154614251003&q=bucaramanga&days=1&aqi=no&alerts=no
                
                //para sacar la temperatura del dia y la noche 
                response = await fetch(` ${baseUrlRequest}/${forecastJson}${apiKey}&q=${country}&${currentDay}`)
                countryobject = await response.json();

                daynightcontainer.innerHTML =
                `<p>Day ${countryobject.forecast.forecastday[0].day.maxtemp_c} <span>°</span></p>
                 <p>Night ${countryobject.forecast.forecastday[0].day.mintemp_c}<span>°</span></p>`


                console.log(countryobject.forecast.forecastday[0].day.maxtemp_c)
                console.log(countryobject.forecast.forecastday[0].day.mintemp_c)



                
                
                
                


            })

            
        }

        wheatherApi();



        
    } catch (error) {
        
    }





});