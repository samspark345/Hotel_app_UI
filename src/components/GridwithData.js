"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import './GridwithData.css'
import { Button } from "@mui/material";
import { PopUpDialog } from "./PopUpDialog";

class GridwithData extends Component {
  constructor(props) {
    super(props);
    this.sizeToFit = this.sizeToFit.bind(this);
    this.autoSizeAll = this.autoSizeAll.bind(this);
    this.onGridReady = this.onGridReady.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.renderTopButtons = this.renderTopButtons.bind(this);
    this.gridLabel = this.props.gridLabel
    this.deleteRows = this.props.deleteRows

    this.state = {
      columnDefs: this.props.columnDefs,
      rowData: this.props.rowData,
      selectedRows : [],
      disableDelete : true,
      openDialog : false
    };
  }
  onSelectionChanged() {
    const selectedRows = this.gridApi?.getSelectedRows();
    const disableDeleteValue = selectedRows.length < 1? true : false
    this.setState({
        ...this.state,
        selectedRows: selectedRows,
        disableDelete: disableDeleteValue
    })
    console.log(selectedRows)
  }

  onDeleteClicked(){


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

  renderTopButtons(){
    return(
        <div className="buttonArea" 
        style={{display: "flex", flexDirection: "row", width: '100%', padding: "5px", flexWrap:"wrap"}}
        >
            {this.props.showDelete && 
                <div className="deleteButton" style={{padding: '5px'}}>
                    {console.log(`the button value is ${this.state.disableDelete}`)}
                    <Button variant="contained" 
                    onClick={()=>{this.setState({
                      ...this.state,
                      openDialog: true
                    })}}
                    disabled={ this.state.disableDelete}
                    >
                        Delete</Button>
                </div>
            }
            <div className="sizeToFit" style={{padding: '5px'}}>
                    <Button variant="contained" onClick={this.sizeToFit}>Size to Fit</Button>
            </div>
            <div className="deleteButton" style={{padding: '5px'}}>
                    <Button variant="contained" onClick={this.autoSizeAll}>Auto-Size All</Button>
            </div>
        </div>
        
    )
  }
  //className="ag-theme-balham"
  render() {
    return (
        <div style={{ width: "100%", height: "100%"}}>
            <div
            id="myGrid"
            style={{
                boxSizing: "border-box",
                height: "100%",
                width: "100%"
            }}
            className="ag-theme-alpine"
            >
                <div class="grid-wrapper">
                    <h1 style={{textAlign: "center"}}>{this.gridLabel}</h1>
                    {this.renderTopButtons()}
                    <AgGridReact
                    columnDefs={this.state.columnDefs}
                    enableColResize={true}
                    onGridReady={this.onGridReady}
                    rowData={this.props.rowData}
                    rowSelection="multiple"
                    rowMultiSelectWithClick= "true"
                    onSelectionChanged={this.onSelectionChanged}
                    />
                </div>

            </div>
            <PopUpDialog title={'Are you sure?'} 
                content={'Do you wanna delete the selected items?'}
                open={this.state.openDialog}

                handleClose={()=> {this.setState({
                  ...this.state,
                  openDialog: false
                })}}


                handleConfirm={()=> {
                    this.deleteRows && this.deleteRows(this.state.selectedRows)
                    this.setState({
                      ...this.state,
                      openDialog: false
                    })
                }}
            />
      </div>
    );
  }
}

export default GridwithData;