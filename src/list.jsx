 function List(){

    const x=[{name : 'a', age:1},
             {name : 'b', age:2},
             {name : 'c', age:3},
             {name : 'd', age:4 }];
            


    const y= x.map(x1=> <li key={x1.name}>{x1.age}</li>)
    return (<ul>{y}</ul>);

 }
 export default List