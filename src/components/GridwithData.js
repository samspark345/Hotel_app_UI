"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import './GridwithData.css'

class GridwithData extends Component {
  constructor(props) {
    super(props);
    this.sizeToFit = this.sizeToFit.bind(this);
    this.autoSizeAll = this.autoSizeAll.bind(this);
    this.onGridReady = this.onGridReady.bind(this);

    this.state = {
      columnDefs: this.props.columnDefs,
      rowData: this.props.rowData
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.sizeToFit()
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }
  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
  //className="ag-theme-balham"
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div class="grid-wrapper">
          <div
            id="myGrid"
            style={{
              boxSizing: "border-box",
              height: "100%",
              width: "100%"
            }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              enableColResize={true}
              onGridReady={this.onGridReady}
              rowData={this.state.rowData}
              rowSelection="multiple"
              rowMultiSelectWithClick= "true"
            />
          </div>
        </div>
        <div>
          <button onClick={this.sizeToFit.bind(this)}>Size to Fit</button>
          <button onClick={this.autoSizeAll.bind(this)}>Auto-Size All</button>
        </div>
      </div>
    );
  }
}

export default GridwithData;