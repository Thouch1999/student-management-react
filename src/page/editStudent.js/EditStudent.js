import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../../Services/student";

const EditStudent = () => {
  let { id } = useParams();
   let navigate =useNavigate();

  const [student, setSudent] = useState({});
  const [updateStudentRequest, setUpdateSudentRequest] = useState({});

  const onValuechanged = (e) => {
    let { name, value } = e.target;

    setSudent((prevState) => {
      return {
        // copy old prevState
        ...prevState,
        [name]: value,
      };
    });
        setUpdateSudentRequest((prevState) => {
      return {
        // copy old prevState
        ...prevState,
        [name]: value,
      };
    });
  };

const onUpdateStudent=(e)=>{
    e.preventDefault()
    console.log(updateStudentRequest)

    updateStudent(id,updateStudentRequest).then(json=>{
      // console.log(json);
      navigate('/')
    })
  }

  useEffect(() => {
    getStudentById(id).then((json) => {
      // console.log(json);
      setSudent(json.data);
      setUpdateSudentRequest(json.data)
    });
  }, []);

  
  return (
    <>
      <Container>
        {/* <h1>{id}</h1> */}
        <Row>
          <Col>
            <h3>Edit Student</h3>
            {/* <p>{studentRequest.student_name}</p>
            <p>{studentRequest.student_gender}</p>
            <p>{studentRequest.student_dob}</p>
            <p>{studentRequest.student_phone}</p>
            <p>{studentRequest.student_address}</p> */}
          </Col>
        </Row>
        <Row>
          <Form onSubmit={onUpdateStudent}>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Name Student</Form.Label>
                <Form.Control
                  placeholder="Enter Student Name"
                  type="text"
                  name="student_name"
                  value={student.student_name}
                  onChange={onValuechanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Male"
                    type="radio"
                    name="student_gender"
                    value="male"
                    checked={student.student_gender === "male"}
                    onChange={onValuechanged}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    type="radio"
                    name="student_gender"
                    value="female"
                    checked={student.student_gender === "female"}
                    onChange={onValuechanged}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="date_of_birth"
                  value={student.date_of_birth}
                  onChange={onValuechanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="student_phone"
                  value={student.student_phone}
                  onChange={onValuechanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="student_address"
                  rows={3}
                  placeholder="Enter student address"
                  value={student.student_address}
                  onChange={onValuechanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};
export default EditStudent;
