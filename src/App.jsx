import Header from'./Header.jsx'
import Footer from'./Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './button.jsx'
import Student from './students.jsx'
import Userx from './user.jsx';
import List from './list.jsx';
import Click from './click.jsx';
import Profile from './profile.jsx'
import Mycomp from './Mycomp.jsx'
import Counter from './Counter1.jsx'
function App() {

    const names=[{name : 'mikey', age:1},
             {name : 'draken', age:2},
             {name : 'chifuyu', age:3},
             {name : 'baji', age:4 }];

  return(
     <>
      {/* <Header/>
      <Food/>
      <Footer/>

      <Card name="Yash"/>
      <Card name="Gaara"/> */}

      {/* <Button/>  */}
      {/* <Student name="Yash"  age= {45}/>
      
      <Userx login={true} username="yash"/>  */}

      {/* {names.length >0 ? <List items={names} category="Names"/> : 'null'} */}
      
      {/* <Click/> <br /><br />
      <Profile/> */}

       {/* <Mycomp/>  */}
      <Counter/>

   
    </>
    
  );
}

export default App
