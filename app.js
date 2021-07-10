
let pronoun = ['The','Our', ];
let adj = ['Great', 'Big',"Fabolus","Amazing","Lastof" ];
let noun = ['Jogger','Racoon',"Gator", "Duck", "Us"];
let extension =[".Com", ".Es",".Uk",".Nl",".Us"]


for(i = 0; i<pronoun.length; i++){

    for( j =0; j<adj.length; j++){

        for ( k=0; k <noun.length; k++){

            for( l=0; l<extension.length; l++) {

                console.log (pronoun[i]+ adj[j]+noun[k]+extension[l]);
            }
        }
    }
}

