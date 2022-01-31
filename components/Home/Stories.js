import { View, Text, ScrollView,Image, StyleSheet } from 'react-native';
import React , {useState, useEffect} from 'react';
import {firebase, db} from '../../firebase';

const Stories = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.collection('users')
        .onSnapshot(snapshot => {
            setUsers(snapshot.docs.map(user =>
            (
                {
                    id: user.id, ...user.data()
                }
            )))
        })
    }, [])

    return (
        <View style={{ marginTop: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    users.map((user, index) => (
                        <View key={index} style={{alignItems: 'center'}}>
                            <Image
                                source={{ uri: user.profile_picture }}
                                style={styles.story}
                            />
                            <Text style={{color: 'white'}}>{user.username.length > 11 ? user.username.length(0, 6).toLowerCase() + '...' : user.username.toLowerCase()}</Text>
                        </View>
                    ))
                }
            </ScrollView>
            <Text>Stories</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 18,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})

export default Stories;
