
    function FilterData( {MyData} ){


        return(
            <div>
                {
                    MyData.map( (data) => (
                        <button>{data.tittle}</button>
                     ) )
                }
            </div>
        )
    }

    
export default FilterData;