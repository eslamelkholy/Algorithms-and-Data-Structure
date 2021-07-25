# Dijkstra's Algorithm

Dijkstra's Algorithm Which Answer Important Question is <br/>
**What is The Shortest Path To "X" For Weighted Grap?** <br/>

we have Seen BFS Algorithm that Find The Shortest Path in Graph but here
we find the fatest Path

### Difference Between BFS & Dijkstra Algorithm

- BFS: Shortest Path (Fewest Segment)
- Dijkstra: Find The Fastest Path

### Steps

1. While We Have Nodes To Process
2. Grab the Nodes That is Closest To The Start
3. Update Costs For It's Neighbors
4. If Any Of TThe Neighbors Costs Were Update ? Update The Parent Too
5. Mark This Node As Visited

### Implementation

1. We Will need Three Hash Table Graph, Costs, Parents
   ![Dijkstra's Algorithm](7-DijkstrasAlgorithm/DijkstraAlgorithm.png)

```javascript
// the graph
const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

// The costs table
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// the parents table
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;
```

2. Function To Find Lowest Cost Node

```javascript
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  // Go through each node
  for (let node in costs) {
    const cost = costs[node];
    // If it's the lowest cost so far and hasn't been visited yet...
    if (cost < lowestCost && !visited.includes(node)) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}
```

3. Find Node With Lowest Cost Then go Through It's neighbors
4. If it's cheaper to get to this neighbor by going through this node then Update Cost & Parents

```javascript
const dijkstraAlgorithm = () => {
  let node = findLowestCostNode(costs);
  while (node !== null) {
    const cost = costs[node];
    // Go through all the neighbors of this node
    const neighbors = graph[node];
    Object.keys(neighbors).forEach(function (n) {
      const new_cost = cost + neighbors[n];
      // If it's cheaper to get to this neighbor by going through this node
      if (costs[n] > new_cost) {
        // ... update the cost for this node
        costs[n] = new_cost;
        // This node becomes the new parent for this neighbor.
        parents[n] = node;
      }
    });
    // Mark the node as visited
    visited.push(node);
    // Find the next node to process, and loop
    node = findLowestCostNode(costs);
  }
};
```
