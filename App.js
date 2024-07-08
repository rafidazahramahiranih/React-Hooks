import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

import MovieItem from './components/MovieItem';

const App = () => {
  const [movies, setMovies] = useState([
    { id: '1', title: 'Sejuta Sayang Untuknya', year: 2023, genre: 'Drama, Romansa' },
    { id: '2', title: 'Habibie & Ainun', year: 2012, genre: 'Biografi, Drama' },
    { id: '3', title: 'Hujan Bulan Juni', year: 2020, genre: 'Drama' },
    { id: '4', title: 'Yowis Ben 3', year: 2022, genre: 'Komedi' },
    { id: '5', title: 'Aku Cinta Kamu', year: 2022, genre: 'Romansa' },
    { id: '6', title: 'Keluarga Cemara', year: 2019, genre: 'Drama, Keluarga' },
    { id: '7', title: 'Pengabdi Setan', year: 2017, genre: 'Horor' },
    { id: '8', title: 'Ngeri - Ngeri Sedap', year: 2022, genre: 'Komedi' },
    { id: '9', title: 'Rudy Habibie', year: 2016, genre: 'Biografi, Drama' },
    { id: '10', title: 'Bumi Manusia', year: 2019, genre: 'Drama, Sejarah' },
    { id: '11', title: 'Imperfect: Karier, Cinta, & Timbangan', year: 2019, genre: 'Drama' },
    { id: '12', title: 'Dua Garis Biru', year: 2019, genre: 'Drama' },
    { id: '13', title: 'Guru-Guru Gokil', year: 2020, genre: 'Komedi' },
    { id: '14', title: 'Kartini', year: 2017, genre: 'Biografi, Drama' },
    { id: '15', title: 'Benyamin Biang Kerok', year: 2018, genre: 'Komedi, Musikal' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [movies, searchTerm]);

  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Spotter</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari berdasarkan judul film"
          onChangeText={handleSearchChange}
        />
      </View>
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieItem title={item.title} year={item.year} genre={item.genre} />
        )}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingVertical: 10,
    fontSize: 16,
  },
  flatList: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default App;