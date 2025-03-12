console.log("ok");

document.addEventListener("DOMContentLoaded",async function() {
    try {
        const headercontainer = document.querySelector(".headercontainer");
        const tempcontainer = document.querySelector(".tempcontainer")
        const feelslikecontainer = document.querySelector(".feelslikecontainer")
        const imgweathercontainer = document.querySelector(".imgweathercontainer")
        const imgweathercontainer_img = document.querySelector(".imgweathercontainer img")
        const imgweathercontainer_p = document.querySelector(".imgweathercontainer p")
        const datecontainer = document.querySelector(".datecontainer")
        const daynightcontainer = document.querySelector(".daynightcontainer")
        
        
        
        let lastScrollTop = 0;
        
        window.addEventListener("scroll",function() {
            
            let scrollTop  = window.scrollY || document.documentElement.scrollTop;
            
            
            //Pa poder cambiar las propiedades cuando se baja
            if(scrollTop > lastScrollTop){
                //estilos del header
                headercontainer.style.background = "rgba(226, 211, 250, 1)";
                headercontainer.style.height = "42.71vw"; 
                headercontainer.style.color = "black"; 
                
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
                    imgweathercontainer_img.style.width = "14.32vw";
                    imgweathercontainer_img.style.height = "14.32vw";

                    //estilos del texto dentro del contenerdor 
                    imgweathercontainer_p.style.display = "none";

                //estilos de la fecha actual
                datecontainer.style.display = "none";
                
                //estilos del contenedor temperatura diurna nocturna
                daynightcontainer.style.display = "none";
                
            } else{ //Pa poder cambiar las propiedades cuando se sube
                
                headercontainer.style.background = " url(../storage/img/background.png)";
                headercontainer.style.backgroundRepeat = "no-repeat";
                headercontainer.style.backgroundPositionY ="100% " ;
                headercontainer.style.backgroundSize = "cover";
                headercontainer.style.height = "87.37vw";
                headercontainer.style.color = "white"; 
                                
                tempcontainer.style.fontSize ="27.18vw"
                tempcontainer.style.top = "33.73vw";

                feelslikecontainer.style.top = "49.75vw"
                feelslikecontainer.style.left = "24.27vw"
                feelslikecontainer.style.fontSize ="4.36vw";

                imgweathercontainer.style.top = "17.96vw";
                imgweathercontainer.style.left = "68.20vw";
                imgweathercontainer.style.width = "25.97vw";


                    imgweathercontainer_img.style.width = "25.97vw";
                    imgweathercontainer_img.style.height = "25.97vw";

                    imgweathercontainer_p.style.display = "block"

                datecontainer.style.display = "block"
               
                daynightcontainer.style.display = "block";


                
                
                
            }
            
            lastScrollTop = scrollTop;


        });



        
    } catch (error) {
        
    }





});