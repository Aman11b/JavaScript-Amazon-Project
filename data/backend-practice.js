const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

// xhr.open("GET", "https://supersimplebackend.dev");
xhr.open("GET", "https://supersimplebackend.dev/hello");

xhr.open("GET", "https://supersimplebackend.dev/products/first");

xhr.open("GET", "https://supersimplebackend.dev/not-supported");

xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg");

xhr.open("GET", "https://supersimplebackend.dev/documentation");

xhr.open("GET", "https://supersimplebackend.dev");

xhr.send(); // asynchronous -> does not wait for anything

// Request -> sending something
// Response -> return
//  one req one res

// STATUS CODE STARTING WITH 4,5 => FAILED 4-> out problem 5-> backend problem
// if status code starts with 2 thats means success

// backend API(application  programming interface(how we interact with something))
// backend can give text,JSON(json.parse),HTML,images

// using browser is same as making GET request
