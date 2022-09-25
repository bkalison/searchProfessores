import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native'

import api from '../../services/api'

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import landingImg from '../../../assets/images/landing.png';
import studyIcon from '../../../assets/images/icons/study.png';
import heartIcon from '../../../assets/images/icons/heart.png';

import styles from './styles';

function Landing(){
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() =>{
        api.get('connections').then(response => {
            const {total} = response.data

            setTotalConnections(total)
        })
    }, [])


    function handleNavigateToGiveClasses(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigate('Study')
    }

    return(
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg}/>
            
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que você deseja fazer ?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image style = {styles.iconButtonStudy}source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Bora para os estudos !
                    </Text>
                    
                </RectButton>
            </View>

            
        </View>

    )
};

export default Landing;