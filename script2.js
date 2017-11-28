
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