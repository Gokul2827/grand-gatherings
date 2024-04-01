let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset= sec.offsetTop;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    })
}
const bx=document.querySelector('.bx')
const bxmenu=document.querySelector('.bx-menu')
const dropdown=document.querySelector('.dropdown')
 
 bx.onclick= function (){
    dropdown.classList.toggle('open')
    
 }