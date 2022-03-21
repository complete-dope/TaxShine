import React from 'react'

const Form = () => {
    return (
        <div>
            <form action='' method='POST'>
                <div className="container center">
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="Name" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" required name = "name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name = "email"/>
                        
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Phone no.</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name = "phoneno"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> Description</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name = "description"/>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form