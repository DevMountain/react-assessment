import React, { Component } from "react";
import './Details.css';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { dispatchGetTasks, dispatchPatchTask, dispatchCompleteTask } from '../../services/task_service';

class Details extends Component {
  componentDidMount() {
    dispatchGetTasks();
  }

  componentWillReceiveProps(nextProps) {
    const { title, description } = nextProps.task;
    this.setState({ title, description });
  }

  constructor(props) {
    super(props);
    this.state = {
      title: props.task ? props.task.title : '',
      description: props.task ? props.task.description : ''
    } 

    this.save = this.save.bind( this );
    this.cancel = this.cancel.bind( this );
    this.complete = this.complete.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  } 

  save() {
    const { title, description } = this.state;
    dispatchPatchTask( this.props.id, { title, description } );
    this.props.history.push('/');
  }

  cancel() {
    const { title, description } = this.props.task;
    this.setState({ title, description });
  }

  complete() {
    const { id, history } = this.props;
    dispatchCompleteTask( id );
    history.push('/');
  }

  render() {
    const { title, description } = this.state;
    return (
      <div id="Main__container">
        <div id="Main__header"> 
          <span> To Do </span>
        </div>
        
        <div id="Details__container">
          <div id="Details__editContainer">
            <Link to='/' id="Details__link">
              <span> Back to Tasks </span>
            </Link>
            <input className="Details__input" placeholder="Title" value={ title } onChange={ (e) => { this.handleChange('title', e.target.value) } } />
            <input className="Details__input" placeholder="Description" value={ description } onChange={ (e) => { this.handleChange('description', e.target.value) } } />
            <div style={ { marginTop: '20px' } }>
              <button className="Details__btn" id="Details__saveBtn" onClick={ this.save }> Save </button>
              <button className="Details__btn" id="Details__cancelBtn" onClick={ this.cancel }> Cancel </button>
              <button className="Details__btn" id="Details__completeBtn" onClick={ this.complete }> Complete </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state, { match }  ) {
  return {
    id: match.params.id,
    task: state.tasks.filter( task => task.id == match.params.id )[0]
  }
}

export default connect( mapStateToProps )( Details );