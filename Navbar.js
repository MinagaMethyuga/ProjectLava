var triggerText = document.getElementById("Phonestxt");
var triggerTextwatch = document.getElementById("watchtxt");
var triggerTextaudio = document.getElementById("audiotxt");
var exit =document.getElementById("navigationbar");
var slideElement = document.getElementById("dropdownbackground-Phones");
var slideElementwatch = document.getElementById("dropdownbackground-Watches");
var slideElementaudio = document.getElementById("dropdownbackground-audio");
var animationTime = 400;
var newanime =600;
var txtanime = 800;
var delay=500;

//Phones variables used to animate
var listboxone=document.getElementById("productone");
var listboxtwo=document.getElementById("producttwo");
var listboxthree=document.getElementById("productthree");
var txtslidedown=document.querySelectorAll("#phonenames li");
var detailboxone=document.getElementById("productcover")
var detailboxtwo=document.getElementById("productcoversecond")
var detailboxthree=document.getElementById("productcoverThird")
var maintextboxone=document.getElementById("Productname")
var maintextboxtwo=document.getElementById("Productnamesecond")
var maintextboxthird=document.getElementById("ProductnameThird")
var btnanimation=document.getElementById("commonbtn")
var btnanimationsecond=document.getElementById("commonbtnSecond")
var btnanimationthird=document.getElementById("commonbtnThird")

//watch variables used to animate
var listboxonewatch=document.getElementById("productone-watch");
var listboxtwowatch=document.getElementById("producttwo-watch");
var listboxthreewatch=document.getElementById("productthree-watch");

var detailboxonewatch=document.getElementById("productcover-watch")
var detailboxtwowatch=document.getElementById("productcoversecond-watch")
var detailboxthreewatch=document.getElementById("productcoverThird-watch")

var maintextboxonewatch=document.getElementById("Productname-watch")
var maintextboxtwowatch=document.getElementById("Productnamesecond-watch")
var maintextboxthirdwatch=document.getElementById("ProductnameThird-watch")

var btnanimationwatch=document.getElementById("commonbtn-watch")
var btnanimationsecondwatch=document.getElementById("commonbtnSecond-watch")
var btnanimationthirdwatch=document.getElementById("commonbtnThird-watch")

//audio variables used to animate
var listboxoneaudio=document.getElementById("productone-audio");
var listboxtwoaudio=document.getElementById("producttwo-audio");
var listboxthreeaudio=document.getElementById("productthree-audio");

var detailboxoneaudio=document.getElementById("productcover-audio")
var detailboxtwoaudio=document.getElementById("productcoversecond-audio")
var detailboxthreeaudio=document.getElementById("productcoverThird-audio")

var maintextboxoneaudio=document.getElementById("Productname-audio")
var maintextboxtwoaudio=document.getElementById("Productnamesecond-audio")
var maintextboxthirdaudio=document.getElementById("ProductnameThird-audio")

var btnanimationaudio=document.getElementById("commonbtn-audio")
var btnanimationsecondaudio=document.getElementById("commonbtnSecond-audio")
var btnanimationthirdaudio=document.getElementById("commonbtnThird-audio")



document.addEventListener("DOMContentLoaded", function () {

//phone-tab animation codes
    triggerText.addEventListener("mouseover", function () {
      slideElement.style.display ="block";
      slideElement.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
      slideElement.style.zIndex = "3";
      slideElement.style.top = "7%";
      slideElement.style.opacity = "1";
//resetting the watch when phone is hovered
        slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
        slideElementwatch.style.top = "-230px";
        slideElementwatch.style.zIndex = "-10";
//resetting the audio slide to  original when watches is hovered
        slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
        slideElementaudio.style.top = "-230px";
        slideElementaudio.style.zIndex = "-10";
    });

        exit.addEventListener("mouseleave", function(){
        slideElement.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
        slideElement.style.zIndex = "-10";
        slideElement.style.top = "-250px";
        slideElement.style.opacity = "1";
    });
        triggerText.addEventListener("mouseleave", function(){
        slideElement.style.transition = "zIndex " + (animationTime / 1000) + "s ease-in-out";
        slideElement.style.zIndex = "-10";
//Resting the watch slidedown to original when the phone text is hovered
        slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
        slideElementwatch.style.transition = "zIndex " + (animationTime / 1000) + "s ease-in-out";
        slideElementwatch.style.top = "-230px";
        slideElementwatch.style.zIndex = "-10";
//resetting the audio slide to  original when watches is hovered
        slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
        slideElementaudio.style.top = "-230px";
        slideElementaudio.style.zIndex = "-10";       
    });

    triggerText.addEventListener("mouseover",function(){
        listboxone.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxtwo.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxthree.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxone.style.right="5%";
        listboxtwo.style.right="25%";
        listboxthree.style.right="45%";
        listboxone.style.opacity="100%";
        listboxtwo.style.opacity="100%";
        listboxthree.style.opacity="100%";
        
        txtslidedown.forEach(function (liElement) {
          liElement.style.position = "relative";
          liElement.style.transition = "left " + (txtanime / 1000) + "s ease-in-out";
          liElement.style.left = "7%";
          liElement.style.display = "block";
      });
    },delay);
      exit.addEventListener("mouseover",function(){
      listboxone.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
      listboxtwo.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
      listboxthree.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
      listboxone.style.right="5%";
      listboxtwo.style.right="25%";
      listboxthree.style.right="45%";
      listboxone.style.opacity="100%";
      listboxtwo.style.opacity="100%";
      listboxthree.style.opacity="100%";
      
      txtslidedown.forEach(function (liElement) {
        liElement.style.position = "relative";
        liElement.style.transition = "left " + (txtanime / 1000) + "s ease-in-out";
        liElement.style.left = "7%";
        liElement.style.display = "block";
    });
  },delay);

    exit.addEventListener("mouseleave",function(){
        listboxone.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxtwo.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxthree.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
        listboxone.style.right="-50%";
        listboxtwo.style.right="-50%";
        listboxthree.style.right="-50%"

        txtslidedown.forEach(function (liElement) {
          liElement.style.position = "relative";
          liElement.style.transition = "left " + (txtanime / 1000) + "s ease-in-out";
          liElement.style.left = "-15%";  
          liElement.style.display = "block";
      });    
  },delay);
    listboxone.addEventListener("mouseover", function() {
    btnanimation.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxone.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxone.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
    setTimeout(function() {
        detailboxone.style.top = "0";
    }, 0);
    setTimeout(function() {
        maintextboxone.style.top = "10%";
    }, 0);
    setTimeout(function() {
      btnanimation.style.bottom = "40%";
    }, 0);
});
listboxone.addEventListener("mouseleave", function(){
    btnanimation.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxone.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxone.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    setTimeout(function() {
      detailboxone.style.top = "-100%";
  }, 0);
  setTimeout(function() {
      maintextboxone.style.top = "-30%";
  }, 0);
  setTimeout(function() {
    btnanimation.style.bottom = "-40%";
  }, 0);
})
  listboxtwo.addEventListener("mouseover", function() {
  btnanimationsecond.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
  detailboxone.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
  maintextboxtwo.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
  setTimeout(function() {
    detailboxtwo.style.top = "0";
  }, 0);
  setTimeout(function() {
    maintextboxtwo.style.top = "10%";
  }, 0);
  setTimeout(function() {
    btnanimationsecond.style.bottom = "40%";
  }, 0);

  listboxtwo.addEventListener("mouseleave", function(){
    btnanimationsecond.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxtwo.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxtwo.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    setTimeout(function() {
      detailboxtwo.style.top = "-100%";
  }, 0);
  setTimeout(function() {
      maintextboxtwo.style.top = "-30%";
  }, 0);
  setTimeout(function() {
    btnanimationsecond.style.bottom = "-40%";
  }, 0);
});
});
listboxthree.addEventListener("mouseover", function() {
  btnanimationthird.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
  detailboxthree.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
  maintextboxthird.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
  setTimeout(function() {
    detailboxthree.style.top = "0";
  }, 0);
  setTimeout(function() {
    maintextboxthird.style.top = "10%";
  }, 0);
  setTimeout(function() {
    btnanimationthird.style.bottom = "40%";
  }, 0);

  listboxthree.addEventListener("mouseleave", function(){
    btnanimationthird.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxthree.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxthird.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    setTimeout(function() {
      detailboxthree.style.top = "-100%";
  }, 0);
  setTimeout(function() {
      maintextboxthird.style.top = "-30%";
  }, 0);
  setTimeout(function() {
    btnanimationthird.style.bottom = "-40%";
  }, 0);
});
});

//watch animation codes
  triggerTextwatch.addEventListener("mouseover", function () {
  slideElementwatch.style.display ="block";
  slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
  slideElementwatch.style.zIndex = "3";
  slideElementwatch.style.top = "7%";
//Resetting the phone slide to original when watches is hovered
  slideElement.style.zIndex = "-10";
  slideElement.style.top = "-250px";
  slideElement.style.opacity = "1"; 
  slideElement.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
//resetting the audio slide to  original when watches is hovered
  slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
  slideElementaudio.style.top = "-230px";
  slideElementaudio.style.zIndex = "-10";
});

    exit.addEventListener("mouseleave", function(){
    slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
    slideElementwatch.style.top = "-230px";
    slideElementwatch.style.zIndex = "-10";
});
    triggerTextwatch.addEventListener("mouseleave", function(){
    slideElementwatch.style.transition = "opacity " + (animationTime / 2000) + "s ease-in-out";
    slideElementwatch.style.zIndex = "-10";
});
  triggerTextwatch.addEventListener("mouseover",function(){
  listboxonewatch.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxtwowatch.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxthreewatch.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxonewatch.style.right="5%";
  listboxtwowatch.style.right="25%";
  listboxthreewatch.style.right="45%";
  listboxonewatch.style.opacity="100%";
  listboxtwowatch.style.opacity="100%";
  listboxthreewatch.style.opacity="100%";
  
  txtslidedown.forEach(function (liElement) {
    liElement.style.position = "relative";
    liElement.style.transition = "left " + (txtanime / 1000) + "s ease-in-out";
    liElement.style.left = "7%";
    liElement.style.display = "block";

  listboxonewatch.addEventListener("mouseover", function() {
      btnanimationwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxonewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxonewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
      setTimeout(function() {
          detailboxonewatch.style.top = "0";
      }, 0);
      setTimeout(function() {
          maintextboxonewatch.style.top = "10%";
      }, 0);
      setTimeout(function() {
        btnanimationwatch.style.bottom = "40%";
      }, 0);
  });
  listboxonewatch.addEventListener("mouseleave", function(){
      btnanimationwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxonewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxonewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxonewatch.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxonewatch.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationwatch.style.bottom = "-40%";
    }, 0);
  })
    listboxtwowatch.addEventListener("mouseover", function() {
    btnanimationsecondwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxtwowatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxtwowatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
    setTimeout(function() {
      detailboxtwowatch.style.top = "0";
    }, 0);
    setTimeout(function() {
      maintextboxtwowatch.style.top = "10%";
    }, 0);
    setTimeout(function() {
      btnanimationsecondwatch.style.bottom = "40%";
    }, 0);
  
    listboxtwowatch.addEventListener("mouseleave", function(){
      btnanimationsecondwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxtwowatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxtwowatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxtwowatch.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxtwowatch.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationsecondwatch.style.bottom = "-40%";
    }, 0);
  });
  });
  listboxthreewatch.addEventListener("mouseover", function() {
    btnanimationthirdwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxthreewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxthirdwatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
    setTimeout(function() {
      detailboxthreewatch.style.top = "0";
    }, 0);
    setTimeout(function() {
      maintextboxthirdwatch.style.top = "10%";
    }, 0);
    setTimeout(function() {
      btnanimationthirdwatch.style.bottom = "40%";
    }, 0);
  
    listboxthreewatch.addEventListener("mouseleave", function(){
      btnanimationthirdwatch.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxthreewatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxthirdwatch.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxthreewatch.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxthirdwatch.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationthirdwatch.style.bottom = "-40%";
    }, 0);
});
})
})
})

//audio section animation 
triggerTextaudio.addEventListener("mouseover", function () {
  slideElementaudio.style.display ="block";
  slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
  slideElementaudio.style.zIndex = "3";
  slideElementaudio.style.top = "7%";
//Resetting the phone slide to original when audio is hovered
  slideElement.style.zIndex = "-10";
  slideElement.style.top = "-250px";
  slideElement.style.opacity = "1"; 
  slideElement.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
//Resetting the watch slide to original when audio is hovered
  slideElementwatch.style.transition = "zIndex " + (animationTime / 1000) + "s ease-in-out";
  slideElementwatch.style.top = "-230px";
  slideElementwatch.style.zIndex = "-10";
  slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
});

    exit.addEventListener("mouseleave", function(){
    slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
    slideElementaudio.style.top = "-230px";
    slideElementaudio.style.zIndex = "-10";
});
    triggerTextaudio.addEventListener("mouseleave", function(){
    slideElementaudio.style.transition = "opacity " + (animationTime / 2000) + "s ease-in-out";
    slideElementaudio.style.zIndex = "-10";
});
  triggerTextaudio.addEventListener("mouseover",function(){
  listboxoneaudio.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxtwoaudio.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxthreeaudio.style.transition = "right " + (animationTime / 1000) + "s ease-in-out";
  listboxoneaudio.style.right="5%";
  listboxtwoaudio.style.right="25%";
  listboxthreeaudio.style.right="45%";
  listboxoneaudio.style.opacity="100%";
  listboxtwoaudio.style.opacity="100%";
  listboxthreeaudio.style.opacity="100%";
  
  txtslidedown.forEach(function (liElement) {
    liElement.style.position = "relative";
    liElement.style.transition = "left " + (txtanime / 1000) + "s ease-in-out";
    liElement.style.left = "7%";
    liElement.style.display = "block";

  listboxoneaudio.addEventListener("mouseover", function() {
      btnanimationaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxoneaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxoneaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
      setTimeout(function() {
          detailboxoneaudio.style.top = "0";
      }, 0);
      setTimeout(function() {
          maintextboxoneaudio.style.top = "10%";
      }, 0);
      setTimeout(function() {
        btnanimationaudio.style.bottom = "40%";
      }, 0);
  });
  listboxoneaudio.addEventListener("mouseleave", function(){
      btnanimationaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxoneaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxoneaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxoneaudio.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxoneaudio.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationaudio.style.bottom = "-40%";
    }, 0);
  })
    listboxtwoaudio.addEventListener("mouseover", function() {
    btnanimationsecondaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxtwoaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxtwoaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
    setTimeout(function() {
      detailboxtwoaudio.style.top = "0";
    }, 0);
    setTimeout(function() {
      maintextboxtwoaudio.style.top = "10%";
    }, 0);
    setTimeout(function() {
      btnanimationsecondaudio.style.bottom = "40%";
    }, 0);
  
    listboxtwoaudio.addEventListener("mouseleave", function(){
      btnanimationsecondaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxtwoaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxtwoaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxtwoaudio.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxtwoaudio.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationsecondaudio.style.bottom = "-40%";
    }, 0);
  });
  });
  listboxthreeaudio.addEventListener("mouseover", function() {
    btnanimationthirdaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
    detailboxthreeaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
    maintextboxthirdaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out"; // Added a space after "top"
    setTimeout(function() {
      detailboxthreeaudio.style.top = "0";
    }, 0);
    setTimeout(function() {
      maintextboxthirdaudio.style.top = "10%";
    }, 0);
    setTimeout(function() {
      btnanimationthirdaudio.style.bottom = "40%";
    }, 0);
  
    listboxthreeaudio.addEventListener("mouseleave", function(){
      btnanimationthirdaudio.style.transition = "bottom " + (newanime / 1000) + "s ease-in-out";
      detailboxthreeaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      maintextboxthirdaudio.style.transition = "top " + (newanime / 1000) + "s ease-in-out";
      setTimeout(function() {
        detailboxthreeaudio.style.top = "-100%";
    }, 0);
    setTimeout(function() {
        maintextboxthirdaudio.style.top = "-30%";
    }, 0);
    setTimeout(function() {
      btnanimationthirdaudio.style.bottom = "-40%";
    }, 0);
});
})
})
})
//home rest to origanl page
var triggerTexthome = document.getElementById("Hometxt");

triggerTexthome.addEventListener("mouseover",function(){

//Resetting the phone slide to original when home is hovered
  slideElement.style.zIndex = "-10";
  slideElement.style.top = "-250px";
  slideElement.style.opacity = "1"; 
  slideElement.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
//Resetting the watch slide to original when home is hovered
  slideElementwatch.style.transition = "zIndex " + (animationTime / 1000) + "s ease-in-out";
  slideElementwatch.style.top = "-230px";
  slideElementwatch.style.zIndex = "-10";
  slideElementwatch.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
//Resetting the watch slide to original when home is hoveredhome
  slideElementaudio.style.transition = "top " + (animationTime / 1000) + "s ease-in-out";
  slideElementaudio.style.top = "-230px";
  slideElementaudio.style.zIndex = "-10";
})
})