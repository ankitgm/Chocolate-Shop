import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.*;


public class databaseupdate extends HttpServlet {
    private static String connectionURL = "jdbc:mysql://opatija:3306/jadrn023?user=jadrn023&password=briefcase";               
    private static Connection connection = null;
    private static Statement statement = null;
    private static ResultSet resultSet = null;
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {   
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    String sku = request.getParameter("sku"); 
    String qty = request.getParameter("qty");  
     //     String sku = "ABC-123";
     // String qty = "1";
    out.print(sku);
    out.print(qty);
    String s = "UPDATE product SET quantity = quantity - "+ qty  +" WHERE sku ='" + sku + "';";
    String result = doQuery(s);
    out.print(result);  
    // out.print("YOYO");
    }  
public static String doQuery(String s) {
        String answer = "";     
        try {
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        connection = DriverManager.getConnection(connectionURL);
        statement = connection.createStatement();
        // ResultSetMetaData rsmd = resultSet.getMetaData();                       
        // statement.executeUpdate(s);
        int result = statement.executeUpdate(s);
                answer += String.valueOf(result);  

        }
        catch(Exception e) {
            e.printStackTrace();
            return e.toString();
            }
        //////////////////////////////////////////////////////////////////////////            
        // The finally clause always runs, and closes resources if open.
        // DO NOT OMIT THIS!!!!!!
        finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
                    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
        //////////////////////////////////////////////////////////////////////////
        }
        return answer;
    }
}