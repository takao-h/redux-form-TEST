import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = (props) => {
  const {hundleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={hundleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"/>
            Mele
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"/>
            Female
          </label>
        </div>
      </div>
      <div>
        <label>SNS</label>
        <div>
          <Field name="SNS" component="select"/>
          <option></option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">facebook</option>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <button tyoe="submit" disabled={pristine || submitting}>Submit</button>
      <button tyoe="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Form)