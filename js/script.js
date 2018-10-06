/* La biblioteca debe proveer una función tabs() que tome como argumento un string con el
selector del elemento contenedor de las pestañas.*/

function tabs(selector){
    //selector.style.backgroundColor = "#1981f8";
    function noDisplay(a) {      
        let aSelector = a.target.getAttribute('href');
        let divs = document.querySelector(aSelector);
        divs.style.display = 'none';
    }
    function changeDisplay(event) {
        let disp ="block";        
        let objSelector = event.target.getAttribute('href');
        //event.target.style.display = disp;
        /*
        
        }*/

        let obj = document.querySelector(objSelector);
        console.log(obj);
        obj.style.display = disp;
    }

    // Obtiene elementos que hacen match con el selector.
    let elements = document.querySelectorAll(selector);
    // Asocia event handler para cada elemento.
    for (let el of elements) {
        let links = el.querySelectorAll('a');
        for (let link of links) {
            noDisplay(link);
            link.addEventListener('click', changeDisplay);
        }
    }
}
