var changeImage = true;

function change1(image){


if(changeImage){
        image.src = "https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png"
document.querySelector(".cartt").innerHTML = "Express js"
} 
else{
    image.src = "https://www.edureka.co/blog/wp-content/uploads/2019/08/node-logo.png"
document.querySelector(".cartt").innerHTML = "NODE JS"
}
changeImage =! changeImage
}

function change2(image){
if(changeImage){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tc8w62CNERo_OvigPV2nwd6_Mc9fSMN40g&s"
document.querySelector(".carttt").innerHTML = "PYTHON"
} 
else{
    image.src = "https://cdn.cosmicjs.com/52a5e170-b0fe-11f0-a077-bd105f10469e-nextjs-16.png"
document.querySelector(".carttt").innerHTML = "NEXT JS"
}
changeImage =! changeImage
}


function change3(image){
if(changeImage){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLkVVZFiwIEqwzm1SXhP7N7_dfIGchUww0w&s"
document.querySelector(".cartttt").innerHTML = "MONGODB"
} 
else{
    image.src = "https://miro.medium.com/1*tFl-8wQUENETYLjX5mYWuA.png"
document.querySelector(".cartttt").innerHTML = "AWS"
}
changeImage =! changeImage
}








