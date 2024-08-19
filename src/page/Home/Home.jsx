/* eslint-disable no-loss-of-precision */
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const Home = () => {
  const [mapData, setMapData] = useState([]);
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://aurorasaurus.org/oval-data?end_date=2024-08-13T00%3A26%2B0600&local_offset=-21600"
        );
        console.log(res);
        if (res.status === 200) {
          setMapData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxhbWluODczMyIsImEiOiJjbHZncWdlbGIwa2J6Mm1vb2s0OWU5N2tiIn0.J8_kmPqB29Vhh8gHW1L8bw";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-68.137343, 45.137451],
      zoom: 5,
    });

    mapRef.current.on("load", () => {
      if (mapData.length > 0) {
        mapData.forEach((polygon, index) => {
          console.log(polygon);
          const coordinates = polygon.paths.map((path) =>
            path.map((coord) => [coord.lng, coord.lat])
          );

          const geojson = {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: coordinates,
            },
          };

          mapRef.current.addSource(`polygon${index}`, {
            type: "geojson",
            data: geojson,
          });

          mapRef.current.addLayer({
            id: `polygon-fill-${index}`,
            type: "fill",
            source: `polygon${index}`,
            layout: {},
            paint: {
              "fill-color": polygon.fill_color,
              "fill-opacity": 0.5,
            },
          });

          mapRef.current.addLayer({
            id: `polygon-outline-${index}`,
            type: "line",
            source: `polygon${index}`,
            layout: {},
            paint: {
              "line-color": "#000",
              "line-width": 3,
            },
          });
        });
      }
    });
  }, [mapData]);

  return (
    <div
      id="map"
      ref={mapContainerRef}
      style={{ height: "100vh" }}
      className="w-full"
    />
  );
};

export default Home;
