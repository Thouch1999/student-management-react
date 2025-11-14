import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import { getStudent } from "../../Services/student";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const [student, setSudent] = useState([]);
  const [error, setError] = useState(null);
  const fectStudent = async() => {
    setError(null);
    try {
      const dataStudent=await getStudent();
        console.log(dataStudent );
        setSudent(dataStudent.data);
        // UI
     
    } catch (err) {
      console.error(err);
      setSudent([]);
      setError(true);
    }
  };
  useEffect(() => {
    fectStudent();
  }, []);
  return (
    <Layout>
      {/* <Container>
        <Row className="mt-4">
          <Col>
            <Link to="/add-student">
              <button>Add Student</button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Home page</h1>
            <Table viewData={student} errorData={error} />
          </Col>
        </Row>
      </Container> */}
    </Layout>
  );
};

export default Home;
