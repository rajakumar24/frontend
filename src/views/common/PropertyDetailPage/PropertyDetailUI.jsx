import React from "react";
import { Link } from "react-router-dom";
import QuestionPage from "./QuestionPage";
//import { TextArea } from "../../../components/";QuesPage
import QuesPage from "./QuestionPages";
import { CardSix } from "../../../components";

class PropertyDetailUI extends React.Component {
  render() {
    const {
      // _id,
      title,
      imgUrl,
      address,
      price,
      status,
      area,
      beds,
      baths,
      garages,
      description,
      features,
      question,
      answer,
      approve,
      // lat,
      // lng,
      country,
      state,
      city,
      zip,
      propertyType,
    } = this.props.property;

    let renderContent;
    const { _id, email, name } = this.props.property.user;
    console.log("puppy", this.props.agent);
    const { about, mobile, skype } = this.props.agent;
    const { img } = this.props.agent.imgUrl;
    let statusColor = status === "rent" ? "warning" : "success";

    renderContent = (
      <React.Fragment>
        <h1 className="display-4 my-5 text-center">{title}</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="row mt-4">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <span className={`badge badge-${statusColor}`}>{status}</span>

                <img
                  style={{ width: "360px", height: "280px" }}
                  className="property-img"
                  src={`http://13.234.201.64:3001/uploads/${imgUrl}`}
                  alt="Responsive"
                />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <p className="mt-3">
                  <strong>Quick Summary:</strong>
                </p>
                <div className="table-responsive">
                  <table className="table table-hover table-sm">
                    <tbody>
                      <tr>
                        <th scope="row">Location</th>
                        <td>{address}</td>
                      </tr>
                      <tr>
                        <th scope="row">Price</th>
                        <td>${price}</td>
                      </tr>

                      <tr>
                        <th scope="row">Property Type: </th>
                        <td>House</td>
                      </tr>
                      <tr>
                        <th scope="row">Status:</th>
                        <td>{status}</td>
                      </tr>
                      <tr>
                        <th scope="row">Area:</th>
                        <td>
                          {area} m<sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Beds:</th>
                        <td>{beds}</td>
                      </tr>
                      <tr>
                        <th scope="row">Baths:</th>
                        <td>{baths}</td>
                      </tr>
                      <tr>
                        <th scope="row">Garages:</th>
                        <td>{garages}</td>
                      </tr>
                      <tr>
                        <th>Rating:</th>
                        <td>5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8  col-md-8 col-sm-12">
            <div className="description">
              <p className="mt-3 border-bottom pb-3">
                <strong>Property Description: </strong>
              </p>

              <p>{description}</p>
            </div>

            <div className="detail">
              <p className="mt-3 border-bottom pb-3">
                <strong>Property Features:</strong>{" "}
              </p>

              <ul>
                {features.ac && <li>Air conditioning</li>}
                {features.gym && <li>Gym</li>}
                {features.bar && <li>Bar</li>}
                {features.internet && <li>Internet</li>}
                {features.microwave && <li>Microwave</li>}
                {features.smoking && <li>Smoking allowed</li>}
                {features.fireplace && <li>Fireplace or fire pit</li>}
                {features.toaster && <li>Toaster</li>}
                {features.tennis && <li>Tennis Courts</li>}
                {features.tv && <li>Cable TV</li>}
              </ul>
            </div>

            <div className="agent-profile my-5">
              <p className="mt-3 border-bottom pb-3">
                <strong>Agent:</strong>
              </p>
              <div className="d-flex flex-row border rounded">
                <div className="p-0 w-25">
                  <img
                    src={`http://13.234.201.64:3001/uploads/${img}`}
                    className="img-thumbnail border-0"
                    alt=""
                  />
                </div>
                <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                  <h4 className="name text-primary">{name}</h4>
                  <p className="lead">{about}</p>
                  <ul className="agent-details list-group">
                    <li className="list-group-item">
                      Phone: <span className="float-right">(123) 456 789</span>
                    </li>
                    <li className="list-group-item">
                      Mobile: <span className="float-right">{mobile}</span>
                    </li>
                    <li className="list-group-item">
                      Email: <span className="float-right">{email}</span>
                    </li>
                    <li className="list-group-item">
                      Skype: <span className="float-right">{skype}</span>
                    </li>
                  </ul>
                  <Link
                    to={`/agent-profile/${_id}`}
                    className="text-right mt-4 btn btn-primary"
                  >
                    <i className="fa fa-user" /> View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <QuestionPage
        id= {_id}
      question={question}
      answer={answer}
        /> */}
        {/* <CardSix
          id={_id}
          title={title}
          imgUrl={imgUrl}
          price={price}
          address={address}
          description={description}
          // lat={lat}
          // lng={lng}
          country={country}
          state={state}
          city={city}
          zip={zip}
          propertyType={propertyType}
          status={status}
          beds={beds}
          baths={baths}
          area={area}
          approve={approve}
          question={question}
          answer={answer}
          garages={garages}
          ac={features.ac}
          gym={features.gym}
          bar={features.bar}
          internet={features.internet}
          microwave={features.microwave}
          smoking={features.smoking}
          fireplace={features.fireplace}
          toaster={features.toaster}
          tennis={features.tennis}
          tv={features.tv}
        // features={features}
        /> */}

        <QuesPage
          id={_id}
          title={title}
          imgUrl={imgUrl}
          price={price}
          address={address}
          description={description}
          // lat={lat}
          // lng={lng}
          country={country}
          state={state}
          city={city}
          zip={zip}
          propertyType={propertyType}
          status={status}
          beds={beds}
          baths={baths}
          area={area}
          approve={approve}
          question={question}
          answer={answer}
          garages={garages}
          ac={features.ac}
          gym={features.gym}
          bar={features.bar}
          internet={features.internet}
          microwave={features.microwave}
          smoking={features.smoking}
          fireplace={features.fireplace}
          toaster={features.toaster}
          tennis={features.tennis}
          tv={features.tv}
          // features={features}
        />
      </React.Fragment>
    );

    return <React.Fragment>{renderContent}</React.Fragment>;
  }
}

export default PropertyDetailUI;
