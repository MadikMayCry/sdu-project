import React, { Component } from "react";
import performRequest from "../../utils/request";
import Loader from "./comps/Loader";
import CustomTable from "./comps/CustomTable";

export class SortingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      url:
        "http://www.filltext.com/?rows=10&id={index}&email={email}&uname={username}&fname={firstName}&lname={lastName}&phone={phone}&address={addressObject}&password={randomString|5}&pretty=true",
      options: ""
    };
  }

  async componentDidMount() {
    let { url, options, isLoading } = this.state;
    let data = JSON.parse(await this.getData(url, options));
    this.setState({ data, isLoading: false });
  }

  sortItem = column => {
    console.log(column);
  };

  getData = url => {
    return performRequest(url);
  };

  render() {
    let { data, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <CustomTable data={data} sortItem={this.sortItem} />
        )}
      </>
    );
  }
}

export default SortingTable;
