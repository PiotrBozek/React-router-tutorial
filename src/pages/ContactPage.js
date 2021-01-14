import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
state ={
    value: '',
    
}

handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        value: '',
    })
}

handleArea = (e) => {
    this.setState({
        value: e.target.value
    })
}
render(){
    return ( 
        <div className='contact'>
            <form onSubmit = {this.handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea value = {this.state.value} onChange={this.handleArea} placeholder = 'Wpisz wiadomość...'/>
                <button>wyślij</button>
            </form>
            <Prompt 
            when = {this.state.value}
            message = 'Masz nie wypełniony formularz. Czy na pewno chcesz opuścić tą stronę'
            />
        </div>
     );
    }
}
 
export default ContactPage;