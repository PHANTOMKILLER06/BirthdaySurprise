function createConfetti(){

    for(let i=0;i<80;i++){
    
    const c=document.createElement("div");
    
    c.className="confetti";
    
    c.style.left=Math.random()*100+"vw";
    
    c.style.background=
    ["#2ecc71","#f1c40f","#ff5e7e","#00e5ff","#ffffff"][Math.floor(Math.random()*5)];
    
    c.style.animationDuration=
    (3+Math.random()*3)+"s";
    
    document.body.appendChild(c);
    
    }
    
    }

const startButton = document.getElementById("startButton");
const container = document.querySelector(".container");

startButton.addEventListener("click", () => {

    container.style.opacity = "0";
    container.style.transform = "scale(0.9)";

    setTimeout(() => {

        container.innerHTML = `
        
       <div id="gift" style="
font-size:120px;
cursor:pointer;
margin-top:0px;
transition:.3s;
">
🎁
</div>

<h2 style="
margin-top:15px;
font-size:28px;
color:white;
font-weight:600;
letter-spacing:1px;
">

Click to Open the Gift ✨

</h2>

<p style="
margin-top:10px;
font-size:18px;
color:#d8ffe5;
">

A little surprise is waiting for you...

</p>

<div id="giftText"></div>
        `;
        container.style.opacity = "1";
        container.style.transform = "scale(1)";

        document.getElementById("gift").onclick = function () {

            this.style.display = "none";
        
            document.getElementById("giftText").innerHTML = `
        
            <img
                src="pics/birthday_collage.png"
                id="birthdayPoster"
            >
        
            <button id="continueBtn">
                Continue ➜
            </button>
        
            `;
        
            document.getElementById("continueBtn").onclick = function () { createConfetti();

                document.getElementById("giftText").innerHTML = `

<h1 class="cakeTitle">
Happy Birthday<br>
Sweezal
</h1>

<p class="cakeText">
Close your eyes...<br>
Make a wish...<br><br>
Then click the cake 🎂
</p>

<div class="cake" id="cake">

    <div class="tier tier3">
        <div class="candles">
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
        </div>
    </div>

    <div class="tier tier2">
        <div class="candles">
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
        </div>
    </div>

    <div class="tier tier1">
        <div class="candles">
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
            <div class="candle"></div>
        </div>
    </div>

</div>

`;
document.getElementById("cake").onclick = function () {

    document.querySelectorAll("confetti").forEach(c =>c.removeChild());

    container.innerHTML = `

  <div class="balloons">

<div class="balloon red"></div>
<div class="balloon blue"></div>
<div class="balloon green"></div>
<div class="balloon yellow"></div>
<div class="balloon pink"></div>

</div>

<h2 style="margin-top:30px;">
Happy Birthday, Sweezal!
</h2>


    <p style="font-size:22px;line-height:35px;">

    Wishing you lots of happiness,
    success and beautiful memories.

    </p>

    <button id="letterBtn">
    Read My Letter 💌
    </button>

    `;

    document.getElementById("letterBtn").onclick = function () {

        container.innerHTML = `
        
        <div style="
        max-width:700px;
        margin:auto;
        padding:25px;
        background:rgba(255,255,255,.08);
        backdrop-filter:blur(15px);
        border-radius:25px;
        box-shadow:0 0 30px rgba(0,255,120,.3);
        animation:fadeIn 1s;
        ">
        
        <h1 style="
        font-size:36px;
        margin-bottom:30px;
        ">
        💌 A Letter For You
        </h1>
        
        <p style="
        font-size:18px;
        line-height:28px;
        text-align:left;
        ">
        
        Dear <b>Sweezal</b>, ❤️
        
        <br><br>
        
        Happy 22nd Birthday!
        
        <br><br>
        
        I hope today brings you lots of smiles, laughter and beautiful memories.
        
        You deserve happiness, success and all the wonderful things life has to offer.
        
        <br><br>
        
        May this year be filled with new adventures, unforgettable moments and dreams coming true.
        
        <br><br>

        And congratulations on your new venture! Wishing SVÉZAL every success.

        <br><br>
        
        Thank you for being you.
        
        <br><br>
        
        Enjoy your special day to the fullest.
        
        🎂🎈✨
        
        <br><br>
        
        <b>Happy Birthday once again!</b>
        
        <br><br>
        
        With Best Wishes from Aston
        
        </p>
        
        <br>
        
        <h2>
        HAPPY BIRTHDAY SWEEZAL!!!!
        </h2>
        
        </div>
        
        `;
        
        };

};
            
                };
            
            };
        
        
    },500);

});