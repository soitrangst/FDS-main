import * as React from "react"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { location } from "@service/infastructural/constant";

export class Maps extends React.Component<{google:any}> {

    shouldComponentUpdate():boolean{
        return false
    }

    render(): JSX.Element {

        const mapStyles = {
            height: '100%',
            minHeight: '500px'
        }

        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: location.lat, lng: location.lng }}
            >
                <Marker position={{ lat: location.lat, lng: location.lng }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: location.api
  })(Maps);