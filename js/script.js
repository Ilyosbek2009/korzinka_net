let shop = document.querySelector(".shop1");
let openl = document.querySelector(".open");
let yopish = document.querySelector(".yopish");
let product = document.querySelectorAll(".product");
let sh = document.querySelectorAll(".sh");
let shop1 = document.querySelector(".shop");
let modal = document.querySelector(".modal");
let divlar = document.querySelector(".divlar");
let btnclear = document.querySelector(".clear");

openl.addEventListener("click",function(){
    divlar.style.display = "flex";
});

yopish.addEventListener("click",function(){
    divlar.style.display = "none";
});
btnclear.addEventListener("click", function() {
    product.style.display = "none";
});
const data = [
    {
        img: "img/bread.jpg",
        p: "Купить!"
    }
];
const data2 = [
    {
        img: "img/potato.jpg",
        p: "Купить!"
    }
];

const data3 = [
    {
        img: "img/yogurt.jpg",
        p: "Купить!"
    }
];
const data4 = [
    {
        img: "img/blueberry.jpg",
        p: "Купить!"
    }
];
const data5 = [
    { 
        img: "img/honey.jpg",
        p: "Купить!"
    }
];
const data6 = [
    {
        img: "img/tomato.jpg",
        p: "Купить!"
    }
];
const data7 = [
    {
        img: "img/strawberries.jpg",
        p: "Купить!"
    }
];
const data8 = [
    {
        img: "img/broccoli.jpg",
        p: "Купить!"
    }
];
function salom1() {
    data.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom()">${item.p}</button>
    </div>
        `;
    });
} 
function salom2() {
    data2.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom9()">${item.p}</button>
    </div>
        `;
    });
} 
function salom3() {
    data3.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom10()">${item.p}</button>
    </div>
        `;
    });
}
function salom4() {
    data4.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom11()">${item.p}</button>
    </div>
        `;
    });
} 
function salom5() {
    data5.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom12()">${item.p}</button>
    </div>
        `;
    });
} 
function salom6() {
    data6.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom13()">${item.p}</button>
    </div>
        `;
    });
} 
function salom7() {
    data7.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom14()">${item.p}</button>
    </div>
        `;
    });
}
function salom8() {
    data8.map((item)=>{
        shop1.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh" onclick="salom15()">${item.p}</button>
    </div>
        `;
    });
} 
salom1();
salom2();
salom3();
salom4();
salom5();
salom6();
salom7();
salom8();
function salom() {
    data.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}
function salom9() {
    data2.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}  
function salom10() {
    data3.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}  
function salom11() {
    data4.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}  
function salom12() {
    data5.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
} 
function salom13() {
    data6.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}
function salom14() {
    data7.map((item)=>{
        modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
} 
function salom15() {
    data8.map((item)=>{
    modal.innerHTML += `
        <div class="product">
        <div class="product-card">
            <img src="${item.img}" alt="bread">
        </div>
        <button class="sh">${item.p}</button>
    </div>
        `;
    });
}  
// function salom00() {
//     modal.style.display = "none";
// }
