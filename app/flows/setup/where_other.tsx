import { useRef, useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import MapView, { MapMarker, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

export default function SetupWhereOtherScreen() {
  const map: React.RefObject<MapView> = useRef(null);
  const marker: React.RefObject<MapMarker> = useRef(null);
  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={styles.page}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Choose Location
        </Text>
        <MapView
          ref={map}
          style={{
            width: "100%",
            marginTop: 5,
            flex: 1,
          }}
          onPoiClick={(e) => {
            setMarkerCoordinate({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          onPress={(e) => {
            setMarkerCoordinate({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Marker ref={marker} coordinate={markerCoordinate} />
        </MapView>
        <Button
          title="Save Location"
          onPress={() => {
            console.log("Location saved", markerCoordinate);
            // Save the location to the state or send it to the server
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
