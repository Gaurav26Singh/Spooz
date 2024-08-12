import * as React from 'react';
import { Dimensions, Text, View, RefreshControl } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Carouselrn() {
    const width = Dimensions.get('window').width;
    const[arr,setarr] = React.useState([]);
    //cricket
    const getCricketLive = async()=>{
        const url = 'https://sports-live-scores.p.rapidapi.com/cricket/live';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b8f94da13cmsh99ad1a4892f4a59p1c8a5bjsn33ff946c8249',
		'x-rapidapi-host': 'sports-live-scores.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.matches.length>0)
        {
            let curr = result.matches[0];
            curr["Home Score"] = curr["Away Innings"]["inning1"]["score"] + "-" + curr["Away Innings"]["inning1"]["wickets"] + " "+ `(${curr["Away Innings"]["inning1"]["overs"]})`;
            if(curr["Home Innings"]!='None')curr["Away Score"] = curr["Home Innings"]["inning1"]["score"] + "-" + curr["Home Innings"]["inning1"]["wickets"] + " "+ `(${curr["Home Innings"]["inning1"]["overs"]})`;
            // if( !curr["Home Score"]) curr["Home Score"] = "";
            setarr(arr=>[...arr,result.matches[0]]);
        }

	// console.log(result);
} catch (error) {
	console.error(error);
}
    }
    //football
    const getFootballLive = async()=>{
        const url = 'https://sports-live-scores.p.rapidapi.com/football/live';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b8f94da13cmsh99ad1a4892f4a59p1c8a5bjsn33ff946c8249',
		'x-rapidapi-host': 'sports-live-scores.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.matches.length>0)
        {
            // let astr = result.matches[0]["Away Team"];
            // let hstr = result.matches[0]["Home Team"];
            // let aacronym = astr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
            // let hacronym = hstr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
            // result.matches[0]["Away Team"] = aacronym;
            // result.matches[0]["Home Team"] = hacronym;
            setarr(arr=>[...arr,result.matches[0]]);
        }
    // console.log(result);
} catch (error) {
	console.error(error);
}
    }
    //Table Tennis
    const getTTLive = async()=>{
        const url = 'https://sports-live-scores.p.rapidapi.com/tabletennis/live';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b8f94da13cmsh99ad1a4892f4a59p1c8a5bjsn33ff946c8249',
		'x-rapidapi-host': 'sports-live-scores.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.matches.length>0)
    {
        let curr = result.matches[0];
        let cs = curr["Status"][0]-'1';
        console.log(cs);
        curr["as"] =  curr["Away Score"]
        curr["hs"] = curr["Home Score"]
        if(cs==1){
            curr["Away Score"] = curr["1st Set P1"]
            curr["Home Score"] = curr["1st Set P2"]
        }
        else if(cs==2) {
            curr["Away Score"] = curr["2nd Set P1"]
            curr["Home Score"] = curr["2nd Set P2"]
        }
        else if(cs==3){
            curr["Away Score"] = curr["3rd Set P1"]
            curr["Home Score"] = curr["3rd Set P2"]
        }
        else{
            curr["Away Score"] = curr[`${cs}th Set P1`]
            curr["Home Score"] = curr[`${cs}th Set P2`]
        }
        // let astr = result.matches[0]["Away Team"];
        // let hstr = result.matches[0]["Home Team"];
        // let aacronym = astr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        // let hacronym = hstr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        // result.matches[0]["Away Team"] = aacronym;
        // result.matches[0]["Home Team"] = hacronym;
        setarr(arr=>[...arr,result.matches[0]]);
    }
        
   
} catch (error) {
	console.error(error);
}
    }

    //BasketBall
    const getBBLive = async()=>{
        const url = 'https://sports-live-scores.p.rapidapi.com/basketball/live';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b8f94da13cmsh99ad1a4892f4a59p1c8a5bjsn33ff946c8249',
		'x-rapidapi-host': 'sports-live-scores.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.matches.length>0)
    {
        // let astr = result.matches[0]["Away Team"];
        // let hstr = result.matches[0]["Home Team"];
        // let aacronym = astr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        // let hacronym = hstr.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        // result.matches[0]["Away Team"] = aacronym;
        // result.matches[0]["Home Team"] = hacronym;
        setarr(arr=>[...arr,result.matches[0]]);
    }
	// console.log(result);
} catch (error) {
	console.error(error);
}
    }
    React.useEffect(()=>{
        getCricketLive();
        getFootballLive();
        getTTLive();
        getBBLive();
    },[])

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         getCricketLive();
    //         getFootballLive();
    //         getTTLive();
    //         getBBLive();
    //     }, 15000)
    //     return () => clearInterval(interval)
    //   }, []);
    return (
        <View style={{height:200, marginBottom:15, margin:'auto'}}>
            <Carousel
                loop
                width={width-40}
                autoPlay={true}
                data={arr}
                scrollAnimationDuration={2000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({index }) => (
                    <View
                        style={{
                            padding:15,
                            flex: 1,
                            backgroundColor:'#f8f9fa',
                            borderRadius:10,
                            
                        }}
                    >
                        <View>
                          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:"100%",marginBottom:10, height:'auto',alignItems:'flex-start'}}>
                          <Text style={{fontSize:13, fontWeight:'bold', width:'85%'}}>{arr[index]["League"]+`, ${new Date().getFullYear()}`}</Text>
                          <Text style={{color:'red', fontSize:13, fontWeight:'bold', width:'15%'}}><MaterialCommunityIcons name="record-circle-outline"/>Live</Text>
                        </View>  
                        <View style={{height:'50%', display:'flex', gap:20, flexDirection:'column', marginTop:15}}>
                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:"95%"}}>
                             <View style={{display:'flex',flexDirection:'row',gap:10}}>
                             <Text style={{backgroundColor:'blue', color:'white', paddingLeft:5, paddingRight:5, fontSize:14}}>T1</Text>   
                             <Text style={{fontSize:16}}>{arr[index]["Away Team"]}</Text>
                             <Text style={{fontWeight:'500'}}>{arr[index]["as"]}</Text>
                             </View>
                             <Text style={{fontSize:16}}>{arr[index]["Away Score"]}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:"95%"}}>
                            <View style={{display:'flex',flexDirection:'row',gap:10}}>
                            <Text style={{backgroundColor:'darkorange', color:'white', paddingLeft:5, paddingRight:5, fontSize:14}}>T2</Text>   
                            <Text style={{fontSize:16}}>{arr[index]["Home Team"]}</Text>
                            <Text style={{fontWeight:'500'}}>{arr[index]["hs"]}</Text>
                            </View>
                           
                            <Text style={{fontSize:16}}>{arr[index]["Home Score"]}</Text>
                            </View>
                        </View>
                        <Text style={{color:'navy', fontWeight:'bold', fontSize:14 ,marginTop:5}}>{arr[index]["Status"]}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default Carouselrn;