import React from 'react';

const Button = (props) => {
    const Tag = props.href? 'span':'button';
    return <Tag {...props} />
}

export default Button;