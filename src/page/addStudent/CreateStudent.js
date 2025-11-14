import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveStudent } from "../../Services/student";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {

  let navigate =useNavigate();
  const [studentRequest, setSudentRequest] = useState([{}]);

  const onValueChanged = (e) => {
    let { name, value } = e.target;

    // console.log(name)
    // console.log(value)

    // update student

    // setSudentRequest({
    //   [name]:value
    // })

    setSudentRequest((prevState) => {
      return {
        // copy old prevState
        ...prevState,
        [name]: value,
      };
    });
  };
  const onSubmitStudent = (e) => {
    // prevent reload page
    e.preventDefault()
    console.log(studentRequest);

    saveStudent(studentRequest).then(json =>{
      console.log(json);
      navigate('/')
    })
  };

  useEffect(() => {},[]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Add New Student</h3>
            {/* <p>{studentRequest.student_name}</p>
            <p>{studentRequest.student_gender}</p>
            <p>{studentRequest.student_dob}</p>
            <p>{studentRequest.student_phone}</p>
            <p>{studentRequest.student_address}</p> */}
          </Col>
        </Row>
        <Row>
          <Form onSubmit={onSubmitStudent}>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Name Student</Form.Label>
                <Form.Control
                  placeholder="Enter Student Name"
                  type="text"
                  name="student_name"
                  onChange={onValueChanged}
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
                    onChange={onValueChanged}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    type="radio"
                    name="student_gender"
                    value="female"
                    onChange={onValueChanged}
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
                  onChange={onValueChanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="student_phone"
                  onChange={onValueChanged}
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
                  onChange={onValueChanged}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};
export default CreateStudent;
