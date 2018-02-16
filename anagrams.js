var newWords = words;

document.getElementById("findButton").onclick = function() {
    var typedText = document.getElementById("input").value;
    var variations = permutation('',typedText);
    var anagrams = [];
    for( i=0; i<variations.length; i++) {
        for( x=0; x<newWords.length; x++){
            if(variations[i] == newWords[x]) {
                anagrams.push(variations[i]);
            }
        }
    }
    document.getElementById('p1').textContent = anagrams;


}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function permutation(start, string) {

    if ( string.length == 1 ) {
        return [ start + string ];
    } else {

        var returnResult = [];
        for (var i=0; i < string.length; i++) {
            var result = permutation (string[i], string.substr(0, i) + string.substr(i+1));
            for (var j=0; j<result.length; j++) {
                returnResult.push(start + result[j]);
            }
        }

        return returnResult;
    }
}



