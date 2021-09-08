import {useState} from 'react'
import validateInfo from './validateInfo';

const useForm = () => {
	 const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardSecurityCode: '',
        focus: ''
    })

	const [errors,setErrors] = useState({})

	const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
    };
    
    const maxLengthCheck = (object) => {
	 if (object.target.value.length > object.target.maxLength) {
	  object.target.value = object.target.value.slice(0, object.target.maxLength)
	   }
	 }
    return { handleChange, handleFocus, handleSubmit, values, errors,maxLengthCheck };
};

export default useForm