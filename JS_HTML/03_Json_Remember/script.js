

let data = [
    {firstName:"Hans", lastName:"Huber", points:30},
    {firstName:"Paul", lastName:"Müller", points:34},
    {firstName:"Franz", lastName:"Maier", points:35}
];


f
function loadPeople(){
    let html ="";
    data.forEach(Element => {
        html += "<div>" + Element.firstName + " " + Element.lastName + "</div>"
    });

    document.getElementById("content").innerHTML = html;

}

loadPeople();