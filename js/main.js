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
        const windcontainer = document.querySelector(".windcontainer")
        const raincontainer = document.querySelector(".raincontainer")
        const pressurecontainer = document.querySelector(".pressurecontainer")
        const uvcontainer = document.querySelector(".uvcontainer")

        const hourlyforecastcontainer = document.querySelector(".hourlyforecastcontainer")
        
        
        //Inicio de la logica del codigo
        headercontainer.style.backgroundColor = "rgba(226, 211, 250, 1)";
        
        //diablo que dificil me la pusite , diablo.
        //funcion POWEROSA para efectos de transision
     
        let lastScrollTop = 0;
        window.scrollTo({ top: 0, behavior: "smooth" });

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
                //datecontainer.style.display = "none";
                datecontainer.style.top = "23vw"
                datecontainer.style.color = "transparent"
                
                
                
                //estilos del contenedor temperatura diurna nocturna
                // daynightcontainer.style.display = "none";
                daynightcontainer.style.top = "23vw"
                daynightcontainer.style.color = "transparent"
                
                
                //estilos del selectioncontaienr 
                
                selectioncontaienr.style.top = "29.36vw";
                
                //estilos para el main
                maincontainer.style.top = "46.60vw";
                
                
                
                
                
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
                datecontainer.style.top = "76.69vw"
                datecontainer.style.color = "white"
                
                
                daynightcontainer.style.display = "block";
                daynightcontainer.style.top = "71.84vw"
                daynightcontainer.style.color = "white"
                
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
                    
                    // Petición para datos actuales del header usando current
                    let response = await fetch(`${baseUrlRequest}/${currentJson}${apiKey}&q=${query}`);
                    let data = await response.json();
                    
                    // Petición para obtener temperaturas del día y la noche usando forecast //pronostico de ahora en 24 horas
                    let responseForecast = await fetch(`${baseUrlRequest}/${forecastJson}${apiKey}&q=${query}&${currentDay}`);
                    let dataForecast = await responseForecast.json();
                    
                    
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
            
            //peticiones para el main
            
            windcontainer.innerHTML =`
            <div>
            
            <img src="storage/img/air.png" alt="">
            
                <div>
                    <p>Wind speed</p>
                    <p> ${data.current.wind_kph}km/h</p>

                </div>
        
            </div>

            <div>
                <!-- velocidad con respecto a la hora anterior -->
                <img src="" alt="">
                <p>
                    2 <span>km/h</span>
                </p>
            </div> `

            pressurecontainer.innerHTML= `    
            <div>

            <img src="storage/img/pressre.svg" alt="">
            
            <div>
                <p>Pressure</p>
                <p>${data.current.pressure_mb}hpa</p>

            </div>
        
            </div>

            <div>
                <!-- velocidad con respecto a la hora anterior -->
                <img src="" alt="">
                <p>
                    0 <span>hpa</span>
                </p>
            </div>`


            uvcontainer.innerHTML=`
            <div>

                <img src="storage/img/uv.svg" alt="">
                
                <div>
                    <p>UV index</p>
                    <p>${data.current.uv}</p>

                </div>
            
            </div>

            <div>
                <!-- velocidad con respecto a la hora anterior -->
                <img src="" alt="">
                <p>
                    0 
                </p>
            </div> `

            hourlyforecastcontainer.innerHTML=`
           <div>
                <img src="" alt="">
                <p>Hourly forecast</p>
            </div>      

            <!-- --- --- --- -- --- --- --- --- --- --- -->
            
            <div>
                <div>   <!-- position sitiky + curret forecast -->
                    <p>Now</p>
                    <img src="${data.current.condition.icon}">
                    <p>${data.current.condition.text}</p>
                </div>

                <div>
                    <p>12am</p>
                    <img src="" alt="">
                    <p>1</p>
                </div>
                <div>
                    <p>1am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>2am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>3am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>4am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>5am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>6am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>7am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>8am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>9am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>10am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>11am</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                
                <div>
                    <p>12pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>1pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>2pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>3pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>4pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>5pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>6pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>7pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>8pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>9pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>10pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>
                <div>
                    <p>11pm</p>
                    <img src="" alt="">
                    <p></p>
                </div>


            </div>


          
`

            // hourlyforecast
           







            daynightcontainer.innerHTML =
                `<p>Day ${dataForecast.forecast.forecastday[0].day.maxtemp_c} <span>°</span></p>
                 <p>Night ${dataForecast.forecast.forecastday[0].day.mintemp_c}<span>°</span></p>`;


            //peticiin para el main     
            raincontainer.innerHTML =`
           
                 <div>
 
                     <img src="storage/img/rainy.png" alt="">
                     
                     <div>
                         <p>Rain chance</p>
                         <p>${dataForecast.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
     
                     </div>
                 
                 </div>
 
                 <div>
                     <!-- velocidad con respecto a la hora anterior -->
                     <img src="" alt="">
                     <p>
                         0 <span>%</span>
                     </p>
                 </div>
            
             </div> `

 
            
            

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

    //Aqui empieza lo dificil
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