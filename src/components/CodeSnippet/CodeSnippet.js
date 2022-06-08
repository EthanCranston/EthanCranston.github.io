import React from "react";
import Prism from "prismjs";
import "./prismDark.css";
import "prismjs/components/prism-python"
import "prismjs/components/prism-c"


class CodeSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.code = props.code;
        this.language = props.language;
    }

    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div>
                <pre  class={'rounded-md'}>
                    <code className={`language-${this.language}`}>
                        {this.code}
                    </code>
                </pre>
            </div>
        );
    }
};

export default CodeSnippet;