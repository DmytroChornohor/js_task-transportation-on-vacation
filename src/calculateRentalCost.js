/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalRate = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < 3) {
    return days * dailyRentalRate;
  }

  if (days >= 3 && days < 7) {
    return days * dailyRentalRate - shortTermDiscount;
  }

  if (days >= 7) {
    return days * dailyRentalRate - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
