import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;



public class sample extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {   
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    String s = "select p.sku,v.vendorname, c.categoryname, p.description, p.features, p.cost, p.retail, p.quantity, p.image from vendor v, category c, product p where c.id = p.catID &&  v.id = p.venID;";
    String result = DBHelper.doQuery(s);
    out.print(result);  
    }  
}