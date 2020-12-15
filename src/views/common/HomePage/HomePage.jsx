import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { GoogleMap, CardOne } from "../../../components";
import { Spinner } from "reactstrap";
import { CardSix } from "../../../components";
//
import './HomePage.css';
import ImageSlider from "./ImageSlider";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAllProperties(1, 10, "all");
  }

  render() {
    let renderComponent;
    const { properties } = this.props.property;

    if (properties === null || Object.keys(properties).length === 0) {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }
    if (properties.length > 0) {
      renderComponent = properties.slice(0, 3).map(property => {
        if(property.approve === "Approved"){
        return (
          <div key={property._id} className="col-lg-4 col-md-6 col-sm-12 ">
            <CardOne
              propertyId={property._id}
              img={property.imgUrl}
              title={property.title}
              price={property.price}
              area={property.area}
              beds={property.beds}
              baths={property.baths}
              garages={property.garages}
              btnText="View Details"
            />
            
          </div>
        );
      } else{
       return (null);
      //  return (
      //   <div key={property._id} className="col-lg-4 col-md-6 col-sm-12 ">
      //   <CardSix
      //   id={property._id}
      //   title={property.title}
      //   imgUrl={property.imgUrl}
      //   price={property.price}
      //   address={property.address}
      //   description={property.description}
      //   // lat={lat}
      //   // lng={lng}
      //   country={property.country}
      //   state={property.state}
      //   city={property.city}
      //   zip={property.zip}
      //   propertyType={property.propertyType}
      //   status={property.status}
      //   beds={property.beds}
      //   baths={property.baths}
      //   area={property.area}
      //   approve={property.approve}
      //   question={property.question}
      //   answer={property.answer}
      //   garages={property.garages}
      //   ac={property.features.ac}
      //   gym={property.features.gym}
      //   bar={property.features.bar}
      //   internet={property.features.internet}
      //   microwave={property.features.microwave}
      //   smoking={property.features.smoking}
      //   fireplace={property.features.fireplace}
      //   toaster={property.features.toaster}
      //   tennis={property.features.tennis}
      //   tv={property.features.tv}
      //  />
      //   </div>
      //  );
      }
      });
    }

    return (
      <React.Fragment>
        {/* <GoogleMap width="100%" height="80vh" /> */}
        <div className="body">
       <div className="body1">    
          <ImageSlider width="100%" height="40vh" /></div>
          <div className="body2">
          <div className="body3">
          <CardSix
        // id={property._id}
        // title={property.title}
        // imgUrl={property.imgUrl}
        // price={property.price}
        // address={property.address}
        // description={property.description}
        // // lat={lat}
        // // lng={lng}
        // country={property.country}
        // state={property.state}
        // city={property.city}
        // zip={property.zip}
        // propertyType={property.propertyType}
        // status={property.status}
        // beds={property.beds}
        // baths={property.baths}
        // area={property.area}
        // approve={property.approve}
        // question={property.question}
        // answer={property.answer}
        // garages={property.garages}
        // ac={property.features.ac}
        // gym={property.features.gym}
        // bar={property.features.bar}
        // internet={property.features.internet}
        // microwave={property.features.microwave}
        // smoking={property.features.smoking}
        // fireplace={property.features.fireplace}
        // toaster={property.features.toaster}
        // tennis={property.features.tennis}
        // tv={property.features.tv}
      // features={features}
       />
       </div>
        <div className="container py-5" style={styles.common}>
          <h1 className="display-4 mb-5 text-center">Properties...</h1>
          <div className="row  m-auto">{renderComponent}</div>
          <div className="text-center my-5">
            <Link to="/properties-list" className="btn btn-primary mt-3">
              More Properties
            </Link>
          </div>
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  common: {
    height: "100vh"
  }
};

const mapStateToProps = state => {
  return {
    property: state.property
  };
};

export default connect(
  mapStateToProps,
  actions
)(HomePage);
