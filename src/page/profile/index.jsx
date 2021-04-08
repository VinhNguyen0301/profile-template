import React from "react";
import "./styles.css";

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
                  Account Profile
                </div>
                <div className="nor-color profile-nav-bar-item">
                  Update Bank Detail
                </div>
                <div className="nor-color profile-nav-bar-item">Inbox</div>
              </div>
              <div className="row profile-main-content">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-sm-6 first-block">
                      <div className="logo-block mt-4"></div>
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
                            placeholder="Enter phone number"
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
                            placeholder="Enter username"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                            placeholder="Enter first name"
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
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div class="form-group">
                        <label className="mb-0">Postal Code</label>
                        <input
                          type="phone"
                          class="form-control"
                          id="phone"
                          aria-describedby="phone"
                          placeholder="Postal Code"
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
