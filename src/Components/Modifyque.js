import React, { Component } from 'react';
import { connect } from 'react-redux';

class Addque extends Component {

    deleteQuestion(id){
        this.props.deleteQue(id);
    }
  render() {
    
        const { Questions } = this.props; 
      const questionsList = Questions.length ? (
          Questions.map(que => {

              const {options} = que;
              const optionList = options.length ? (
                options.map(opt => {
                    return (
                        <div key={opt}>
                            <p className="center-align">{opt}</p>
                        </div>
                    )
                })
               
              ) : (
                <div>
                <p className="center-align" >No options added</p>
              </div>
              )


              return(
                  <div key={que.id}>
                      <p className="center-align">
                        <a className="btn-floating btn-small waves-effect waves-light red accent-1 left-align" 
                        onClick={()=>{this.deleteQuestion(que.id)}}>
                            <i className="material-icons large">close</i>
                        </a>
                        <span className="mod-question">{que.question}</span>
                      </p>
                      <p>{optionList}</p>
                  </div>
                
              )
          })
      ) : (
          <div>
            <p className="center-align" >Please add questions</p>
          </div>
      ) 
      
    return (

        <div className="col s6  teal accent-3 modify">
            <div>
                <h5 className="center-align">Remove Questions Here</h5>
            </div>

            <div>
                {questionsList}
            </div>    
        </div>


    );
  }
}

const mapStateToProps = (state) => {
    return {
        Questions:state.Questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        deleteQue:(id) => {dispatch({type:'DELETE_QUESTION', id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addque);
