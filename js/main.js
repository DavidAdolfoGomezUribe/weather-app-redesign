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
        const imgweathercontainer_p = document.querySelector(".imgweathercontainer p");
        const datecontainer = document.querySelector(".datecontainer")
        const daynightcontainer = document.querySelector(".daynightcontainer")
        const selectioncontaienr = document.querySelector(".selectioncontaienr")
        
        
        //etiquetas html del main 
        const maincontainer = document.querySelector(".maincontainer")
        const windrainpressureuvcontainer = document.querySelector(".windrainpressureuvcontainer")
        

        headercontainer.style.backgroundColor = "rgba(226, 211, 250, 1)";
        

        
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
                headercontainer.style.borderRadius = "0"
                
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
                imgweathercontainer.style.color = "transparent"
                
                    //estilos de la imagen
                    imgweathercontainer_img.style.width = "1s4.32vw";
                    imgweathercontainer_img.style.height = "14.32vw";
                    imgweathercontainer_img.objectFit= "scale-down";

                    //estilos del texto dentro del contenerdor 
                    
                    imgweathercontainer_p.style.color = "rgba(255, 0, 0, 0)";
                    

                //estilos de la fecha actual
                datecontainer.style.display = "none";
                
                //estilos del contenedor temperatura diurna nocturna
                daynightcontainer.style.display = "none";


                //estilos del selectioncontaienr 
                
                selectioncontaienr.style.top = "29.36vw"

                //estilos para el main
                maincontainer.style.top = "46.60vw"
                
                


                
            } else{ //Pa poder cambiar las propiedades cuando se sube
                
                //header
                headercontainer.style.background = " url(../storage/img/background.png)";
                headercontainer.style.backgroundColor = "rgba(226, 211, 250, 1)";
                headercontainer.style.backgroundRepeat = "no-repeat";
                headercontainer.style.backgroundPositionY ="100% " ;
                headercontainer.style.backgroundSize = "cover";
                headercontainer.style.height = "87.37vw";
                headercontainer.style.color = "white"; 
                headercontainer.style.borderBottomLeftRadius = "8vw";
                headercontainer.style.borderBottomRightRadius = "8vw";
                

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
                imgweathercontainer.style.color = "white"
                

                    imgweathercontainer_img.style.width = "25.97vw";
                    imgweathercontainer_img.style.height = "25.97vw";
                    
                    
                    

                datecontainer.style.display = "block"
               
                daynightcontainer.style.display = "block";

                selectioncontaienr.style.top = "91.74vw"
                
                //main

                maincontainer.style.top = "105.82vw"
                
            }
            
            lastScrollTop = scrollTop;


        });


        //variables de la api
        const apiKey = "key=3147a7f586c64f2abba154614251003"
        const baseUrlRequest = "https://api.weatherapi.com/v1"
        const currentJson = "current.json?"
        const forecastJson = "forecast.json?"
        const currentDay = "days=1"


        async function wheatherApi() {
            
            
        // geolocalizacion
          async function getLocation() {
            return new Promise(function (success, reject) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    success({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                }
                ,                
                function (error) {
                    reject(error);
                }
                );
            });
        }

        //verificacion de lat y long en consola
        // let coords = await getLocation()   
        // console.log(coords) //esto devuelve un arreglo          
        // let latidude  =  coords.lat
        // let longitude = coords.lon
        // console.log(latidude)
        // console.log(longitude)


    // Obtener y mostrar el clima
        async function fetchWeatherData(query) {
        try {

            // Petición para datos actuales
            let response = await fetch(`${baseUrlRequest}/${currentJson}${apiKey}&q=${query}`);
            let data = await response.json();

            

            tempcontainer.innerHTML = `<p>${data.current.temp_c}<span>°</span></p>`;
            feelslikecontainer.innerHTML = `<p>Feels like ${data.current.feelslike_c}<span>°</span></p>`;
            imgweathercontainer.innerHTML = `<img src="${data.current.condition.icon}">
                                                <p>${data.current.condition.text}</p>`;
            

            function formatLocalTime(localtime) {
                const date = new Date(localtime.replace(" ", "T"));
                const options = { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false };
                return date.toLocaleString("en-US", options).replace("at", ",");
            }

            datecontainer.innerHTML = `${formatLocalTime(data.location.localtime)}`;

            // Petición para obtener temperaturas del día y la noche
            response = await fetch(`${baseUrlRequest}/${forecastJson}${apiKey}&q=${query}&${currentDay}`);
            data = await response.json();

            daynightcontainer.innerHTML =
                `<p>Day ${data.forecast.forecastday[0].day.maxtemp_c} <span>°</span></p>
                 <p>Night ${data.forecast.forecastday[0].day.mintemp_c}<span>°</span></p>`;

        } catch (error) {
            console.error("Error obteniendo datos del clima:", error);
        }
    }

    // Mostrar el clima inicial con geolocalización
    
    try {
        
        // //https://api.weatherapi.com/v1/current.json?key=3147a7f586c64f2abba154614251003&q=7.094272,-73.121792
        
        
        async function geolocalitation() {
            
            //verificacion de lat y long en consola
            let coords = await getLocation()   
            // console.log(coords) //esto devuelve un arreglo          
            let latidude  =  coords.lat
            let longitude = coords.lon
            // console.log(latidude)
            // console.log(longitude)
            
            await fetchWeatherData(`${coords.lat},${coords.lon}`);
            
            let newResponse = await fetch(`${baseUrlRequest}/${forecastJson}${apiKey}&q=${latidude},${longitude}`);
            let data = await newResponse.json();
    
            regioncontainer_input.value = data.location.name;
            
        }
        
        geolocalitation();
        
        
   
    } catch (error) {
        console.error("No se pudo obtener la ubicación, intenta escribir una ciudad.");
    }

    // Escuchar cambios en el input de búsqueda
    regioncontainer_input.addEventListener("input", async function (e) {
        let city = e.target.value;
        if (city.length > 2) { // Evitar llamadas innecesarias
            await fetchWeatherData(city);
        }
    
    });


    const buttons = document.querySelectorAll(".selectioncontaienr button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var buttonText = this.textContent.trim();
            if (buttonText === "Today") {
                // Lógica para "Today"
                maincontainer.style.backgroundColor = "blue"
                console.log("Today clicked");
                // Ejemplo: await fetchWeatherData(query);
            } else if (buttonText === "Tomorrow") {
                // Lógica para "Tomorrow"
                maincontainer.style.backgroundColor = "brown"
                console.log("Tomorrow clicked");
                // TODO: Implementa la lógica para mostrar el pronóstico de mañana
            } else if (buttonText === "10 days") {
                // Lógica para "10 days"
                console.log("10 days clicked");
                // TODO: Implementa la lógica para mostrar el pronóstico de 10 días
            }
        }) }   



}

        wheatherApi();



        
    } catch (error) {
        
    }





});