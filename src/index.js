import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";

// Main Component
class Main extends React.Component{
	render() {
		return (
			<div>
				<Head />
				<BlogContent title="Hello" text="www" />
			</div>
		);
	}
}

// Header nav bar
class Head extends React.Component {
	render() {
		return (
			<header>
				<div className={styles.head}>
					<Button1 name="Easy-Blog" />
					<Button1 name="BTN-1" />
					<Button1 name="BTN-2" />
					<Button1 name="BTN-3" />
					<Button1 name="BTN-4" />
					<Button2 name="BTN-Spe" />
				</div>
			</header>
		);
	}
}

class Button1 extends React.Component {
	handleClick() {
		alert("Hi");
	}
	render() {
		return (
			<button onClick={this.handleClick} className={styles.type1} >
				{this.props.name}
			</button>
		);
	}
}
class Button2 extends React.Component {
	handleClick() {
		alert("World");
	}
	render() {
		return (
			<button onClick={this.handleClick} className={styles.type2} >
				{this.props.name}
			</button>
		);
	}
}

// Content
class BlogContent extends React.Component {
	render() {
		return (
			<div className={styles.blog} >
				<div className={styles.title} >
					<h1>{this.props.title}</h1><br />
				</div>
				<div className={styles.text} >
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}


ReactDOM.render(
	<Main />,
	document.getElementById('index')
);