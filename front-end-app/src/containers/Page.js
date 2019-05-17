import React, { Component } from "react";
import "./Page.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // Setting up the state objects
    this.state = {
      suggestions: [],
      apiName:'Api Description',
      apiDescription:"Searches over a website or collection of websites.",
      subTopics : [],
      requestAndResponseBox: false,
      apiUrl:"",
      apiMethod:"",
      apiRequestData: [],
      apiResponseData: [],
      apiDefinitions: [],
      apiReadMore: true,
      showDefinition:false,
      definitionSchema:true,
      definitionExample:false,
      cseSchema: true,
      cseExample: false,
      apiData:[
          {name:"search.cse.list", url:"https://www.googleapis.com/customsearch/v1/search.cse.list",requestData:[{
            parameterName:"quotaUser",parameterType:"String", parameterDescription:"Turns off the translation between zh-CN and zh-TW."
          }],responseData:[{objectName:"Object",objectType:"Search",objectBody:"context:object:Context"}] },
          {name:"search.cse.siterestrict.list", url:"https://www.googleapis.com/customsearch/v1/search.cse.siterestrict.list",requestData:[{
            parameterName:"quotaUser",parameterType:"String", parameterDescription:"Turns off the translation between zh-CN and zh-TW."
          }],responseData:[{objectName:"Object",objectType:"Search",objectBody:"context:object:Context"}] }, 
          {name:"definitions", url:"https://www.googleapis.com/customsearch/v1/search.cse.siterestrict.list",requestData:[{
            parameterName:"quotaUser",parameterType:"String", parameterDescription:"Turns off the translation between zh-CN and zh-TW."
          }],responseData:[{objectName:"Object",objectType:"Search",objectBody:"context:object:Context"}] },      
        ]
    };
    
  }
  // can be used as onload functions
  componentDidMount() {
  }
  // api selection
  apiSelect(value){
    this.setState({apiName : value.target.value})
    if (value.target.value == "CSE"){
        this.setState({
            subTopics:[
                {name:"1", data:"search.cse.list" }, 
                {name:"2", data:"search.cse.siterestrict.list"}
            ]
        });
        this.setState({apiReadMore:false});
        this.setState({showDefinition:false});
    }
    else if (value.target.value == "Definitions"){
      this.setState({
          subTopics:[
              {name:"3", data:"Context" }, 
              {name:"4", data:"Promotion"},
              {name:"5", data:"Query"},
              {name:"6", data:"Result"},
              {name:"7", data:"Search"}
          ]
      });
      this.setState({apiReadMore:false});
    }
    else{
        this.setState({
            subTopics:[]
        });
        this.setState({apiMethod:"GET"});
        this.setState({apiUrl:"https://www.googleapis.com/customsearch/v1/"});
        if (value.target.value == "Api Description"){
          this.setState({apiDescription:"Searches over a website or collection of websites"});
          this.setState({apiRequestData:[]});
          this.setState({apiResponseData:[]});
          this.setState({apiReadMore:true});
        }
        if (value.target.value == "Definitions"){
          this.setState({apiDescription:"Subtopics"});
          this.setState({apiRequestData:[]});
          this.setState({apiResponseData:[]});
          this.setState({apiReadMore:false});
        }
    }
    this.setState({requestAndResponseBox:false});
  }
  // api selection for sub-topics
  apiSubTopicSelect(value){
    let definition = [ "Context" , "Promotion","Query","Result","Search"];
    console.log(value.currentTarget.dataset.id);
    if (definition.indexOf(value.currentTarget.dataset.id) <= -1) {
    (value.currentTarget.dataset.id == "search.cse.list") ? this.setState({apiDescription:"Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results."}) :this.setState({apiDescription:"Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. Uses a small set of url patterns."});
    this.setState({apiName:value.currentTarget.dataset.id});
    this.setState({apiMethod:"POST"});
    this.setState({apiUrl:"https://www.googleapis.com/customsearch/v1/"+value.currentTarget.dataset.id});
    this.setState({
        apiRequestData:[
            {id:"1",parameterName:"quotaUser",parameterType:"String", parameterDescription:"Turns off the translation between zh-CN and zh-TW."
          },
          {id:"2", parameterName:"quotaUser",parameterType:"String", parameterDescription:"Turns off the translation between zh-CN and zh-TW."
           }
        ]
    });
    this.setState({
        apiResponseData:[
            {objectName:"Object",objectType:"Search",objectBody:[{data:"context:object:Context"},{data:"facets:array[array:]"}]},
            {objectName:"Object",objectType:"Result",objectBody:[{data:"context:object:Context"},{data:"facets:array[array:]"}]},

        ]
    });
    this.setState({requestAndResponseBox:true});
    this.setState({showDefinition:false});
  }
  else{
    this.setState({apiName:value.currentTarget.dataset.id});
    this.setState({
      apiDefinitions:[
          {objectName:"Object",objectType:"Search",objectBody:[{data:"context:object:Context"},{data:"facets:array[array:]"}]},
          {objectName:"Object",objectType:"Result",objectBody:[{data:"context:object:Context"},{data:"facets:array[array:]"}]},

      ]
    });
    this.setState({showDefinition:true});
  }
  }
  // switching from schema to example for definition data
  shiftSchemaExample(value){
    if (value.currentTarget.dataset.id == 'Schema'){
      this.setState({definitionSchema:true});
      this.setState({definitionExample:false});
    }else{
      this.setState({definitionSchema:false});
      this.setState({definitionExample:true});
    }  
  }
  // switching from schema to example for SCE data
  shiftResponseSchemaExample(value){
    if (value.currentTarget.dataset.id == 'Schema'){
      this.setState({cseSchema:true});
      this.setState({cseExample:false});
    }else{
      this.setState({cseSchema:false});
      this.setState({cseExample:true});
    }  
  }
  render() {
    return (
        <div>
        <div className="head">
            <div className="container app-header">
                <div className="row">
                <div className="col-12 col-md-9 logo">
                <h3 onClick="location.href='https://any-api.com/';">Any <i className="glyphicon glyphicon-book"></i> Api - customSearch </h3>
                </div>
                <div className="col-12 col-md-3">
                <h3 onClick="location.href='https://lucybot.com/';">Document your API</h3>
                </div>
                </div>
            </div>   
        </div>
        
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="content-box integration">
              <p >Use <a href="https://app.datafire.io/" className="custom-link">DataFire</a> to build and run integrations for CustomSearch</p>
            </div>
          </div>
          <div className="col-12 col-md-4 search">
            <br></br>
            <input className="search-input" type="text" placeholder="Search.." name="search"/>
            <button className="search-button" ><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
      </div>
      <div className="container">
            <div className="content-box">
                  <div className="row">
                  <select onChange={this.apiSelect.bind(this)} class="form-control form-control-md-6">
                    <option value="Api Description">Api Description</option>
                    <option value="CSE">CSE</option>
                    <option value="Definitions">Definitions</option>
                  </select>
                  </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
            <h1>Documentation <i className="glyphicon glyphicon-chevron-right"></i> {this.state.apiName} </h1>
            <p>{this.state.apiDescription}</p>
            </div>
          </div>
          {this.state.apiReadMore == true ?
           <div className="row">
            <div className="col-12 col-md-12">
            <h2>Read More </h2>
            <a href="https://developers.google.com/custom-search/v1/using_rest" className="custom-link">https://developers.google.com/custom-search/v1/using_rest</a>
            </div>
           </div>
          :""}
          <div className="row">
            <div className="col-12 col-md-8">
                <p>
                {this.state.subTopics.map((item, key) =>
                    <li onClick={this.apiSubTopicSelect.bind(this)} data-id={item.data} className="custom-link">{item.data}</li>
                )}
                </p>
            </div>
            <div className="col-12 col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
            {this.state.requestAndResponseBox == true ? 
            <p>
            <b>URL:</b> <span class="btn btn-sm">{this.state.apiUrl}</span><br></br><br></br>
            <b>METHOD:</b> <button class="btn btn-success btn-xs">{this.state.apiMethod}</button>
            </p>
            :''
            }
            </div>
          </div>
          <div className="row">
          {this.state.requestAndResponseBox == true ? 
            <div className="col-12 col-md-5 request-box">
                <h4>Request Parameters - Query - {this.state.apiName}</h4>
                <hr className="spaces"></hr>
                <div className="request-box-body">
                { this.state.apiRequestData.map((item, key) =>
                <div>
                <span className="parameter-name">{item.parameterName}</span>
                <span className="parameter-datatype">{item.parameterType}</span>
                <p className="parameter-description">{item.parameterDescription}</p><hr></hr>
                </div>
                )}
                </div>
            </div>
            : ''
            }
            <div className="col-12 col-md-1">
            </div>

            {this.state.requestAndResponseBox == true ? 
            <div className="col-12 col-md-6 response-box">
                <h4>Response - <button className="btn btn-success btn-xs">200</button></h4>
                <hr></hr>
                <div className="shift-button">
                <button onClick={this.shiftResponseSchemaExample.bind(this)} data-id='Schema' className="btn btn-default">Schema</button>
                <button onClick={this.shiftResponseSchemaExample.bind(this)} data-id="Example" className="btn btn-default">Example</button>
                </div>
                {this.state.cseSchema == true ? 
                <div className="response-box-body">
                { this.state.apiResponseData.map((item, key) =>
                <div>
                    <span className="object-name">{item.objectName}</span><span className="object-type">{item.objectType}</span><br></br>
                    { item.objectBody.map((responseBody, key) =>
                    <div className="response-object-body">
                    <span className="parameter-name">context:</span><span className="parameter-datatype">{responseBody.data}</span><br></br>
                    </div>
                    )}
                </div>  
                )}
                </div>
                : <div className="well response-box-body">{JSON.stringify(this.state.apiResponseData)}</div>
                }
            </div>
            : '' }

          </div>
          {this.state.showDefinition == true ? 
          <div className="row">
                <div className="col-12 col-md-12">
                </div>
                <div className="col-12 col-md-8 definition-box">
                <button onClick={this.shiftSchemaExample.bind(this)} data-id='Schema' className="btn btn-default">Schema</button>
                <button onClick={this.shiftSchemaExample.bind(this)} data-id="Example" className="btn btn-default">Example</button>
                    <h4>{this.state.apiName}</h4>
                  {this.state.definitionSchema == true ?
                    <div className="definition-box-body">
                      { this.state.apiDefinitions.map((item, key) =>
                      <div>
                      <span className="definition-name">{item.objectName}</span>
                      <span className="definition-datatype">{item.objectType}</span>
                      { item.objectBody.map((responseBody, key) =>
                      <div className="definition-object-body">
                      <span className="definition-name">context:</span><span className="parameter-datatype">{responseBody.data}</span><br></br>
                      </div>
                      )}
                      </div>
                      )}
                    </div>
                  : <div>{JSON.stringify(this.state.apiDefinitions)}</div>
                  }
                </div>
          </div>
          : '' 
          }
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="container">
            <div className="row footer">
              <div className="col-12 col-md-10">
                <i>Copyright © 2018 LucyBot Inc.</i>
              </div> 
              <div className="col-12 col-md-2">
                <a className="custom-link">Disclaimer</a>
              </div>  
            </div>
        </div>
      </div>
    );
  }
}
