import React, { useState } from 'react'

function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e)
    {
        // check if its a number and convert 
        let { value } = e.target.value;
        if(e.target.type === 'number')
        {
            value = parseInt(value)
        }

        setValues({
            // copy the existing values into it
            ...values, 
            // update the new values that changed dynamically
            [e.target.name]: e.target.value
        })
    }

    return { values, updateValue }
}

export default useForm
