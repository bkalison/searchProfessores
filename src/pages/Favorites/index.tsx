import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';



function Favorites(){
    const [favorites, setFavorites] = useState([])

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(resp=>{
            if (resp){
                const favoritedTeachers  = JSON.parse(resp);
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    return (
        <View>
            <PageHeader title="Meus professores favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }} 
            >
            
            {favorites.map((teacher:Teacher) => {
                return (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    />
                )
            })}

            </ScrollView>
        </View>
    )
}

export default Favorites;