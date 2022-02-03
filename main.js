function pobieranie() {
    const goscie = document.getElementById('goscie').value
    const poprawiny = document.getElementById('poprawiny').checked;
    const wynik = document.getElementById('wynik');
    let zaplata = 0;

    if(poprawiny)
    {
        zaplata=(goscie*100)+(30/100*(goscie*100));
    }

    else
    {
        zaplata = goscie*100;
    }
    wynik.innerHTML='koszt Twojego wesela to '+zaplata+' złotych';
}
