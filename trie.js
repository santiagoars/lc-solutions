

class TrieNode {
  constructor( letter ) {
    this.letter = letter;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
    constructor(){
        this.root = new TrieNode( null );
        this.words = [];
    }

    insert( word ) {
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
      let node = this.root;
      for( let i = 0; i < word.length; i++ ){
        if( word[ i ] in node.children ){
          node = node.children[ word[ i ] ];
        }else{
          return false;
        }
      }
      return true && node.isWord;
    }

    startsWith( prefix ){
      let node = this.root;
      for( let i = 0; i < prefix.length; i++ ){
        if( prefix[ i ] in node.children ){
          node = node.children[ prefix[ i ] ];
        }else{
          return false;
        }
      }
      return true;
    }

    printWords(){
      for( const word of this.words ){
        console.log( word );
      }
    }

    preSwitch( string, i, j){
      return string[ j ] + string.substring( i + 1, j) + string[ i ];
    }

    similarWords( string1 ){
      let counter = 0;
      for( let i = 0; i < string1.length; i++ ){
        for( let j = i + 1; j < string1.length; j++ ){
          if( this.startsWith( this.preSwitch( string1, i, j ) ) ){
            
          }
        }
      }
    }

}

let trie = new Trie();
trie.insert( 'tars' );
trie.insert( 'rats' );
trie.insert( 'arts' );
trie.insert( 'star' );