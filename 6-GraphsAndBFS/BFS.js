const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

const isSeller = (name) => name === 'thom';

const BFS = (baseName) => {
  let search_queue = [...graph[baseName]];
  const searched = []; // keep track of which people you've searched before.
  while (search_queue.length > 0) {
    const person = search_queue.shift();
    if (searched.includes(person)) continue;

    if (isSeller(person)) {
      console.log(`${person} Is a Seller`);
      return true;
    }

    search_queue = [...search_queue, ...graph[person]];
    searched.push(person);
  }
  return false;
};

console.log(BFS('you'));
