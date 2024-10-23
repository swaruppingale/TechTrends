import axios from "axios";

export const saveOrderToDatabase = (orderDetails) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_REQUEST" });

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    if (!currentUser) {
      return dispatch({ type: "ORDER_FAILED", payload: "User not logged in" });
    }

    const url = "http://localhost:8080/api/checkout"; // Replace with your API endpoint

    // Ensure orderDetails has the correct structure
    const body = {
      userId: currentUser._id,
      items: orderDetails.items.map(item => ({
        name: item.name,
        _id: item._id, // Assuming this is already a string
        image: item.image, // Assuming this is the image URL or path
        price: item.price,
      })),
      totalAmount: orderDetails.totalAmount,
      date: formattedDate, // Changed from formattedDate to date for consistency
    };

    console.log(body);
    
    const response = await axios.post(url, body);
    console.log("Response data:", response.data); // Handle the response data
    dispatch({ type: "ORDER_SUCCESS", payload: response.data });

    // Clear cart if order is successful
    localStorage.removeItem("cartItems"); // Clear cart items from local storage
  } catch (error) {
    dispatch({
      type: "ORDER_FAILED",
      payload: error.response ? error.response.data : "Order failed",
    });
  }
};
