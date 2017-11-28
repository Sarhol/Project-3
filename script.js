
      function initMap() {
        var LatLng1 = {lat: 35.034547, lng: 135.718178};
        var LatLng2 = {lat: 34.392814, lng: 132.452542};
        var LatLng3 = {lat: 35.039458, lng: 135.729222};
        var LatLng4 = {lat: 35.027074, lng: 135.798206};
        var LatLng5 = {lat: 34.687333, lng: 135.526158};
        var LatLng6 = {lat: 34.685012, lng: 135.843033};
        var kyoto = {lat: 35.0116, lng: 135.7680};  
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: kyoto,
        });
        var marker = new google.maps.Marker({
            position: LatLng1,
            map: map,
            title:"Ryoanji",
            icon: 'pin.png',
            content: "Ryoanji rock garden",
            
        });  
          var marker2 = new google.maps.Marker({
            position: LatLng2,
            map: map,
             title:"Hiroshima memorial peace park",
            icon: 'pin.png',
            content: "Ryoanji rock garden",
        });  
            var marker3 = new google.maps.Marker({
            position: LatLng3,
            map: map,
            title:"Kinkakuji",
            icon: 'pin.png',
            content: "Ryoanji rock garden",
        });  
           var marker4 = new google.maps.Marker({
            position: LatLng4,
            map: map,
             title:"Ginkakuji",
             icon: 'pin.png',
            content: "Ryoanji rock garden"
        });  
             var marker5 = new google.maps.Marker({
            position: LatLng5,
            map: map,
             title:"Osaka Castle",
             icon: 'pin.png',
            content: "Ryoanji rock garden"
        });  
             var marker6 = new google.maps.Marker({
            position: LatLng6,
            map: map,
            title:"Nara deer park / Todaiji temple",
            icon: 'pin.png',
            content: "Ryoanji rock garden"
        });  
      }
 
   