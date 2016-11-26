
  Auto-generated code below aims at helping you parse
  the standard input according to the problem statement.
 

var inputs = readline().split(' ');
var N = parseInt(inputs[0]);  the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]);  the number of links
var E = parseInt(inputs[2]);  the number of exit gateways
var all_links = [];
for (var i = 0; i  L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]);  N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    
    all_links.push(N1+';'+N2);
    all_links.push(N2+';'+N1);

}
var resultat = Array();
for (var i = 0; i  E; i++) {
    var EI = parseInt(readline());  the index of a gateway node
    resultat.push(EI);
}

while (true) {
    var SI = parseInt(readline());  The index of the node on which the Skynet agent is positioned this turn
    var link=; 
    var close_link=; 
    var all_links_split=0;
    var lent = resultat.length;
    for (var k = 0; k  lent; k++) {
        EI = resultat[k];  
        for(var i = 0; i  all_links.length; i++)
        {
            if(all_links.indexOf(EI+;+SI)!=-1){
                link = EI+ +SI;
                close_link=link;

                 break;
            }else {
                all_links_split=all_links[i].split(;)[1];  
                if(all_links.indexOf(all_links_split+;+SI)!=-1 && all_links.indexOf(EI+;+all_links_split)!=-1){
                    link = all_links_split+ +SI;
                    break;
                }
          }
        }
    }
    
    if(close_link !==) {
        print(close_link);
    } else {
        print(link);
    }

    
     To debug printErr('Debug messages...');


     Example 0 1 are the indices of the nodes you wish to sever the link between
    print('0 1');
}