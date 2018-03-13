'use strict';

document.addEventListener("DOMContentLoaded", function (e) {
  var $els = Array.from(document.getElementsByClassName('donate-now'));
  setUpButtons($els);
});

function setUpButtons($els) {
  $els.map(function ($el) {
    $el.addEventListener('click', function () {
      var amount = this.getAttribute('data-amount');
      donate(amount);
    });
  });
}

window.donate = donate;

function donate(amount) {
  var handler = StripeCheckout.configure({
    key: 'pk_test_BQzt671JUzm76NLDepo3v1Oi',
    allowRememberMe: false,
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function token(_token) {
      submitOrder(_token);
    }
  });

  window.addEventListener('popstate', function () {
    handler.close();
  });

  handler.open({
    name: 'Jason Nichols for Congress',
    image: '/img/JN_Logo-Color-V.svgz',
    description: '',
    billingAddress: true,
    zipCode: true,
    panelLabel: 'Donate {{amount}}',
    amount: amount * 100
  });
}

function submitOrder(token) {
  console.log('token', token);
}