import React from 'react'

export default function Alert(props) {
    //to capitalize the first letter of the warning
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    //the values was initially null so use this syntax props.alert && -- it means agr null h th kuch nhi otherwise show div
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
                
            </div>
        </div>
    )
}
