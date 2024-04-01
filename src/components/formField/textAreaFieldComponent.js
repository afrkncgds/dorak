import React, {Component} from 'react';

class TextAreaFieldComponent extends Component {
    render() {
        const {name, placeholder,meta: {error, touched }, rows} = this.props;

        return (
            <div className={`text-block ${touched && error ? "error" : ""}`} >
                <textarea name={name} rows={rows} placeholder={placeholder}/>
            </div>
        );
    }
}

export default TextAreaFieldComponent;