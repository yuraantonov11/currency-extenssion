$(function() {
    const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

    // content.fetch(API_URL)
    //     .then(response => response.json())
    //     .then(courses => console.log(courses))
    //     .catch( console.log );
    function findElementByText(text){
        var jSpot=$("body *:contains("+text+")")
        .filter(function(){
            return $(this).children().length === 0 && $(this).get(0).tagName !== 'SCRIPT';
        })
        return jSpot;
    }
    findElementByText('$').each(function(i, element){
        const content = $(this).text();
        const string = content.match(/\$((?:\d|\,)*\.?\d+)/g);
        const number = string.match(/(?:\d|\,)*\.?\d+/g)
    })
});
