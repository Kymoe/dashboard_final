import Chart from "chart.js/auto";

(async function () {
  const data = [
    { product: "Polo Shirt", amount: 20000 },
    { product: "Shoes", amount: 10000 },
    { product: "Jean", amount: 7000 },
    { product: "Shoes", amount: 5000 },
    { product: "polo Shirt", amount: 2000 },
    { product: "Jean", amount: 9000 },
  ];

  new Chart(document.querySelector("#product-chart"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.product),
      datasets: [
        {
          label: "Product sales all time",
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
})();
