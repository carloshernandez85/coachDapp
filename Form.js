import React from 'react'

class Form extends React.Component {
    render() {
    return(
        <form>
            <div className="container text-right">
                <div class="form-group row">
                    <div className="col-lg-12"> 
                        <label htmlFor="zipcode"></label>
                            <input 
                                className="form-control"
                                type="input"
                                placeholder="Search for coach here!"
                                name="zipcode" />
                            </div>
                        </div>
                    </div>
                </form>   
            );  
        }
    }
    export default Form;

