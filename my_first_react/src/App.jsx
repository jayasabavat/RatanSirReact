function App(){
const items=[
 {name:'cabbage',isveg:true,id:100},
 {name:'potato',isveg:true,id:101},
  {name:'chicken',isveg:false,id:102},
 {name:'fish',isveg:false,id:103},
  {name:'palakura',isveg:true,id:104}
];

 const listitems = items.filter(item=>item.isveg)
 const vegitems=listitems.map((item,id)=>(<li key={item.id}>{item.name}</li>))
                            
const list = items.filter(item=>!item.isveg)
const nonvegitems=list.map((item,id)=>(<li key={item.id}>{item.name}</li>))

  return(
    <>
    <h1 style={{color:'red'}}> veg items..</h1>
    <ul style={{color:'green'}}>{vegitems}</ul>

    <h1 style={{color:'blue'}}> non-veg items..</h1>
    <ul style={{color:'red'}}>{nonvegitems}</ul> 

    <h1>food type</h1>
    <p style={{color:'goldenrod'
    }}>Statu :{listitems.length==0?"veg items are not available":"items are available"} </p>

    <p style={{color:'orangered'}}>Statu :{list.length==0?"non-veg items are not available":"items are available"} </p>
   
    <p style={{color:'GrayText'}}>Statu :{items.length==0?"Both items are not available":"Both items are available"} </p>
   
    </>
  )
}
export default App;
