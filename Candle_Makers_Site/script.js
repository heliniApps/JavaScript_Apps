import { RoseCandle } from "./candleObjects.js";
// import Color from "./enums/Color.js";
// import Occasion from "./enums/Occasion.js";
// import Candle from "./Candle.js";
// import {
//     ColorType,
//     ScentType,
//     ShapeType,
//     SurfaceDesign,
// } from "./enums/Enums.js";

console.log(RoseCandle);

const articleMarkup = (candleObj) => {
    return `
        <article id="${candleObj.modelId}" class="candle-article">
            <figure class="candle-image">
                <img src="${
                    candleObj.imagePath
                }" alt="Reference: google images" />
            </figure>
            <h2 class="candle-name">${candleObj.name}</h2>
            <ul class="candle-features">
                <li class="candle-scent-type">Scent: <span>${
                    candleObj.scentType
                }</span></li>
                <li class="candle-color-value">Color: <span>${
                    candleObj.color.values.name
                }</span></li>
                <li class="candle-shape">Shape: <span>${
                    candleObj.shape.type
                }</span></li>
                <li class="candle-surface-design">Design: <span>${
                    candleObj.shape.surfaceDesign
                }</span></li>
                <li class="candle-height">Height: <span>${
                    candleObj.size.height
                }</span></li>
                <li class="candle-size-category">Category: <span>${candleObj.getSizeCategory()}</span></li>
                <li class="candle-occasion">Suitable For: <span>${
                    candleObj.listOfOccasions[1].name
                }</span></li>
            </ul>
        </article>
    `;
};

function applyMainContent(candleObj) {
    let mainElem = document.querySelector(".main-content");
    mainElem.innerHTML = articleMarkup(candleObj);
}

applyMainContent(RoseCandle);

/* RoseCandle.changeName("Bush Rose");
RoseCandle.changeColor(ColorType.MultiColor, Color.OceanGreen);

console.log(RoseCandle);

RoseCandle.changeScentType(ScentType.OceanBreeze);

RoseCandle.changeHeight(20);
RoseCandle.changeRadius("");
RoseCandle.changeName("");
RoseCandle.changeRadius(3);

RoseCandle.changeShape(ShapeType.RoseFlower, SurfaceDesign.Grooved);

RoseCandle.changeListOfOccasions([Occasion.TeaLight, "Occasion.Wedding"]); 

let woodlandroseName = "Woodland Rose";
console.log("comparing frozen enum values: ", woodlandroseName === ScentType.WoodlandRose); // true

*/
