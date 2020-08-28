function printOwing (invoice) {
  let outstanding = 0;
  logStart();
  outstanding = getOutstanding(invoice);
  recordDueDate(invoice);
  logEnd(invoice, outstanding);
}

module.exports = {
  printOwing,
}

function logEnd(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function getOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.borderSpacing) {
    result += o.amount;
  }
  return result;
}

function logStart() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

