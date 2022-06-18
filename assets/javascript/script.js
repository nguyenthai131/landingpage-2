

function openModal () {
    var modal = document.querySelector('.modal') ;
    var modalBox = document.querySelector('.modal__box') ;

    modal.style.visibility = 'visible' ;
    modalBox.style.opacity = '1' ;
    modalBox.style.top = '15%' ;

}


function closeModal () {
    var modal = document.querySelector('.modal') ;
    var modalBox = document.querySelector('.modal__box') ;

    modalBox.style.opacity = '0' ;
    modalBox.style.top = '0%' ;
    
    setTimeout(function() {
        modal.style.visibility = 'hidden' ;   
    } ,100)

}


var btnLike = document.querySelectorAll('.content__blog-button .btn--white')


for(var i = 0 ; i < btnLike.length ; i++) {

    btnLike[i].addEventListener('click' , function() {      
        var newContent = '<i class="fa-solid fa-check btn--icon"></i>Liked'
        this.innerHTML = newContent ;

    })
}


function showReply(rep) {
    var replies = document.getElementById(rep) ;
    replies.classList.toggle('showBox') ;
   
}