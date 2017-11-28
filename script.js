
      function initMap() {
        var LatLng1 = {lat: 35.034547, lng: 135.718178};
        var LatLng2 = {lat: 34.392814, lng: 132.452542};
        var LatLng3 = {lat: 35.039458, lng: 135.729222};
        var LatLng4 = {lat: 35.027074, lng: 135.798206};
        var LatLng5 = {lat: 34.687333, lng: 135.526158};
        var LatLng6 = {lat: 34.685012, lng: 135.843033};
        var kyoto = {lat: 35.0116, lng: 135.7680};  
        var Ryoanji = 'Ryoanji rock garden'
        var kinkakuji = 'kinkakuji (Golden pavilion)'
        var Hiroshima = 'Hiroshima peace park & museum'
        var Osaka = 'Osaka castle'
        var Nara = 'Todaiji temple'
        var gin = 'Ginkakuji (Silver pavilion)'
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: kyoto,
        });
           var info = new google.maps.InfoWindow({
      content: Ryoanji,
    position:LatLng1,
});
        var marker = new google.maps.Marker({
            position: LatLng1,
            map: map,
            title:"Ryoanji",
            icon: 'pin.png',
            
        });  
          var marker2 = new google.maps.Marker({
            position: LatLng2,
            map: map,
             title:"Hiroshima memorial peace park",
            icon: 'pin.png',
            content: Hiroshima,
        });  
            var marker3 = new google.maps.Marker({
            position: LatLng3,
            map: map,
            title:"Kinkakuji",
            icon: 'pin.png',
            content: kinkakuji,
        });  
           var marker4 = new google.maps.Marker({
            position: LatLng4,
            map: map,
             title:"Ginkakuji",
             icon: 'pin.png',
            content: gin,
        });  
             var marker5 = new google.maps.Marker({
            position: LatLng5,
            map: map,
             title:"Osaka Castle",
             icon: 'pin.png',
            content: Osaka,
        });  
             var marker6 = new google.maps.Marker({
            position: LatLng6,
            map: map,
            title:"Nara deer park / Todaiji temple",
            icon: 'pin.png',
            content: Nara,
        });
          
         google.maps.event.addListener(marker, 'click', function(){
      info.open(map, marker);
      info1.open(map, marker1);
});
});
      }
      
      
      
        var image1 = new Image()
        image1.src = "Osaka.jpg"

        var image2 = new Image()
        image2.src = "Gin.jpg"

        var image3 = new Image()
        image3.src = "Kin.jpg"
        
        var image4 = new Image()
        image3.src = "Nara.jpg"

        var image5 = new Image()
        image3.src = "Deer.jpg"
        
        var image6 = new Image()
        image3.src = "Ryoanji.jpg"

        var image7 = new Image()
        image3.src = "Hiroshima.jpg"
    
  var step = 1
        function slideit() {
            document.images["slide"].src = eval("image" + step + ".src")
            if (step < 7)
                step++
            else
                step = 1
            setTimeout("slideit()", 5000)
        }
        slideit()
 
   