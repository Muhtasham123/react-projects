const Table = ({nutrients}) => {
  return (
    <>
    <h1>Nutrients : </h1>
    <div className = "table-cont">
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {
            nutrients.map(({name,amount,unit},index)=>{
                return(
                    <tr key = {index}>
                        <td>{name}</td>
                        <td>{amount + unit}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Table