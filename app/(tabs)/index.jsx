import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import services from '../../utils/services'
import { client } from '../../utils/KindeConfig';
import { Link, useRouter } from 'expo-router'
import { supabase } from '../../utils/SupabaaseConfig';

export default function Home() {
    const router=useRouter();
    useEffect(() => {
        checkUserAUth();
        getCategoryList();
    }, [])
    const checkUserAUth = async () => {
        try {
            const result = await services.getData('login');
            console.log('Login status:', result);
            if (result !== 'true') {
                router.replace('/login');
            }
        } catch (error) {
            console.error('Error checking user authentication:', error);
            alert(JSON.stringify(error))
        }
    };

    const handleLogout = async () => {
        const loggedOut = await client.logout();
        if (loggedOut) {
            await services.getData('login','false');
            router.replace('/login');
        }
    };

    const getCategoryList = async () => {
        const user=await client.getUserDetails();
        const {data, error} = await supabase
        .from('Category')
        .select('*')
        .eq('created_by',user.email);

        console.log("Data",data)
    }
    
    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={styles.text}>Welcome to Budget Better</Text>
            <Button
            title='Logout'
            onPress={handleLogout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35
    }
})