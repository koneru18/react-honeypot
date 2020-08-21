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
          const { honeybotEmail, honeybotUsername, honeybotPassword } = values;
          console.log(`honeybotEmail: ${honeybotEmail}`);
          console.log(`honeybotUsername: ${honeybotUsername}`);
          console.log(`honeybotPassword: ${honeybotPassword}`);
          const timeSpent = this.timer.getTimeSpent();
          if (timeSpent < 30 || honeybotEmail !== '' || honeybotUsername !== 'username' || honeybotPassword !== '') {
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

              {/* Honeybot Field hidden with CSS. Expects always empty value */}
              <input type="text" name="signupemail" placeholder="Email" style={{ display: 'none' }} 
                    autoComplete="off" tabIndex="-1" value={formikProps.values.honeybotEmail} />
              <ErrorMessage name="honeybotEmail" />
              <Field type="text" name="email" placeholder="Email" value={formikProps.values.email} />
              <ErrorMessage name="email" />
              <br />

              {/* Honeybot Field hidden with JS. Always expects specific value 'username' */}
              <input type="text" name="signupusername" placeholder="Username" ref={this.textInput}
                    autoComplete="off" tabIndex="-1" value={formikProps.values.honeybotUsername} />
              <ErrorMessage name="honeybotUsername" />
              <Field type="text" name="userName" placeholder="Username" value={formikProps.values.userName} />
              <ErrorMessage name="userName" />
              <br />

              {/* Honeybot Field hidden with CSS classname. Always expects null value */}
              <input className="signuppassword" type="password" name="signuppassword" placeholder="Password"
                      autoComplete="off" tabIndex="-1" value={formikProps.values.honeybotPassword} />
              <ErrorMessage name="honeybotPassword" />
              <Field type="password" name="password" placeholder="Password" value={formikProps.values.password} />
              <ErrorMessage name="password" />
              <br />

              <Field type="password" name="confirmPassword" placeholder="Confirm Password" value={formikProps.values.confirmPassword} />
              <ErrorMessage name="confirmPassword" />
              
              {/* Test */}
              {/* <Field type="text" name="signup_email" placeholder="Email" autoComplete="off" value={formikProps.values.username} />
              <Field type="text" name="signup_pwd" placeholder="Password" autoComplete="off" value={formikProps.values.username} />
              <Field type="text" name="signup_conf_pwd" placeholder="Confirm Password" autoComplete="off" value={formikProps.values.username} />
              <Field type="text" name="signup_username" placeholder="Username" autoComplete="off" value={formikProps.values.username} /> */}
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
