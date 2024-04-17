import React from "react";
import { ImLocation } from "react-icons/im";

type LocationMarkerProps = {
  lat: number;
  lng: number;
  onClick: () => void;
}

function LocationMarker({ lat, lng, onClick }: LocationMarkerProps) {
  return (
    <div onClick={onClick}>
      <ImLocation size={100} color="red" />
    </div>
  );
}

export default LocationMarker;
