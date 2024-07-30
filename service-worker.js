// service-worker.js
self.addEventListener("push", function (event) {
  const data = event.data.json();
  self.registration.showNotification("Google Sheets Notification", {
    body: data.message,
    icon: "./google-icon.png", // Update this path to the correct icon URL
  });
});
