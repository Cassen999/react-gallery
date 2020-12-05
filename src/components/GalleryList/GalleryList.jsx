import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component{

    render() {
        return(
            <div>
                <h2>My Honeymoon in Japan</h2>
                <div className="grid-container">
                    {/* Call the props from App to get gallery items.
                    Call GalleryItem and create prop to use in GalleryItem */}
                    {this.props.gallery.map(gallery => (
                        <GalleryItem item={gallery} key={gallery.id}/>
                    ))}
                </div>
            </div>
        )
    }
}





export default GalleryList;