import React, {useContext, useEffect} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../../containers/topbutton/Top";
import {Link} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";

export default function SpringBootBlog() {
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
            Understanding Spring Boot REST APIs
          </h1>
          <div className="blog-meta">
            <span className="blog-author">Author: Krishna Teja</span>
            <span className="blog-date">March 8, 2026</span>
          </div>

          <div className="blog-body-text">
            <h3>Introduction</h3>
            <p>
              In the modern web ecosystem, creating scalable, secure, and fast
              backend services is non-negotiable. Spring Boot has revolutionized
              the way we build enterprise applications in Java. It allows
              developers to quickly bootstrap a robust, production-ready backend
              by minimizing boilerplate configuration. Today, building REST
              (Representational State Transfer) APIs is the standard way
              backends communicate with frontend applications like React,
              Angular, or Mobile apps.
            </p>

            <h3>Problem Statement</h3>
            <p>
              Before Spring Boot, building a Java web application (Spring MVC)
              required heavy XML configurations, configuring a web server (like
              Tomcat), defining dependency injection contexts manually, and
              setting up complex build pipelines. Developers spent more time
              configuring the infrastructure than writing actual business logic.
              How can we eliminate this setup time and rapidly develop REST
              APIs?
            </p>

            <h3>Basic Concept</h3>
            <p>
              Spring Boot solves this through{" "}
              <strong>Auto-Configuration</strong> and an{" "}
              <strong>Opinionated Approach</strong>. It automatically configures
              the underlying Spring Framework based on the dependencies present
              in your project. By utilizing specific Java Annotations, we can
              declare a class as an API endpoint, tell it what HTTP methods to
              listen to, and have it automatically serialize Java objects into
              JSON strings to reply to the client.
            </p>

            <h3>Step-by-Step Explanation</h3>
            <ol>
              <li>
                <strong>Initialize the Project:</strong> Use Spring Initializr
                to generate a Maven project with the <code>Spring Web</code>{" "}
                dependency.
              </li>
              <li>
                <strong>Define the Model:</strong> Create a standard Java POJO
                (Plain Old Java Object) to represent your data (e.g., a User or
                Product).
              </li>
              <li>
                <strong>Create the Controller:</strong> Annotate a class with{" "}
                <code>@RestController</code>. This tells Spring this class will
                handle HTTP requests and return data in the response body.
              </li>
              <li>
                <strong>Map the Endpoints:</strong> Use annotations like{" "}
                <code>@GetMapping</code>, <code>@PostMapping</code>, or{" "}
                <code>@PutMapping</code> on methods to tie them to specific URL
                paths (e.g., <code>/api/users</code>).
              </li>
              <li>
                <strong>Extract Data:</strong> Use <code>@PathVariable</code> to
                get data from the URL, or <code>@RequestBody</code> to read JSON
                payloads sent by the client.
              </li>
              <li>
                <strong>Return the Response:</strong> Wrap your returned object
                in a <code>ResponseEntity</code> to explicitly control the HTTP
                Status code (like 200 OK or 201 Created).
              </li>
            </ol>

            <h3>Example Scenario</h3>
            <p>
              Imagine we are building a library system. The frontend needs to
              fetch a specific book. It sends an HTTP GET request to{" "}
              <code>http://localhost:8080/api/books/101</code>. The embedded
              Tomcat server intercepts this, routes it to our Controller
              listening on <code>/api/books/101</code>, extracts '101' as the
              path variable, queries the database, and returns the Book object.
              Spring Boot automatically converts that Book object into a JSON
              response!
            </p>

            <h3>Code Example</h3>
            <p>
              Here is how clean and declarative a REST controller looks in
              Spring Boot:
            </p>
            <div className="code-block" style={{ fontSize: '0.9rem', borderRadius: '8px', overflow: 'hidden' }}>
              <SyntaxHighlighter language="java" style={vscDarkPlus} showLineNumbers={true} wrapLines={true}>
                {`import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    // Constructor Injection automatically wiring the service
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Handle GET request to /api/users/{id}
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.notFound().build(); // HTTP 404
        }
        return ResponseEntity.ok(user); // HTTP 200 with JSON Body
    }

    // Handle POST request to /api/users
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User newUser) {
        User savedUser = userService.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser); // HTTP 201
    }
}`}
              </SyntaxHighlighter>
            </div>

            <h3>Conclusion</h3>
            <p>
              Spring Boot's annotation-driven architecture abstracts away the
              tedious HTTP request parsing and response formatting. By
              understanding core annotations like <code>@RestController</code>,{" "}
              <code>@RequestBody</code>, and mastering{" "}
              <code>ResponseEntity</code> for accurate HTTP Status management,
              you can build scalable, production-grade microservices rapidly.
              It's the perfect backend companion for modern React applications.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
