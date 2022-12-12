import React from "react";
import "../../App.css";
import "./products.css";
import sampleImage from "../../pedigree.jpg";
import axios from 'axios';
class ProductInfo extends React.Component {
    //initialize an object's state in a class
     constructor(props) {
       super(props)
         this.state = {
           data: []
                 }
         }
         //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
         componentDidMount(){
           //get request
           axios.get('http://localhost/katasunis_backend/testshow.php').then(res => 
           {
           
           this.setState({data: res.data});
              }); 
           
           }
           render() {
   
            return (
             
              <div className="container">
               
               <header className="header">
               <h1>PREKĖS INFORMACIJA</h1>
              </header>

               
                  {this.state.data.map((result,ind) => {
                    
                    return (
                     
                        <div className="col-md-2">
                            <h1>BANDYMAS</h1>
                            <img src={sampleImage} alt="Sample" height="150" />  
                            <div className="col-md-8 product-detail">
                            <h4>{result.pavadinimas}</h4>
                            <p>{result.aprasas}</p>
                            </div>
                        <div className="col-md-2">{result.kaina}</div>
                     
                        </div>
                     
                    )
                  })}
             
              </div>
             
        )
        };
        }
        export default ProductInfo;
       
    

    //     <div className="col-md-2">
    //     <img src={sampleImage} alt="Sample" height="150" />  
    //     <div className="col-md-8 product-detail">
    //     <h4>{result.pavadinimas}</h4>
    //     <p>{result.aprasas}</p>
    //     </div>
    // <div className="col-md-2">{result.kaina}</div>

    
//      render() {
      
//        return (
        
//          <div className="container">
          
      
//         <header className="header">
//           <h1>PREKĖS INFORMACIJA</h1>
//         </header>
       

//         {this.state.data.map((result) => {
//                return (
//                 <div className="col-md-2">
//                 {/* nuotrauka pagal id prekes is nuotrauku lenteles */}
//                 <img src={sampleImage} alt="Sample" height="150" />  
//                 <div className="col-md-8 product-detail">
//                 <h4>{result.pavadinimas}</h4>
//                 <p>{result.aprasas}</p>
//                 </div>
//                 <div className="col-md-2">{result.kaina}</div>
//                 )
//           })}

//         </div>
// )
// };
// }

//    export default ProductInfo;
