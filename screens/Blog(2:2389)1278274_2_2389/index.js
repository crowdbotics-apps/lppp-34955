import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_2390} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f536/a1f8/d7d9eb4d25495d6d688ea6909024c16d"
        }}
        style={styles.ImageBackground_2_2391}
      />
      <View style={styles.View_2_2393}>
        <View style={styles.View_2_2394}>
          <View style={styles.View_2_2395} />
        </View>
        <View style={styles.View_2_2396}>
          <View style={styles.View_2_2397}>
            <View style={styles.View_2_2398}>
              <Text style={styles.Text_2_2398}>Manifest your dream person</Text>
            </View>
          </View>
          <View style={styles.View_2_2399}>
            <Text style={styles.Text_2_2399}>
              Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
              tempor rarylet podofcast.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a6/0c4d/70ca09970746cb639f3b043b40ec5ff6"
          }}
          style={styles.ImageBackground_2_2400}
        />
      </View>
      <View style={styles.View_2_2401}>
        <View style={styles.View_2_2402}>
          <View style={styles.View_2_2403} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd6/31f8/555889619835ec799c713bf9c098e58a"
            }}
            style={styles.ImageBackground_2_2404}
          />
        </View>
        <View style={styles.View_2_2405}>
          <View style={styles.View_2_2406}>
            <View style={styles.View_2_2407}>
              <Text style={styles.Text_2_2407}>
                Where to meet other singles
              </Text>
            </View>
          </View>
          <View style={styles.View_2_2408}>
            <Text style={styles.Text_2_2408}>
              Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
              tempor rarylet podofcast.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_2409}>
        <View style={styles.View_2_2410}>
          <View style={styles.View_2_2411} />
        </View>
        <View style={styles.View_2_2412}>
          <View style={styles.View_2_2413}>
            <View style={styles.View_2_2414}>
              <Text style={styles.Text_2_2414}>The Zero Date Hype Line</Text>
            </View>
          </View>
          <View style={styles.View_2_2415}>
            <Text style={styles.Text_2_2415}>
              Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
              tempor rarylet podofcast.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7137/aa5f/25dbeba5161c50eb069c05ebbcac97ec"
          }}
          style={styles.ImageBackground_2_2416}
        />
      </View>
      <View style={styles.View_2_2417}>
        <View style={styles.View_2_2418}>
          <View style={styles.View_2_2419} />
        </View>
        <View style={styles.View_2_2420}>
          <View style={styles.View_2_2421}>
            <View style={styles.View_2_2422}>
              <Text style={styles.Text_2_2422}>Manifest your dream person</Text>
            </View>
          </View>
          <View style={styles.View_2_2423}>
            <Text style={styles.Text_2_2423}>
              Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
              tempor rarylet podofcast.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/2b0d/d106c7e91405868e03069935478c50b3"
          }}
          style={styles.ImageBackground_2_2424}
        />
      </View>
      <View style={styles.View_2_2425}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b07/80f2/17bf7ba6eb98ebfea46df30940c15256"
          }}
          style={styles.ImageBackground_2_2426}
        />
      </View>
      <View style={styles.View_2_2430}>
        <View style={styles.View_2_2431} />
        <View style={styles.View_2_2432}>
          <View style={styles.View_2_2433}>
            <Text style={styles.Text_2_2433}>Explore</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_2434}>
        <Text style={styles.Text_2_2434}>Date Night Resources</Text>
      </View>
      <View style={styles.View_2_2435}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0420/8d98/3682922cf85b5e7bf614cc0db75479ba"
          }}
          style={styles.ImageBackground_2_2436}
        />
        <View style={styles.View_2_2437}>
          <View style={styles.View_2_2438}>
            <Text style={styles.Text_2_2438}>
              Check out the delicious recipe
            </Text>
          </View>
          <View style={styles.View_2_2439}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56d/bf86/ae7818d74bd8815f053e1e0d90214d2b"
              }}
              style={styles.ImageBackground_2_2440}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b24f/cb0b/e6ea99a0cae3b52f227faed492b52273"
              }}
              style={styles.ImageBackground_2_2441}
            />
          </View>
          <View style={styles.View_2_2442}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4a/ecc8/9a1a1195297d9fc0b1041e7dabbdb57e"
              }}
              style={styles.ImageBackground_2_2443}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98b6/40f8/029a5a36fce50b0572d1729153b25230"
              }}
              style={styles.ImageBackground_2_2444}
            />
          </View>
          <View style={styles.View_2_2447}>
            <Text style={styles.Text_2_2447}>
              Mixed Tropical Fruit Salad with Superfood Boosts{" "}
            </Text>
          </View>
          <View style={styles.View_2_2448}>
            <View style={styles.View_2_2449}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56d/bf86/ae7818d74bd8815f053e1e0d90214d2b"
                }}
                style={styles.ImageBackground_2_2450}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a150/69f0/4c6bd984e4ff4095020c8444436f7365"
                }}
                style={styles.ImageBackground_2_2451}
              />
            </View>
            <View style={styles.View_2_2452}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4a/ecc8/9a1a1195297d9fc0b1041e7dabbdb57e"
                }}
                style={styles.ImageBackground_2_2453}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c635/1f86/9a579dea373c91ad891fe585b1664507"
                }}
                style={styles.ImageBackground_2_2454}
              />
            </View>
            <View style={styles.View_2_2457}>
              <Text style={styles.Text_2_2457}>
                Big and Juicy Wagyu Beef Cheeseburger
              </Text>
            </View>
          </View>
          <View style={styles.View_2_2458}>
            <View style={styles.View_2_2459}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56d/bf86/ae7818d74bd8815f053e1e0d90214d2b"
                }}
                style={styles.ImageBackground_2_2460}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a3b/b9df/2d3102535296b19f56392ff159bac5d0"
                }}
                style={styles.ImageBackground_2_2461}
              />
            </View>
            <View style={styles.View_2_2462}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4a/ecc8/9a1a1195297d9fc0b1041e7dabbdb57e"
                }}
                style={styles.ImageBackground_2_2463}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98b6/40f8/029a5a36fce50b0572d1729153b25230"
                }}
                style={styles.ImageBackground_2_2464}
              />
            </View>
            <View style={styles.View_2_2467}>
              <Text style={styles.Text_2_2467}>
                Healthy Japanese Fried Rice with Asparagus
              </Text>
            </View>
          </View>
          <View style={styles.View_2_2468}>
            <View style={styles.View_2_2469}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56d/bf86/ae7818d74bd8815f053e1e0d90214d2b"
                }}
                style={styles.ImageBackground_2_2470}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcaa/5d28/9f98499430e89fd8feb14267318cb30c"
                }}
                style={styles.ImageBackground_2_2471}
              />
            </View>
            <View style={styles.View_2_2472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4a/ecc8/9a1a1195297d9fc0b1041e7dabbdb57e"
                }}
                style={styles.ImageBackground_2_2473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c635/1f86/9a579dea373c91ad891fe585b1664507"
                }}
                style={styles.ImageBackground_2_2474}
              />
            </View>
            <View style={styles.View_2_2477}>
              <Text style={styles.Text_2_2477}>
                Cauliflower Walnut Vegetarian Taco Meat
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_2478}>
          <View style={styles.View_2_2479}>
            <View style={styles.View_2_2480} />
            <View style={styles.View_2_2481} />
          </View>
          <View style={styles.View_2_2482}>
            <View style={styles.View_2_2483}>
              <Text style={styles.Text_2_2483}>
                Deliciousness to your inbox
              </Text>
            </View>
            <View style={styles.View_2_2484}>
              <Text style={styles.Text_2_2484}>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </Text>
            </View>
            <View style={styles.View_2_2485} />
            <View style={styles.View_2_2486}>
              <Text style={styles.Text_2_2486}>Your email address...</Text>
            </View>
            <View style={styles.View_2_2487}>
              <View style={styles.View_2_2488} />
              <View style={styles.View_2_2489}>
                <Text style={styles.Text_2_2489}>Subscribe</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("251%") },
  View_2_2390: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("143%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_2391: {
    width: wp("6%"),
    height: hp("17%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_2_2393: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2_2394: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2395: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-13%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  View_2_2396: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2397: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2398: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2399: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_2399: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2400: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-21%")
  },
  View_2_2401: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("128%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2_2402: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2403: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-13%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  ImageBackground_2_2404: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_2_2405: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2406: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2407: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2407: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_2_2408: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_2408: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2409: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("128%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2_2410: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2411: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-13%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  View_2_2412: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2413: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2414: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2415: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_2415: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2416: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-12%"),
    resizeMode: "cover"
  },
  View_2_2417: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2_2418: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2419: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-13%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  View_2_2420: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2421: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_2422: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2423: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_2423: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2424: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%")
  },
  View_2_2425: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("39%")
  },
  ImageBackground_2_2426: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_2430: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("205%")
  },
  View_2_2431: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_2432: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_2_2433: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_2433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_2_2434: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_2_2434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_2_2435: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("160%"),
    minHeight: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("251%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_2_2436: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_2_2437: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_2438: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.44,
    textTransform: "none"
  },
  View_2_2439: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_2_2440: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2441: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_2442: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("19%")
  },
  ImageBackground_2_2443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2444: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_2447: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_2_2447: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2448: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("17%")
  },
  View_2_2449: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2450: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2451: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_2452: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%")
  },
  ImageBackground_2_2453: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2454: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_2457: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_2457: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2458: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("17%")
  },
  View_2_2459: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2460: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2461: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_2462: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%")
  },
  ImageBackground_2_2463: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2464: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_2467: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_2467: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2468: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("17%")
  },
  View_2_2469: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2470: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2471: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_2472: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%")
  },
  ImageBackground_2_2473: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_2474: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_2477: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_2477: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_2478: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("75%")
  },
  View_2_2479: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_2480: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 222, 248, 1)"
  },
  View_2_2481: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 222, 248, 1)"
  },
  View_2_2482: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("11%")
  },
  View_2_2483: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.92,
    textTransform: "none"
  },
  View_2_2484: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_2484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2485: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_2486: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_2486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_2_2487: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("29%")
  },
  View_2_2488: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_2489: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_2489: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
