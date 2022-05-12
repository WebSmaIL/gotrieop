const options = {
  threshold: 0.5,
};

const arr = document.querySelectorAll(".observe");

let i = 0;
const links = document.querySelectorAll(".header__link");
const links2 = document.querySelectorAll(".footer__link");
arr.forEach( (elem) => {
    elem.id = "section-" + i;
    links[i].href = '#' + elem.id;
    links2[i].href = '#' + elem.id;
    i++;
})

let observer = new IntersectionObserver ((entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry.target);
        const obj = entry.target;
        const a = document.querySelector(`a[href='#${obj.id}']`)
        
        if(entry.isIntersecting) {            
            links.forEach((e=> {
                if (e != a) {
                   e.classList.remove('active');
                } else {e.classList.add('active');};
            }))
        }
    })
}, options)

arr.forEach( elem => {
    observer.observe(elem)
})