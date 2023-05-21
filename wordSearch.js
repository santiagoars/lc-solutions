class TrieNode {
	constructor(letter) {
		this.letter = letter;
		this.children = {};
		this.isWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode(null);
	}

	insert(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			let currentLetter = word[i];
			if (!(currentLetter in node.children)) {
				let newLetter = new TrieNode(currentLetter);
				if (i + 1 === word.length) {
					newLetter.isWord = true;
				}
				node.children[currentLetter] = newLetter;
				node = newLetter;
			} else {
				node = node.children[currentLetter];
				if (i + 1 === word.length) {
					node.isWord = true;
				}
			}
		}
	}

	search(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			if (word[i] in node.children) {
				node = node.children[word[i]];
			} else {
				return false;
			}
		}
		return true && node.isWord;
	}

	startsWith(prefix) {
		let node = this.root;
		for (let i = 0; i < prefix.length; i++) {
			if (prefix[i] in node.children) {
				node = node.children[prefix[i]];
			} else {
				return false;
			}
		}
		return true;
	}
}

const matrix = [
	['a', 'c'],
    ['p', 'e']
];
const trie = new Trie();
trie.insert('app');
trie.insert('ace');
trie.insert('ape');


