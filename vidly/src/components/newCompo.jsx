import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
 class NewCompo extends Component {
     state = { 
         objmov : getMovies()
      }
    handleDelete = currmovie =>{
        const newMov = this.state.objmov.filter(m => m._id !== currmovie._id)
        //  console.log(newMov);
        this.setState({objmov:newMov});
        //console.log(this.state.objmov);

    };
     render() { 
         // Adding the message list :
         // Obj Destructuring into moviesNo
         const {length: moviesNo} = this.state.objmov;
         if(moviesNo===0) return <p>No Movies Left</p>
         return ( 
         <div>
             <p>Movies No are {moviesNo} .</p>
             <table className='table'>
                 <thead>
                     <tr>
                         <th>Title</th>
                         <th>Genre</th>
                         <th>Stock</th>
                         <th>Rate</th>
                         <th />
                     </tr>
                 </thead>
                 {
                     this.state.objmov.map(movdata => (
                        <tbody key={movdata._id}>
                        <tr>
                                <td>{movdata.title}</td>
                                <td>{movdata.genre.name}</td>
                                <td>{movdata.numberInStock}</td>
                                <td>{movdata.dailyRentalRate}</td>
                                <td>
                                    <button onClick={()=>this.handleDelete(movdata)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                        </tr>
                    </tbody>
                     ))
                 }
             </table>
         </div>
        );
     }
 }
  
 export default NewCompo;
