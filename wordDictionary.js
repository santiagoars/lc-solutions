class TrieNode {
    constructor( letter ) {
      this.letter = letter;
      this.children = {};
      this.isWord = false;
    }
}

class WordDictionary {
    constructor(){
        this.root = new TrieNode( null );
        this.words = [];
    }

    addWord( word ) {
        let node = this.root;
        for( let i = 0; i < word.length; i++ ){
          let currentLetter = word[ i ];
          if( !(currentLetter in node.children) ){
            let newLetter = new TrieNode( currentLetter );
            if( (i + 1) === word.length ){
              newLetter.isWord = true;
            }
            node.children[ currentLetter ] = newLetter;
            node = newLetter;
          }else{
            node = node.children[ currentLetter ];
            if( (i + 1) === word.length ){
              node.isWord = true;
            }
          }
        }
        this.words.push( word );
    }

    search( word ){
      return this.dfs( word, this.root );
    }

    dfs( word, root ){
      let node = root;
      for( let i = 0; i < word.length; i++ ){
        if( word[ i ] in node.children ){
          node = node.children[ word[ i ] ];
        }else if( word[ i ] === '.'){
          let match = false;
          Object.keys( node.children ).forEach( ( prefix ) => {
            match = this.dfs( word.substring( i + 1, word.length ), node.children[ prefix ] ) || match;
          })
          return match;
        }
        else{
          return false;
        }
      }
      return true && node.isWord;
    }

}

let trie = new Trie();
trie.insert( 'pat' );
trie.insert( 'pet' );
trie.insert( 'pal' );
trie.insert( 'ball' );
console.log( trie.search( 'p.d', trie.root ));