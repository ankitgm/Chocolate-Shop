use DBI;
use CGI qw(:standard);
use POSIX;

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


my $sth = $dbh->prepare("SELECT * FROM person1 order by sku");
$sth->execute();





print header();

print start_html('Report Page');

    
            print "<h1>Sales Report</h1>";
            
            print "<table border='1'>\n";

           print "<tr>\n";
print "<td><b>SKU</b></td>\n";
print "<td><b>Date</b></td>\n";
print "<td><b>Quantity</b></td>\n";
print "<td><b>Cost Price</b></td>\n";
print "<td><b>Retail Price</b></td>\n";
print "<td><b>Total Cost</b></td>\n";
print "<td><b>Total Retail</b></td>\n";
print "<td><b>Profit</b></td>\n";
my $yo = "";
my $qtyvalue = 0;
my $costvalue = 0;
my $retailvalue = 0;
my $finalvalue1 = 0;
my $finalvalue2 = 0;
my $profit = 0;
my $grosscost = 0;
my $grossretail = 0;
my $grossprofit = 0;
           print "</tr>\n";
			while(my @row=$sth->fetchrow_array()) {
    		print "<tr>\n";
    		$yo = @row->[0];
    		$qtyvalue = @row->[2];

    			foreach $item (@row) { 
    				
        		 print "<td>$item</td>\n";

        	}       
        	my $sth1 = $dbh1->prepare("SELECT cost, retail FROM products where sku = '$yo'");
					$sth1->execute();
					while(my @row=$sth1->fetchrow_array()) {
    		
    		$costvalue = @row->[0];
    		$retailvalue = @row->[1];
    			foreach $item (@row) { 
    				
        		 print "<td>$item</td>\n";

        	}
        	$finalvalue1 = floor(($qtyvalue*$costvalue)*100) /100;
        $grosscost = $grosscost+$finalvalue1;
        	$finalvalue2 = floor(((1.08*$qtyvalue*$retailvalue)+2)*100)/100;
        	$grossretail = $grossretail + $finalvalue2;
        	
        	$profit = ($finalvalue2-$finalvalue1);
        	print "<td> $finalvalue1 </td>\n";
        	print "<td> $finalvalue2 </td>\n";
        	print "<td> $profit </td>\n";
        	$sth1->finish();


    		 print "</tr>\n";
    		 $dbh1->disconnect();
    		}

    	}

    	print "<tr>\n";
    	print "<td colspan='5'> Gross Total </td>\n";
    	print "<td>$grosscost</td>\n";
    	print "<td>$grossretail</td>\n";
        $grossprofit = $grossretail - $grosscost;
    	print "<td>$grossprofit</td>\n";
    	print "</tr>\n";

print "</table>\n";
print end_html();
$sth->finish();
$dbh->disconnect();
