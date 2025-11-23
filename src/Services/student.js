 const API_BASE_URI =`http://127.0.0.1:8000/api`;

const token = localStorage.getItem("token");
// console.log(token)
// const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzYzODg1ODI4LCJleHAiOjE3NjM5MDAyMjgsIm5iZiI6MTc2Mzg4NTgyOCwianRpIjoiVTFrZ1R3dlZxb3VLM1ZMcCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.rUb8i6HPxR5YQcgQ-PxaOpgMukzmh2oSfUhaGXSLROk";
export const getStudent = async () => {
  const response = await fetch(`${API_BASE_URI}/students`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  // console.log(response.json())
  
  return response.json();
};

// export const getStudent = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URI}/student`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Student data:", data);
//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// };


export const saveStudent = async (studentRequest) => {
  const response = await fetch(`${API_BASE_URI}/student/insert`, {
    method: "POST",
    body: JSON.stringify(studentRequest),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const getStudentById = async (studentId) => {
  const response = await fetch(`${API_BASE_URI}/student/show/${studentId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateStudent = async (studentId, updateStudentRequest) => {
  const response = await fetch(`${API_BASE_URI}/student/edit/${studentId}`, {
    method: "PUT",
    body: JSON.stringify(updateStudentRequest),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteStudent = async (studentId) => {
  const response = await fetch(`${API_BASE_URI}/student/detele/${studentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
