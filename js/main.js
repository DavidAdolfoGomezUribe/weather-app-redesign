console.log("ok");

document.addEventListener("DOMContentLoaded",async function() {
    try {
        
        const headercontainer = document.querySelector(".headercontainer");
        let lastScrollTop = 0;
        
        window.addEventListener("scroll",function() {
            
            let scrollTop  = window.scrollY || document.documentElement.scrollTop;
            
            
            //Pa poder cambiar las propiedades cuando se baja
            if(scrollTop > lastScrollTop){
                
                headercontainer.style.transform = "translateY(-50px)";
                headercontainer.style.backgroundColor = "blue";
                
                
                
            } else{ //Pa poder cambiar las propiedades cuando se sube
                headercontainer.style.transform = "translateY(0)";
                
                headercontainer.style.backgroundColor = "red";
                
                
            }
            
            lastScrollTop = scrollTop;


        });



        
    } catch (error) {
        
    }





});