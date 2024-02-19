// A mock function to mimic making an async request for data
export function fetchCount(amount) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount.first > amount.sec?amount.first:amount.sec }), 500)
  );
}

export function userLogin(username, password) {
  // This is a mock implementation. You should replace it with an actual API call.
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (username === "user@example.com" && password === "password") {
              resolve({ data: { userId: "1", name: "John Doe", username: "waga" } });
          } else {
              reject(new Error("Invalid username or password"));
          }
      }, 500);
  });
}


// Function to mimic user registration
export function registerUser(userData) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // This is just a mockup. Replace with actual API call.
          if (userData.username && userData.password) {
              // Assuming registration is always successful in this mock
              resolve({ data: { ...userData, userId: "newUserId" } });
          } else {
              reject(new Error("Missing username or password"));
          }
      }, 500);
  });
}