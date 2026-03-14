import React, {useContext, useEffect} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../../containers/topbutton/Top";
import {Link} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";

export default function JavaOopBlog() {
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
          <h1 className="blog-title-header">Java OOP Concepts Explained</h1>
          <div className="blog-meta">
            <span className="blog-author">Author: Krishna Teja</span>
            <span className="blog-date">November 5, 2025</span>
          </div>

          <div className="blog-body-text">
            <h3>Introduction</h3>
            <p>
              When navigating the complex architecture of modern software,
              maintaining code cleanliness and preventing chaotic
              inter-dependencies is a massive challenge. Object-Oriented
              Programming (OOP) is a programming paradigm built around the
              concept of "Objects," which act as isolated data structures
              binding both state (attributes) and behavior (methods) into
              cohesive, manageable units.
            </p>

            <h3>Problem Statement</h3>
            <p>
              In traditional procedural programming, functions execute
              statements down a linear timeline, operating on global data
              structures. As applications scale to hundreds of thousands of
              lines, changing one piece of data can unknowingly break dozens of
              unrelated functions. State management becomes impossible, and code
              duplication runs rampant. How do we build scalable code?
            </p>

            <h3>Basic Concept: The Four Pillars</h3>
            <p>
              Java natively enforces OOP through four foundational principles
              designed to maximize security, modularity, and reusability:
            </p>
            <ul>
              <li>
                <strong>Encapsulation:</strong> Wrapping data (variables) and
                code acting on the data (methods) together as a single unit
                (Class). It protects the internal state by restricting direct
                access using modifiers like <code>private</code> and only
                exposing <code>getters</code> and <code>setters</code>.
              </li>
              <li>
                <strong>Inheritance:</strong> A mechanism where a new class
                (Subclass) acquires the properties and methods of an existing
                class (Superclass). This fundamentally eliminates code
                duplication. For example, a <code>Dog</code> and{" "}
                <code>Cat</code> class can both extend a generic{" "}
                <code>Animal</code> class.
              </li>
              <li>
                <strong>Polymorphism:</strong> Derived from Greek meaning "many
                forms." It allows methods to do different things depending on
                the object invoking them. This occurs through Method Overloading
                (compile-time) and Method Overriding (runtime).
              </li>
              <li>
                <strong>Abstraction:</strong> Hiding architectural background
                details and showing only functional essential operations to the
                user. This is achieved utilizing <code>abstract classes</code>{" "}
                and <code>interfaces</code>.
              </li>
            </ul>

            <h3>Step-by-Step Real-World Mapping</h3>
            <ol>
              <li>
                Define the core identity of the object (e.g., A{" "}
                <code>BankAccount</code>).
              </li>
              <li>
                <strong>Encapsulate</strong> the state: Make the{" "}
                <code>balance</code> private so no external code can arbitrarily
                subtract from it.
              </li>
              <li>
                Expose controlled behaviors: Create public methods{" "}
                <code>deposit()</code> and <code>withdraw()</code> that safely
                modify the internal balance after verifying conditions.
              </li>
              <li>
                <strong>Inherit</strong> variations: Create a{" "}
                <code>SavingsAccount</code> that extends{" "}
                <code>BankAccount</code> but adds an interest rate feature
                automatically.
              </li>
              <li>
                Apply <strong>Polymorphism</strong>: Override the{" "}
                <code>withdraw()</code> method in <code>SavingsAccount</code> to
                reject withdrawals if they exceed a specific monthly limit, a
                rule unique only to Savings, not standard accounts.
              </li>
            </ol>

            <h3>Example Visually</h3>
            <p>
              Think of a TV remote. The inner circuitry (the microchips, the
              infrared LED driver) is totally <strong>Encapsulated</strong>{" "}
              inside a plastic shell. You do not manually wire the battery to
              the LED. Instead, you are given an <strong>Abstracted</strong>{" "}
              interface: The buttons. The "Power" button is{" "}
              <strong>Polymorphic</strong>—if the TV is off, it turns it on; if
              it's on, it turns it off.
            </p>

            <h3>Code Example</h3>
            <p>
              Here is a clean Java implementation mapping out an inheritance
              tree demonstrating Polymorphism and Encapsulation:
            </p>
            <div
              className="code-block"
              style={{
                fontSize: "0.9rem",
                borderRadius: "8px",
                overflow: "hidden"
              }}
            >
              <SyntaxHighlighter
                language="java"
                style={vscDarkPlus}
                showLineNumbers={true}
                wrapLines={true}
              >
                {`// Abstraction & Inheritance Base
abstract class Animal {
    // Encapsulation: Private internal state
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() { return this.name; }

    // Abstract method to be overridden
    public abstract void makeSound();
}

// Inheritance spanning from Animal
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    // Polymorphism: Overriding the parent behavior!
    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Bow Wow!");
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Meow!");
    }
}`}
              </SyntaxHighlighter>
            </div>

            <h3>Conclusion</h3>
            <p>
              Mastering the four pillars of Java OOP isn't just about adhering
              to strict syntax; it fundamentally shifts how you design
              architectural ecosystems. By properly encapsulating your logic,
              abstracting irrelevant complexities, and overriding parent
              configurations polymorphically, your code becomes modular, highly
              testable, and deeply scalable against growing enterprise demands.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
