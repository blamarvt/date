export function loginWithApple(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Login with Apple clicked");
    // Implement your Apple login logic here
    // Call resolve() on success or reject() on failure
    resolve(); // Placeholder for successful login
  });
}

export function loginWithGoogle() {
  console.log("Login with Google clicked");
  // Implement your Google login logic here
}
