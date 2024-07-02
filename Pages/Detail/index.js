import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ProfileScreen({ route }) {
  if (!route.params) {
    return null;
  }

  const { name, tlp, jurusan, alamat, photo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.profilePhoto} />

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>No Tlp:</Text>
        <Text style={styles.value}>{tlp}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Jurusan:</Text>
        <Text style={styles.value}>{jurusan}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Alamat:</Text>
        <Text style={styles.value}>{alamat}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 101,
    marginBottom: 40,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
});

export default ProfileScreen;
