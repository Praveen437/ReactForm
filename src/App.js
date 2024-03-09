import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="top">
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="firstName">First Name</label>
        <div className="input-field">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter your First Name"
          />
        </div>

        <label htmlFor="lastName">Last Name</label>
        <div className="input-field">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter your Last Name"
          />
        </div>

        <label htmlFor="email">Email Address</label>
        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your Email address"
          />
        </div>

        <div className="input-field">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
          </select>
        </div>

        <label htmlFor="streetAddress">Street Address</label>
        <div className="input-field">
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            placeholder="1234 Main St"
          />
        </div>

        <label htmlFor="city">City</label>
        <div className="input-field">
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="Mumbai"
          />
        </div>

        <label htmlFor="state">State/Province</label>
        <div className="input-field">
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            placeholder="West Bengal"
          />
        </div>

        <label htmlFor="zip">Zip/Postal Code</label>
        <div className="input-field">
          <input
            type="number"
            name="zip"
            id="zip"
            value={formData.zip}
            onChange={changeHandler}
            placeholder="277209"
          />
        </div>

        <fieldset className="checkbox-field">
          <legend>By Email</legend>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <label htmlFor="comments">Comments</label>
            <p>Get notification when someone posts a comment on a posting.</p>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <label htmlFor="candidates">Candidates</label>
            <p>Get notification when candidates apply for a job.</p>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
            <p>Get notification when candidate accept or reject an offer.</p>
          </div>
        </fieldset>

        <fieldset className="radio-field">
          <legend>Push Notification</legend>
          <p>These are delivered through SMS to your Mobile Phone.</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push Notification</label>
        </fieldset>

        <div className="submit-button">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
