
// Funkcja getNumber szuka i lapie elememt z id `number` linia 17 i wklada do input1
function getNumber(){
    const input1 = document.querySelector('input').value;
    console.log(input1);
    // stala sizeOffCircle to funkcja ktora wykorzystuje input1 i oblicza i wyzuca wynik
    const sizeOffCircle = function(input1){
        return 3.14 * input1;
        

    };
    // stala size1 uruchamia funkcie sizeOffCircle i przechowuje wynik obliczen funkcji
    const size1 = sizeOffCircle(input1);

    // linia 13 wpisuje wynik ze stalej size1 do elementu p linia 20 HTML
    document.querySelector('p').innerHTML = size1;
}




