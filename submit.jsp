
<!DOCTYPE html>
<html>
<head>
<title>Order Confirmation</title>
</head>
<body>


<div align="center">
<h2>Order Confirmation</h2>



<h3>Your order is on way</h3>

<h3>Shipping Details...</h3>
			<table border="0">
          
      <tr>
        <td>Name</td>
        <td><%= request.getParameter("b_fname")%> <%= request.getParameter("b_lname")%></td>
      </tr>
      <tr>
        <td>Card</td>
        <td>XXXX XXXX XXXX <%= (request.getParameter("cardno")).substring(12) %></td>
      </tr>
      <tr>
        <td>Address</td>
        <td><%= request.getParameter("b_address1")%> <%= request.getParameter("b_address2")%> <%= request.getParameter("b_city")%> <%= request.getParameter("b_state")%> <%= request.getParameter("b_zip")%> </td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><%= request.getParameter("b_phonenum")%></td>
      </tr>

    </table>
  </div>


<%
    Cookie[] myCookie = request.getCookies();         
    if( myCookie != null ) {
       for (int i = 0; i < myCookie.length; i++){
          Cookie cookie = myCookie[i];
          if((cookie.getName()).equals("jadrn023")){                
              cookie.setValue(" ");
              cookie.setMaxAge(0);
              cookie.setPath("/");
              response.addCookie(cookie);
          }
      } 
    }   
%>






    </body>
</html>