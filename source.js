
/**
 * Clase para gestiona las validaciones con JQuery
 * Cuenta con tres metodos.
 * 1. establecer minimo en input numerico
 * 2. establecer maximo en input numerico.
 * 3. No permitir decimales en input númerico.
 * 4. Establecer maximo y minimo
 */
class Validation
{ 
    // Metodo para establecer un mínimo
    minVal(value, min)
    {
        value.change(function()
        {
            if((value).val() < min)
            {
                value.val(min);
                value.focus();
            }
        }); 
    }
    // Metodo para establecer un máximo
    maxVal(value, max)
    {
        value.change(function()
        {
            if((value).val() > max)
            {
                value.val(max);
                value.focus();
            }
        });
    }
     // Metodo para evitar el decimal.
    noDecimal(value, min)
    {
        value.change(function()
        {
            if((value).val() % 1 != 0)
            {
                value.val(min);
                value.focus();
            }
        });
    }
    maxAndMin(value, max, min)
    {
        value.change(function()
        {
            if((value).val() > max)
            {
                value.val(max);
                value.focus();
            }
            else if ((value).val()< min)
            {
                value.val(min);
                value.focus();
            }
        });
    }
}

$(document).ready(function()
{    
    let cardVD =  $("#cardValidityDuration");
    let profileD =  $("#profileValidityDuration");

    let cardValidityDuration = new Validation;
    let profileValidityDuration = new Validation;

   
    cardValidityDuration.maxAndMin(cardVD,10,5);
    cardValidityDuration.noDecimal(cardVD,5);

    profileValidityDuration.maxAndMin(cardVD,5,10);
    profileValidityDuration.noDecimal(profileD, 5);
    // maxValueOfInputs();
    // call_po_sam_reader(); 
})
