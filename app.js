
let pronoun = ['The','Our', ];
let adj = ['great', 'big',"fabolus","amazing" ];
let noun = ['jogger','racoon',"gator", "duck"];
let extension =[".com", ".es",".uk",".nl",".us"]


for(i = 0; i<pronoun.length; i++){

    for( j =0; j<adj.length; j++){

        for ( k=0; k <noun.length; k++){

            for( l=0; l<extension.length; l++) {

                console.log (pronoun[i]+ adj[j]+noun[k]+extension[l]);
            }
        }
    }
}

