import React from 'react'

function NameList() {
    
   const names = ['Roshith', 'Sweety', 'John']
   const personList =[
    {
        id:1,
        name:'Roshith',
        skill:'Java'
    },
    {
        id:2,
        name:'Ajay',
        skill:'Java'
    },
    {
        id:3,
        name:'Santhosh',
        skill:'react'

    }
   ]
  return (
    <div>  
      <h1 key={personList.id}>{personList[0].name}:{personList[0].skill}</h1>
      <h1 key={personList.id}>{personList[1].name}</h1>
      <h1 key={personList.id}>{personList[2].name}</h1>
      <div>
       {  
            names.map((e) => <h2>{e}</h2>)
       }
    </div>
</div>
  )
}

export default NameList
