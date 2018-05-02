#!/usr/bin/perl  

use DBI;
use CGI;
use POSIX;
use CGI::Cookie


$q = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn039";
my $username = "jadrn039";
my $password = "console";
my $database_source = "dbi:mysql:$database:$host:$port";

my $database1 = "proj4";
my $database_source1 = "dbi:mysql:$database1:$host:$port";
    


    
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';


my $dbh1 = DBI->connect($database_source1, $username, $password) 
or die 'Cannot connect to db';
    


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn039',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Confirmation Page</title>
        	<meta http-equiv="content-type"
                		content="text/html;charset=utf-8" />
            	<meta http-equiv="Content-Style-Type" content="text/css" />
</head>

<body>
           
END_CONTENT
my %cookies = $ENV{COOKIE};



my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
    # print "$cookies{$_}\n";
    }
    

my $v = $q->cookie('jadrn039');
  
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    my $sth = $dbh->prepare("INSERT INTO person1 VALUES ('$sku',CURDATE(),'$qty')");
$sth->execute();
$sth->finish();
    
    }

my $yo = "";
my $namevalue = "";
my $qtyvalue = 0;

print "<h1>Thank you for the order:</h1>\n";
print "<h3>Your order details is as follows.</h3>";


foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    
    my $sth = $dbh->prepare("SELECT * FROM person1 where sku = '$sku'");
$sth->execute();
while(my @row=$sth->fetchrow_array()) {
            
            $yo = @row->[0];                   
            my $sth1 = $dbh1->prepare("SELECT title FROM products where sku = '$yo'");
                    $sth1->execute();
                    while(my @row=$sth1->fetchrow_array()) {
            $namevalue = @row->[0];

            $sth1->finish();
            $dbh1->disconnect();
            }


        }
        
print"<table>";
         print ("<tr><td>$namevalue - </td>");
            print("<td>$qty</td></tr>");


}
print"</table>";

my ($key, $value);
print("<h3>Your order will be shipped to:</h3>");


my $address = $q->param('b_address1');

print "<p> $address";
my $address1 = $q->param('b_address2');
print " $address1";



my $city = $q->param('b_city');

print ", $city";

my $state = $q->param('b_state');

print ", $state";

my $zip = $q->param('b_zip');

print ", $zip </p>";




my $card = $q->param('cardno');

my $card1 = $card % 10000;



my $hidden = $q->param('hidden');

my $val8 = floor(($hidden *100) /108 *100) /100;
my $val9 = floor($val8 * 0.08 *100)/100;
print "<p><b> Total Amount</b> - $val8</p>";
print "<p><b> Total Tax</b> - $val9</p>";
print "<p><b> Total Shipping Charges</b> - 2</p>";


print " <p><b> Total Price Charged from your card</b> - $hidden</p>";
print "<p><b>Card details</b>";
print " - XXXX XXXX XXXX $card1 <br> </p>";


print "</body>\n";
print "</html>\n";




$dbh->disconnect();
