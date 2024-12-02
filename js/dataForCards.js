let datasOfCards=[
    {
        imgSrc:"../img/projects-imgs/ecommerce.PNG",
        title:"Ecommerce App",
        text:"website that makes user buy products easily",
        url:"https://nagysaad.github.io/E-Commerce-App/",
        },
    {
        imgSrc:".././img/projects-imgs/js-website.PNG",
        title:"JS Interactive Website",
        text:"website that provides user controls",
        url:"https://nagysaad.github.io/special-design-by-html-css-js/",
        },
    {
        imgSrc:".././img/projects-imgs/dashboard.PNG",
        title:"Dashboard",
        text:"Responsive Dashboard interface built using HTML5 and CSS3",
        url:"https://nagysaad.github.io/dashboard-project/",
        },
    {
        imgSrc:"../img/projects-imgs/bondi.PNG",
        title:"Bondi",
        text:"Responsive Bondi Website by HTML5 , CSS3 , Bootstrap5",
        url:"https://nagysaad.github.io/Bondi/",
        },
    {
        imgSrc:"../img/projects-imgs/kasper.PNG",
        title:"Kasper",
        text:"Responsive Kasper Website by HTML5 , CSS3",
        url:"https://nagysaad.github.io/Kasper-Project/",
        },
    {
        imgSrc:"../img/projects-imgs/leon.PNG",
        title:"Leon",
        text:"Responsive leon Website by HTML5 , CSS3",
        url:"https://nagysaad.github.io/Leon-project/",
        },
    {
        imgSrc:"../img/projects-imgs/cookies.PNG",
        title:"Cookies",
        text:"Responsive Cookies Website by HTML5 , CSS3",
        url:"https://nagysaad.github.io/Personal-Template/",
        },
    {
        imgSrc:"../img/projects-imgs/quiz.PNG",
        title:"Quiz App",
        text:"Quiz App by React.js",
        url:"https://nagysaad.github.io/quiz-app-by-React/",
        },
    {
        imgSrc:"../img/projects-imgs/tic-tac.PNG",
        title:"Tic Tac Toe",
        text:"tic tac toe built with next.js",
        url:"https://react-tic-tac-toe-three-lac.vercel.app/",
        } , 
        {
            imgSrc:"../img/projects-imgs/local-todo.PNG",
            title:"To Do List",
            text:"To Do List Built by JS Local Storage",
            url:"https://nagysaad.github.io/to-do-list/",
            } , 
            {
                imgSrc:"../img/projects-imgs/fetch-repos.PNG",
                title:"Fetch User Repos",
                text:"Fetch All User Repos From GitHub by entering Username",
                url:"https://nagysaad.github.io/get-all-repos-by-entering-username/",
                } , 

                {
                    imgSrc:"../img/projects-imgs/image-slider.PNG",
                    title:"Image Slider",
                    text:"Dynamic Image Slider Built By JS Features",
                    url:"https://nagysaad.github.io/image-slider/",
                    } ,
                    {
                        imgSrc:"../img/projects-imgs/typing-game.PNG",
                        title:"Typing Speed Game",
                        text:"This Game Tests your Typing Speed and Built By JS",
                        url:"https://nagysaad.github.io/typing-speed-test-game/",
                        } ,
                        {
                            imgSrc:"../img/projects-imgs/react-todo.PNG",
                            title:"React To Do List",
                            text:"This To Do List Built By React.js and make You Detemine Your Daily Goals ",
                            url:"https://nagysaad.github.io/react-to-do-list/",
                            } ,
                            {
                                imgSrc:"../img/projects-imgs/responsive-website.PNG",
                                title:"Responsive Features Website",
                                text:" Built Without Using Any Framework to develop my Skills in Responsive Design  ",
                                url:"https://nagysaad.github.io/responsive-web-design/",
                                } ,
        
    

   
    ]

if (document.querySelector(".cardsInProjects")){
    let cardsInProjects=document.querySelector(".cardsInProjects")
    datasOfCards.forEach((dataOfCards)=>{
        cardsInProjects.innerHTML +=
        `
            <div class="cord">
                <div class="img">
                    <img src=${dataOfCards.imgSrc} class="card-img-top" alt="..." width="100%">
                </div>
                <div class="card-body" style="padding:10px" >
                    <h5 class="card-title mt-2 ">${dataOfCards.title}</h5>
                    <p class="card-text">${dataOfCards.text}</p>
                    <a  href=${dataOfCards.url} class="btn mainBg" target="_blank">Demo</a>
                </div>
            </div> 
        `
    })
}