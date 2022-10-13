// const images = ["0.jpg", "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg",
// "12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"];

//배열 선언
const images = new Array(); 
	
//배열 초기화
for(let i=0;i<23;i++){ 
    images[i]=i+".jpg";
}

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);

