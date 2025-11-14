import { API_BASE_URI } from "./api";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzYzMDA1MDIyLCJleHAiOjE3NjMwMTk0MjIsIm5iZiI6MTc2MzAwNTAyMiwianRpIjoibnRIYmJTMldsQWg1Y0hzdSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.P78Hc3vk4E-fJa4lxDJnsS3S5_hS9m1mxgbf9q2-Zck";

export const getStudent = async () => {
  const response = await fetch(`${API_BASE_URI}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const saveStudent = async (studentRequest) => {
  const response = await fetch(`${API_BASE_URI}insert`, {
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
  const response = await fetch(`${API_BASE_URI}show/${studentId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateStudent = async (studentId,updateStudentRequest) => {
  const response = await fetch(`${API_BASE_URI}edit/${studentId}`, {
    method: "PUT",
    body: JSON.stringify(updateStudentRequest),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteStudent =async(studentId)=>{
    const response = await fetch(`${API_BASE_URI}detele/${studentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
