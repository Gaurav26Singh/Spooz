import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const live = () => {
  const [carr, setcarr] = React.useState([]);
  const [barr, setbarr] = React.useState([]);
  const [farr, setfarr] = React.useState([]);
  const criclive = async () => {
    const url = "https://cricket-api17.p.rapidapi.com/api/v2/getLiveMatches";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "be68c49c50mshfee072ccc7099f5p1f44a9jsncb8f354c108e",
        "x-rapidapi-host": "cricket-api17.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.res["matches"]);
      let len = result.data.length;
      for (let i = 0; i < len; i++) {
        if (result.data[i]["teama_logo_url"] == null) {
          result.data[i]["teama_logo_url"] =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0eGzK4VwkIpawU0wd6syLmnH_raJN8-tWxegNq99buPi4f3jfGI2NOhUJ_WrE3wo6Cw&usqp=CAU";
        }
        if (result.data[i]["teamb_logo_url"] == null) {
          result.data[i]["teamb_logo_url"] =
            "https://pbs.twimg.com/profile_images/1206105594899263488/ch1zedIl_400x400.jpg";
        }
        setcarr((arr) => [...arr, result.data[i]]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const basketlive = async () => {
    const url = 'https://basketapi1.p.rapidapi.com/api/basketball/matches/live';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '634de930c2mshb304f4b1693e91ep1a029ajsn44c4d1240a77',
        'x-rapidapi-host': 'basketapi1.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      let len = result.events.length;
      len = Math.min(len,5);
      //console.log(result[0]);
      for (let i = 0; i < len; i++) {
        result.events[i]["teama_logo_url"] = 'https://static.wikia.nocookie.net/animated_inanimate_battle/images/b/b6/Team_1_Icon.png/revision/latest/scale-to-width/360?cb=20210214035643'
        result.events[i]["teamb_logo_url"] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStY71VBW0QcDtxtA08exTXmqvfctc4-K_DZXFQRvZqWI-3kInimN591YW_lJBVyI0dFrI&usqp=CAU'
        setbarr((arr) => [...arr, result.events[i]]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const footlive = async () => {
    const url = 'https://footapi7.p.rapidapi.com/api/matches/live';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'be68c49c50mshfee072ccc7099f5p1f44a9jsncb8f354c108e',
        'x-rapidapi-host': 'footapi7.p.rapidapi.com'
      }
    };
    

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      let len = result.events.length;
      len = Math.min(len,5);
      //console.log(result[0]);
      for (let i = 0; i < len; i++) {
        result.events[i]["teama_logo_url"] = 'https://static.wikia.nocookie.net/animated_inanimate_battle/images/b/b6/Team_1_Icon.png/revision/latest/scale-to-width/360?cb=20210214035643'
        result.events[i]["teamb_logo_url"] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStY71VBW0QcDtxtA08exTXmqvfctc4-K_DZXFQRvZqWI-3kInimN591YW_lJBVyI0dFrI&usqp=CAU'
        setfarr((arr) => [...arr, result.events[i]]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    criclive();
    basketlive();
    footlive();
  }, []);

  return (
    <ScrollView style={{ marginTop: 20, height: "auto" }}>
      <View>
         <View style={{display:'flex',flexDirection:'row', gap:3,marginBottom:15,paddingLeft:15,}}>
         <Text style={{fontSize:16, fontWeight:'bold'}}>Live Cricket </Text>
         <MaterialCommunityIcons name="cricket" size={20} color="black" style={{transform: [{ rotate: '90deg'}]}} />
         </View>
        {carr.map((val, idx) => (
          <View
            key={idx}
            style={{
              height: 235,
              width: "93%",
              backgroundColor:'#F3F8FF',
              margin: "auto",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "grey",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 7,
                backgroundColor: "#add7f6",
                width: "100%",
                paddingTop: 8,
                paddingBottom: 8,
                justifyContent: "center",
                borderTopLeftRadius:10,
                borderTopRightRadius:10
              }}
            >
              <Text style={{fontSize: 12, fontWeight: "500" }}>{val["title"]}</Text>
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                {val["series_name"]}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 25,
                justifyContent: "space-between",
                width: "95%",
                margin: "auto",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: val["teama_logo_url"] }}
                    style={{ height: 35, width: 50, marginBottom: 3,objectFit:'contain' }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                    {val["teama_name_abbr"]}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 13 }}>
                  {val["teama_score"]["complete_score"]}
                </Text>
                <Text style={{fontSize: 14, fontWeight:'400'}}>
                  ({val["teama_score"]["overs"]})
                </Text>
               </View>
              </View>
              <Text style={{ marginTop: 20, fontWeight: "600", fontSize: 17 }}>
                V/S
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: val["teamb_logo_url"] }}
                    style={{ height: 35, width:50, marginBottom: 3, objectFit:'contain' }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                    {val["teamb_name_abbr"]}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 15 }}>
                  {val["teamb_score"]["complete_score"]}
                </Text>
                <Text style={{fontSize: 14, fontWeight:'400'}}>
                  ({val["teamb_score"]["overs"]})
                </Text>
               </View>
              </View>
            </View>
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: 15,
                fontWeight: "400",
                fontSize:11
              }}
            >
              {val["runs_needed"]}
            </Text>
          </View>
        ))}
      </View>
      <View>
      <View style={{display:'flex',flexDirection:'row', gap:3,marginBottom:15,paddingLeft:15,}}>
         <Text style={{fontSize:16, fontWeight:'bold'}}>Live Football </Text>
         <Ionicons name="football" color="black" style={{fontSize:20}} />
         </View>
        {farr.map((val, idx) => (
          <View
            key={idx}
            style={{
              height: 200,
              width: "93%",
              backgroundColor:'#F3F8FF',
              margin: "auto",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "grey",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 7,
                backgroundColor: "#add7f6",
                width: "100%",
                paddingTop: 8,
                paddingBottom: 8,
                justifyContent: "center",
                borderTopLeftRadius:10,
                borderTopRightRadius:10
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                {val["tournament"]["name"]}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 25,
                justifyContent: "space-between",
                width: "95%",
                margin: "auto",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width:"35%"
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                   <Image
                    source={{ uri: val["teama_logo_url"] }}
                    style={{ height: 27, width: 27, marginBottom: 3 }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                    {val["awayTeam"]["name"].slice(0,17)}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 17 }}>
                  {val["awayScore"]["current"]}
                </Text>
               </View>
              </View>
              <View style={{width:"10%",display:'flex', flexDirection:'row', justifyContent:'center'}}>
              <Text style={{ marginTop: 15, fontWeight: "600", fontSize: 15 }}>
                V/S
              </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width:"35%"
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                   <Image
                    source={{ uri: val["teamb_logo_url"] }}
                    style={{ height: 27, width: 27, marginBottom: 3 }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                  {val["homeTeam"]["name"].slice(0,17)}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 17 }}>
               {val["homeScore"]["current"]}
                </Text>
               </View>
              </View>
            </View>
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: 16,
                fontWeight: "400",
              }}
            >
              {val["status"]["type"]} : {val["status"]["description"]}
            </Text>
          </View>
        ))}
      </View>
      <View>
      <View style={{display:'flex',flexDirection:'row', gap:3,marginBottom:15,paddingLeft:15,}}>
         <Text style={{fontSize:16, fontWeight:'bold'}}>Live Basketball </Text>
         <Ionicons name="basketball" color="black" style={{fontSize:20}} />
         </View>
      {barr.map((val, idx) => (
          <View
            key={idx}
            style={{
              height: 220,
              width: "93%",
              backgroundColor:'#F3F8FF',
              margin: "auto",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "grey",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 7,
                backgroundColor: "#add7f6",
                width: "100%",
                paddingTop: 8,
                paddingBottom: 8,
                justifyContent: "center",
                borderTopLeftRadius:10,
                borderTopRightRadius:10
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                {val["tournament"]["name"]}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 25,
                justifyContent: "space-between",
                width: "95%",
                margin: "auto",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width:"35%"
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                   <Image
                    source={{ uri: val["teama_logo_url"] }}
                    style={{ height: 27, width: 27, marginBottom: 3 }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                    {val["awayTeam"]["name"].slice(0,17)}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 17 }}>
                  {val["awayScore"]["current"]}
                </Text>
               </View>
              </View>
              <View style={{width:"10%",display:'flex', flexDirection:'row', justifyContent:'center'}}>
              <Text style={{ marginTop: 15, fontWeight: "600", fontSize: 15 }}>
                V/S
              </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  width:"35%"
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                   <Image
                    source={{ uri: val["teamb_logo_url"] }}
                    style={{ height: 27, width: 27, marginBottom: 3 }}
                  />
                  <Text style={{ fontWeight: "500", fontSize: 13 }}>
                  {val["homeTeam"]["name"].slice(0,17)}
                  </Text>
                </View>
                <View style={{display:'flex', flexDirection:'column',gap:5,alignItems:'center'}}>
               <Text style={{ fontWeight: "500", fontSize: 17 }}>
               {val["homeScore"]["current"]}
                </Text>
               </View>
              </View>
            </View>
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: 16,
                fontWeight: "400",
              }}
            >
              {val["status"]["type"]} : {val["status"]["description"]}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default live;
