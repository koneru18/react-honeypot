<h2>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a POC of Honey Pot implementation in ReactJS</h2>
<br />

<h1>Why Captcha?</h1>
<h3>It is very important to protect websites from spam bots. For example: Having captcha on registration page doesn't allow to register fake users. More information on [why your website needs captcha] (https://www.tsohost.com/blog/6-reasons-why-your-website-needs-a-captcha-form)</h3>
<br />

<h1>Limitations with google reCAPTCHA:</h1>
<h3>As [Google] (www.google.com) is not accessible in china, Google reCAPTCHA V2 and V3 are blocked and users in china could not submit webpages. To fix this issue, [Official google documentation] (https://developers.google.com/recaptcha/docs/faq) suggested to use www.recaptcha.net, which is also blocked in china.</h3>
<br />

<h1>Alternatives with google reCAPTCHA:</h1>
<h3>There are other popular libraries to implement captcha like [BotDetect] (https://captcha.com/). These libraries are expensive to use. Honey Pot implementation is also one approach to trick spam dots with own implementation.</h3>
<br />

<h1>For the honey pot implementation considered below:</h1>
<ul>
    <li>Field hidden by CSS</li>
        - Add a CSS style attribute. Example: ```style={{ display: 'none' }}``` or a CSS class to hide field
    <li>Field hidden by React/JavaScript</li>
    <li>Feld requiring a blank input</li>
    <li>Field requiring a specific input</li>
    <li>No-autocompletion on honeypot fields</li>
    <li>Honeypot fields can't be navigated to via the Tab key</li>
    <li>Include honeypot fields in form validation</li>
</ul>

You may either add each field with above 

<h1>Sources:</h1>
<h3>https://stackoverflow.com/questions/16861325/honeypot-implementation</h3>
<h3>https://stackoverflow.com/questions/36227376/better-honeypot-implementation-form-anti-spam</h3>
<h3>https://stackoverflow.com/questions/3622433/how-effective-is-the-honeypot-technique-against-spam</h3>
<h3>https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8</h3>