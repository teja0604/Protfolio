import React, {useContext, useEffect} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../../containers/topbutton/Top";
import {Link} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";

export default function DijkstraBlog() {
  const themeContext = useContext(StyleContext);
  const isDark = themeContext ? themeContext.isDark : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <Header />
      <div className="blog-page-isolated">
        <Link
          to="/"
          className={isDark ? "back-btn dark-mode-link" : "back-btn"}
        >
          &larr; Back to Portfolio
        </Link>
        <div
          className={isDark ? "blog-wrapper dark-mode-wrapper" : "blog-wrapper"}
        >
          <h1 className="blog-title-header">
            Dijkstra Algorithm Explained with Visualization
          </h1>
          <div className="blog-meta">
            <span className="blog-author">Author: Krishna Teja</span>
            <span className="blog-date">January 15, 2026</span>
          </div>

          <div className="blog-body-text">
            <h3>Introduction</h3>
            <p>
              Graph algorithms are a fundamental part of Computer Science.
              Whether you're building a GPS navigation system (like Google
              Maps), routing packets across the internet, or solving advanced
              competitive programming questions, finding the shortest path
              between two points is an incredibly common challenge. Dijkstra’s
              Algorithm, conceived by computer scientist Edsger W. Dijkstra in
              1956, is one of the most famous algorithms designed to solve this
              exact problem efficiently.
            </p>

            <h3>Problem Statement</h3>
            <p>
              Imagine a map represented as a graph, where cities are{" "}
              <em>nodes</em> (vertices) and the roads connecting them are{" "}
              <em>edges</em>. Each road has a specific distance or
              "cost/weight". Given a starting city (the source node), our goal
              is to find the shortest possible route (the lowest total cost) to
              every other city on the map, or specifically to a destination
              node, assuming no roads have a negative distance.
            </p>

            <h3>Basic Concept</h3>
            <p>
              Dijkstra’s Algorithm uses a <strong>Greedy Approach</strong>. It
              always chooses the "closest" available unvisited node, calculates
              the distance to its neighbors, and updates their shortest known
              distance. By maintaining a set of unvisited nodes and continually
              picking the one with the smallest tentative distance, expanding
              its perimeter, and marking it visited, it mathematically
              guarantees that once a node is visited, the shortest path to it
              has been locked in.
            </p>

            <h3>Step-by-Step Explanation</h3>
            <ol>
              <li>
                Create a distance table for all nodes, initializing the source
                node's distance to 0 and all others to Infinity.
              </li>
              <li>
                Maintain a Priority Queue (or Min-Heap) of unvisited nodes,
                ordered by their current known distance.
              </li>
              <li>
                While the queue is not empty, extract the node with the minimum
                distance (current node).
              </li>
              <li>
                If this node is our target destination, we can stop early!
              </li>
              <li>
                Otherwise, iterate through all unvisited neighbors of the
                current node.
              </li>
              <li>
                Calculate a tentative distance:{" "}
                <code>current_node_distance + edge_weight</code>.
              </li>
              <li>
                If the tentative distance is smaller than the neighbor's current
                known distance, update it! Also, record the current node as the
                "previous" node to reconstruct the path later.
              </li>
              <li>
                Mark the current node as visited. It will not be checked again.
              </li>
            </ol>

            <h3>Example Visualization</h3>
            <p>
              Consider a triangle of nodes: A, B, and C. A connects to B (weight
              2), A connects to C (weight 5), and B connects to C (weight 1).
              Starting at A, the distances are `A=0, B=∞, C=∞`.
              <br />
              <br />A is extracted. We check B and C. B's new distance is `0 + 2
              = 2`. C's new distance is `0 + 5 = 5`. Next, B (distance 2) is
              extracted. We check C. Through B, C's distance is `2 + 1 = 3`.
              Since 3 is less than 5, we update C's distance to 3! The shortest
              path to C is A &rarr; B &rarr; C.
            </p>

            <h3>Code Example</h3>
            <p>
              Here is a basic implementation of Dijkstra's Algorithm in Java
              using a PriorityQueue:
            </p>
            <div className="code-block" style={{ fontSize: '0.9rem', borderRadius: '8px', overflow: 'hidden' }}>
              <SyntaxHighlighter language="java" style={vscDarkPlus} showLineNumbers={true} wrapLines={true}>
                {`import java.util.*;

class Node implements Comparable {
    int id;
    int distance;
    public Node(int id, int distance) {
        this.id = id;
        this.distance = distance;
    }
    public int compareTo(Object otherObj) {
        Node other = (Node) otherObj;
        return Integer.compare(this.distance, other.distance);
    }
}

public class Dijkstra {
    public int shortestPath(int n, int[][] edges, int src, int dest) {
        List[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) adj[i] = new ArrayList<>();
        for (int[] edge : edges) {
            adj[edge[0]].add(new int[]{edge[1], edge[2]});
        }
        
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        PriorityQueue pq = new PriorityQueue();
        pq.add(new Node(src, 0));
        
        while (!pq.isEmpty()) {
            Node curr = (Node) pq.poll();
            if (curr.id == dest) return curr.distance;
            if (curr.distance > dist[curr.id]) continue;
            
            for (Object obj : adj[curr.id]) {
                int[] neighbor = (int[]) obj;
                int nextNode = neighbor[0];
                int weight = neighbor[1];
                if (dist[curr.id] + weight < dist[nextNode]) {
                    dist[nextNode] = dist[curr.id] + weight;
                    pq.add(new Node(nextNode, dist[nextNode]));
                }
            }
        }
        return -1; // Path not found
    }
}`}
              </SyntaxHighlighter>
            </div>

            <h3>Conclusion</h3>
            <p>
              Dijkstra’s Algorithm is elegant, efficient, and deeply
              educational. By utilizing a Priority Queue, its time complexity
              optimizes to `O(E log V)` where E is edges and V is vertices.
              While it cannot handle negative weights (look to Bellman-Ford for
              that), it remains the gold standard for routing algorithms across
              modern software engineering.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
