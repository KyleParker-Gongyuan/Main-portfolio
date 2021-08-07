
/* $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="/examples/images/avatar-tiny.jpg" class="mr-3" alt="Sample Image"><div class="media-body"><h5 class="media-heading">Jhon Carter</h5><p>Excellent Bootstrap popover! I really love it.</p></div></div>'
    });
});
 */






$(function(){ // popover func
    $('body').popover({
        placement: 'bottom',
        selector: '[data-toggle="popover"]',
        trigger: 'hover',
        html : true, // not sure if i need this
        content : '<div class="media" id="pogzxc"><img src="src/images/frame0000.png" class="mr-3" alt="Sample Image"><div class="media-body"><h5 class="media-heading">Jhon Carter</h5><p>Excellent Bootstrap popover! I really love it. (need to put a video and img) (need to make it so if you\'re in the gap the popover doesn\'t disapure (probably not a problem) ) </p></div></div>',
        container:'body',
        animation:false
    }).on('hide.bs.popover', function () {
        if ($(".popover:hover").length) {
            return false;
        }                
    }); 
    
    $('body').on('mouseleave', '.popover', function(){
       	$('.popover').popover('hide');
    });
});


// CHANGE THEME section  vvv

var checkbox = document.querySelector('input[name=theme]');
var moonimg = document.querySelector('#moonimg');
var sunimg = document.querySelector('#sunimg');



checkbox.addEventListener('change', function(){ //darkmode func
    
    

    if (this.checked) {
        trans()
        moonimg.src = 'src/images/frame0003.png';
        sunimg.src = 'src/images/frame0002.png';
        document.documentElement.setAttribute('data-theme', 'dark')
    
    }
    else {
        trans()
        moonimg.src = 'src/images/frame0001.png';
        sunimg.src = 'src/images/frame0000.png';
        document.documentElement.setAttribute('data-theme', 'light')
        
    }



})



let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
    
}








// function() // preview video (popover W.I.P)