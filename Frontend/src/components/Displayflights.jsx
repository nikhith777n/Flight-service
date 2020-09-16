import React, { Component } from 'react';
import Flightservice from '../services/Flightservice';

class Displayflights extends Component {
    constructor(props)
    {
        super(props)
        console.log("dsfgdsfg");
       this.state= {
           flights:[],
           source:this.props.match.params.source,
           destination:this.props.match.params.destination
        //   dod:this.props.match.params.dod
        }
    
        this.book=this.book.bind(this);
    }
    componentDidMount()
    {
        Flightservice.getflight().then((res) => {
            this.setState({flights: res.data});
        });
    } 

    book(id,source,destination,as,tseats,aid)
    {
        let passenger={source:source,destination:destination,flightno:id,seatno:tseats-as,aid:aid};
        Flightservice.createbooking(passenger).then(res =>{
            console.log('passenger=>'+JSON.stringify(passenger))});
            Flightservice.updflights(id,as-1).then(res =>{
             });
            this.props.history.push(`/successful/${source}/${destination}/${id}/${tseats-as}/${aid}`);

    }

    render() {
        return (
            <div>
            <h2 className="text-center">Available Flights</h2>
            <div className="row">
                <table className = "table table-striped table-bordered">
                        <tr>
                            <th>id</th>
                            <th>Aid</th>
                            <th>source</th>
                            <th>destination</th>
                            <th>tseats</th>
                            <th>as</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
       
                    <tbody>
                        {
                         this.state.flights.filter(flight=>flight.source===this.state.source && flight.destination===this.state.destination).map(
                           fo => 
                            <tr>
                                <td>{fo.id}</td>
                                <td>{fo.aid}</td> 
                                <td>{fo.source}</td> 
                                <td>{fo.destination}</td> 
                                <td>{fo.tseats}</td> 
                                <td>{fo.as}</td> 
                                <td>{fo.price}</td>
                                <td>
                                    <button onClick={()=>this.book(fo.id,fo.source,fo.destination,fo.as,fo.tseats,fo.aid)} className="btn btn-info">Book</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
       
        </div>
        );
    }
}

export default Displayflights;