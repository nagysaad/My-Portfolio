let okList =document.querySelector(".okList");
let noList =document.querySelector(".noList");

let list =document.querySelector(".list");

let particles =document.querySelector("#particles-js");

let nav =document.querySelector("nav");

let liS=[...list.children] 

let icons=document.querySelector(".icons")

let icon=document.querySelector(".icon")

let icS=[...icon.children]




icS.forEach((ic,inx)=>{
    if(inx!=5){
        ic.addEventListener("click",()=>{
            icS.forEach((ic,inx)=>{
                if(inx!=5){
                    ic.children[0].classList.remove("blue")
                    ic.children[0].classList.remove("white")
                }
            })
            ic.children[0].classList.add("white")
        })
    }
})

okList.onclick=()=>{
    okList.style.opacity='0'
    setTimeout(()=>{
        nav.style.top="15px"
        list.style.display="block"
        okList.style.display='none'
        noList.style.display="flex"
        noList.style.opacity="1"
    },500)
}

noList.onclick=()=>{
    noList.style.opacity='0'
    setTimeout(()=>{
        nav.style.top="-350px"
        noList.style.display='none'
        okList.style.display="flex"
        okList.style.opacity="1"
        setTimeout(()=>{
            list.style.display="none"
        },500)
    },500)
}

window.onresize=()=>{
    if (particles.scrollWidth>800){
        nav.style.top="15px"
        list.style.display="flex"
        okList.style.display="none"
        okList.style.opacity="0"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="none"
    }
    else{
        nav.style.top="-350px"
        list.style.display="none"
        okList.style.display="flex"
        okList.style.opacity="1"
        noList.style.display="none"
        noList.style.opacity="0"
        okList.style.top="350px"
        icons.style.display="flex"
    }
}
window.onload=()=>{
    if (particles.scrollWidth>800){
        nav.style.top="15px"
        list.style.display="flex"
        okList.style.display="none"
        okList.style.top="0px"
        okList.style.opacity="0"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="none"
    }
    else{
        nav.style.top="-350px"
        list.style.display="none"
        okList.style.display="flex"
        okList.style.top="350px"
        okList.style.opacity="1"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="flex"
    }
}

liS.forEach((li)=>{
    li.onclick=()=>{
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        if (particles.scrollWidth<800){
            nav.style.top="-350px"
            list.style.display="none"
            okList.style.display="flex"
            okList.style.opacity="1"
            noList.style.display="none"
            noList.style.opacity="0"
        }
        li.classList.add("active")
    }
})

window.onscroll=()=>{
    if (window.scrollY<740){
        list.style.background="rgba(153, 153, 153, 0.27)"
        if(!particles.scrollWidth>800){
            nav.style.display="block"
        }
    }
    else{
        list.style.background="rgba(153, 153, 153, 0.77)"
        if(!particles.scrollWidth>800){
            nav.style.display="none"
        }
    }
}

let shape = document.querySelector(".shape")

function moveShape(bares){
    shape.style.left=`${bares}px`
}





// auto typed
if(document.querySelector(".auto-type")){
    let typed=new Typed(".auto-type",{
        strings :["Iam a Frontend Developer","Iam a Front-end Programmer"],
        typeSpeed:150,
        backSpeed:150,
        loop:true,
    })
}




// forms 
let inputs=document.querySelectorAll(".input")


let submit=document.querySelector(".submit")


submit.onclick=()=>{
    inputs.forEach((input)=>{
        setTimeout(()=>{
            input.value=''
        },1000)
    })
}

//data

let data=document.querySelector(".data")

let dat=new Date()
data.innerHTML=dat.getFullYear()




// whatsappButton Logic
const whatsappButton = document.createElement('a');


const phoneNumber = "201060359474"; 
whatsappButton.href = `https://wa.me/${phoneNumber}`;
whatsappButton.target = "_blank"; 


const whatsappIcon = document.createElement('span');
whatsappIcon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="white">
    <path d="M380.9 97.1C339.3 55.5 283.1 32 224.1 32 94.8 32 .3 133.2 0 262.1c-.2 48.1 12.6 94.5 36.6 135.4L0 480l85.8-35.2c39.4 21.7 84.1 33.2 130.1 33.2h.1c128.1 0 230-100.8 231.9-228.6 0-60.2-23.4-116.8-66.9-159.4zM224.3 439.6h-.1c-40.7 0-80.6-11-115.1-31.8l-8.2-4.9-51.1 20.9 13.7-52.7-5.4-8.4c-22.4-34.7-34.3-75.3-34.1-116.8C25.2 151.8 117.6 64 224.3 64c51.4 0 99.6 19.9 136 56.3 36.3 36.4 56.3 84.7 56.2 136.2-1.8 105.1-88.2 183.1-192.2 183.1zM322.1 297c-5.5-2.8-32.7-16.1-37.8-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 17.9-17.6 21.6-3.2 3.7-6.4 4.2-11.8 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.3-14.1-27.3-31.4-30.5-36.7-3.2-5.6-.3-8.6 2.5-11.4 2.6-2.6 5.6-6.7 8.5-10.1 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7 1-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.3-4.5-11.2-9.1-9.6-12.5-9.8h-10.7c-3.7 0-9.8 1.4-15 7-5.1 5.6-19.6 19.2-19.6 46.4s20.1 53.8 22.9 57.6c2.8 3.7 39.5 60.5 95.7 84.7 13.4 5.8 23.9 9.3 32.1 11.9 13.5 4.3 25.8 3.7 35.5 2.3 10.8-1.6 32.7-13.4 37.3-26.4 4.7-13 4.7-24.1 3.3-26.4-1.3-2.3-5-3.7-10.5-6.5z"/>
  </svg>
`;


whatsappIcon.style.display = "flex";
whatsappIcon.style.alignItems = "center";
whatsappIcon.style.justifyContent = "center";
whatsappIcon.style.marginRight = "8px";


const whatsappText = document.createTextNode(" تواصل معى ");


whatsappButton.style.position = "fixed";
whatsappButton.style.bottom = "75px";
whatsappButton.style.left = "20px";
whatsappButton.style.display = "flex";
whatsappButton.style.alignItems = "center";
whatsappButton.style.backgroundColor = "#25D366";
whatsappButton.style.color = "white";
whatsappButton.style.padding = "10px 15px";
whatsappButton.style.borderRadius = "50px";
whatsappButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
whatsappButton.style.textDecoration = "none";
whatsappButton.style.cursor = "pointer";
whatsappButton.style.transition = "transform 0.3s ease";


whatsappButton.addEventListener("mouseover", () => {
  whatsappButton.style.transform = "scale(1.1)";
});
whatsappButton.addEventListener("mouseout", () => {
  whatsappButton.style.transform = "scale(1)";
});


whatsappButton.appendChild(whatsappIcon);
whatsappButton.appendChild(whatsappText);


document.body.appendChild(whatsappButton);




// create scrollIcon 
const scrollIcon = document.createElement("div");
scrollIcon.id = "scroll-icon";
scrollIcon.style.position = "fixed";
scrollIcon.style.bottom = "70px";
scrollIcon.style.right = "20px";
scrollIcon.style.width = "50px";
scrollIcon.style.height = "50px";
scrollIcon.style.display = "none"; // initailly hidden
scrollIcon.style.alignItems = "center";
scrollIcon.style.justifyContent = "center";
scrollIcon.style.cursor = "pointer";
scrollIcon.style.zIndex = "1000";

// create svg circle
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", "progress-circle");
svg.setAttribute("viewBox", "0 0 36 36");
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.transform = "rotate(-90deg)";


// create circle background
const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "path");
circleBg.setAttribute("class", "circle-bg");
circleBg.setAttribute(
  "d",
  "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
);
circleBg.setAttribute("fill", "none");
circleBg.setAttribute("stroke", "#ccc");
circleBg.setAttribute("stroke-width", "3.8");

// create the moved circle
const circle = document.createElementNS("http://www.w3.org/2000/svg", "path");
circle.setAttribute("class", "circle");
circle.setAttribute(
  "d",
  "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
);
circle.setAttribute("fill", "none");
circle.setAttribute("stroke", "#36ac88");
circle.setAttribute("stroke-width", "3.8");
circle.setAttribute("stroke-linecap", "round");
circle.style.transition = "stroke-dasharray 0.3s ease";



// add elements to svg
svg.appendChild(circleBg);
svg.appendChild(circle);

// create arrow
const arrow = document.createElement("div");
arrow.textContent = "↑";
arrow.style.position = "absolute";
arrow.style.fontSize = "22px";
arrow.style.fontWeight = "bold";
arrow.style.color = "#36ac88";
arrow.style.pointerEvents = "none";



// add svg , arrow to scrollTcon
scrollIcon.appendChild(svg);
scrollIcon.appendChild(arrow);

// add scrollTcon to page
document.body.appendChild(scrollIcon);

// add events
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // update circle background
  circle.style.strokeDasharray = `${scrollPercentage}, 100`;

  // hide or display scrollIcon based on scrollTop 
 if (scrollTop > 500) {
    scrollIcon.style.display = "flex";
  } else {
    scrollIcon.style.display = "none";
  }

});

 


// back to top when click the icon
scrollIcon.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

