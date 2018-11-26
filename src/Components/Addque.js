import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

class Addque extends Component {
    state = {
        question:'',
        options:[],
        opt:''
    }

    handleQuestion=(e)=>{
        this.setState({
            question:e.target.value
        })
    }

    handleChange=(e)=>{
        this.setState({
            opt:e.target.value
        });
    }

    handleClick=(e)=>{
       if(this.state.opt.length){
            let options = [...this.state.options, this.state.opt];
            this.setState({
                options,
                opt:''
            });        
            
        }            
    }

    deleteOpt = (opts) => {
        const options = this.state.options.filter(opt =>{
            return opt != opts 
        });
        this.setState({
            options
        })
    }

    submit = (e) =>{
        let uniqID = uniqid();
        e.preventDefault();
        if(this.state.question.length && this.state.options.length){
            this.props.addQuestion(uniqID, this.state.question, this.state.options );
        }
        this.setState({
            question:'',
            options:[]
        });
        
    }

  render() {
      const optionList = this.state.options.length ? (
          this.state.options.map(opts=>{
              return(
                <div className="keyOpts z-depth-3 valign-wrapper" key={opts}>
                    <span>{opts + "  "}</span><i className=" tiny close material-icons right-align" onClick={()=>{this.deleteOpt(opts)}}>close</i>
                </div>
              )
          })
      ) : (
          <p className="center-align">Please add options</p>
      )

    return (
        <div className="col s6 white add">
            <div><h5 className="center-align">Add Questions Here</h5></div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" value={this.state.question} onChange={this.handleQuestion}></textarea>
                            <label >Write Question Here</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Option" type="text" className="validate" value={this.state.opt} onChange={this.handleChange}/>
                            <label >Add Options</label>
                        </div>                        
                            <a className="btn-floating btn-medium waves-effect waves-light blue-grey darken-2 add-option"
                            onClick={this.handleClick}> 
                                <i className="material-icons">add</i>
                            </a>                      
                        
                        <div className="col s12 left-align view-options">                        
                        {optionList}                        
                        </div>
                        <div className="col s12 center-align submit-div">
                            <button className="btn waves-effect waves-light submit" onClick={this.submit}type="submit" name="action" 
                            >Submit<i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (uniqID,question,option) => { dispatch({type:'ADD_QUESTION', 
        Questions:{id:uniqID, question:question, options:option }})}
    }
}

export default connect( null,mapDispatchToProps)(Addque);
