import React, {useContext, useEffect} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../../containers/topbutton/Top";
import {Link} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";

export default function CodeChefBlog() {
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
            My 500+ Day CodeChef Coding Journey
          </h1>
          <div className="blog-meta">
            <span className="blog-author">Author: Krishna Teja</span>
            <span className="blog-date">September 20, 2025</span>
          </div>

          <div className="blog-body-text">
            <h3>Introduction</h3>
            <p>
              Competitive programming is fundamentally different from
              traditional software engineering. While software engineering
              focuses heavily on system architecture, API design, scalability,
              and maintainability, competitive programming boils down raw
              problem-solving speed and algorithmic precision. My journey on
              CodeChef has been a masterclass in logical deduction, forcing me
              to think computationally rather than just functionally.
            </p>

            <h3>Problem Statement</h3>
            <p>
              When I started my CodeChef journey, my biggest bottleneck was
              "Time Limit Exceeded" (TLE) errors. I knew how to write the code
              that gave the right output, but my naive <code>O(n^2)</code>{" "}
              solutions fundamentally could not execute within the strict
              1-second timeout windows against massive hidden test cases. How do
              you scale your thought process to write mathematically optimal
              code?
            </p>

            <h3>Basic Concept: Complexity Analysis</h3>
            <p>
              The core concept of competitive programming is intimately
              understanding Big O Notation before typing a single line of code.
              Recognizing constraints is everything. If the problem states{" "}
              <code>N = 10^5</code>, you immediately know an <code>O(N^2)</code>{" "}
              loop will result in 10^10 operations, taking around 10 seconds.
              You are forced to brainstorm an <code>O(N log N)</code> sorting
              approach or an <code>O(N)</code> hashing approach to hit the
              1-second (10^8 operations) deadline.
            </p>

            <h3>Step-by-Step Strategic Growth</h3>
            <ol>
              <li>
                <strong>Phase 1 (Basic Logic):</strong> Focus entirely on
                implementation arrays, strings, and brute-force combinatorics.
              </li>
              <li>
                <strong>Phase 2 (Optimization):</strong> Transition to using
                HashMaps, Prefix Sums, and Sliding Windows to radically drop
                complexity from quadratic to linear.
              </li>
              <li>
                <strong>Phase 3 (Graph Traversal & Trees):</strong> Mastering
                Breadth-First Search (BFS) and Depth-First Search (DFS) for
                pathfinding inside complex networks.
              </li>
              <li>
                <strong>Phase 4 (Advanced DS):</strong> Implementing Segment
                Trees for range queries and Disjoint Set Unions (Union-Find) to
                dynamically track connected graphed components without TLE.
              </li>
            </ol>

            <h3>Example Scenario</h3>
            <p>
              Imagine a problem asking to find the sum of elements in a
              sub-array between index <code>L</code> and <code>R</code>,
              repeated for <code>Q = 10^5</code> different queries. A standard
              nested loop recalculated every time will TLE. By pre-computing a
              "Prefix Sum" array where{" "}
              <code>prefix[i] = prefix[i-1] + arr[i]</code>, we can answer any
              sub-array sum instantly in <code>O(1)</code> time via{" "}
              <code>prefix[R] - prefix[L-1]</code>.
            </p>

            <h3>Code Example</h3>
            <p>
              Here is how a standard Fast I/O competitive programming template
              looks in Java to brutally shave milliseconds off execution time:
            </p>
            <div className="code-block" style={{ fontSize: '0.9rem', borderRadius: '8px', overflow: 'hidden' }}>
              <SyntaxHighlighter language="java" style={vscDarkPlus} showLineNumbers={true} wrapLines={true}>
                {`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class CodeChefTemplate {
    
    // FastScanner class for lightning fast terminal input
    static class FastScanner {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer("");
        
        String next() {
            while (!st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {}
            }
            return st.nextToken();
        }
        
        int nextInt() {
            return Integer.parseInt(next());
        }
    }

    public static void main(String[] args) {
        FastScanner fs = new FastScanner();
        int testCases = fs.nextInt();
        
        StringBuilder output = new StringBuilder();
        
        while (testCases-- > 0) {
            int n = fs.nextInt();
            // Solve logic here
            output.append(n * 2).append("\\n");
        }
        
        // Block-printing all answers to prevent I/O bottlenecks
        System.out.println(output); 
    }
}`}
              </SyntaxHighlighter>
            </div>

            <h3>Conclusion</h3>
            <p>
              Maintaining a 500+ day streak on CodeChef was grueling, but it
              fundamentally rewired my brain. It taught me grit, mathematical
              resilience, and an obsession with optimization. That same
              obsession now directly influences the backend APIs I write today;
              I instinctively look for linear reductions and optimized database
              querying patterns rather than settling for brute force.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
