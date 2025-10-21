import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";

// import "../data/cart-oop.js";
// import "../data/cart-class.js";

// import "../data/backend-practice.js";

// promise is a class -> runs inner function immediately
// resolve lets us control when to go next function
// promise created separate thread of code
// Promise.all runs multiple promises and wait for all of them to finish
// promises creates lots of extra code hence await async(short cut of promise)

// async -> makes a function return a promise
// await -> lets us wait for [promise to finish before going to the next line

// await can be used only inside async function
// the closest function has to be async to await
// await value is returned not passed on to next like then

//   loadProductsFetch().then(()=>{

//   });
//    to replace .then -> await
async function loadPage() {
  //   console.log("load page");

  await loadProductsFetch();
  await new Promise((resolve) => {
    loadCart(() => {
      resolve("value from cart");
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

  //   return " return value ";
}
loadPage();

// loadPage().then((value) => {
//   console.log("next step");
//   console.log(value);
// });

// Promise.all([
//   //   new Promise((resolve) => {
//   //     //   console.log('promise')
//   //     loadProducts(() => {
//   //       // console.log("finish loading")
//   //       resolve("value from product");
//   //     });
//   //   }),
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve("value from cart");
//     });
//   }),
// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   //   console.log('promise')
//   loadProducts(() => {
//     // console.log("finish loading")
//     resolve("value 1");
//   });
// })
//   .then((value) => {
//     console.log(value);
//     //   console.log("next step");
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })

//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// -> using call back
// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// multiple callback cause nesting(code inside code)

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
// it will cause lots of nesting lots of indentation promise flats the code
