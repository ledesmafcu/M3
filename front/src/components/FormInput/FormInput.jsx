function FormInput({ type, placeholder, name }) {
    return(
        <input 
            type={type} 
            className="form-control" 
            placeholder={placeholder} 
            name={name}
        />
    )
}

export default FormInput;