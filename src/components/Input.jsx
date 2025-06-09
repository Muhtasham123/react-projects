const Input = ({animation,label,type,placeholder,refObj}) => {
  return (
    <div className = {`m-4 ${animation}`}>
        <label className = "text-white font-semibold text-lg">{label}</label><br></br>
        <input ref = {refObj} className = "input" type = {type} placeholder = {placeholder}></input>
    </div>
  )
}

export default Input