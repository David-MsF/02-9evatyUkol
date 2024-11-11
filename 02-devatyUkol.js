let elmStart = document.querySelector(".tlacitko1");
let bodyBackground = document.querySelector(".body");

let aktivaceRGB;
let promena = true // přidal jsem boolean abych zajistil zastavení cyklů po stisknutí startu
elmStart.addEventListener("click", (e) => {
   /* BodyBackGround.style.backgroundColor = "red" */ // to jsem si zakomentoval když jsem zkoušel jak vubec změnit barvu stisknutím :D 
    
    if (promena) {     
        
        
        aktivaceRGB = setInterval( ()  => {

        let modra = Math.floor(Math.random() * 256);
        let cervena = Math.floor(Math.random() * 256);
        let zelena = Math.floor(Math.random() * 256);
    
        bodyBackground.style.backgroundColor = "rgb(" + modra + ", " + cervena + ", " + zelena + ") "
       // console.log(Math.floor(Math.random() * 256));
    }, 3000)  
        promena = false
          }
  
  
    } ) ;  

    
let elmKonec = document.querySelector(".tlacitko2");

elmKonec.addEventListener( "click", (e) => {

    if (aktivaceRGB) {
        clearInterval(aktivaceRGB);
        aktivaceRGB = null; // resetuju timhle tu proměnnou a mělo by se to vypnout, nejspíš i pak zase zapnout startem...
        promena = true
    }
    
    
    //console.log("aaaaaaaaaa");


});
    
    
    
    
   
    
   
    



    // po hodině a půl mi to změnilo barvu,,, hurá :D pak jsem tam začal sypat  .Math celý se to rozjebalo a musel jsem znova... a pomalu... takže od 14:00 mám tlačítko co umí měnit jednou barvu.... Ale console.log píše při dalším stisknutí random čísla takže jsem na správbý cestě.. teď zkusim for nebo while cyklus ..  snad to bud dobrá cesta .. je 17:30... nebo timeout?
    // je 18:00 použil jsem setInterval a dal jsem do něj i ty barvy s tim Mathem a bliká to jak blázen,,,,, ale už jsem blízko... snad...
    // 18:20 bliká mi to :))))   
    //18:26 mám funci (zatím vyconsolovanou ) na tlačítku 2
    // 18:38 mám to, pustí se to opakovaně dokud neskončí vesmír jak říkáš :D protože je na konci null a při stisknutí start se zase přepíše a pořád dokola.. napsal jsem aktivace RGB venku a přiřadil jsem funkci až vevnitř abych jí pak mohl vyresetovat tim druhym tlačítkem.. 
    // zajímalo by mě proč se barva nezmění hned ale až za 3 sekundy ale nemam už dnes sílu.. jdu hrát  DayZ :D :D a zítra do práce ...  venku... zima... celý odpoledne jsem se poctivě učil :))  
    //btw v tam tom předešlém úkole jsem měl taky transition, ale asi jsem tam neuvedl čas...
    // Možná nebudeš chápat co píšu, jsem dost originální :D tak se nezlob čus David MsF



    







