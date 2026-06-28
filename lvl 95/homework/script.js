const userRole = "admin";
const isAvailable = true;
const price = "$50";
const isDaytime = true;
const hasNotification = true;
const email = "user@example.com";
const discount = 20;

function App() {
  return (
    <div>
      <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>

      <p>{isAvailable ? price : "Out of stock"}</p>

      {isDaytime ? (
        <img src="sun.png" alt="Sun" />
      ) : (
        <img src="moon.png" alt="Moon" />
      )}

      {hasNotification && <p>New Notification</p>}

      {email && <p>{email}</p>}

      {discount > 0 && <p>Discount Available!</p>}
    </div>
  );
}

export default App;