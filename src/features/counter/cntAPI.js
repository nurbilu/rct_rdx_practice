// A mock function to mimic making an async request for data
export function fetchCount(amount) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount.first > amount.sec?amount.first:amount.sec }), 500)
  );
}
