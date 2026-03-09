import React, {useContext, useEffect} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../../containers/topbutton/Top";
import {Link} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";

export default function ReactSpringFullstackBlog() {
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
            Building Full Stack Apps using React and Spring Boot
          </h1>
          <div className="blog-meta">
            <span className="blog-author">Author: Krishna Teja</span>
            <span className="blog-date">July 30, 2025</span>
          </div>

          <div className="blog-body-text">
            <h3>Introduction</h3>
            <p>
              The industry standard for building robust, scalable enterprise
              applications involves decoupling the frontend from the backend.
              One of the most dominant combinations today is the "Golden Stack":
              React for lightning-fast, component-driven User Interfaces,
              tethered to a heavily secured, multithreaded Spring Boot Java
              backend.
            </p>

            <h3>Problem Statement</h3>
            <p>
              Building a monolithic application (where the server spits out HTML
              templates directly) restricts scalability. If the server goes
              down, the entire app dies. Furthermore, monolithic apps are
              incredibly hard to build mobile applications for later. How do we
              cleanly uncouple the client visually rendering the data from the
              server storing and computing it securely?
            </p>

            <h3>Basic Concept</h3>
            <p>
              We utilize a <strong>RESTful API Architecture</strong>. The React
              application is built as a Single Page Application (SPA),
              completely isolated on Node.js during development. It uses
              libraries like <code>Axios</code> or the native{" "}
              <code>fetch()</code> API to send HTTP Requests (GET, POST, PUT,
              DELETE) across the internet over to the Spring Boot server. The
              Java server authenticates the request, executes database
              transactions, and returns a raw <code>JSON</code> string back to
              React. React ingests that JSON, mathematically updates its virtual
              DOM state, and renders the layout seamlessly to the user without a
              page refresh!
            </p>

            <h3>Step-by-Step Integration</h3>
            <ol>
              <li>
                <strong>Setup CORS (Cross-Origin Resource Sharing):</strong>{" "}
                Because React runs locally on <code>localhost:3000</code> and
                Spring Boot runs on <code>localhost:8080</code>, modern browsers
                naturally block communication for security reasons. You must
                annotate your Spring Boot controllers with{" "}
                <code>@CrossOrigin(origins = "http://localhost:3000")</code> to
                explicitly permit traffic.
              </li>
              <li>
                <strong>Define the React Service:</strong> Abstract your HTTP
                calls out of your UI components. Create a{" "}
                <code>UserService.js</code> file that handles the raw Axios
                fetching logic.
              </li>
              <li>
                <strong>Consume the Promise:</strong> Inside your React
                component's <code>useEffect</code> hook, call the Axios service.
                Since server requests are asynchronous, `await` the response or
                use <code>.then()</code> before assigning the payload to local{" "}
                <code>useState</code> variables.
              </li>
              <li>
                <strong>Secure the Path:</strong> Implement JSON Web Tokens
                (JWT). Have Spring Boot sign a cryptographic string upon a
                successful user login. React stores this token in{" "}
                <code>localStorage</code> and attaches it as a "Bearer" header
                to every subsequent API call to prove authorization
                mathematically without retaining session cookies.
              </li>
            </ol>

            <h3>Example Visually</h3>
            <p>
              Consider a "Load Profile" button. You click the button. React
              instantly triggers an <code>ON_LOADING</code> spinner locally. It
              fires an Axios GET trace to Spring Boot. Spring receives the
              request, runs a highly optimized SQL query against PostgreSQL,
              isolates the user data, packages it into a JSON Payload, and
              blasts it back to React. React receives the payload, instantly
              updates its localized State hooked to the DOM, collapses the
              loading spinner, and injects the User Name text right into the UI
              header!
            </p>

            <h3>Code Example</h3>
            <p>
              Here is the architectural bridge! First, an Axios interceptor
              injecting the JWT Authorization automatically:
            </p>
            <div className="code-block" style={{ fontSize: '0.9rem', borderRadius: '8px', overflow: 'hidden' }}>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} wrapLines={true}>
                {`import axios from 'axios';

// Creating a localized instance targeting the Spring Boot backend
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// Request Interceptor: Attach JWT Token automatically if it exists!
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const getUserProfile = async (id) => {
    const response = await apiClient.get(\`/users/\${id}\`);
    return response.data;
};`}
              </SyntaxHighlighter>
            </div>

            <h3>Conclusion</h3>
            <p>
              Fusing React and Spring Boot splits the engineering load
              horizontally. React handles complex visual charting, state
              propagation, and device layout responsiveness seamlessly, letting
              the Java Backend strictly regulate Database ORMs, Security
              Configurations, and heavy mathematical business logic. It's an
              incredibly rewarding stack to master.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
