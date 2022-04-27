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
      <View style={styles.View_2_4069}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ba7/b5a7/234f83eddbb768e09bf95b112306d291"
          }}
          style={styles.ImageBackground_2_4070}
        />
      </View>
      <View style={styles.View_2_4071}>
        <View style={styles.View_2_4072}>
          <View style={styles.View_2_4073}>
            <View style={styles.View_2_4074}>
              <Text style={styles.Text_2_4074}>Video Speed Dating</Text>
            </View>
            <View style={styles.View_2_4075}>
              <View style={styles.View_2_4076}>
                <View style={styles.View_2_4077}>
                  <Text style={styles.Text_2_4077}>
                    The Date Before The Date
                  </Text>
                </View>
              </View>
              <View style={styles.View_2_4078}>
                <View style={styles.View_2_4079}>
                  <Text style={styles.Text_2_4079}>
                    Get up to 6 dates in 30 minutes. Mondays at 7:00 PM{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_4080}>
        <View style={styles.View_I2_4080_33_6173}>
          <View style={styles.View_I2_4080_33_6176}>
            <Text style={styles.Text_I2_4080_33_6176}>Enter your Zip Code</Text>
          </View>
        </View>
        <View style={styles.View_I2_4080_33_6177}>
          <View style={styles.View_I2_4080_33_6178}>
            <Text style={styles.Text_I2_4080_33_6178}>Get Started</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_4081}>
        <View style={styles.View_2_4082}>
          <View style={styles.View_2_4083}>
            <View style={styles.View_2_4084}>
              <View style={styles.View_2_4085}>
                <Text style={styles.Text_2_4085}>day</Text>
              </View>
              <View style={styles.View_2_4086}>
                <Text style={styles.Text_2_4086}>00</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_4087}>
            <View style={styles.View_2_4088}>
              <View style={styles.View_2_4089}>
                <Text style={styles.Text_2_4089}>hr</Text>
              </View>
              <View style={styles.View_2_4090}>
                <Text style={styles.Text_2_4090}>12 </Text>
              </View>
            </View>
            <View style={styles.View_2_4091}>
              <View style={styles.View_2_4092}>
                <Text style={styles.Text_2_4092}>min</Text>
              </View>
              <View style={styles.View_2_4093}>
                <Text style={styles.Text_2_4093}>05 </Text>
              </View>
            </View>
            <View style={styles.View_2_4094}>
              <View style={styles.View_2_4095}>
                <Text style={styles.Text_2_4095}>sec</Text>
              </View>
              <View style={styles.View_2_4096}>
                <Text style={styles.Text_2_4096}>07</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2_4097}>
          <Text style={styles.Text_2_4097}>:</Text>
        </View>
        <View style={styles.View_2_4098}>
          <Text style={styles.Text_2_4098}>:</Text>
        </View>
        <View style={styles.View_2_4099}>
          <Text style={styles.Text_2_4099}>:</Text>
        </View>
      </View>
      <View style={styles.View_2_4100}>
        <View style={styles.View_2_4101}>
          <Text style={styles.Text_2_4101}>
            Let’s confirm Date Night Is happening in your city this week
          </Text>
        </View>
      </View>
      <View style={styles.View_2_4102}>
        <View style={styles.View_2_4103}>
          <View style={styles.View_2_4104} />
          <View style={styles.View_2_4105}>
            <View style={styles.View_2_4106}>
              <View style={styles.View_2_4107}>
                <Text style={styles.Text_2_4107}>Date Night Login</Text>
              </View>
            </View>
            <View style={styles.View_2_4108}>
              <View style={styles.View_2_4109}>
                <Text style={styles.Text_2_4109}>Sign up - It’s Free!</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2_4110}>
          <View style={styles.View_2_4111}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fff8/8ee4/c72339490e388a64c0b14fb51cba3b8c"
              }}
              style={styles.ImageBackground_2_4112}
            />
            <View style={styles.View_2_4113}>
              <Text style={styles.Text_2_4113}>Quizzes</Text>
            </View>
          </View>
          <View style={styles.View_2_4114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d00e/0d01/ad89b18e9c86900def5cbc2dc723546d"
              }}
              style={styles.ImageBackground_2_4115}
            />
            <View style={styles.View_2_4116}>
              <Text style={styles.Text_2_4116}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_2_4117}>
            <View style={styles.View_2_4118}>
              <Text style={styles.Text_2_4118}>About</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/0186/c5c0d97334310a1ca0abde3a330af4e2"
              }}
              style={styles.ImageBackground_2_4119}
            />
          </View>
          <View style={styles.View_2_4120}>
            <View style={styles.View_2_4121}>
              <Text style={styles.Text_2_4121}>Events</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb9e/9021/e9e6efa2be4f2bd836154f08e6577d7a"
              }}
              style={styles.ImageBackground_2_4122}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19da/6179/753d792a725f357f869af927decd026b"
            }}
            style={styles.ImageBackground_2_4123}
          />
        </View>
        <View style={styles.View_2_4129}>
          <Text style={styles.Text_2_4129}>The Zero Date</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c66f/49bb/a13fbbfbd153df6555cef3ac26df5bfd"
          }}
          style={styles.ImageBackground_2_4130}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_2_4069: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("21%")
  },
  ImageBackground_2_4070: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4071: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4072: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4073: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4074: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4074: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_2_4075: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_2_4076: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4077: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4077: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_2_4078: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_2_4079: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4079: {
    color: "rgba(71, 84, 103, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4080: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4080_33_6173: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  View_I2_4080_33_6176: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_4080_33_6176: {
    color: "rgba(71, 84, 103, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_4080_33_6177: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 170, 251, 1)"
  },
  View_I2_4080_33_6178: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_4080_33_6178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4081: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("73%")
  },
  View_2_4082: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4083: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4084: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4085: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_2_4085: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4086: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4086: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4087: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_2_4088: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4089: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_2_4089: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4090: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4090: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4091: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_4092: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_2_4092: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4093: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4093: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4094: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_2_4095: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_2_4095: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4096: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4096: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4097: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_2_4097: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4098: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4098: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4099: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_2_4099: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4100: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("90%")
  },
  View_2_4101: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4102: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_4103: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%")
  },
  View_2_4104: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4105: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4106: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4107: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_4107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4108: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 170, 251, 1)"
  },
  View_2_4109: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_4109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4110: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_2_4111: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%")
  },
  ImageBackground_2_4112: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4113: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4114: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_2_4115: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4116: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4117: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_2_4118: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_4119: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4120: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  View_2_4121: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_4121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_4122: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_4123: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_2_4129: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_4129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.4000000000000001,
    textTransform: "none"
  },
  ImageBackground_2_4130: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
