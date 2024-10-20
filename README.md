**IMP**
Even we are using context API but still the below function which does not uses or gets the {count} prop re renders and this is the issue with context API 

function Count({setCount}){
  console.log("jdhsvbjhdb")
  return <div>
    <Countrenderer/>
     <Buttons setCount= {setCount}/>
  </div>

}
