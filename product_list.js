/* 
Mohanty, Ankit Goutam
     Username #jadrn023
     Project #2
*/
/* 
Parts of code referred from stack overflow
*/

var proj4_data;
$(document).ready(function(){

proj4_data = new Array();

$.ajax({
  url: "http://jadran.sdsu.edu/jadrn023/servlets/servlet/sample", 
  type: "get",    
  success: function(ankit){


  storeData(ankit);
  }});
      var cart = new shopping_cart("jadrn023");

    
  setTimeout( function() { updateDisplay(); }, 500); 
function updateDisplay(){

        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
        
            
        
            tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span class='heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>";                
                }
            
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;


}
    

    $('#hello1').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Amul") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })


    $('#hello2').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Lindt") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#hello3').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Bounty") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })


    $('#hello4').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Parle") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
       $('#hello5').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Cadbury") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    $('#hello6').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Bournville") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#hello7').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Hersheys") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#hello8').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][1] == "Mars") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#chk1').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][2] == "Milk Chocolate") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    $('#chk2').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][2] == "Dark Chocolate") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#chk3').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][2] == "Chocolate Truffles") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    $('#chk4').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][2] == "Truffles") {

                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })


    $('#chk5').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length-1; i++) {
  if(proj4_data[i][2] == "Nuts and Chews") {
                      tmpString += "<table class=\"chocoLatte\">";

                tmpString += "<tr><td class=\"Imgdata\"><center><img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+
                proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+
                " width=\"200px\"  id='" + proj4_data[i][0]+"'/></center></td></tr>";     
       
              
                tmpString += "<tr><td class=\"Namedata\">"+ proj4_data[i][1] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][2] + "</td></tr>";
                tmpString += "<tr><td>"+ proj4_data[i][6] + " $ </td></tr>";
                    if(proj4_data[i][7] <= 0) {tmpString += "<tr><td><span>Coming Soon</span></td></tr>";
                }
                else {tmpString += "<tr><td><input type='button' class = 'buy' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span  class= 'heili'>Added to Cart</span></td></tr>";
                 }
                tmpString += "</table>"; 
                }
            }

        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })


$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;

 
  cart.getCartArray();
    });
        
    $(document).on('click', ".buy", function() {  
       
        var sku = this.id;
  
    var price= $(this).prev('.price').html();
    var title=$(this).prev('.price').prev('.mytitle').html();
        cart.add(sku,1);
      
        $(this).next().fadeIn(40).fadeOut(1900);
        });      
        
                    


    $(document).on('click', ".buy1", function() {  
       
        var sku = this.id;
  
    var price= $(this).prev('.price').html();
    var title=$(this).prev('.price').prev('.mytitle').html();
        cart.add(sku,1);
        
        $(this).next().fadeIn(40).fadeOut(1900);
        });  
       



      function storeData(ankit) {
        
        var tmpArray = explodeArray(ankit,';');
        for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        
    }


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














var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

 $('#content').on('click', "table" ,function(e) {
        if(e.target.nodeName == "IMG"){
            
             ShowProducts1(e.target.id);
             modal.style.display = "block";
        }else{
            return;
        }
     });




function ShowProducts1(sku){
    tmpString = "";
    firstStr = "";
    lastStr = "";
    
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][0] == sku){


                tmpString += "<div class=\"modal-body\">";
                tmpString += "<img src=\"http://jadran.sdsu.edu/~jadrn023/proj1/img_gs_/"+proj4_data[i][8]+"\" alt=\""+proj4_data[i][8]+"\""+ "id = \""+ proj4_data[i][0] +"\" height=\"400px\" />";
                firstStr += proj4_data[i][1] + " " + proj4_data[i][2];
                tmpString += "<table border='0' cellspacing='14'>";

                tmpString += "<tr><td>Price</td><td>$"+proj4_data[i][6]+"</td></tr>"; 
                tmpString += "<tr valign='top'><td>Description</td><td>"+proj4_data[i][3]+"</td></tr>"; 
                tmpString += "<tr valign='top'><td>Features</td><td>"+proj4_data[i][4]+"</td></tr>";                    
                if(proj4_data[i][7] <= 0){
                    tmpString += "<tr><td><div>Coming Soon</div>";
                }else{
                    tmpString += "<tr><td colspan='2'><input type='button' class = 'buy1' id='" + proj4_data[i][0]+"' name="+proj4_data[i][0]+ " value='Add to Cart' /><span class = 'heili'>       Added to Cart</span></td></tr>";
                }
                tmpString += "</table></div>";

    
            }
        }
        var headerHandle = document.getElementById('modal-header-text');
        headerHandle.innerHTML = firstStr;
        var handle = document.getElementById('modal-body');
        handle.innerHTML = tmpString;
        var footerHandle = document.getElementById('modal-footer-text');
        footerHandle.innerHTML = lastStr;

}
$(document).keyup(function(e) {
  if (e.keyCode === 27)  $(".modal").css("display", "none"); 
});


span.onclick = function() {
        modal.style.display = "none";
    }



  







});
