import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function AgroScreen({ navigation }) {
  const handleLogout = () => {
    // Lógica para deslogar o usuário
    alert('Logout realizado!');
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon name="logout" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
      
        <Image
          source={{ uri: 'https://avatar.iran.liara.run/public/job/farmer/male' }} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>Olá, Agropecuarista</Text>
        <Text style={styles.userLocation}>📍 São Paulo, SP</Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>3.127</Text>
          <Text style={styles.infoLabel}>Animais</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>81</Text>
          <Text style={styles.infoLabel}>Consultas</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>21</Text>
          <Text style={styles.infoLabel}>Saúde</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>3.127</Text>
          <Text style={styles.infoLabel}>Vidas</Text>
        </View>
      </View>

      <View style={styles.specialistsContainer}>
        <Text style={styles.sectionTitle}>Especialistas</Text>
        <View style={styles.specialistsRow}>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/doctor/male' }}
            style={styles.specialistAvatar}
          />
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/doctor/male' }}
            style={styles.specialistAvatar}
          />
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/doctor/male' }}
            style={styles.specialistAvatar}
          />
        </View>
      </View>

      <View style={styles.bottomMenu}>
        {/* Botão Início com ícone */}
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="event" size={24} color="#fff" />
          <Text style={styles.menuText}>Atividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="forum" size={24} color="#fff" />
          <Text style={styles.menuText}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" size={24} color="#fff" />
          <Text style={styles.menuText}>Preferências</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103F19',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoImg: {
    width: 170,
    height: 50,
    margin: 15,
  },
  logoutButton: {
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userLocation: {
    color: '#ccc',
    fontSize: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  infoBox: {
    backgroundColor: '#41784C',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    width: '45%',
  },
  infoNumber: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoLabel: {
    color: '#fff',
    fontSize: 16,
  },
  specialistsContainer: {
    backgroundColor: '#1E4B2A',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
  },
  specialistsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30,
  },
  specialistAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 3,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#1E4B2A',
    borderRadius: 20,
  },
  menuItem: {
    alignItems: 'center',
    paddingBottom: 25,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});
