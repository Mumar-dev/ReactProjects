
    function Card( {data, MyData} ){

        function ClickHandler (){

        }
        
        let course_array = []; 

        const AllCourses = () => {
             Object.values(data).forEach ((courseCategory) => {
            courseCategory.forEach((course) => { 
                course_array.push(course);
            })
            })
            return course_array;
            }

            course_array = AllCourses();

        return(
            <div>
               {
                course_array.map ( (item) => (
                    <div>
                         <h1>{item.title}</h1>
                         <img src={item.image.url}/>
                         <p>{item.description}</p>
                         
                    </div>

                ))
               } 
            </div>
        )
    }

export default Card;