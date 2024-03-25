$(document).ready(function () {

  //------------- VARIABLES OPEN/CLOSE TABS -------------------
  let btnThesis = document.querySelector(".block-thesis");
  let btnPubli = document.querySelector(".block-publi");
  let btnMap = document.querySelector(".block-map");
  let btnGloss = document.querySelector(".block-gloss");

  let contentLanding = document.querySelector(".content-landing");
  let contentThesis = document.querySelector(".content-thesis");
  let contentPubli = document.querySelector(".content-publi");
  let contentMap = document.querySelector(".content-map");
  let contentGloss = document.querySelector(".content-gloss");

  let btnNav = document.querySelector(".block-nav");
  let contentNav = document.querySelector(".content-nav");




  //------------- FUNCTIONS OPEN/CLOSE TABS -------------------
  
  // THESIS
  btnThesis.onclick = function () {
    // Toggle thesis buttons
    document.querySelector("#btn-thesis-open").classList.toggle("hidden");
    document.querySelector("#btn-thesis-close").classList.toggle("hidden");
    if (contentMap.classList.contains("map-open")) {
      document.querySelector("#btn-map-open").classList.toggle("hidden");
      document.querySelector("#btn-map-close").classList.toggle("hidden");
    }
    //tab
    if (!contentThesis.classList.contains("thesis-open")) {
      contentThesis.classList.add("thesis-open");
      contentLanding.classList.add("landing-close");
      contentMap.classList.remove("map-open");
    } else {
      if (contentPubli.classList.contains("publi-open")) {
        document.querySelector("#btn-publi-open").classList.toggle("hidden");
        document.querySelector("#btn-publi-close").classList.toggle("hidden");
      }
      contentThesis.classList.remove("thesis-open");
      contentLanding.classList.remove("landing-close");
      contentPubli.classList.remove("publi-open");
    }
  }

  // PUBLICATION
  btnPubli.onclick = function () {
    // Toggle publication and glossary buttons
    document.querySelector("#btn-publi-open").classList.toggle("hidden");
    document.querySelector("#btn-publi-close").classList.toggle("hidden"); 
    if (contentMap.classList.contains("map-open")) {
      document.querySelector("#btn-map-open").classList.toggle("hidden");
      document.querySelector("#btn-map-close").classList.toggle("hidden");
    } 
    if (!contentThesis.classList.contains("thesis-open")) {
      document.querySelector("#btn-thesis-open").classList.toggle("hidden");
      document.querySelector("#btn-thesis-close").classList.toggle("hidden");
    } 
    //tab  
    if (!contentPubli.classList.contains("publi-open")) {
      contentPubli.classList.add("publi-open");
      contentLanding.classList.add("landing-close");
      contentMap.classList.remove("map-open");
      contentThesis.classList.add("thesis-open");
      if (contentGloss.classList.contains("gloss-open")) {
        contentGloss.classList.add("gloss-open-half");
        contentPubli.classList.add("publi-open-half");
      }
    } else {
      contentPubli.classList.remove("publi-open");
      contentPubli.classList.remove("publi-open-half");
      contentGloss.classList.remove("gloss-open-half");
    }

  }

  // MAP
  btnMap.onclick = function () {
    // Toggle map buttons
    document.querySelector("#btn-map-open").classList.toggle("hidden");
    document.querySelector("#btn-map-close").classList.toggle("hidden"); 
    if (contentThesis.classList.contains("thesis-open")) {
      document.querySelector("#btn-thesis-open").classList.toggle("hidden");
      document.querySelector("#btn-thesis-close").classList.toggle("hidden");
    }
    if (contentPubli.classList.contains("publi-open")) {
      document.querySelector("#btn-publi-open").classList.toggle("hidden");
      document.querySelector("#btn-publi-close").classList.toggle("hidden");
    }
    if (contentGloss.classList.contains("gloss-open")) {
      document.querySelector("#btn-gloss-open").classList.toggle("hidden");
      document.querySelector("#btn-gloss-close").classList.toggle("hidden");
      contentGloss.classList.remove("gloss-open");
    }
    //tab   
    if (!contentMap.classList.contains("map-open")) {
      contentMap.classList.add("map-open");
      contentLanding.classList.add("landing-close");
      contentThesis.classList.remove("thesis-open");
      contentPubli.classList.remove("publi-open");
      // contentGloss.classList.remove("gloss-open");
    } else {
      contentMap.classList.remove("map-open");
      contentLanding.classList.remove("landing-close");
    }
  }

  // GLOSSARY
  btnGloss.onclick = function () {
    if (!contentGloss.classList.contains("gloss-open")) {
      contentGloss.classList.add("gloss-open");
      if (contentPubli.classList.contains("publi-open")) {
        contentGloss.classList.add("gloss-open-half");
        contentPubli.classList.add("publi-open-half");
      }
    } else {
      contentGloss.classList.remove("gloss-open");
      contentGloss.classList.remove("gloss-open-half");
      contentPubli.classList.remove("publi-open-half");
    }
    // Toggle glossary and publication buttons
    document.querySelector("#btn-gloss-open").classList.toggle("hidden");
    document.querySelector("#btn-gloss-close").classList.toggle("hidden");
  }

  //------------- INTERACTIVE TABLE OF CONTENT THESIS -------------------

  let chapterNumber = 0;

  document.querySelector(".content-thesis").addEventListener("scroll", function () {
    if (document.querySelector(".title.chapter-1").getBoundingClientRect().top < (window.innerHeight / 100) * 7) {
      chapterNumber = 1;

    }
    if (document.querySelector(".title.chapter-2").getBoundingClientRect().top < (window.innerHeight / 100) * 7) {
      chapterNumber = 2;
    }

    if (document.querySelector(".title.chapter-3").getBoundingClientRect().top < (window.innerHeight / 100) * 7) {
      chapterNumber = 3;

    }
    if (document.querySelector(".title.chapter-4").getBoundingClientRect().top < (window.innerHeight / 100) * 7) {
      chapterNumber = 4;
    }

    // console.log(chapterNumber);
    document.querySelector(`div.chapter-${chapterNumber}`).classList.add("active");

    document.querySelectorAll("div").forEach(function (listItems) {
      if (!listItems.classList.contains(`chapter-${chapterNumber}`)) {
        listItems.classList.remove("active");
      }
    })
  })

  document.querySelectorAll('div').forEach(function (chapterItems) {
    chapterItems.addEventListener('click', function () {
      document.querySelectorAll('.title').forEach(function (chapterHeadlines) {

        if (chapterItems.textContent.substring(0, 3) == chapterHeadlines.textContent.substring(0, 3)) {
          chapterHeadlines.scrollIntoView({ behavior: "smooth", block: "start" });
        };

      })
    })
  })


  //------------- IMAGE RESIZE ONCLICK PUBLICATIONS ------------------

  document.querySelectorAll("figure img").forEach(function (resizeImg) {
    resizeImg.addEventListener('click', function () {
      resizeImg.classList.toggle("publications-open");
    })
  })

  // Select all image elements on the page
  const sideImg = document.querySelectorAll('.sidenote');

  window.onresize = sideImg.forEach(image => {
    const currentMarginRight = parseFloat(window.getComputedStyle(image).marginRight);
    const randomMarginRem = Math.floor(Math.random() * 2);
    const randomMarginPixels = randomMarginRem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    // image.style.marginRight = `${currentMarginRight - randomMarginPixels}px`;
  });


  //------------- MAP LAYERS ------------------

  document.querySelector('#button-pub').onclick = function () {
    console.log("lol");
    this.classList.toggle("map-active");
    document.querySelectorAll('.publishers').forEach(el => el.classList.toggle("visible"));
    document.querySelector('#map-desc-publi').classList.toggle("visible");
  
    if (document.querySelector('#button-print').classList.contains("map-active")) {
      document.querySelectorAll('.printers').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-print').classList.remove("visible");
      document.querySelector('#button-print').classList.remove("map-active");
    }
  
    if (document.querySelector('#button-shop').classList.contains("map-active")) {
      document.querySelectorAll('.shops').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-shop').classList.remove("visible");
      document.querySelector('#button-shop').classList.remove("map-active");
    }
  };
  
  document.querySelector('#button-print').onclick = function () {
    console.log("lol1");
    this.classList.toggle("map-active");
    document.querySelectorAll('.printers').forEach(el => el.classList.toggle("visible"));
    document.querySelector('#map-desc-print').classList.toggle("visible");
  
    if (document.querySelector('#button-pub').classList.contains("map-active")) {
      document.querySelectorAll('.publishers').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-publi').classList.remove("visible");
      document.querySelector('#button-pub').classList.remove("map-active");
    }
  
    if (document.querySelector('#button-shop').classList.contains("map-active")) {
      document.querySelectorAll('.shops').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-shop').classList.remove("visible");
      document.querySelector('#button-shop').classList.remove("map-active");
    }
  };
  
  document.querySelector('#button-shop').onclick = function () {
    this.classList.toggle("map-active");
    document.querySelectorAll('.shops').forEach(el => el.classList.toggle("visible"));
    document.querySelector('#map-desc-shop').classList.toggle("visible");
  
    if (document.querySelector('#button-print').classList.contains("map-active")) {
      document.querySelectorAll('.printers').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-print').classList.remove("visible");
      document.querySelector('#button-print').classList.remove("map-active");
    }
  
    if (document.querySelector('#button-pub').classList.contains("map-active")) {
      document.querySelectorAll('.publishers').forEach(el => el.classList.remove("visible"));
      document.querySelector('#map-desc-publi').classList.remove("visible");
      document.querySelector('#button-pub').classList.remove("map-active");
    }
  };
  



  //------------- MAP ZOOM------------------

  const svg = document.querySelector('svg');

  let isDragging = false;
  let startX, startY;
  let translateX = 0, translateY = 0;
  let scale = 1;

  svg.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.1 : -0.1;
    scale += delta;
    scale = Math.max(scale, 0.1);
    scale = Math.min(scale, 10);
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  });

  svg.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
  });

  svg.addEventListener('touchstart', (event) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const dist = Math.sqrt((touch1.clientX - touch2.clientX) ** 2 + (touch1.clientY - touch2.clientY) ** 2);
      svg.dataset.startDistance = dist;
    } else if (event.touches.length === 1) {
      isDragging = true;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }
  });

  svg.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    translateX += deltaX / scale;
    translateY += deltaY / scale;
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    startX = event.clientX;
    startY = event.clientY;
  });

  svg.addEventListener('touchmove', (event) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const dist = Math.sqrt((touch1.clientX - touch2.clientX) ** 2 + (touch1.clientY - touch2.clientY) ** 2);
      const startDist = svg.dataset.startDistance;
      const delta = (dist - startDist) / 1000;
      scale += delta;
      scale = Math.max(scale, 0.1);
      scale = Math.min(scale, 10);
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    } else if (event.touches.length === 1) {
      const deltaX = event.touches[0].clientX - startX;
      const deltaY = event.touches[0].clientY - startY;
      translateX += deltaX / scale;
      translateY += deltaY / scale;
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }
  });

  svg.addEventListener('mouseup', (event) => {
    isDragging = false;
  });

  svg.addEventListener('touchend', (event) => {
    isDragging = false;
  });




  //------------- DETECTION WINDOW SIZE -------------------

  let isMobile = "";
  let svgMap = document.querySelector('svg');

  $(window).on("load resize click", function () {

    if ($(window).width() < 779) {
      isMobile = true;
      svgMap.setAttribute("viewBox", "50 0 500 500");
      document.querySelector(":root").style.setProperty("--height-window", window.innerHeight);

    } else {
      isMobile = false;
    }
  });


  $(window).on("resize", function () {

    if (contentNav.classList.contains("nav-open")) {

      if (isMobile == true) {
        contentNav.classList.toggle("nav-open");
      } else { }

    } else {

    }
  });

  //------------- IMAGE ANGLE THESIS ------------------

  const images = document.querySelectorAll(".chapter figure");
  const minRotation = -9;
  const maxRotation = 9;
  const minMargin = -2;
  const maxMargin = 8;



  images.forEach((image) => {

    const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
    const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);


    if (!isMobile) {
      // console.log('is mobile was false');
      image.style.marginRight = `${randomMargin}vw`;
      image.style.transform = `rotate(${randomRotation}deg)`;

    } else {
      // console.log('is mobile was true');
      image.style.marginRight = '0px';
      image.style.transform = 'rotate(0deg)';
    }
  });


  $(window).on("resize", function () {
    images.forEach((image) => {
      const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
      const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);

      if (!isMobile) {
        // console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;
      } else {
        // console.log('is mobile was true');
        image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    });
  });


  $(window).on("load", function () {
    images.forEach((image) => {
      const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
      const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);

      if (!isMobile) {
        // console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;
      } else {
        // console.log('is mobile was true');
        image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    });
  });
});