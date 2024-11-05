import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    gender: '',
    hobbies: [],
    department: '',
  });

  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const updatedHobbies = checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value);
        return { ...prevData, hobbies: updatedHobbies };
      });
    } else if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, file: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when submitting

    try {
      const response = await fetch('http://localhost:5000/api/studentDetails/studentRegisterDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.success('Form submitted successfully!'); // Show success toast
      if (response.ok) {
        //  reset form
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          gender: '',
          hobbies: [],
          department: '',
        });
      } else {
        console.error('Failed to submit form:', data);
      }
      console.log('Response from server:', data);
    } catch (error) {
      toast.error('Error submitting form. Please try again.'); // Show error toast
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); // Hide loader after submission
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <Card>
        <Card.Body>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit} className="form-horizontal">
            {/* Form fields */}
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Gender</label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === 'male'}
                    required
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === 'female'}
                    required
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Hobbies</label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="hobbies"
                    value="reading"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Reading</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="hobbies"
                    value="traveling"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Traveling</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="hobbies"
                    value="gaming"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Gaming</label>
                </div>
              </div>
            </div>

            <div className="form-group row mt-2">
              <label className="col-sm-2 col-form-label">Department</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="ME">ME</option>
                </select>
              </div>
            </div>

            <div className="form-group row mt-2">
              <div className="col-sm-1 offset-sm-2">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Registration;
