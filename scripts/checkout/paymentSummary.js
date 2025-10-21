import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import formatCurrency from "../utils/money.js";
import { addOrder } from "../../data/order.js";

export function renderPaymentSummary() {
  //   console.log("payment summary");
  let productPriceCent = 0;
  let shippingPriceCent = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    // console.log(cartItem);
    // console.log(
    //   `${product.name} => ${product.priceCents} * ${cartItem.quantity}`
    // );

    // console.log();
    productPriceCent += product.priceCents * cartItem.quantity;
    // console.log(productPriceCent);
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCent += deliveryOption.priceCents;
  });
  //   console.log(productPriceCent);
  //   console.log(shippingPriceCent);
  const totalBeforeTaxCents = productPriceCent + shippingPriceCent;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">
        \$${formatCurrency(productPriceCent)}
        </div>
    </div>

    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
        \$${formatCurrency(shippingPriceCent)}
        </div>
    </div>

    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
        \$${formatCurrency(totalBeforeTaxCents)}
        </div>
    </div>

    <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">
        \$${formatCurrency(taxCents)}
        </div>
    </div>

    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
        \$${formatCurrency(totalCents)}
        </div>
    </div>

    <button class="place-order-button button-primary js-place-order">
        Place your order
    </button>`;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart,
          }),
        });

        const order = await response.json();
        addOrder(order);
      } catch (error) {
        console.log("unexpected error");
      }

      window.location.href = "orders.html";
    });
}

// GET-> get something from backend
// POST -> create something
// PUT -> update something
// DELETE -> delete something

// URL parameter(search params-> used for youtube search things) is parameter?property pair
