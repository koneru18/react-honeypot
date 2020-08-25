import React, { Component} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { InitialValues, schema } from './schema';
import Timer from './Timer';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      showHoneyPotError: false,
    }
  }

  componentDidMount() {
    console.log(`in componentDidMount() method...`);
    // if (this.textInput.current) {
      // this.textInput.current.hide();
    // }
    // this.textInput.hide();
    this.textInput.current.hidden = true; // working
    // this.textInput.hide();
    // this.textInput.current.show();
    console.log(`this.textInput: `, this);
    this.timer = new Timer();
    this.timer.start();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  displayHoneyPotError = () => {
    this.setState({ showHoneyPotError: true });
  };

   render(){
     console.log(`this.state.showHoneyPotError: ${this.state.showHoneyPotError}`);
    return (
      <Formik
        initialValues={InitialValues}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(`this.timer.getTimeSpent: ${this.timer.getTimeSpent()}`);
          const { honeypotEmail, honeypotUsername, honeypotPassword } = values;
          const timeSpent = this.timer.getTimeSpent();
          if (timeSpent < 30 || honeypotEmail !== '' || honeypotUsername !== 'username' || honeypotPassword !== '') {
            return this.displayHoneyPotError();
            // setSubmitting(true); // Do not submit form
          } else {

          }
        }}
        >
        {formikProps => (
          <>
            {this.state.showHoneyPotError ? (<div className="spam-dot">You are identified as Spam Bot</div>) : null }
            <Form>
              <Field type="text" name="name" placeholder="Name" value={formikProps.values.name} />
              <ErrorMessage name="name" />
              <br />

              {/* honeypot Field hidden with CSS. Expects always empty value */}
              <input type="text" name="signupemail" placeholder="Email" style={{ display: 'none' }} 
                    autoComplete="off" tabIndex="-1" value={formikProps.values.honeypotEmail} />
              <ErrorMessage name="honeypotEmail" />
              <Field type="text" name="email" placeholder="Email" value={formikProps.values.email} />
              <ErrorMessage name="email" />
              <br />

              {/* honeypot Field hidden with JS. Always expects specific value 'username' */}
              <input type="text" name="signupusername" placeholder="Username" ref={this.textInput}
                    autoComplete="off" tabIndex="-1" value={formikProps.values.honeypotUsername} />
              <ErrorMessage name="honeypotUsername" />
              <Field type="text" name="userName" placeholder="Username" value={formikProps.values.userName} />
              <ErrorMessage name="userName" />
              <br />

              {/* honeypot Field hidden with CSS classname. Always expects null value */}
              <input className="signuppassword" type="password" name="signuppassword" placeholder="Password"
                      autoComplete="off" tabIndex="-1" value={formikProps.values.honeypotPassword} />
              <ErrorMessage name="honeypotPassword" />
              <Field type="password" name="password" placeholder="Password" value={formikProps.values.password} />
              <ErrorMessage name="password" />
              <br />

              <Field type="password" name="confirmPassword" placeholder="Confirm Password" value={formikProps.values.confirmPassword} />
              <ErrorMessage name="confirmPassword" />
              
              <br />
              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    );
   }
}

export default App;
