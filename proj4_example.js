/* 
Mohanty, Ankit Goutam
     Username #jadrn023
     Project #2
*/


$(document).ready( function() {

   $.ajax({
  url: "http://jadran.sdsu.edu/jadrn023/servlets/servlet/sample", 
  type: "get",    
  success: function(ankit){
  
  storeData(ankit);

  }});






    var cart = new shopping_cart("jadrn023");
    var a = cart.size();

var variable=0;
 



          setTimeout( function() { updateDisplay(); }, 500); 

        










        function updateDisplay() {
          
        var cartArray = cart.getCartArray();
        var toWrite = "";
        var total = 0;
        var yoyovaluess = 0;
        var toWrite = "<table id =\"yoyowrite\">";
        
        for(i=0; i < cartArray.length; i++) {
            for(j=0;j<proj4_data.length;j++) {
                if (proj4_data[j][0] == cartArray[i][0])
                {
                    toWrite += "<table id = \"yoyoinside\">";
                        
                        toWrite += "<tr><td rowspan=\"5\"><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                        proj4_data[j][8]+"\" alt=\""+proj4_data[j][8]+"\""+
                        " width=\"200px\"  /></td><td>"+ proj4_data[j][2] +"</td></tr>";     
                      
                        toWrite += "<tr><td>"+ proj4_data[j][6] + " $</td></tr>";
                        
                        toWrite += "<tr><td><input type='text' readonly id= 'himp' name='"+proj4_data[j][7]+"'' class='"+ proj4_data[j][7] +"' value='"+ cartArray[i][1] +"' /> No.</td></tr>";
                            yoyovaluess = Math.floor(proj4_data[j][6] * cartArray[i][1] *100) /100;
                            toWrite += "<tr><td>"+ yoyovaluess + " $</td></tr>";
                        toWrite += "<tr><td><input type='button' class = 'add' value = '+' name='"+proj4_data[j][0]+ "'id='"+cartArray[i][0]+"' /> <input type='button' class = 'decrease' value = '-' name='"+proj4_data[j][0]+ "'id='"+cartArray[i][0]+"' /> <input type='button' class = 'delete' value = 'Remove' name='"+proj4_data[j][0]+ "'id='"+cartArray[i][0]+"' /></td></tr>";
                        
                        
                        toWrite += "</table>"; 

                        total += cartArray[i][1]*proj4_data[j][6];
                        toWrite += "<br /> <br />";

                        
                }
            }
            // toWrite += "<tr>";
            // toWrite += "<td>"+cartArray[i][0]+"</td>";
            // toWrite += "<td>"+cartArray[i][1]+"</td>"; 
            // toWrite += "</tr>";

            }
            if (a==0) {toWrite += "<div class='OrderBox'><div id='OrderSummary'><b><h3>Your Cart is Empty</h3></b></div><table id='OrderSummaryTable'>";}
else{
toWrite += "<div class='OrderBox'><div id='OrderSummary'><b><h3>Order Summary</h3></b></div><table id='OrderSummaryTable'>"; 
           
            toWrite += "<table class = 'test' align='center'>"; 
                        toWrite += "<br/> <br/>"; 

            toWrite += "<tr><td class='Name' >Items ("+ cart.size() +")</td><td class='Value' align = 'center'>"+ Math.floor(total * 100) / 100  +" $</td></tr>";
            toWrite += "<tr><td class='Name'>Shipping</td><td class='Value'>5 $</td></tr>";
            toWrite += "<tr><td class='Name'> Estimated tax</td><td class='Value'>"+ Math.floor((0.0775*(total+5)) * 100) / 100  +" $</td></tr>";
            toWrite += "<tr><td class='Name'><hr></td><td class='Value'><hr></td></tr>";
            toWrite += "<tr><td class='Name' >Total</td><td class='Value'>"+   Math.floor((1.0775*(total+5)) * 100) / 100  + " $</td></tr>";
toWrite +="</div>";
        toWrite += "</table>"; 
    }

        $('#cart').html(toWrite); 
        $('#count').text(cart.size()); 
        variable = Math.floor((1.0775*(total+5)) * 100) / 100;   
        }
            $("#ui-dialog").dialog({
            height: 700,
            width: 700,
            modal: true,
            autoOpen: false,
           
                    });

            function getquerystring() {
            var query=document.getElementById("queryString").value;

            return  query;
         }

if (a == 0) {

    document.getElementById('open').style.visibility = 'hidden';
}


   $('#open').bind('click', function($e) {       
            $("#ui-dialog").dialog('open');
            $("#hidden").val(variable);
            });




    $(document).on('click','.delete', function(e){
        cart.delete($(e.target).attr("name"));
       setTimeout( function() { updateDisplay(); }, 500); 
        });
 

    $(document).on('click', '.decrease',function(e){
    
        var sku = this.id;
        cart.add(sku,-1);
       setTimeout( function() { updateDisplay(); }, 500);

        
              if( document.getElementById("himp").value <= 1){
               
                 cart.delete($(e.target).attr("name"));
                           
              }
setTimeout( function() { updateDisplay(); }, 500);
             



        });      
            

            $(document).on('click', '.add',function(e)
            {
        var sku = this.id;
       
        

        if (document.getElementById("himp").value >= document.getElementById("himp").name)
{
    alert("you cannot buy more than the available stock");
            cart.add(sku,-1);
            setTimeout( function() { updateDisplay(); }, 500);
}
        
 cart.add(sku,1);
 setTimeout( function() { updateDisplay(); }, 500);


        }); 

function storeData(ankit) {
        
        var tmpArray = explodeArray(ankit,';');
        for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
       
    }
        $('#yoyo').on('click', function(e) {
 e.preventDefault();
         
        var cartArray = cart.getCartArray();
                for(i=0; i < cartArray.length; i++) {
                    $.ajax({
                        url:"http://jadran.sdsu.edu/jadrn023/servlets/servlet/databaseupdate?sku="+ cartArray[i][0] + "&qty=" + cartArray[i][1], 
                            success: function(ankit){
                                 
                                 

          $('#myform').submit();
                        }
                                                 
                    });
        }
    
    })


function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}  



    });



