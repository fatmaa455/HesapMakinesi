
var sayi1;
var sayi2;
var islem;
var sonuc;
var a;

var ekran = document.getElementById("sonuc");
var gecmisEkrani = document.getElementById("gecmisE");

gecmisEkrani.value="Henüz Geçmiş Yok";

function ekranaYaz(gelen)
{
    if(ekran.value == 0)
    {
        ekran.value=" ";
    }
    
    ekran.value += gelen;
}


function hesapla(gelen)
{
    if(gelen == '+')
    {
        sayi1 = ekran.value;
        ekran.value += '+';
        islem='+';
    }

    if(gelen == '-')
    {
        sayi1 = ekran.value;
        ekran.value += '-';
        islem='-';
    }

    if(gelen == 'X')
    {
        sayi1 = ekran.value;
        ekran.value += 'X';
        islem='X';
    }

    if(gelen == '/')
    {
        sayi1 = ekran.value;
        ekran.value += '/';
        islem='/';
    }

    if(gelen == '.')
    {
        sayi1 = ekran.value;
        ekran.value += '.';
    }

    if(gelen == '=')
    {
        sayi2 = ekran.value.split(islem)[1];

        if(islem == '+')
        {
            ekran.value = parseFloat(sayi1) + parseFloat(sayi2);
            sonuc = ekran.value;
        }
        if(islem == '-')
        {
            ekran.value = parseFloat(sayi1) - parseFloat(sayi2);
            sonuc = ekran.value;
        }
        if(islem == 'X')
        {
            ekran.value = parseFloat(sayi1) * parseFloat(sayi2);
            sonuc = ekran.value;
        }
        if(islem == '/')
        {
            ekran.value = parseFloat(sayi1) / parseFloat(sayi2);
            sonuc = ekran.value;
        }


        if(gecmisEkrani.value == "Henüz Geçmiş Yok")
        {
            gecmisEkrani.value=" ";
        }

        a= sayi1 + islem + sayi2 + "=" + sonuc;
        gecmisEkrani.value += a;
        gecmisEkrani.value += "\n";

    }
}

function sifirla()
{
    ekran.value=0;
    getElementById("sonuc").innerHTML=ekran;
}


function sil()
{
    ekran.value=ekran.value.substring(0,ekran.value.length - 1);
}
