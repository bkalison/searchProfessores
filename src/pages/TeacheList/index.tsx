import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, AsyncStorage } from 'react-native';
import { teacherData } from '../../../mock/teacherList.json'

import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';


function TeacherList(){
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])
    const [isFiltersVisible, setIsFilterVisible] = useState(false)

    const [subject, setSubject] = useState('')



    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response=>{
            if (response){
                const favoritedTeachers  = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) =>{
                    return teacher.id                
                })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites()
    })

    function handleToggleFiltersVisible(){
        setIsFilterVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit(){
        loadFavorites();
        console.log({
            subject,
        })
        
        console.log('here ?')

      

        setIsFilterVisible(false);
        setTeachers(teacherData as any)
    }

    useEffect(() => {
        setTeachers(teacherData as any)
    }, [])

    return (
        <View style={styles.container}>
            <PageHeader
               
                title="Professores Cadastrados"
            >
                { isFiltersVisible && (

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                    
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            style={styles.input}
                            placeholder="Qual a matéria ?"
                            placeholderTextColor="#c1bccc"
                        />

                    </View>

                )}


            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }} 
            >
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                })}

            </ScrollView>
        </View>
    )
}

export default TeacherList;