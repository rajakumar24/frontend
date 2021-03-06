import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components/";
import { AgentMenu } from "..";
import { Spinner } from "reactstrap";
import axios from "axios";

class EditPropertyPage extends Component {
  state = {
    id: "",
    title: "",
    imgUrl: "",
    price: "",
    description: "",
    address: "",
    lat: "",
    lng: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    propertyType: "",
    status: "",
    beds: "",
    baths: "",
    area: "",
    garages: "",
    ac: "",
    gym: "",
    bar: "",
    internet: "",
    microwave: "",
    smoking: "",
    fireplace: "",
    toaster: "",
    tennis: "",
    tv: "",
    loading: false,
    approve: "",
    // question: "",
    // answer: "",
    question: [],
    answer: [],
    // reviewTitle: "",
    // reviewDes: "",
    reviewTitle: [],
    reviewDes: [],
    //   obej:[{
    //     answer: "",
    //     question: ""
    //   }
    //  ],
    ansmark: "answer",
    errors: {},
  };

  componentWillMount() {
    this.props.getProperty(this.props.match.params.id, this.props.history);
  }
  componentWillUnmount() {
    this.props.clearError();
  }

  handleInputChange = ({ currentTarget }) => {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    this.setState({
      [currentTarget.name]: value,
    });
  };

  // handleInputQuestionChange = ({ currentTarget }) => {

  //   this.setState({
  //    quesmark: currentTarget.value
  //   });

  // };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { ansmark, answer } = this.state;
    if (ansmark != null) {
      this.state.answer = this.state.answer || [];
      this.state.answer.push(ansmark);
    } else {
      return alert("Please Enter Your Answer First1!");
    }

    // const { obej } = this.state;

    console.log("question", this.state.answer);
    const propertyDetails = {
      id: this.state.id,
      title: this.state.title,
      imgUrl: this.state.imgUrl,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      country: this.state.country,
      lat: this.state.lat,
      lng: this.state.lng,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      propertyType: this.state.propertyType,
      status: this.state.status,
      beds: this.state.beds,
      baths: this.state.baths,
      area: this.state.area,
      garages: this.state.garages,
      ac: this.state.ac,
      gym: this.state.gym,
      bar: this.state.bar,
      internet: this.state.internet,
      microwave: this.state.microwave,
      smoking: this.state.smoking,
      fireplace: this.state.fireplace,
      toaster: this.state.toaster,
      tennis: this.state.tennis,
      tv: this.state.tv,
      approve: this.state.approve,
      question: this.state.question,
      reviewTitle: this.state.reviewTitle,
      reviewDes: this.state.reviewDes,
      answer,
      //obej
    };

    // this.props.updateProperty(propertyDetails);
    axios
      .put(
        `http://getrightproperty.com:3001/api/property/${propertyDetails.id}`,
        propertyDetails
      )
      .then((response) => {
        // setUserSession(response.data.token, response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  numbersOnly = (e) => {
    const price = e.currentTarget.value;

    if (isNaN(price) || price === "0") {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }

    if (Object.keys(nextProps.property.property).length > 0) {
      const property = nextProps.property.property;
      this.setState({
        id: property._id,
        title: property.title,
        imgUrl: property.imgUrl,
        price: property.price + "",
        description: property.description,
        address: property.address,
        country: property.country,
        lat: property.mapLocation.lat,
        lng: property.mapLocation.lng,
        state: property.state,
        city: property.city,
        zip: property.zip + "",
        propertyType: property.propertyType,
        status: property.status,
        beds: property.beds + "",
        baths: property.baths + "",
        area: property.area + "",
        garages: property.garages + "",
        ac: property.features.ac,
        gym: property.features.gym,
        bar: property.features.bar,
        internet: property.features.internet,
        microwave: property.features.microwave,
        smoking: property.features.smoking,
        fireplace: property.features.fireplace,
        toaster: property.features.toaster,
        tennis: property.features.tennis,
        tv: property.features.tv,
        approve: property.approve,
        question: property.question,
        answer: property.answer,
        reviewTitle: property.reviewTitle,
        reviewDes: property.reviewDes,
        //obej:property.obej
      });
      console.log("ques", this.state.garages);
    }
  }

  render() {
    const { property } = this.props.property;

    const options = [
      { label: "Select...", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" },
    ];
    const propertyType = [
      { label: "Select...", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "Flat", value: "flat" },
      { label: "House", value: "house" },
      { label: "Cottage", value: "cottage" },
    ];
    const propertyStatus = [
      { label: "Select...", value: "" },
      { label: "Rent", value: "rent" },
      { label: "Sale", value: "sale" },
    ];

    let renderContent;

    if (Object.keys(property).length > 0) {
      renderContent = (
        <form onSubmit={this.onFormSubmit}>
          <div className="basic-info">
            <strong className="text-muted">Basic information</strong>
            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Title"
                name="title"
                placeholder="property title..."
                onChange={this.handleInputChange}
                value={this.state.title}
                error={this.props.errors.title}
              />

              <Input
                classes="col-md-6"
                label="Price $$"
                name="price"
                placeholder="price..."
                onChange={this.handleInputChange}
                value={this.state.price}
                validate={this.numbersOnly}
                error={this.props.errors.price}
              />
              <Input
                classes="col-md-12"
                label="Image Url"
                name="imgUrl"
                placeholder="property title..."
                onChange={this.handleInputChange}
                value={this.state.imgUrl}
                error={this.props.errors.imgUrl}
              />
              <TextArea
                classes="col-md-12"
                label="Description"
                name="description"
                placeholder="description..."
                onChange={this.handleInputChange}
                value={this.state.description}
                error={this.props.errors.description}
              />
            </div>
          </div>

          <br />

          <div className="location">
            <strong className="text-muted">Location</strong>

            <a
              className="bg-primary text-white ml-3 px-2"
              href="http://www.latlong.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              lat, lng <i className=" fa fa-question-circle" />
            </a>
            <div className="form-row">
              <Input
                classes="col-md-8"
                label="Address"
                name="address"
                placeholder="1234 Main St..."
                onChange={this.handleInputChange}
                value={this.state.address}
                error={this.props.errors.address}
              />

              <Input
                classes="col-md-2"
                label="Latitude"
                name="lat"
                placeholder="latitude..."
                onChange={this.handleInputChange}
                value={this.state.lat}
                error={this.props.errors.lat}
              />
              <Input
                classes="col-md-2"
                label="Longitude "
                name="lng"
                placeholder="longitude ..."
                onChange={this.handleInputChange}
                value={this.state.lng}
                error={this.props.errors.lng}
              />
            </div>

            <SelectList
              label="Country"
              name="country"
              options={options}
              onChange={this.handleInputChange}
              value={this.state.country}
              error={this.props.errors.country}
            />

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="State"
                name="state"
                placeholder="state..."
                onChange={this.handleInputChange}
                value={this.state.state}
                error={this.props.errors.state}
              />
              <Input
                classes="col-md-4"
                label="City"
                name="city"
                placeholder="city..."
                onChange={this.handleInputChange}
                value={this.state.city}
                error={this.props.errors.city}
              />
              <Input
                classes="col-md-2"
                label="Zip"
                name="zip"
                placeholder="zip..."
                onChange={this.handleInputChange}
                value={this.state.zip}
                validate={this.numbersOnly}
                error={this.props.errors.zip}
              />
            </div>
          </div>

          <br />

          <div className="details">
            <strong className="text-muted">Details</strong>
            <div className="form-row">
              <SelectList
                classes="col-md-6"
                options={propertyType}
                label="Property Type"
                name="propertyType"
                onChange={this.handleInputChange}
                value={this.state.propertyType}
                error={this.props.errors.propertyType}
              />

              <SelectList
                classes="col-md-6"
                options={propertyStatus}
                label="Status"
                name="status"
                onChange={this.handleInputChange}
                value={this.state.status}
                error={this.props.errors.status}
              />
            </div>

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Beds"
                name="beds"
                placeholder="beds..."
                onChange={this.handleInputChange}
                value={this.state.beds}
                validate={this.numbersOnly}
                error={this.props.errors.beds}
              />

              <Input
                classes="col-md-6"
                label="Baths"
                name="baths"
                placeholder="baths..."
                onChange={this.handleInputChange}
                value={this.state.baths}
                validate={this.numbersOnly}
                error={this.props.errors.baths}
              />
            </div>

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Area m2"
                name="area"
                placeholder="area..."
                onChange={this.handleInputChange}
                value={this.state.area}
                validate={this.numbersOnly}
                error={this.props.errors.area}
              />

              <Input
                classes="col-md-6"
                label="Garages"
                name="garages"
                placeholder="garage..."
                onChange={this.handleInputChange}
                value={this.state.garages}
                validate={this.numbersOnly}
                error={this.props.errors.garages}
              />
            </div>
          </div>

          <br />

          <div className="features mb-5">
            <strong className="text-muted">Features</strong>
            <p className="mb-3" />

            <div className="form-row">
              <CheckBox
                name="ac"
                label="Air conditioning"
                onChange={this.handleInputChange}
                checked={this.state.ac}
              />

              <CheckBox
                name="gym"
                label="Gym"
                onChange={this.handleInputChange}
                checked={this.state.gym}
              />
            </div>
            <div className="form-row">
              <CheckBox
                name="bar"
                label="Bar"
                onChange={this.handleInputChange}
                checked={this.state.bar}
              />

              <CheckBox
                name="internet"
                label="Internet"
                onChange={this.handleInputChange}
                checked={this.state.internet}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="microwave"
                label="Microwave"
                onChange={this.handleInputChange}
                checked={this.state.microwave}
              />

              <CheckBox
                name="smoking"
                label="Smoking allowed"
                onChange={this.handleInputChange}
                checked={this.state.smoking}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="fireplace"
                label="Fireplace or fire pit"
                onChange={this.handleInputChange}
                checked={this.state.fireplace}
              />

              <CheckBox
                name="toaster"
                label="Toaster"
                onChange={this.handleInputChange}
                checked={this.state.toaster}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="tennis"
                label="Tennis Courts"
                onChange={this.handleInputChange}
                checked={this.state.tennis}
              />

              <CheckBox
                name="tv"
                label="Cable TV"
                onChange={this.handleInputChange}
                checked={this.state.tv}
              />
            </div>

            <br />
            <h2>your updates</h2>
            {/* add */}
            {
              // this.state.obej.length && this.state.obej.map((list, index) => {
              this.state.question != null &&
                this.state.question.map((list, index) => {
                  console.log("list", list);
                  return (
                    <div className="container" key={index}>
                      {/* <p>question: {list.question}</p> */}
                      <p>question: {list}</p>
                      <br />
                      <TextArea
                        classes="col-md-12"
                        label="answer"
                        name="answer"
                        placeholder="answer..."
                        onChange={(e) =>
                          this.setState({ ansmark: e.target.value })
                        }
                        // onChange={(e) => this.setState({ obej: {question: {list}, answer: e.target.value } })}
                        value={this.state.answer[index]}
                        // value={list.answer}

                        // error={this.props.errors.answer}
                      />
                      <br />
                    </div>
                  );
                })
            }
            {/* add */}

            {/* add */}
            {/* <h3>{this.state.question}</h3>
            <br />
            <TextArea
              classes="col-md-12"
              label="answer"
              name="answer"
              placeholder="answer..."
              onChange={this.handleInputChange}
              value={this.state.answer}
              error={this.props.errors.answer}
            /> */}
            {/* add */}
            {/* <TextArea
              classes="col-md-12"
              label="Please Answer Here"
              name="Please Answer Here"
              placeholder="Please Answer Here..."
              onChange={this.handleInputChange}
              value={this.state.answer}
              error={this.props.errors.answer}
            /> */}
            <br />
          </div>
          <br />
          {/* <h2>your updates</h2>

          <h3>{this.state.question}</h3>
          <br /> */}
          {/* <Input
                classes="col-md-12"
                label="Answer"
                name="Answer"
                placeholder="Answer..."
                onChange={this.handleInputChange}
                value={this.state.Answer}
                error={this.props.errors.Answer}
              /> */}
          {/* <TextArea
            classes="col-md-12"
            label="answer"
            name="answer"
            placeholder="answer..."
            onChange={this.handleInputChange}
            value={this.state.answer}
            error={this.props.errors.answer}
          /> */}
          <br />
          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
      );
    } else {
      renderContent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
          <AgentMenu />
          {/* <!-- right section --> */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
            {/* <!-- Add New Property --> */}
            <div className="title text-center display-4 mb-4">
              Edit Property
            </div>
            {renderContent}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(EditPropertyPage);
