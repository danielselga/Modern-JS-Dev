// Modules -> are reusable piece of code that encapsulate implementations details.

// Usualy a standalone file, but it doesent have to be.


// IMPORT -> Dependencies, Export -> (Public api)

// Compose softwares: Modules are small building blocks that we put all together to build complex applications.
// Isolate Components: Modules can be developed in isolation without thinking about the entire code base.
// Abstract code: Implement low level code in modules and import these abstractions into other modules.
// Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

// ES6 Modules -> Modules are stored in files, exatly one module per file.

// ES6 Mules VS Scripts
// TOP-LEVEL VARIABLES: Scoped to module - Global
// Default mode: 'strict-mode' - "Sloppy mode"
// Top level this: 'Undefined' - Window
// HTML Linking: '<stript type="module">' - <script>
// File downloading: Asynchronous - Synchronous