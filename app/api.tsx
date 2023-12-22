import React, { useEffect, useState } from 'react'
import Image from 'next/image';

 interface Courses {
    name: string,
    age: Number,
    class: string
 } 


const Try = () => {
    const url = 'www.waploaded.com12';

    const [apiData, setApiData] = useState<Courses[]>([]);
 
    const fetchData = async  function () {
        try {
            const response = await fetch(url)

            if(!response.ok) {
                console.log(`Error status${response.status}`)
            }

            const data = await response.json()

            console.log('response from API', data)

            setApiData(apiData)

        } catch (error: any) {
            console.log('error message', error.message)

        }

    }
    
    useEffect(() => {
            fetchData()
    }, [])
    
    return (
        <div>
        {apiData.map((dataapi, index) => (
           <div>
<Image src='/images/booked.jpg' width={300} height={400} alt="sad" /> 
           </div> 

        ))}
        </div>
    )
}

export default Try;