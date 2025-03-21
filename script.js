function maincontent(page) {
    let contentDiv = document.getElementById("content");
    let sidebar = document.getElementById("sidebar");
    let projectSidebar = document.getElementById("projects-sidebar");
    
    contentDiv.classList.remove("show");

    setTimeout(() => {
        if (page === "home") {
            contentDiv.innerHTML = `
                <h1>WELCOME</h1>
                <h2>TO INNOVATION & TECHNOLOGY HUB</h2>
                <p>Your go-to platform for learning and mastering programming, development, <br> and emerging technologies. 
                Whether you're a beginner or an experienced coder, explore our <br> resources, tutorials, and 
                guides to enhance your skills and stay <br> ahead in the digital world!</p>`;
            sidebar.classList.remove("show"); 
            projectSidebar.classList.remove("show");
        } 
        else if (page === "c-lang") {
            contentDiv.innerHTML = `
                <h1>C LANGUAGE</h1>
                <p>C is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains widely used and influential.
                By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems code 
                (especially in kernels) device, drivers, and protocol stacks, but its use in application software has been decreasing. <br><br> C is 
                commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.  
                A successor to the programming language B, C was originally developed at Bell Labs by Ritchie between 1972 and 1973 to construct utilities 
                running on Unix. <br><br> It was applied to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually gained popularity. 
                It has become one of the most widely used programming languages, with C compilers available for practically all modern computer architectures 
                and operating systems.</p>`;
            showSidebar("C Language");
        } 
        else if (page === "python") {
            contentDiv.innerHTML = `
                <h1>PYTHON</h1>
                <p>Python is a high-level programming language known for its readability and versatility. Its design philosophy emphasizes code readability 
                with the use of significant indentation. It is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including 
                structured (particularly procedural), object-oriented and functional programming. <br><br> It is often described as a batteries included language due to its 
                comprehensive standard library. Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first 
                released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000. <br><br> Python 3.0, released in 2008, was a major revision not completely backward-compatible 
                with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2. Python consistently ranks as one of the most popular programming 
                languages, and has gained widespread use in the machine learning community.</p>`;
            showSidebar("Python");
        } 
        else if (page === "html") {
            contentDiv.innerHTML = `
                <h1>HTML</h1>
                <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content 
                and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming 
                language. <br><br> Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes 
                the structure of a web page semantically and originally included cues for its appearance. <br><br> HTML elements are the building blocks of HTML pages. With HTML
                constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by 
                denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.</p>`;
            showSidebar("HTML");
        } 
        else if (page === "java") {
            contentDiv.innerHTML = `
                <h1>JAVASCRIPT</h1>
                <p>JavaScript often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. Ninety-nine percent 
                of websites use JavaScript on the client side for webpage behavior. <br><br> Web browsers have a dedicated JavaScript engine that executes the client code. These engines 
                are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is "NODE.JS". JavaScript is a high-level, often 
                just-in-time compiled language that conforms to the ECMAScript standard. <br><br> It has dynamic typing, prototype-based object-orientation, and first-class functions. 
                It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with 
                text, dates, regular expressions,standard data structures, and the Document Object Model (DOM).</p>`;
            showSidebar("JavaScript");
        } 
        else if (page === "php") {
            contentDiv.innerHTML = `
                <h1>PHP</h1>
                <p>PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 
                and released in 1995. The PHP reference implementation is now produced by the PHP Group. <br><br> PHP was originally an abbreviation of Personal Home Page, but it now stands 
                for the recursive acronym PHP: Hypertext Preprocessor. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or 
                a Common Gateway Interface (CGI) executable. <br><br> On a web server, the result of the interpreted and executed PHP code—which may be any type of data, such as generated 
                HTML or binary image data—would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks 
                exist that can be employed to orchestrate or facilitate the generation of that response.</p>`;
            showSidebar("PHP");
        } 
        else if (page === "about") {
            contentDiv.innerHTML = `
                <h1>ABOUT</h1>
                <p>This website is a hub for innovation, learning, and technology, designed to help aspiring developers, tech enthusiasts, and professionals master the world 
                of programming. <br><br> Whether you're a beginner taking your first steps in coding or an experienced programmer looking to expand your skills, InnoTech provides the 
                resources, tutorials, and hands-on projects to guide you on your journey. Built with a passion for technology and education, InnoTech covers essential programming
                languages like C, Python, HTML, JavaScript, and PHP, along with emerging trends in the digital world. <br><br> Our goal is simple: to empower individuals with knowledge 
                and practical experience, bridging the gap between theory and real-world application. Join us as we explore the limitless possibilities of technology and shape 
                the future, one line of code at a time!</p>`;
            sidebar.classList.remove("show"); 
            projectSidebar.classList.remove("show");
        }

        setTimeout(() => contentDiv.classList.add("show"), 50);
    }, 300);
}

function showSidebar(title) {
    let sidebar = document.getElementById("sidebar");
    let projectSidebar = document.getElementById("projects-sidebar");
    let sidebarTitle = document.getElementById("sidebar-title");
    let sidebarContent = document.getElementById("sidebar-content");

    sidebarTitle.innerText = title;
    sidebarContent.innerHTML = "";

    const subTopics = ["Pointers", "Functions", "Structures", "File Handling"];

    subTopics.forEach(topic => {
        let subDiv = document.createElement("div");
        subDiv.classList.add("sub-content");
        subDiv.innerText = topic;
        subDiv.onclick = () => showSubContent(title, topic);
        
        subDiv.style.border = "0.5px solid gray";
        subDiv.style.padding = "10px";
        subDiv.style.margin = "10px 0";
        subDiv.style.cursor = "pointer";

        sidebarContent.appendChild(subDiv);
    });

    sidebar.classList.add("show");
    projectSidebar.classList.add("show");
}

function showSubContent(language, subContent) {
    let contentDiv = document.getElementById("content");
    
    const contentData = { 
        "C Language": {
            "Pointers": "Pointers in C store memory addresses instead of actual values, allowing direct access to memory locations. They are declared using the * operator, and the & operator retrieves the address of a variable. Pointers enable dynamic memory allocation and efficient data manipulation but require careful use to avoid segmentation faults. <br><br> Pointers are widely used in arrays, function arguments, and data structures like linked lists. Passing pointers to functions allows modifying the original variables rather than working with copies, optimizing memory usage. However, improper pointer handling can lead to issues like memory leaks or dangling pointers.",
            "Functions": "Functions in C are blocks of reusable code that enhance modularity and reduce redundancy in programs. Each function must be declared with a return type, name, and parameters (if any), while the main() function acts as the program’s entry point. Functions can either return a value or be void, meaning they perform an action without returning data. <br><br> C supports function arguments passed by value or reference using pointers. Passing by reference allows modifying original variables within functions, making it more efficient for handling large data structures. Additionally, functions can be declared before their definition using function prototypes.",
            "Structures": "Structures (struct) in C allow grouping different types of variables under a single entity, useful for representing complex data models. A structure is defined using the struct keyword, followed by a list of members inside curly braces. This feature helps in organizing related data elements, such as defining a Student structure with name, age, and grade fields. <br><br> Structure members are accessed using the dot (.) operator or the arrow (->) operator when dealing with structure pointers. C also supports nested structures, where one structure can contain another. Structures are extensively used in file handling, linked lists, and system programming.",
            "File Handling": "File handling in C enables programs to read from and write to external files using functions from stdio.h. The fopen() function opens a file in various modes (r, w, a), and fclose() ensures that files are properly closed after use. Functions like fprintf(), fscanf(), fwrite(), and fread() facilitate reading and writing operations for text and binary files. <br><br> Efficient file handling prevents data loss and allows persistent storage beyond program execution. Buffering techniques like fflush() can improve file input/output performance. Proper error handling using feof() and ferror() helps in detecting end-of-file conditions and file access errors." 
        },
        "Python": {
            "Pointers": "Python does not have explicit pointers like C but instead uses references to manage variables. When assigning a variable, Python stores the memory address of the object and not the actual value itself. This reference-based approach simplifies memory management and avoids pointer-related issues. <br><br> The id() function in Python returns the memory address of an object, resembling pointer functionality. Mutable objects like lists and dictionaries are passed by reference, meaning modifications affect the original data. This behavior is useful but requires careful handling to avoid unintentional changes.",
            "Functions": "Functions in Python are defined using the def keyword and can return values or execute operations without returning anything. They support default parameters, keyword arguments, and variable-length arguments (*args, **kwargs), making them flexible. Python functions can also be assigned to variables and passed as arguments due to their first-class function nature. <br><br> Lambda functions (lambda x: x * 2) provide a concise way to define simple, anonymous functions. Python supports recursion, allowing functions to call themselves, which is useful in mathematical and tree-based algorithms. Functions help organize code into reusable components, enhancing readability and maintainability.",
            "Structures": "Python uses classes as structures, allowing the definition of objects with attributes and methods. Unlike C structures, Python classes support inheritance, polymorphism, and encapsulation, making them more powerful. Objects are instances of classes and provide a blueprint for organizing related data and behaviors. <br><br> Dictionaries in Python also function as lightweight structures, allowing key-value storage similar to associative arrays. Lists and tuples provide indexed storage, making it easy to work with collections of data. Python’s dynamic nature enables flexible and scalable data modeling.",
            "File Handling": "Python handles files using the open() function, which supports modes like read (r), write (w), and append (a). Using the with statement ensures files are closed properly, preventing resource leaks. Common file operations include reading (read(), readline(), readlines()) and writing (write(), writelines()). <br><br> For structured data storage, Python provides the json and pickle modules. Binary files can be handled using rb and wb modes, ensuring compatibility with non-text data. Exception handling using try-except prevents runtime errors when dealing with files."
        },
        "HTML": {
            "Pointers": "HTML does not have traditional pointers, but hyperlinks serve as 'pointers' by referencing external or internal resources. These links enable navigation between web pages or sections within a single document. Anchor tags combined with href='#id' allow users to jump to specific sections of a page. <br><br> Hyperlinks can also open email clients (mailto:), phone dialers (tel:), or initiate file downloads. URLs can include query parameters that act as references for dynamic content retrieval. While HTML itself does not manipulate memory, it provides structured linking similar to pointer functionality.",
            "Functions": "HTML does not have functions in the traditional sense but relies on JavaScript to implement dynamic behavior. JavaScript functions can be triggered by HTML events, such as onclick, onchange, and onsubmit, to modify content. These functions are defined within script tags or in external .js files. <br><br> For example, <button onclick='showAlert()'>Click me</button> calls a JavaScript function when clicked. Inline event handling allows quick interactions, but separating JavaScript into external files improves maintainability. HTML and JavaScript together create interactive and dynamic web pages.",
            "Structures": "HTML structures web pages using elements such as header, main, section, and footer. It follows a hierarchical tree-like model, where elements are nested within each other to define page layout. div and span are commonly used for grouping content and applying styles. <br><br> Semantic HTML elements (article, aside, nav) improve accessibility and SEO by giving meaning to web content. Forms (form) and tables (table) provide structured ways to collect and display data. HTML's structured approach ensures well-organized, readable, and accessible web pages.",
            "File Handling": "HTML itself does not handle files, but it provides elements like (input type='file') to allow users to upload files. JavaScript or backend languages like PHP process these uploaded files for further operations. HTML also supports embedding files using elements like img for images and video for multimedia content. <br><br> Web pages can include downloadable files using (a href='file.pdf' download). File storage and retrieval typically rely on server-side handling and database management. HTML ensures smooth integration with external resources while maintaining a structured format."
        },
        "JavaScript": {
            "Pointers": "Java does not support explicit pointers like C, but it uses references to manage objects in memory. Every object in Java is accessed through a reference variable, which stores the memory location of the object rather than the object itself. This prevents direct memory manipulation, improving security and reducing errors like segmentation faults. <br><br> Garbage collection in Java automatically frees memory occupied by unused objects, eliminating the need for manual memory management. Unlike C, Java does not allow pointer arithmetic, ensuring safer memory handling. However, references behave similarly to pointers when objects are passed to methods, as modifications inside the method affect the original object.",
            "Functions": "Functions in Java are called methods and are defined inside classes using the public, private, or protected access modifiers. A method has a return type, a name, and parameters, and it is called using the dot (.) operator on an object. The main() method serves as the entry point for Java programs. <br><br> Java supports method overloading, where multiple methods can have the same name but different parameters. It also supports method overriding, allowing a subclass to provide a specific implementation of a parent class method. Methods improve code organization, reusability, and encapsulation in Java programs.",
            "Structures": "Java does not have struct like C, but it uses classes to define complex data structures. A class in Java can have attributes (variables) and methods to manipulate data, functioning similarly to C structures but with added functionality like encapsulation and inheritance. Objects are instances of classes, and they store and operate on structured data. <br><br> Java supports interfaces and abstract classes, allowing flexible data modeling and multiple inheritance through interfaces. Collections like ArrayList, HashMap, and LinkedList provide efficient ways to store and manage structured data. Java’s OOP approach makes it well-suited for large-scale applications.",
            "File Handling": "Java provides the java.io and java.nio packages for file handling, allowing programs to read from and write to files. The FileReader and FileWriter classes handle text files, while BufferedReader improves efficiency by reading large amounts of data at once. The Scanner class also allows reading from files line by line. <br><br> For binary files, Java uses FileInputStream and FileOutputStream, which read and write byte streams. Exception handling using try-catch-finally ensures files are properly closed and prevents runtime errors. Java’s Path and Files classes in java.nio simplify modern file handling."
        },
        "PHP": {
            "Pointers": "PHP does not have traditional pointers like C, but it supports variable references. Using the & symbol, PHP allows one variable to reference another, meaning changes to one affect the other. This is useful when passing large data structures to functions without creating copies. <br><br> PHP’s references simplify memory usage and optimize performance, especially in loops and recursive functions. However, PHP does not allow pointer arithmetic like C. Instead, it manages memory automatically, making it easier for developers to focus on application logic.",
            "Functions": "Functions in PHP are defined using the function keyword and can accept parameters and return values. PHP supports both named functions and anonymous functions (closures), allowing flexibility in coding. Functions help organize reusable code and simplify complex tasks. <br><br> PHP also allows default parameter values, enabling functions to be called with missing arguments. Variable functions ($func = 'myFunction'; $func();) allow dynamic function calls, making PHP highly flexible. Functions are essential in PHP for handling database queries, form processing, and web logic.",
            "Structures": "PHP does not have struct like C but uses associative arrays and classes to store structured data. Associative arrays allow key-value pairs, similar to dictionaries in Python, making them useful for storing dynamic data. PHP classes (class MyClass {}) provide an object-oriented approach to structuring data and behavior. <br><br> Objects in PHP support encapsulation, inheritance, and polymorphism, making them suitable for larger applications. PHP frameworks like Laravel heavily use object-oriented programming for building scalable applications. Structured data handling in PHP ensures clean and efficient code organization.",
            "File Handling": "PHP supports file handling using functions like fopen(), fwrite(), fread(), and fclose(). The $_FILES superglobal enables handling file uploads via HTML forms, commonly used in web applications. PHP also provides file_get_contents() and file_put_contents() for simple file reading and writing. <br><br> For security, PHP enforces file validation and permission checks before processing uploads. File handling is essential in PHP for storing logs, configuration files, and dynamically generated content. Proper error handling with file_exists() and is_readable() prevents unauthorized file access and runtime errors."
        }
    };


    contentDiv.innerHTML = `
        <h1>${subContent}</h1>
        <p>${contentData[language]?.[subContent] || "Content not available yet."}</p>
    `;
    document.getElementById("sidebar").classList.add("show"); 
}

function loadProject(type) {
    let contentDiv = document.getElementById("content");
    let apiUrl = "";
    let title = "";

    if (type === "cat") {
        apiUrl = "https://api.thecatapi.com/v1/images/search";
        title = "Cat Random Photo Generator";
    } else if (type === "dog") {
        apiUrl = "https://dog.ceo/api/breeds/image/random";
        title = "Dog Random Photo Generator";
    } else if (type === "quotes") {
        apiUrl = "https://inspirobot.me/api?generate=true";
        title = "Random Quote Generator";
    }

    fetch(apiUrl)
        .then(response => type === "quotes" ? response.text() : response.json())
        .then(data => {
            let imageUrl = type === "cat" ? data[0].url : type === "dog" ? data.message : data;
            contentDiv.innerHTML = `
                <div class="project-container">
                    <h1 class="project-title">${title}</h1>
                    <img src="${imageUrl}" alt="Random ${type}" class="project-image">
                    <button class="project-button" onclick="loadProject('${type}')">Generate Another</button>
                </div>
            `;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error fetching data. Please try again.</p>`;
            console.error("Error fetching data:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const loginError = document.getElementById("loginError");

            if (username === "admin" && password === "1234") {
                window.location.href = "index.html";
            } else {
                loginError.textContent = "Invalid username or password.";
            }
        });
    }
});

window.onload = function () {
    maincontent('home'); 
};

