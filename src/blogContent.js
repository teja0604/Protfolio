import React from "react";

export const blogData = {
  "spring-boot-rest-apis": {
    title: "Understanding Spring Boot REST APIs",
    date: "March 8, 2026",
    content: (
      <>
        <h3>Introduction</h3>
        <p>
          Spring Boot has revolutionized the way we build enterprise
          applications in Java. It allows developers to quickly bootstrap a
          robust, production-ready backend by minimizing boilerplate
          configuration. When it comes to building RESTful APIs, Spring Boot
          provides a powerful array of annotations to get you up and running
          natively.
        </p>
        <h3>Core Annotations</h3>
        <ul>
          <li>
            <strong>@RestController:</strong> Combines `@Controller` and
            `@ResponseBody`, marking a class as a web controller returning data
            rather than a view.
          </li>
          <li>
            <strong>@RequestMapping / @GetMapping:</strong> Maps HTTP requests
            to specific handler methods.
          </li>
          <li>
            <strong>@RequestBody:</strong> Maps the HttpRequest body to a Data
            Transfer Object (DTO) automatically.
          </li>
          <li>
            <strong>@PathVariable:</strong> Extracts values from the URI path.
          </li>
        </ul>
        <h3>Best Practices</h3>
        <p>
          Always use proper HTTP status codes. For instance, return `201
          Created` via `ResponseEntity.status(HttpStatus.CREATED)` when a POST
          request successfully creates an entity. Ensure your API remains
          stateless and uses comprehensive exception handlers
          (`@ControllerAdvice`) to map errors to readable JSON messages
          formatted for the frontend.
        </p>
      </>
    )
  },
  "dijkstra-algorithm": {
    title: "Dijkstra Algorithm Explained with Visualization",
    date: "January 15, 2026",
    content: (
      <>
        <h3>What is Dijkstra's Algorithm?</h3>
        <p>
          Dijkstra's Algorithm is a legendary greedy algorithm conceived by
          computer scientist Edsger W. Dijkstra in 1956. It solves the
          single-source shortest path problem for a graph with non-negative edge
          path costs, producing a shortest path tree.
        </p>
        <h3>How It Works</h3>
        <p>
          The algorithm maintains a set of unvisited nodes and calculates a
          tentative distance for every node. It continually picks the node with
          the minimum tentative distance, explores its mathematical perimeter to
          update neighbor distances, and marks it visited.
        </p>
        <h3>Visualizing Logic in React</h3>
        <p>
          By creating a 2D Array or Grid in React State, we can visualize this!
          We can represent walls, start nodes, and target nodes as distinct CSS
          classes. Using a standard Priority Queue implementation in JavaScript
          (or simply sorting arrays), we iterate through the neighbors, pushing
          state updates to the React component sequentially to trigger CSS
          animations that map the shortest path dynamically across the screen.
        </p>
      </>
    )
  },
  "java-oop-concepts": {
    title: "Java OOP Concepts Explained",
    date: "November 5, 2025",
    content: (
      <>
        <h3>The Pillars of OOP</h3>
        <p>
          Object-Oriented Programming (OOP) in Java relies on 4 fundamental
          pillars which drastically improve code reusability and scalability.
        </p>
        <ul>
          <li>
            <strong>Encapsulation:</strong> The wrapping of data (variables) and
            code acting on the data (methods) together as a single unit (Class).
            It protects the data from external interference utilizing access
            modifiers like `private`.
          </li>
          <li>
            <strong>Inheritance:</strong> The mechanism by which one class
            assumes the properties and behaviors of another utilizing the
            `extends` keyword. E.g., a `Dog` class extending robust properties
            of an `Animal` base class.
          </li>
          <li>
            <strong>Polymorphism:</strong> Means "many forms". It occurs through
            method overloading (compile-time) and overriding (runtime). It lets
            us treat objects of derived classes identically to objects of the
            base class.
          </li>
          <li>
            <strong>Abstraction:</strong> Hiding architectural background
            details and showing only functional essential information to the
            user utilizing `abstract classes` and `interfaces`.
          </li>
        </ul>
      </>
    )
  },
  "codechef-coding-journey": {
    title: "My 500+ Day CodeChef Coding Journey",
    date: "September 20, 2025",
    content: (
      <>
        <h3>The Power of Consistency</h3>
        <p>
          Maintaining a competitive programming streak requires discipline,
          grit, and a continuous willingness to fail math problems on the first
          try. Over my 500+ Day CodeChef streak, I transformed my approach to
          logical deduction.
        </p>
        <h3>Strategies That Work</h3>
        <p>
          I realized that doing easy problems every day creates false
          confidence. I transitioned to solving problems slightly above my
          rating. When I felt stuck, I forced myself to spend at least two hours
          tracing variables on paper before looking at editorials.
        </p>
        <h3>Topics Conquered</h3>
        <p>
          Through this journey, I mastered concepts like Graph Traversal
          (BFS/DFS), Dynamic Programming, Binary Search on Answer arrays,
          Segment Trees, and Disjoint Set Unions. It has been incredibly
          rewarding and translated directly into building more optimized
          software applications!
        </p>
      </>
    )
  },
  "full-stack-apps": {
    title: "Building Full Stack Apps using React and Spring Boot",
    date: "July 30, 2025",
    content: (
      <>
        <h3>The Golden Stack</h3>
        <p>
          React (Frontend) coupled with Spring Boot (Backend) is widely regarded
          as an enterprise standard. React offers incredibly fast DOM
          manipulation and component-heavy modularity, while Spring Boot excels
          with multithreaded scalability, mature ecosystem dependencies, and
          security layers.
        </p>
        <h3>Architecture Overview</h3>
        <p>
          Communication between both tiers typically occurs via JSON traversing
          REST endpoints. To fix Cross-Origin Resource Sharing logic constraints
          during local development runs, configuring `@CrossOrigin` inside your
          Spring Controllers solves most issues.
        </p>
        <h3>State & Tokens</h3>
        <p>
          For authentication, using JSON Web Tokens (JWT) allows smooth
          decoupled security. Once the backend authenticates user credentials,
          it signs and returns the Token. React subsequently attaches this token
          to the `Authorization: Bearer` header via Axios interceptors mapping
          secure queries dynamically.
        </p>
      </>
    )
  }
};
