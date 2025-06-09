const Select = ({animation,opts,label,name,refObj}) => {
  return (
      <div className={`m-4 ${animation}`}>
          <label className="text-white font-semibold text-lg">{label}</label><br></br>
          <select ref = {refObj} className="input w-70" name={name}>
            {opts.map((opt,index)=>{
                return <option key = {index} value={opt}>{opt}</option>
            })}
          </select>
      </div>
  )
}

export default Select