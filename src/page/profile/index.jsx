import React from "react";
import "./styles.css";
import ellipse from '../../image/ellipse.svg';
import user1 from '../../image/user1.svg';
import museum1 from '../../image/museum1.svg';
import email1 from '../../image/email1.svg';

function Profile() {
  return (
    <>
      <div className="container profile-page">
        <div className="row profile-content">
          <div className="col-12 profile-header">Header</div>
          <div className="col-12 profile-body">
            <div className="profile-container">
              <div className="profile-nav-bar">
                <div className="nor-color profile-nav-bar-item active">
                  <img src={user1} alt="user1" />
                  <span style={{ marginLeft: "10px" }}>Account Profile </span>
                </div>
                <div className="nor-color profile-nav-bar-item"><img src={museum1} alt="museum1" />
                  <span style={{ marginLeft: "6px" }}> Update Bank Detail</span>
                </div>
                <div className="nor-color profile-nav-bar-item"><img src={email1} alt="email1" />
                  <span style={{ marginLeft: "10px" }}>Inbox</span>
                </div>
              </div>
              <div className="row profile-main-content">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-sm-6 first-block">
                      <div className="logo-block mt-4">
                        <img src={ellipse} alt="ellipse" className="image-responsive"></img>
                        <div className="name">HowdyCandidate</div>
                        <div className="name-thb">THB 565.000</div>
                      </div>
                      <div className="detail-block communication-detail-block">
                        <div className="block-label mb-2 communication-detail-label">
                          Communication Details
                        </div>
                        <div class="form-group">
                          <label className="mb-0">Mobile number</label>
                          <input
                            type="phone"
                            class="form-control"
                            id="phone"
                            aria-describedby="phone"
                            placeholder="*********98765"
                          />
                        </div>
                        <div class="form-group">
                          <label className="mb-0">Language</label>
                          <input
                            type="phone"
                            class="form-control"
                            id="phone"
                            aria-describedby="phone"
                            placeholder="Singapore"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 p-0">
                      <div className="account-detail-block">
                        <div className="block-label mt-2 mb-2 account-detail-label">
                          Account Details
                        </div>
                        <div class="form-group">
                          <label>Username</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="name"
                            placeholder="HowdyCandidate"
                          />
                        </div>
                        <div class="form-group">
                          <label>First name</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="HowdyCandidate"
                          />
                        </div>
                        <div class="form-group">
                          <label>Date of Birth</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="12/10/1999"
                          />
                        </div>
                        <div class="form-group">
                          <label>Password</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="Change Password"
                          />
                        </div>
                        <div class="form-group">
                          <label>Country</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="Chile"
                          />
                        </div>
                        <div class="form-group">
                          <label>Currency</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="THB"
                          />
                        </div>
                        <div class="form-group">
                          <label>Last name</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="Pew Pew"
                          />
                        </div>
                        <div class="form-group">
                          <label>E-Mail</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div class="form-group">
                          <label>Gender</label>
                          <span className="primary-color">:</span>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstname"
                            placeholder="Male"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row detail-block communication-detail-block">
                    <div className="col-12 col-sm-6">
                      <div className="block-label mb-2 communication-detail-label">
                        Home Address
                      </div>
                      <div class="form-group">
                        <label className="mb-0">Address</label>
                        <textarea
                          type="address"
                          class="form-control"
                          id="address"
                          aria-describedby="address"
                          placeholder="Address"
                          rows="3"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div class="form-group">
                        <label className="mb-0">Town/City</label>
                        <input
                          type="phone"
                          class="form-control"
                          id="phone"
                          aria-describedby="phone"
                          placeholder="Town/City"
                        />
                      </div>
                      <div class="form-group">
                        <label className="mb-0">Postal Code</label>
                        <input
                          type="phone"
                          class="form-control"
                          id="phone"
                          aria-describedby="phone"
                          placeholder="00000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 confirm-block mt-5">
                  <div className="confirm-text">
                    Would you like to get the latest promos, updates, and
                    offers?
                  </div>
                  <div className="confirm-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">&nbsp;Yes. Send me the latest promotions, updates and offers.</label>
                    <br />
                  </div>
                </div>
                <div className="col-12 button-block mt-3">
                  <button className="btn btn-save">Save Change</button>
                  <button className="btn btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
