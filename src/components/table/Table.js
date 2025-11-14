import { Link } from "react-router-dom";
import "./Table.css";
import { deleteStudent } from "../../Services/student";
const Table = ({ viewData, errorData }) => {
  return (
    <>
      <table className="student-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name Student</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        {!errorData ? (
          <tbody>
            {viewData &&
              viewData.map((view, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{view.student_name}</td>
                  <td>{view.student_gender}</td>
                  <td>{view.date_of_birth}</td>
                  <td>{view.student_phone}</td>
                  <td>{view.student_address}</td>
                  <td className="action-buttons">
                    <Link to={"/stuent/edit/" + view.id}>
                      <button className="btn-edit">✏️ Edit</button>
                    </Link>

                    <button
                      className="btn-delete"
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this student?"
                          )
                        ) {
                          try {
                            const result = await deleteStudent(view.id);
                            console.log("Deleted:", result);
                            alert("Student deleted successfully!");
                            // Optionally redirect after delete
                            window.location.href = "/";
                          } catch (err) {
                            console.error("Delete failed:", err);
                          }
                        }
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={7} className="text-danger text-center">Failed to load students.</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};
export default Table;
