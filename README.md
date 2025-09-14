Questions:
         1) What is the difference between var, let, and const?
         2) What is the difference between map(), forEach(), and filter()?
         3) What are arrow functions in ES6?
         4) How does destructuring assignment work in ES6?
         5) Explain template literals in ES6. How are they different from string concatenation?

Answers:
1) These three keywords are used for variable declaration in JavaScript, but they differ fundamentally in their scoping, hoisting behavior, and mutability.var is function-scoped and can be re-declared. let and const are block-scoped and cannot be re-declared. let can be updated, but const cannot be reassigned.

2) forEach performs an action on each item and returns nothing. map returns a new array of transformed items. filter returns a new array of items that passed a condition.

3) Arrow functions provide a more concise syntax for writing function expressions. Their key feature is that they do not have their own this context; instead, they lexically inherit the this value from their surrounding parent scope. This makes them particularly useful for callbacks and methods where maintaining the parent's context is important. They also cannot be used as constructors and do not have their own arguments object.

4) Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects directly into distinct variables. It mirrors the structure of the array or object literal on the left side of the assignment. This provides a concise and readable way to extract multiple properties from an object or items from an array without writing repetitive access code.

5) Template literals are string literals delimited by backticks (`) that allow for embedded expressions (using ${}) and multi-line strings. They differ from traditional string concatenation (which uses the + operator) by providing a more declarative and readable syntax. This eliminates the need to manually break strings and combine variables, making the code cleaner, especially for complex strings with variables or HTML.


