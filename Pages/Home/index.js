import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const contacts = [
  {
    id: '1', name: 'Metta', photo: 'https://cdn.idntimes.com/content-images/community/2019/11/65804599-495070124635471-8585973447765802738-n-db15ed04bc86c26b6e5af8f454834b94.jpg',
    tlp: '+62 857-9458-9283',
    jurusan: 'Teknik Informatika',
    alamat: 'Bali'
  },
  {
    id: '2', name: 'Shima Claudia', photo: 'https://cdn.idntimes.com/content-images/community/2019/11/26157133-1960362607561536-9140227813670912000-n-0860bca4b72101d35fa15e4a0459d28d.jpg',
    tlp: '+62 856-0367-8359',
    jurusan: 'Administrasi Bisnis',
    alamat: 'Pelabuhan Ratu'
  },
  {
    id: '3', name: 'Chiecka Putri Anjani', photo: 'https://cdn.idntimes.com/content-images/community/2019/11/49558551-616316832152584-4276268691331164158-n-e93c99691f16c87107215bb505d807d3.jpg',
    tlp: '+62 813-8304-3106',
    jurusan: 'Manajemen Retail',
    alamat: 'Surade'
  },
  {
    id: '4', name: 'Lusi Mutiara', photo: 'https://cdn-khub.istyle.id/800/uploads/images/2022/10/04/image_750x_633b9f596e866.jpg',
    tlp: '+62 857-9544-0533',
    jurusan: 'Nova',
    alamat: 'Sukabumi'
  },
  {
    id: '5', name: 'Astri Anggita Arianti', photo: 'https://cdn.idntimes.com/content-images/community/2021/10/cover-240868888-916376689224437-259364651493328595-n-11b8c3165a8b6db116d1bf6720dd9a5b-2e7cb484b3354ab6e74da1316b3f39ff.jpg',
    tlp: '+62 812-9629-6201',
    jurusan: 'Pendidikan Bahasa dan Sastra Indonesia',
    alamat: 'Surade'
  },
  {
    id: '6', name: 'Puspita Handayani', photo: 'https://cdns.klimg.com/kapanlagi.com/g/2019/07/16/10_seleb_cantik_korea_young_and_rich-20190716-003-non_fotografer_kly.jpg',
    tlp: '+62 857-9426-9737',
    jurusan: 'Administrasi Bisnis',
    alamat: 'Sukabumi'
  },
  {
    id: '7', name: 'Inggi Maulani', photo: 'https://cdns.klimg.com/kapanlagi.com/g/2019/07/16/10_seleb_cantik_korea_young_and_rich-20190716-005-non_fotografer_kly.jpg',
    tlp: '+62 857-7003-2596',
    jurusan: 'Teknik Informatika',
    alamat: 'Rataka'
  },
  {
    id: '8', name: 'Siti Sarah', photo: 'https://cdn-khub.istyle.id/800/uploads/images/2022/10/04/image_750x_633b9f485fbb8.jpg',
    tlp: '+62 896-8729-6674',
    jurusan: 'Teknik Informatika',
    alamat: 'Pyrapi'
  },
  {
    id: '9', name: 'Chalvin Febrian', photo: 'https://cdn-khub.istyle.id/800/uploads/images/2022/10/04/image_750x_633b9f62d9b40.jpg',
    tlp: '+62 856-2498-5966',
    jurusan: 'Teknik Informatika',
    alamat: 'Pyrapi'
  },
  {
    id: '10', name: 'Hasan Al-Hamid', photo: 'https://cdn-khub.istyle.id/800/uploads/images/2022/10/04/image_750x_633b9f50c6de2.jpg',
    tlp: '+62 838-3350-5990',
    jurusan: 'Teknik Informatika',
    alamat: 'Pyrapi'
  },
];





function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={{ uri: item.photo }} style={styles.contactPhoto} />
      <Text style={styles.contactName}>{item.name}</Text>
      <TouchableOpacity style={styles.detailButton} onPress={() => handleDetailPress(item)}>
        <Text style={styles.detailButtonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );


  const handleDetailPress = (contact) => {
    navigation.navigate('Detail', {
      name: contact.name,
      tlp: contact.tlp,
      jurusan: contact.jurusan,
      alamat: contact.alamat,
      photo: contact.photo,
    });
  };



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>List Contact</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contactList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FBEE21',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  contactList: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 0,
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 5,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#F6C01D',
    padding: 15,
    borderRadius: 15,
  },
  detailButtonText: {
    color: 'black',
  },
});

export default HomeScreen;
