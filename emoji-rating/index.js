const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".emoji");

stars.forEach( (star,index) => {
    star.addEventListener("click", ()=>{
        updateRating(index);
        updateEmoji(index);
    });

});

function updateRating(index){

    stars.forEach((star,idx)=>{
        if(idx <= index){
            star.classList.add('active')
        }
        else{
            star.classList.remove('active')
        }

    });
}

function updateEmoji(index){
    emojis.forEach(emoji =>{
        emoji.style.transform = `translateX(-${index*50}px)`
    })
}