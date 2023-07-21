import React, { Component } from 'react';
export default class Footer extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<footer>
<ul className="social-links">
</ul>
<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
</footer>
);
}
}