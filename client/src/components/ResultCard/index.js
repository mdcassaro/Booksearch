
import API from "../utils/API";
import React from "react";
import "./style.css";


class ResultCard extends React.Component{
    state = { 
        title: this.props.title,
         author: this.props.authors,
          synopsis: this.props.description,
          google_id: this.props.google_id,
           image: this.props.image,
            link: this.props.link 
        };

    saveBook =() =>{
        let bookData = {
        title: this.props.title,
         author: this.props.authors,
        synopsis: this.props.description,
        google_id: this.props.google_id,
        image: this.props.image,
        link: this.props.link 

        }
        API.saveBook(bookData)
        .then(res =>{
            console.log(res)
        })

    }
    render(){
    return (
        <div className="card mb-3 resultCard" key={this.state.image}>
            <div className="row no-gutters">
                <div className="col-md-1">
                    <img src={this.state.image} className="card-img img-fluid" alt="..." />
                </div>
                <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text"><small className="text-muted">By {this.state.author}</small></p>
                        <p className="card-text">{this.state.synopsis}</p>             
                    </div>
                </div>
                <div className="resultBtns">
                    <a href={this.state.link} target="_blank">View</a>
                    <button onClick= {this.savebook}>Save</button>
                </div>
            </div>
        </div>
    );
}
}

export default ResultCard;