import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table, Spinner, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewRegistration() {
  const [students, setStudents] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch registration details
  const getRegistrationDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/studentDetails/getAllRegistrationDetails');
      if (!response.ok) {
        throw new Error('Failed to fetch student registration details');
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      // Access the `data` array within the response object
      setStudents(data.data || []); 
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  // Fetch student data on component mount
  useEffect(() => {
    getRegistrationDetails();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      <Card>
        <Card.Body>
          <h2>View Registration</h2>
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {!loading && students.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Gender</th>
                  <th>Hobbies</th>
                  <th>Department</th>
                  <th>Profile Image</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student._id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.date}</td>
                    <td>{student.time}</td>
                    <td>{student.gender}</td>
                    <td>{student.hobbies}</td>
                    <td>{student.department}</td>
                    <td>
                      {student.profileImage ? (
                        <img
                          src={`http://localhost:5000/${student.profileImage}`}
                          alt="Profile"
                          style={{ width: '50px', height: '50px' }}
                        />
                      ) : (
                        'No Image'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && <p>No student registrations found.</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewRegistration;
