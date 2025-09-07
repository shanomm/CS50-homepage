function show_image(){
    document.querySelector('#school_btn').addEventListener('click', function(){
        school_img = document.querySelector('#school');
        school_img.style.visibility = "visible";
    });
}