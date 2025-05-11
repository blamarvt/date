import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  ImageBackground,
  ActivityIndicator,
  View,
  ImageResizeMode,
  StyleSheet,
  Text,
} from "react-native";

import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

type ImageLoadProps = {
  style?: object;
  source: any;
  resizeMode?: ImageResizeMode;
  borderRadius?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  loadingStyle?: { size: "small" | "large"; color: string };
  placeholderSource?: any;
  placeholderStyle?: object;
  customImagePlaceholderDefaultStyle?: object;
  isShowActivity?: boolean;
};

type ImageLoadState = {
  isLoaded: boolean;
  isError: boolean;
};

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    console.log("showRightProgress:", prog.value);
    console.log("appliedTranslation:", drag.value);

    return {
      transform: [{ translateX: drag.value + 75 }],
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "darkred",
      width: 75,
    };
  });

  const styles = StyleSheet.create({
    rightAction: {},
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <Text style={styles.rightAction}>
        <FontAwesomeIcon icon={faX} size={24} color={"white"} />
      </Text>
    </Reanimated.View>
  );
}

class ImageLoad extends React.Component<ImageLoadProps, ImageLoadState> {
  static propTypes = {
    isShowActivity: PropTypes.bool,
  };

  static defaultProps = {
    isShowActivity: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
    };
  }

  onLoadEnd() {
    this.setState({
      isLoaded: true,
    });
  }

  onError() {
    this.setState({
      isError: true,
    });
  }

  render() {
    const {
      style,
      source,
      resizeMode,
      borderRadius,
      backgroundColor,
      children,
      loadingStyle,
      placeholderSource,
      placeholderStyle,
      customImagePlaceholderDefaultStyle,
    } = this.props;

    return (
      <View style={style}>
        <ReanimatedSwipeable
          containerStyle={[styles.swipeable, style]}
          friction={2}
          enableTrackpadTwoFingerGesture
          rightThreshold={40}
          renderRightActions={RightAction}
        >
          <Image
            onLoadEnd={this.onLoadEnd.bind(this)}
            onError={this.onError.bind(this)}
            style={[style]}
            source={source}
            resizeMode={"cover"}
            borderRadius={borderRadius}
          />
        </ReanimatedSwipeable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swipeable: {
    display: "flex",
    backgroundColor: "transparent",
  },
});

export default ImageLoad;
