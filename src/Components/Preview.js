import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preview extends Component {

  render() {
    
        const { Questions } = this.props; 
      const questionsList = Questions.length ? (
          Questions.map(que => {                
              const {options} = que;
              const optionList = options.length ? (
                options.map(opt => {
                    return (
                        <div key={opt} className="opt">                        
                             <p >
                                <label>
                                    <input className="with-gap" name={que.id} type="radio"  />
                                    <span>{opt}</span>
                                </label>
                            </p>                            
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
                      <div>
                        <span className="mod-question">{que.question}</span>
                      </div>
                      <div>{optionList}</div>
                  </div>
                
              )
          })
      ) : (
          <div>
            <p className="center-align" >Please add questions</p>
          </div>
      ) 
      
    return (
        <div className="container">
            <div className="col s12 z-depth-3 preview">
                <div>
                    <h4 className="center-align">Final Questionnaire</h4>
                </div>

                <div className="preview-que">
                    {questionsList}
                </div>    
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


export default connect(mapStateToProps)(Preview);
