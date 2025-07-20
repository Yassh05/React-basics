// import PropTypes from 'prop-types';
function List(props){

   const category=props.category;
   const z=props.items;
            
// z.sort((a,b) => a.name.localeCompare(b.name)); // ascending order
// z.sort((a,b) => b.name.localeCompare(a.name)); // descending order
// z.sort((a,b)=> a.age-b.age)  //numeric
// z.sort((a,b)=> b.age-a.age)      //reverse numeric

// const alive=z.filter(x1=> x1.age>2);

 const y= z.map(x1=> <li key={x1.age}>
                           {x1.name} : {x1.age}</li>)
       return (<>
               <h3 className="xxxx">{category}</h3>
               <ul className="y">{y}</ul>
               </>);

 }
// List.proptypes={
//    category: PropTypes.string
// }
List.defaultProps={
   category: "Category"
}

export default List