import axios from "axios"


const api = axios.create({
    BASE_URL:"http://localhost:900"
})


export async function FethData(req:Request, res:Response):Promise<void>{
try{
const data=await api.get("/cars")
if(!data){

return res.status(404).json({message:"there is no any data to feth"})
}

res.status(200).json(data)

}
catch(error){
console.log(`ther is an error in catch`)
res.status(404).json(`there is an error ${error}`)
}

}



export async function PostData(req:Request , res:Response)Promise<void>{

    try{

 
    const data=await api.post({
header:{
Contant-Type:"application/json"
}
body({cars data})
    })

   }

catch(error){
console.log(`ther is an error in catch`)
res.status(404).json(`there is an error ${error}`)
}







}






