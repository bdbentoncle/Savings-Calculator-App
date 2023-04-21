function calculateSavings() {
  const savingsAmount = document.getElementById("savings-amount").value;
  const monthlyIncome = document.getElementById("monthly-income").value;
  const savingsTimeframe = document.getElementById("savings-timeframe").value;

  const monthlySavings = savingsAmount / savingsTimeframe;

  const percentOfIncome = (monthlySavings / monthlyIncome) * 100;

  const resultElement = document.getElementById("result");

  if (percentOfIncome > 100) {
    resultElement.innerText = `You would need to save ${percentOfIncome.toFixed(
      2
    )}% of your monthly income (${monthlySavings.toFixed(
      2
    )}) to reach your savings goal within ${savingsTimeframe} months. At this point, your current income or amount to save is not sufficient for you to reach this goal. Consider increasing your amount to save or extending the savings timeframe.`;
  } else {
    resultElement.innerText = `You need to save ${percentOfIncome.toFixed(
      2
    )}% of your monthly income (${monthlySavings.toFixed(
      2
    )}) to reach your savings goal within ${savingsTimeframe} months.`;
  }
}
