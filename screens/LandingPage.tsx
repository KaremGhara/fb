import {View,Text, StyleSheet, Image, Pressable, ScrollView, ActivityIndicator} from 'react-native';
import Logo from '../components/Logo';
// import { useDispatch } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
// import {TabNavigaitor} from '../components/TabNavigator'
import stylesSheet from '../components/stylesSheet'
import auth from '@react-native-firebase/auth'
import { memo, useEffect, useState } from 'react';
import Card from '../components/Card';
import { fetchPosts } from '../fetchDatas/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import {getPostsStat,getAllPosts} from '../redux/newsSlicer'
import { FlatList } from 'react-native-gesture-handler';

                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function renderItems({ item, index }) {
    if (!item.articles || !item.articles[index] || !item.articles[index].urlToImage) {
      // Handle the case when the required data is not available
      return null; // or return a placeholder component
    }
  
    let props = {
      image: item.articles[index].urlToImage,
      time: item.articles[index].publishedAt,
      title: item.articles[index].title,
      headlineSource: item.articles[index].source.id,
      content: item.articles[index].content,
      text: "NAVIGATE TO DISPATCH",
    };
  
    return <Card props={props} />;
  }




const LandingPage = ()=>{
    const dispatch= useDispatch();
    

    // const postStatus=useSelector(getPostsStat);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    const posts:any[]=useSelector(state=>state.article.posts);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    const isLoading=useSelector(state=>state.article.isLoading)

    useEffect(() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
        dispatch(fetchPosts()).then(() => {
        //   console.log(posts[0].articles[0].author);
        });
      }, [dispatch]);
      
   
    
  
    return(
        <View>
            <View style={styles.header}>
                <Logo style={styles.loginLogo}/>
                
            </View>
            <View style={styles.sortView}>
              <Text style={styles.textSort}>Sorty by </Text>
             <Pressable style={styles.image}>
             <Image    source={require("../assets/Forward.png")}/>

             </Pressable>

                

                
            </View>
            <View>
                <Text style={styles.lastLogin}>Last login:</Text>
            </View>
            <View>
                <Text style={styles.preCardText}>Top Headlines in Israel</Text>
                <View style={{margin:20}}>
  
                {/* {postStatus === "loading" ? (
  <ActivityIndicator size="large" color="#0000ff" />
) : (
    <ScrollView>
        {
  posts.map((post, index) => {
    console.log(post.articles[index].urlToImage);
    let props = {
    image:post.articles[index].urlToImage,
      time: post.articles[index].publishedAt,
      title: post.articles[index].title,
      headlineSource: post.articles[index].source.id,
      content: post.articles[index].content,
      text: "NAVIGATE TO DISPATCH",
    };

    return <Card key={index} props={props} />;
  
  })
}
  </ScrollView>
)} */}

{isLoading ? <ActivityIndicator size="large" color="#0000ff" />: <FlatList
              data={posts}
              renderItem={renderItems}
              keyExtractor={(item,index)=>index.toString()}
              />  }
              


                
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    preCardText:{
        fontSize:24,
        fontFamily:'Roboto',
        fontWeight:'500',
        color:'#262146',
        marginLeft:10
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        left:17,

    },
    header:{
        backgroundColor:'#262146',
        height:74,
        justifyContent:'center',
        alignItems:'center',

        
    },
    loginLogo:{
        width:50.14,
        height:50,
        marginRight:340
        
    },
    lastLogin:{
        fontSize:12,
        fontWeight:'500',
        fontFamily:'Roboto',
        color:'#5A5A89'
    },
    sortView:{
        height:44,
        flexDirection:'row',
        display:'flex',
        backgroundColor:'#FFFFFF',
        width:'100%'
    },
    textSort:{
        fontSize:16,
        fontFamily:'Roboto',
        fontWeight:'400',
        fontStyle:'normal',
        color:'#5A5A89',
        textAlign:'center',
        top:11,
        left:16
    }
})


export default LandingPage;