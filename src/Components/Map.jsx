import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons
const shopIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {

  // Shop location (replace with your actual shop coordinates)
  const shopLocation = {
    lat: 28.6317539, // Example: New York City
    lng: 77.0662918
,
    name: "S.R.S.B. Barcode Solutions",
    address: "A-311, Second Floor, Vikas Puri, New Delhi-110018, Delhi, India"
  };

  // Open Google Maps with directions
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shopLocation.lat},${shopLocation.lng}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="w-full bg-white mb-2">
     

      {/* Map */}
      <div className="h-[300px] relative z-10">
        <MapContainer
          center={[shopLocation.lat, shopLocation.lng]}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          className="h-full w-full relative z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Shop Marker */}
          <Marker position={[shopLocation.lat, shopLocation.lng]} icon={shopIcon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg">{shopLocation.name}</h3>
                <p className="text-sm text-gray-600">{shopLocation.address}</p>
                <button
                  onClick={openGoogleMaps}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                >
                  Get Directions in Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
