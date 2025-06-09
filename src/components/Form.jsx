import Input from "../components/Input"
import Select from "../components/Select"
import { useEffect,useState } from "react"

const Form = ({handleSubmit,title,refs:{titleRef,dateRef,companyRef,statusRef,typeRef}}) => {
  const [rotate,setRotate] = useState("")
  const [translate,setTranslate] = useState(1)

  useEffect(()=>{
      setTranslate(0)
      setRotate("rotate-y-360")
  },[])

  return (
      <form onSubmit={handleSubmit} className={`overflow-hidden md:block flex flex-col justify-center p-4 md:m-auto md:w-[70%] w-full md:min-h-100 mt-30 md:rounded-lg shadow-lg bg-gradient-to-r ${rotate} from-black to-gray-800 transition-all duration-2000`}>
          <h1 className={`${translate === 1 ? 'slide-y' : 'slide-none' } slide-X text-shadow-lg text-center w-full font-bold text-3xl text-white`}>{title}</h1>
          <section className='flex flex-wrap justify-between'>
              <Input animation={translate === 1 ? 'slide-x' : 'slide-none'} refObj={titleRef} label={"Job title"} type={"text"} placeholder={"Enter job title"} ></Input>
              <Input animation={translate === 1 ? 'slide-y' : 'slide-none'} refObj={dateRef} label={"Applying date"} type={"date"} ></Input>
              <Input animation={translate === 1 ? 'slidex' : 'slide-none'} refObj={companyRef} label={"Company"} type={"text"} placeholder={"Enter job company"} ></Input>
              <Select animation={translate === 1 ? 'slide-x' : 'slide-none'}  refObj={statusRef} label={"Job status"} name={"status"} opts={["interview", "declined", "pending"]}></Select>
              <Select animation={translate === 1 ? 'slidex' : 'slide-none'} refObj={typeRef} label={"Job type"} name={"type"} opts={["full-time", "part-time", "internship"]}></Select>
          </section>

          <div className={`w-full flex justify-center ${translate === 1 ? 'slidey' : 'slide-none'}`}>
              <button type="submit" className="link cursor-pointer text-white font-bold px-5">{title}</button>
          </div>
      </form>
  )
}

export default Form