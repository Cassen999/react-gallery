import React, { Component } from 'react';


class GalleryItem extends Component{
    
    state = {
        isClicked: true,
    }

    toggleClick = () => {
        console.log('in toggleClick')
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(
            <div>
                <p onClick={this.toggleClick}>
                    {this.state.isClicked? <><img className='grid-child' src={this.props.item.path} alt={this.props.item.description}/></> : <>{this.props.item.description}</>} 
                </p>
                <>
                    <p>
                        Likes: {this.props.item.likes}
                    </p>
                    <button onClick={(event) => this.props.addLike(this.props.item.id)}>Like</button>
                </>
            </div>
        )
    }
}

export default GalleryItem;