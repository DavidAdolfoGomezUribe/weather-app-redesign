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
        //final del funcion scroll 
//-----------------------------------------------------------//
        
        //variables de la api
        const apiKey = "key=3147a7f586c64f2abba154614251003"
        const baseUrlRequest = "https://api.weatherapi.com/v1"
        const currentJson = "current.json?"
        const forecastJson = "forecast.json?"
        const currentDay = "days=1"
        const week = "days=7"
        
        
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
            //final de la funcion getLocation()
//---------------------------------------------------------//            
            
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

                    //peticion de datos para la grafica //sacar el temp_c avg de los proximos 7 dias
                    let responseWeekForecast = await fetch(`${baseUrlRequest}/${forecastJson}${apiKey}&q=${query}&${week}`);
                    let dataWeekForecast = await responseWeekForecast.json();


                    
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

                    //console.log(data.current.temp_c)

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
                            <p>${data.current.temp_c}</p>
                        </div>
                        
                        <div>
                            <p>12am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[0].condition.icon} " alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[0].temp_c}°</p> 
                        </div>
                        <div>
                            <p>1am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[1].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[1].temp_c}°</p>
                        </div>
                        <div>
                            <p>2am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[2].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[2].temp_c}°</p>
                        </div>
                        <div>
                            <p>3am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[3].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[3].temp_c}°</p>
                        </div>
                        <div>
                            <p>4am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[4].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[4].temp_c}°</p>
                        </div>
                        <div>
                            <p>5am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[5].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[5].temp_c}°</p>
                        </div>
                        <div>
                            <p>6am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[6].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[6].temp_c}°</p>
                        </div>
                        <div>
                            <p>7am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[7].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[7].temp_c}°</p>
                        </div>
                        <div>
                            <p>8am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[8].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[8].temp_c}°</p>
                        </div>
                        <div>
                            <p>9am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[9].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[9].temp_c}°</p>
                        </div>
                        <div>
                            <p>10am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[10].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[10].temp_c}°</p>
                        </div>
                        <div>
                            <p>11am</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[11].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[11].temp_c}°</p>
                        </div>
                        
                        <div>
                            <p>12pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[12].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[12].temp_c}°</p>
                        </div>
                        <div>
                            <p>1pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[13].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[13].temp_c}°</p>
                        </div>
                        <div>
                            <p>2pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[14].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[14].temp_c}°</p>
                        </div>
                        <div>
                            <p>3pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[15].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[15].temp_c}°</p>
                        </div>
                        <div>
                            <p>4pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[16].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[16].temp_c}°</p>
                        </div>
                        <div>
                            <p>5pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[17].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[17].temp_c}°</p>
                        </div>
                        <div>
                            <p>6pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[18].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[18].temp_c}°</p>
                        </div>
                        <div>
                            <p>7pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[19].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[19].temp_c}°</p>
                        </div>
                        <div>
                            <p>8pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[20].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[20].temp_c}°</p>
                        </div>
                        <div>
                            <p>9pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[21].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[21].temp_c}°</p>
                        </div>
                        <div>
                            <p>10pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[22].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[22].temp_c}°</p>
                        </div>
                        <div>
                            <p>11pm</p>
                            <img src="${dataForecast.forecast.forecastday[0].hour[23].condition.icon}" alt="">
                            <p>${dataForecast.forecast.forecastday[0].hour[23].temp_c}°</p>
                        </div>


                    </div>


                
                    `

                    // hourlyforecast

                    daynightcontainer.innerHTML =
                        `<p>Day ${dataForecast.forecast.forecastday[0].day.maxtemp_c} <span>°</span></p>
                        <p>Night ${dataForecast.forecast.forecastday[0].day.mintemp_c}<span>°</span></p>`;


                    //peticiones para el main     
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

                    //grafica dailyforecast

                    function loadChartJS(callback) {
                        const script = document.createElement('script');
                        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
                        script.type= "module"
                        script.defer = true
                        script.onload = () => callback();
                        document.head.appendChild(script);
                    }
                    

                    loadChartJS(() => {

                        let dayOne = `${dataWeekForecast.forecast.forecastday[0].day.avgtemp_c}`
                        let dayTwo = `${dataWeekForecast.forecast.forecastday[1].day.avgtemp_c}`
                        let dayThree = `${dataWeekForecast.forecast.forecastday[2].day.avgtemp_c}`
                        let dayFour = `${dataWeekForecast.forecast.forecastday[3].day.avgtemp_c}`
                        let dayFive = `${dataWeekForecast.forecast.forecastday[4].day.avgtemp_c}`
                        let daySix = `${dataWeekForecast.forecast.forecastday[5].day.avgtemp_c}`
                        let daySeven = `${dataWeekForecast.forecast.forecastday[6].day.avgtemp_c}`
                    
                        let promSeven = ( Number(dayOne) + Number(dayTwo) + Number(dayThree) + Number(dayFour) +  Number(dayFive) + Number(daySix) + Number(daySeven) ) / 7;
                        // console.log(promSeven)

                        let dayDateOne =  `${dataWeekForecast.forecast.forecastday[0].date}`
                        let dayDateTwo =  `${dataWeekForecast.forecast.forecastday[1].date}`
                        let dayDateThree =  `${dataWeekForecast.forecast.forecastday[2].date}`
                        let dayDateFour =  `${dataWeekForecast.forecast.forecastday[3].date}`
                        let dayDateFive =  `${dataWeekForecast.forecast.forecastday[4].date}`
                        let dayDateSix =  `${dataWeekForecast.forecast.forecastday[5].date}`
                        let dayDateSeven =  `${dataWeekForecast.forecast.forecastday[6].date}`



                        function weekDayFunction(weekDate) {
                            // Crear un objeto Date a partir de la cadena de fecha
                            const date = new Date(weekDate);
                            
                            // Verificar si la fecha es válida
                            if (isNaN(date)) {
                              throw new Error('Fecha inválida');
                            }
                          
                            // Arreglo con los días de la semana en inglés, comenzando por 'Sun'
                            const diasSemana = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
                          
                            // Obtener el índice del día de la semana (0 para domingo, 6 para sábado)
                            const indiceDia = date.getDay();
                          
                            // Devolver la abreviatura correspondiente
                            return diasSemana[indiceDia];
                          }

                        //console.log(weekDayFunction(dayDateOne))




                        // Obtén el contexto del canvas
                        const ctx = document.getElementById('myChart').getContext('2d');
                        
                        
                        // Crear el degradado para el fondo
                        const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
                        gradientFill.addColorStop(0, 'rgba(43, 0, 165, 0.25)'); // Color más claro arriba
                        gradientFill.addColorStop(1, 'rgba(43, 0, 165, 0)');   // Transparente abajo
                        


                        // Define los datos y la configuración del gráfico
                        const data = {
                            //estos son los labels del eje x
                            labels:                             [
                            `${weekDayFunction(dayDateOne)}`,
                            `${weekDayFunction(dayDateTwo)}`,
                            `${weekDayFunction(dayDateThree)}`,
                            `${weekDayFunction(dayDateFour)}`,
                            `${weekDayFunction(dayDateFive)}`,
                            `${weekDayFunction(dayDateSix)}`,
                            `${weekDayFunction(dayDateSeven)}`],

                        datasets: [{
                            // label: "example", desactivado de momento
                            // Puedes incluir valores null para que Chart.js salte esos puntos (si quieres unir los huecos, activa spanGaps)
                            // Puntos que sacare de la API
                            // la cantidad de labels deebe ser igual que la cantidad de data
                            data: [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven],
                            
                            
                            fill: 'start',  // Rellena siempre hacia abajo de la línea
                            borderColor: '#000', // Color de la línea
                            backgroundColor: gradientFill,  // Degradado aplicado al fondo
                            pointBackgroundColor: '#21005D', // Color del fondo del punto
                            pointBorderColor: '#fff', // Color del borde del punto
                            pointBorderWidth: [1,1,1,1,1,1,1], // Ancho del borde del punto
                            pointRadius: [5, 5, 5, 5, 5, 5, 5], // Tamaño de los puntos
                            pointHoverRadius: [9, 9, 9, 9, 9, 9, 9], // Tamaño del punto al pasar el ratón
                            pointStyle: 'circle', // Estilo del punto
                            // Ajusta la tensión para definir el nivel de interpolación (curvatura)
                            tension: 0.5,
                            
                        }]
                        };

                        const config = {
                            type: 'line',
                            data: data,
                            options: {

                                plugins: {
                                    legend: {
                                        display: false 
                                    }
                                },

                                scales: {
                                    x:{
                                        grid:{
                                            display: false
                                        }
                                    },

                                    y: {
                                        min: (promSeven - 4) , 
                                        max: (promSeven + 4),
                                        ticks:{
                                            stepSize: 2,
                                            callback: function(value){
                                                return (Math.round(value*10)/10) + "°";
                                            }

                                        }

                                    
                                    }
                                }
                            }
                        };

                        // Crea el gráfico
                        const myChart = new Chart(ctx, config);

                    });

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
        if (city.length > 3) { // Evitar llamadas innecesarias
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