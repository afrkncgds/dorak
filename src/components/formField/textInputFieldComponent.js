import React, {Component} from 'react';

class TextInputFieldComponent extends Component {

    render() {
        const {input,name, placeholder, meta: {error, touched }, isFull, isPreview, min, max} = this.props;
        return (
            <div className="input-item" >
                <input {...input} name={name} min={min} max={max} placeholder={placeholder} className={`${touched && error ? "error" : ""}`}/>
            </div>
        );
    }
}

export default TextInputFieldComponent;