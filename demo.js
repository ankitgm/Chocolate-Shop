/* 
Mohanty, Ankit Goutam
     Username #jadrn023
     Project #2

*/


$(document).ready(function(){


$("#state").change(function () {
            var ddlFruits = $("#state");
            if (ddlFruits.val() == "") {
                
                alert("Please select an option!");
                return false;
            }
            return true;
        });
var min = 2018,
    max = min + 25,
    select = document.getElementById('selectElementId');
var opt1 = document.createElement('option');
    opt1.value = "";
    opt1.innerHTML = "Please Select Year";
    select.appendChild(opt1);
for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}



// var select1 = document.getElementById('monthId');
// var opt2 = document.createElement('option');
//     opt2.value = "";
//     opt2.innerHTML = "Please Select";
//     select1.appendChild(opt2);

$("#selectElementId").change(function() {
        var val = $(this).val();
        if (val == "2017") {

            $("#monthId").html("<option value='5'>5</option>");}
         else {
            $("#monthId").html("<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option>");} 
    });






//     if ("#selectElementId").change(function () {

// for (var i = 1; i<=12; i++){
//     var opt = document.createElement('option');
//     opt.value = i;
//     opt.innerHTML = i;
//     select1.appendChild(opt);
// }





var size=0;



        var h = new Array(2);
    h[0] = $('input[name="fname"]');
  
    h[0].focus();   




$("#selectElementId").change(function () {

    var year = $('#selectElementId').val();
    var month = $('#monthId').val();
   
    
    if (year  == "2018") {
      
       if (month < 5)
       {
        alert('Enter a valid expiration date');
        $('#selectElementId').val() = "";
        $('#selectElementId').innerHTML = "Please Select";
        return false;
      }
    }
});


});
