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
      <View style={styles.View_2_3036} />
      <View style={styles.View_2_3126}>
        <View style={styles.View_2_3127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ddf/de66/c5b663e6de9e09db63ce4d9d851d1e2d"
            }}
            style={styles.ImageBackground_2_3128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d788/4a1b/866ab9b987e3dd868e59396d56a55a58"
            }}
            style={styles.ImageBackground_2_3129}
          />
          <View style={styles.View_2_3133}>
            <Text style={styles.Text_2_3133}>#SingleArtists</Text>
          </View>
          <View style={styles.View_2_3134}>
            <Text style={styles.Text_2_3134}>05:00</Text>
          </View>
          <View style={styles.View_2_3135}>
            <Text style={styles.Text_2_3135}>Kevin</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a48/27ba/fb5fd30d96bd239c136cf5ed5fb4c34b"
            }}
            style={styles.ImageBackground_2_3136}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a273/97b8/eb26bb396f65a1ea600008aa616e92cb"
          }}
          style={styles.ImageBackground_2_3137}
        />
        <View style={styles.View_2_3145}>
          <View style={styles.View_2_3146} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d58/b872/10882a5c18dfebdf01ed80d7ef7a5106"
            }}
            style={styles.ImageBackground_2_3147}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/501d/abb7/ffac50f21ef354fd0581a5e4ea240ee2"
          }}
          style={styles.ImageBackground_2_3148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f151/fdda/1743532567e4889f4e31f802ea891bd9"
          }}
          style={styles.ImageBackground_2_3157}
        />
      </View>
      <View style={styles.View_2_3171}>
        <View style={styles.View_2_3172}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cba/da93/3229c3b85876eecebeb71d4118fffe6c"
            }}
            style={styles.ImageBackground_2_3173}
          />
        </View>
      </View>
      <View style={styles.View_2_3177}>
        <View style={styles.View_2_3178}>
          <Text style={styles.Text_2_3178}>03:20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3c7/7829/603caf78a1173661cb7109a592a42b87"
          }}
          style={styles.ImageBackground_2_3179}
        />
      </View>
      <View style={styles.View_2_3180} />
      <View style={styles.View_2_3181}>
        <View style={styles.View_2_3182}>
          <Text style={styles.Text_2_3182}>What to expect </Text>
        </View>
        <View style={styles.View_2_3183}>
          <View style={styles.View_2_3184}>
            <View style={styles.View_2_3185}>
              <View style={styles.View_2_3186}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd0/417e/e4c598b7272703ccbcc16bf103daeb6d"
                  }}
                  style={styles.ImageBackground_2_3187}
                />
                <View style={styles.View_2_3188}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3625/5c6d/8d234a0a89dde8606c2696d4b9731686"
                    }}
                    style={styles.ImageBackground_2_3189}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cad/94a1/834bb0dbe478267f9ab43a28c124a542"
                }}
                style={styles.ImageBackground_2_3191}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc9/be5c/ade582653b6061fe65d012482ed78d0d"
            }}
            style={styles.ImageBackground_2_3193}
          />
          <View style={styles.View_2_3195}>
            <Text style={styles.Text_2_3195}>Show up</Text>
          </View>
          <View style={styles.View_2_3196}>
            <Text style={styles.Text_2_3196}>Get Dates</Text>
          </View>
          <View style={styles.View_2_3197}>
            <Text style={styles.Text_2_3197}>Meet IRL</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bc3/4c55/69c71c92aa11bb979d28343cc9563b8b"
            }}
            style={styles.ImageBackground_2_3198}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04bd/1599/2c7a69678b9c81e6759d1879ea9b5d5b"
            }}
            style={styles.ImageBackground_2_3199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d20/fbea/b3f149bbc613f419e98b03da6c71449c"
            }}
            style={styles.ImageBackground_2_3200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d06/8634/f857c233146822d2bed00b50c017e785"
            }}
            style={styles.ImageBackground_2_3201}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d62/4949/0eb2606e15fdef1be5addf75cd29ef24"
            }}
            style={styles.ImageBackground_2_3202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fec/89e0/4847bd3dfbae03f1bab4c322995d3ea4"
            }}
            style={styles.ImageBackground_2_3203}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd1/ffc2/39020531d43f0f1f4cb05130f273ee48"
            }}
            style={styles.ImageBackground_2_3204}
          />
          <View style={styles.View_2_3205}>
            <Text style={styles.Text_2_3205}>Toggle On</Text>
          </View>
          <View style={styles.View_2_3206}>
            <View style={styles.View_2_3207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3740/ca0c/0682054044a65619b167f4b1b509635c"
              }}
              style={styles.ImageBackground_2_3208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc71/ce08/621b3455e4c7227cd4395d9d773a7ca0"
              }}
              style={styles.ImageBackground_2_3209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc71/ce08/621b3455e4c7227cd4395d9d773a7ca0"
              }}
              style={styles.ImageBackground_2_3210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc71/ce08/621b3455e4c7227cd4395d9d773a7ca0"
              }}
              style={styles.ImageBackground_2_3211}
            />
            <View style={styles.View_2_3212}>
              <Text style={styles.Text_2_3212}>The Zero Date</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be74/4078/0465c0887357cefd4010dead11109a73"
              }}
              style={styles.ImageBackground_2_3213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a36/07f9/519711edf0af68dc7c6592f88d4a8108"
              }}
              style={styles.ImageBackground_2_3216}
            />
            <View style={styles.View_2_3217}>
              <Text style={styles.Text_2_3217}>We’re Live!</Text>
            </View>
          </View>
          <View style={styles.View_2_3218}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6373/448f/085f4d37916e905201733f983cb24b01"
              }}
              style={styles.ImageBackground_2_3219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4404/e98b/d58574be8b456dfefe5fc308070d77da"
              }}
              style={styles.ImageBackground_2_3220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc08/05ed/9d005993303308ded48b5ab5119f88e4"
              }}
              style={styles.ImageBackground_2_3221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3cf/7c8a/4eb3d80a9994f17177ce53eb63cbac8e"
              }}
              style={styles.ImageBackground_2_3222}
            />
            <View style={styles.View_2_3223}>
              <View style={styles.View_2_3224} />
              <View style={styles.View_2_3225} />
              <View style={styles.View_2_3226} />
              <View style={styles.View_2_3227} />
              <View style={styles.View_2_3228} />
              <View style={styles.View_2_3229} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d60c/92a5/c34db086c7d29db8dc6e838de8bb88a4"
              }}
              style={styles.ImageBackground_2_3230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d7e/73f1/42fd5fbb071ef734d43e8879ba0a10de"
              }}
              style={styles.ImageBackground_2_3231}
            />
            <View style={styles.View_2_3232}>
              <View style={styles.View_2_3233} />
              <View style={styles.View_2_3234} />
              <View style={styles.View_2_3235} />
              <View style={styles.View_2_3236} />
              <View style={styles.View_2_3237} />
              <View style={styles.View_2_3238} />
            </View>
            <View style={styles.View_2_3239} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a77/8108/38c4a9a6a0d53b474b0dfdc8e61be8f9"
              }}
              style={styles.ImageBackground_2_3240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f0a/0494/5aa614cd635396f669e0da77892d2a95"
              }}
              style={styles.ImageBackground_2_3241}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3416/1d0f/81f8a68eb0e9a022914a5fdbed32e3b2"
              }}
              style={styles.ImageBackground_2_3242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14f5/b9d6/4d5df96d263fc9ba8bc143a246310ffa"
              }}
              style={styles.ImageBackground_2_3243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ead/0327/15e470dcdc1b67188b97ff0ed28efb4c"
              }}
              style={styles.ImageBackground_2_3244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efb6/517b/c9cdd93cec61987935f09272dffbe7fa"
              }}
              style={styles.ImageBackground_2_3245}
            />
            <View style={styles.View_2_3246}>
              <View style={styles.View_2_3247} />
              <View style={styles.View_2_3248} />
              <View style={styles.View_2_3249} />
              <View style={styles.View_2_3250} />
              <View style={styles.View_2_3251} />
              <View style={styles.View_2_3252} />
            </View>
            <View style={styles.View_2_3253}>
              <View style={styles.View_2_3254} />
              <View style={styles.View_2_3255} />
              <View style={styles.View_2_3256} />
              <View style={styles.View_2_3257} />
              <View style={styles.View_2_3258} />
              <View style={styles.View_2_3259} />
            </View>
            <View style={styles.View_2_3260}>
              <View style={styles.View_2_3261} />
              <View style={styles.View_2_3262} />
              <View style={styles.View_2_3263} />
              <View style={styles.View_2_3264} />
              <View style={styles.View_2_3265} />
              <View style={styles.View_2_3266} />
            </View>
          </View>
          <View style={styles.View_2_3267}>
            <View style={styles.View_2_3268} />
            <View style={styles.View_2_3269} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d8/da30/3e4cbc56a42ca67e016f368857ef763a"
              }}
              style={styles.ImageBackground_2_3270}
            />
          </View>
          <View style={styles.View_2_3271}>
            <Text style={styles.Text_2_3271}>Monday at 7pm</Text>
          </View>
          <View style={styles.View_2_3272}>
            <Text style={styles.Text_2_3272}>I want dates!</Text>
          </View>
          <View style={styles.View_2_3273}>
            <Text style={styles.Text_2_3273}>00 : 00 : 00: 00</Text>
          </View>
          <View style={styles.View_2_3274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a63/b993/2bc38f27b3e350d4d57287910066408a"
              }}
              style={styles.ImageBackground_2_3275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8709/769c/d0006ded5b39772dd2c0d7ca7843a324"
              }}
              style={styles.ImageBackground_2_3282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd73/f4ab/851b55569a919b24ff434a0caab01d88"
              }}
              style={styles.ImageBackground_2_3287}
            />
          </View>
          <View style={styles.View_2_3290}>
            <Text style={styles.Text_2_3290}>✿</Text>
          </View>
          <View style={styles.View_2_3291}>
            <Text style={styles.Text_2_3291}>✿</Text>
          </View>
          <View style={styles.View_2_3292}>
            <Text style={styles.Text_2_3292}>‿</Text>
          </View>
          <View style={styles.View_2_3293}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5583/64d8/fdd2d0ed3835a8139c155c35c512f33b"
              }}
              style={styles.ImageBackground_2_3294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112d/dba7/03b04f9260243d504e3febca02586b3f"
              }}
              style={styles.ImageBackground_2_3297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd35/5460/21d91888e7a72960aab740b0582bb69e"
              }}
              style={styles.ImageBackground_2_3298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f89/f602/798680803a4135c2896ddc42bf733460"
              }}
              style={styles.ImageBackground_2_3299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae4/b25a/51ec011d6739c2b894f38727cfec7ed0"
              }}
              style={styles.ImageBackground_2_3300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b5/8859/c60955c4d23f8862d0f09166a9cf2138"
              }}
              style={styles.ImageBackground_2_3301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec60/1b86/99bd5883a68818b784a1c8b71527e3a1"
              }}
              style={styles.ImageBackground_2_3302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8335/09cf/5409da2218ce471fdab29d20ee579ca6"
              }}
              style={styles.ImageBackground_2_3303}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18db/fe43/d2ff7bdb5abc6987c8900f44c202c9b9"
              }}
              style={styles.ImageBackground_2_3304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50cd/d4b8/cbaf9db4038121e7525b0b86e31b4373"
              }}
              style={styles.ImageBackground_2_3305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d153/dd79/6ecc10282f05ca341f42f69575fc1bba"
              }}
              style={styles.ImageBackground_2_3306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fbd/d9c6/7a9774ff42b0ee3bc1ca65ff2275b0e0"
              }}
              style={styles.ImageBackground_2_3307}
            />
            <View style={styles.View_2_3308}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10b/7539/7d1766bde18db35285bc66b42cf06586"
                }}
                style={styles.ImageBackground_2_3309}
              />
              <View style={styles.View_2_3313} />
            </View>
            <View style={styles.View_2_3314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10b/7539/7d1766bde18db35285bc66b42cf06586"
                }}
                style={styles.ImageBackground_2_3315}
              />
              <View style={styles.View_2_3319} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a3a/8a21/916c8584e30f56a60406081c0ead0cb6"
              }}
              style={styles.ImageBackground_2_3320}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3db/c8f2/c77e285cbb3a42346929ef29545074e8"
            }}
            style={styles.ImageBackground_2_3352}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9084/b8dc/e8577b7a0f91d220caffbb2f00919061"
            }}
            style={styles.ImageBackground_2_3353}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/85f6/ecce55b8f6e990037dcdb9158477a60a"
            }}
            style={styles.ImageBackground_2_3354}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d482/eb8a/bda9301a09067a4b1f69e9b61cc33055"
            }}
            style={styles.ImageBackground_2_3355}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a82c/eff6/6d85e0346e3f82b08df0eeeaa1d8bcf8"
            }}
            style={styles.ImageBackground_2_3356}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/594c/475f/cffba8db608d89d0c6e504299b94f312"
            }}
            style={styles.ImageBackground_2_3357}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0158/979f/a2b11e3104f5b8bf67d295d0d209ffc2"
            }}
            style={styles.ImageBackground_2_3358}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f066/95fb/6d04324e98acda6418a790d96b4b09d5"
            }}
            style={styles.ImageBackground_2_3359}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a8/502b/8c9979d1f08a708d8e15a9a8ea322daf"
            }}
            style={styles.ImageBackground_2_3360}
          />
          <View style={styles.View_2_3368}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d15d/c244/d0834f3132b7bc384fe429eaaed44bb6"
              }}
              style={styles.ImageBackground_2_3369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788e/f3eb/b282dbc4ff7e392e22278c32c4a86b6b"
              }}
              style={styles.ImageBackground_2_3370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/866f/bc7c/109f831feeac5df9f40a9df7e982839f"
              }}
              style={styles.ImageBackground_2_3371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0730/d018/02fa72dcb87e8ec7bcc00dd828338454"
              }}
              style={styles.ImageBackground_2_3372}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139c/c60f/bd61ce9a3d4248e8693647d4eb0997f0"
              }}
              style={styles.ImageBackground_2_3373}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9cd/5e48/afaebf9a9e3d9f61a8841672402a4e6a"
              }}
              style={styles.ImageBackground_2_3374}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f06/be2d/c78b150a041e099eeee929c919a022d3"
              }}
              style={styles.ImageBackground_2_3375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/40bb/edce1f3ba96bbd27fee2131fd9beebe9"
              }}
              style={styles.ImageBackground_2_3376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/40bb/edce1f3ba96bbd27fee2131fd9beebe9"
              }}
              style={styles.ImageBackground_2_3377}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/40bb/edce1f3ba96bbd27fee2131fd9beebe9"
              }}
              style={styles.ImageBackground_2_3378}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5676/e3ee/a544035b382abca2d17ba3ebe58ec65e"
              }}
              style={styles.ImageBackground_2_3379}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca39/9fdc/6177fe8333a57501ca32103da4bc3a41"
              }}
              style={styles.ImageBackground_2_3380}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b870/2581/6fd99060809cd808ac069632bc2b392a"
              }}
              style={styles.ImageBackground_2_3381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbcd/a9d0/41eb2eeb883d03b4509093c52ae16acc"
              }}
              style={styles.ImageBackground_2_3382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0a5/84bd/6042b4e7a4d9b57d2e88aa4694e8af0a"
              }}
              style={styles.ImageBackground_2_3383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb6/b48f/e206fd68c4df260807dbcd97e8288e06"
              }}
              style={styles.ImageBackground_2_3384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698d/a5fa/cb3828ab283ef45fb8a114aff453c1e2"
              }}
              style={styles.ImageBackground_2_3385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6609/da73/a08e4dc7ba1c8fab39dae1fb4184eb23"
              }}
              style={styles.ImageBackground_2_3386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c56/cf56/bd34f1da472956f266368e0ea43abc9f"
              }}
              style={styles.ImageBackground_2_3387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a5/974a/0309159b2ce42522fb803dc08bf6242b"
              }}
              style={styles.ImageBackground_2_3388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b19d/a6de/e619b9e72614ee1b6496348057af0ae8"
              }}
              style={styles.ImageBackground_2_3389}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f77/23f4/03b86b64f10dcb9af6bafa29a258ca30"
              }}
              style={styles.ImageBackground_2_3390}
            />
            <View style={styles.View_2_3391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9480/751e/0eb4faadf81f0fc0fce0bc7c96cc957f"
                }}
                style={styles.ImageBackground_2_3392}
              />
              <View style={styles.View_2_3393} />
            </View>
            <View style={styles.View_2_3394}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9480/751e/0eb4faadf81f0fc0fce0bc7c96cc957f"
                }}
                style={styles.ImageBackground_2_3395}
              />
              <View style={styles.View_2_3396} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb9/de99/8a2f2a99fac48cd2e1ae005ebf6d399c"
              }}
              style={styles.ImageBackground_2_3397}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb9/de99/8a2f2a99fac48cd2e1ae005ebf6d399c"
              }}
              style={styles.ImageBackground_2_3398}
            />
            <View style={styles.View_2_3399} />
            <View style={styles.View_2_3400} />
            <View style={styles.View_2_3401}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/82a6/cf0022bae41fe3ce9c57a6ed4dcf434b"
                }}
                style={styles.ImageBackground_2_3402}
              />
              <View style={styles.View_2_3406} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c13/04df/345bc46ffc0bbe20d0018528b2157bb2"
              }}
              style={styles.ImageBackground_2_3407}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c13/04df/345bc46ffc0bbe20d0018528b2157bb2"
              }}
              style={styles.ImageBackground_2_3408}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b6a/65c9/988b6524a0b7fb612e437e1223992759"
            }}
            style={styles.ImageBackground_2_3409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6afb/da59/0a83a12b2432a50dd139fb4e25c850b8"
            }}
            style={styles.ImageBackground_2_3412}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd8/2b72/60d1cedf228d0c8c247bace4d8a5b283"
            }}
            style={styles.ImageBackground_2_3413}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a5/9322/423946134a871da248800b37118855c4"
            }}
            style={styles.ImageBackground_2_3414}
          />
          <View style={styles.View_2_3415}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d188/a8aa/20044b3652eeb7bd03a16fe098d2a1dd"
              }}
              style={styles.ImageBackground_2_3416}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62e7/57ce/f2f3efc48edb11b47143d3b92754253f"
              }}
              style={styles.ImageBackground_2_3417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd4/c9ae/52c5b7822115922fe921364fbc80bb9e"
              }}
              style={styles.ImageBackground_2_3418}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ca5/3238/98c8b9b6b71a996a539dfa254d57d852"
              }}
              style={styles.ImageBackground_2_3419}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb5e/a849/f3e875112f33a7e9ee5f38b7f7969ab7"
              }}
              style={styles.ImageBackground_2_3420}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53dc/4a2e/95179bb1c3ca10faf1029aca488057c9"
              }}
              style={styles.ImageBackground_2_3421}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cb/2d91/1748d9f72196e2080e417583d1a04975"
              }}
              style={styles.ImageBackground_2_3422}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cdf/2fa8/f70a079bedc4eeaea85977571301bad6"
              }}
              style={styles.ImageBackground_2_3423}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c502/86b9/8c08c89ba9787069ede1f3e8df7487a8"
              }}
              style={styles.ImageBackground_2_3424}
            />
            <View style={styles.View_2_3425}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/494b/60fc/e30acec6666aeba5cb9718d79b4389d2"
                }}
                style={styles.ImageBackground_2_3426}
              />
              <View style={styles.View_2_3430} />
            </View>
            <View style={styles.View_2_3431}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/494b/60fc/e30acec6666aeba5cb9718d79b4389d2"
                }}
                style={styles.ImageBackground_2_3432}
              />
              <View style={styles.View_2_3436} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ae/63f0/e645a792c1338d395a2846427ede14e2"
              }}
              style={styles.ImageBackground_2_3437}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6a/c5a7/f7a89f582a9f853e1600d0ec22301ef5"
              }}
              style={styles.ImageBackground_2_3438}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b87c/a790/fe9f4d47826dc426115c7ce71adf0e41"
              }}
              style={styles.ImageBackground_2_3439}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e763/1469/7ca1ed334d8af235fafc1d889e1c9f40"
              }}
              style={styles.ImageBackground_2_3440}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59bb/d1cf/dc6cba0191373fea1a690d09ea846281"
            }}
            style={styles.ImageBackground_2_3441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9cc/ec69/8bb36735f06177d2d058274b9808498b"
            }}
            style={styles.ImageBackground_2_3442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0158/979f/a2b11e3104f5b8bf67d295d0d209ffc2"
            }}
            style={styles.ImageBackground_2_3443}
          />
        </View>
      </View>
      <View style={styles.View_2_3444}>
        <Text style={styles.Text_2_3444}>
          All the lovely, kind and hype things you’re saying about us
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("251%") },
  View_2_3036: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_3126: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_3127: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 244, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_2_3128: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3129: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("3%")
  },
  View_2_3133: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_2_3133: {
    color: "rgba(207, 185, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -2.72,
    textTransform: "none"
  },
  View_2_3134: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_3134: {
    color: "rgba(242, 244, 254, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3135: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_3135: {
    color: "rgba(242, 244, 254, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3136: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_3137: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_2_3145: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 244, 254, 1)",
    overflow: "hidden"
  },
  View_2_3146: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3147: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3148: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  ImageBackground_2_3157: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109%"),
    top: hp("0%")
  },
  View_2_3171: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("62%")
  },
  View_2_3172: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3173: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3177: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("141%")
  },
  View_2_3178: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3178: {
    color: "rgba(242, 244, 254, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3179: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3180: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_3181: {
    width: wp("99%"),
    height: hp("96%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3182: {
    width: wp("45%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_2_3182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 56,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -2.8000000000000003,
    textTransform: "uppercase"
  },
  View_2_3183: {
    width: wp("99%"),
    height: hp("96%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3184: {
    width: wp("56%"),
    height: hp("94%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_3185: {
    width: wp("56%"),
    height: hp("94%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3186: {
    width: wp("46%"),
    height: hp("43%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3187: {
    width: wp("46%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3188: {
    width: wp("23%"),
    height: hp("29%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3189: {
    width: wp("23%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3191: {
    width: wp("9%"),
    height: hp("14%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3193: {
    width: wp("21%"),
    height: hp("31%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  View_2_3195: {
    width: wp("11%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_2_3195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_3196: {
    width: wp("12%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    justifyContent: "flex-start"
  },
  Text_2_3196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_3197: {
    width: wp("11%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    justifyContent: "flex-start"
  },
  Text_2_3197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_2_3198: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3199: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_2_3200: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_2_3201: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_3202: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_3203: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_3204: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_2_3205: {
    width: wp("13%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_2_3205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_3206: {
    width: wp("19%"),
    height: hp("23%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_2_3207: {
    width: wp("19%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(251, 246, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  ImageBackground_2_3208: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3209: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3210: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3211: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_3212: {
    width: wp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_2_3212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3213: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3216: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_2_3217: {
    width: wp("4%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_3217: {
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_2_3218: {
    width: wp("14%"),
    height: hp("27%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_2_3219: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_3220: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3221: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3222: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_3223: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_3224: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3225: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3226: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3227: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3228: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3229: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_2_3230: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3231: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_3232: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_2_3233: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3234: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3235: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3236: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3237: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3238: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3239: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_2_3240: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_3241: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3242: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3243: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_3244: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3245: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_3246: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_3247: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3248: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3249: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3250: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3251: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3252: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3253: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_3254: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3255: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3256: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3257: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3258: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3259: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3260: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_3261: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3262: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3263: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3264: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3265: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3266: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3267: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_2_3268: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 32, 32, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.02511727809906
  },
  View_2_3269: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 250, 212, 1)"
  },
  ImageBackground_2_3270: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_3271: {
    width: wp("5%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_2_3271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_2_3272: {
    width: wp("3%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_2_3272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_2_3273: {
    width: wp("8%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    justifyContent: "center"
  },
  Text_2_3273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09797269105911255,
    textTransform: "none"
  },
  View_2_3274: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_2_3275: {
    width: wp("5%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3282: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3287: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3290: {
    width: wp("1%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_2_3290: {
    color: "rgba(208, 188, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3291: {
    width: wp("1%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_2_3291: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3292: {
    width: wp("0%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_2_3292: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3293: {
    width: wp("18%"),
    height: hp("39%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3294: {
    width: wp("11%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3297: {
    width: wp("1%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_3298: {
    width: wp("6%"),
    height: hp("15%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3299: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3300: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3301: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3302: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3303: {
    width: wp("4%"),
    height: hp("15%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3304: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3305: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3306: {
    width: wp("2%"),
    height: hp("11%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3307: {
    width: wp("1%"),
    height: hp("17%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_3308: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_2_3309: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3313: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_2_3314: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_3315: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3319: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  ImageBackground_2_3320: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3352: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_3353: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3354: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_3355: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3356: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_3357: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3358: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3359: {
    width: wp("23%"),
    height: hp("25%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_2_3360: {
    width: wp("26%"),
    height: hp("25%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  View_2_3368: {
    width: wp("19%"),
    height: hp("25%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_2_3369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3370: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3371: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_2_3372: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3373: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3374: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3375: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3376: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3377: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3378: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3379: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3381: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3382: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3383: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3384: {
    width: wp("4%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_3385: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3386: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3387: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3388: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_3389: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_3390: {
    width: wp("7%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3391: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3393: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_3394: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3395: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3396: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_2_3397: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3398: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_3399: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3401: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3402: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3406: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  ImageBackground_2_3407: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3408: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_3409: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  ImageBackground_2_3412: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_2_3413: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%")
  },
  ImageBackground_2_3414: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%")
  },
  View_2_3415: {
    width: wp("11%"),
    height: hp("34%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_2_3416: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3417: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3418: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_2_3419: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3420: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3421: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3422: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3423: {
    width: wp("9%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_3424: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_2_3425: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3426: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_2_3431: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3432: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3436: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  ImageBackground_2_3437: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3438: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3439: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_3440: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_3441: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_3442: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_2_3443: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_2_3444: {
    width: wp("59%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("90%"),
    justifyContent: "flex-end"
  },
  Text_2_3444: {
    color: "rgba(45, 52, 54, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
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
