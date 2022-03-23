import React, { useEffect, useRef, useState } from 'react'
import {db,auth} from '../firebase'
import "./Homepage.css"
let index;
export default function Homepage() {
  const inputRef=useRef()
  const[task,setTask]=useState(null)
  const[allTask,setAllTask]=useState([])
  const [edit,setedit]=useState(false)
  const[user,setuser]=useState(null)
  


useEffect(()=>{
  let subscriber;
  let array=[];
  auth.onAuthStateChanged(user=>{
  
    setuser(user)
    if(user){
   subscriber= db.collection("todoDatas").doc(user.email).collection("myData").get().then((documents)=>{
    documents.docs.forEach(item=>{
      console.log(item.data().task)
      setAllTask(prevoius=> [...prevoius,{
        id:item.id,
       task: item.data().task,
      }])
     
    })
    

  })
 
    }

  })
  

  return ()=>subscriber()
},[])
 const taskset=(e)=>{
    setTask(e.target.value)
  }
const clearinput=(e)=>{
  setTask(" ")
}
const addtask=()=>{
 if(edit){
      let array = [...allTask]
      console.log(array[index].task)
      array[index].task=task
      setAllTask(array)

db.collection("todoDatas").doc(user.email).collection("myData").doc(array[index].id).update({task})
      setedit(false)
  }else{ 
     if(user){ db.collection("todoDatas").doc(user.email).collection("myData").doc()
    .set({task}).then(()=>{
      setAllTask(prevoius=>[...prevoius,{task:task}])
    })
   }else{
     window.location.href="/login"
   }
   

    console.log(allTask)}
   
 
}
const addOnEnterKey=(e)=>{
   if (e.code==='Enter'){ 
 if(edit){
      let array = [...allTask]
      console.log(index)
      console.log(allTask)
      array[index].task=task
      setAllTask(array)
      
db.collection("todoDatas").doc(user.email).collection("myData").doc(array[index].id).update({task})
      setedit(false)
  }else
  {db.collection("todoDatas").doc(user.email).collection("myData").doc().set({task}).then(()=>{
    setAllTask(previous=>[...previous,{task:task}])
  })
    console.log(allTask)}
   }
}
const taskdelete=(element)=>{
  db.collection("todoDatas").doc(user.email).collection("myData").doc(element.id).delete();
setAllTask(allTask.filter(item=>item!==element))
}
const onEdit=(element)=>{
  setedit(true)
  inputRef.current.focus()
  setTask(element.task)
  index= allTask.findIndex(item=>item.task===element.task)
  

}
  return (
    <div style={{display:'flex',justifyContent:"stretch"}}>
  <div style={{width:'30%',backgroundColor:'white',height:'200px',padding:'25px'}}>

<label style={{fontWeight:'bold'}}> Add New Task:

</label>
<br></br>
<input placeholder='New task...' style={{marginTop:'5px',padding:'5px',width:'100%'}} ref={inputRef} onChange={taskset} value={task} onKeyDown={addOnEnterKey}>


</input>
<br></br>
<div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
<button style={{color:'white',backgroundColor:'green',padding:'8px',border:'2px solid green',borderRadius:'4px'}} onClick={addtask}>
   {edit?'Change':'Add'} 
</button>
<button style={{color:'white',backgroundColor:'red',padding:'8px',border:'2px solid red',borderRadius:'4px'}} onClick={clearinput}>
    Clear All
</button>
</div>
   

  </div>

  <div style={{width:'70%',backgroundColor:'white',height:'200px',
margin:'25px'}}>

   <div className='taskHead'>
       My Task List
   </div>
  
   { 
   
   allTask.length===0?<>
   <p style={{textAlign:'center'}}>
     No task are found!!!!!!!</p></>:
   allTask.map((item)=>{
     return( <div style={{width:'100%',height:'50px',backgroundColor:'white',padding:'6px',border:'1px solid grey',borderTop:'none',display:'flex',justifyContent:'space-between'}}>
     <p>
    {item.task}
     </p>
     <div style={{display:'flex', justifyContent:'space-between'}}><button onClick={()=>onEdit(item)} style={{backgroundColor:'white',border:'none '}}> <i className='fa fa-edit'>
       </i></button>
     <button style={{backgroundColor:'white',border:'none '}} onClick={()=>taskdelete(item)}>
         <i className='fa fa-trash'>
             
         </i>
     </button>
  </div>
     
        </div>)

   })}
  
  
  </div>
    </div>
  )
}
