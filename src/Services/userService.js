 const API_BASE_URI =`http://127.0.0.1:8000/api`;

export const getUser = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URI}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("PROFILE API RESPONSE = ", data);
  return data;
};
