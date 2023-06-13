import Chart from "chart.js/auto";

(async function () {
  const data = [
    { product: "Polo Shirt", amount: 220000 },
    { product: "Shoes", amount: 56000 },
    { product: "Jean", amount: 75000 },
    { product: "Shoes", amount: 59000 },
    { product: "polo Shirt", amount: 163000 },
    { product: "Jean", amount: 91000},
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
