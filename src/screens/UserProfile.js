import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const UserProfile = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles.ScreenContainerMi}
      scrollable={true}
      hasSafeArea={false}
    >
      <ImageBackground
        style={styles.ImageBackgroundU5}
        source={Images.ErikmcleannTCtYYyVqSYunsplash}
        resizeMode="cover"
      />
      <Container
        style={styles.ContainerQ9}
        elevation={0}
        useThemeGutterPadding={true}
      >
        <Image
          style={StyleSheet.flatten([
            styles.Imageab,
            { borderRadius: theme.borderRadius.global },
          ])}
          resizeMode="cover"
          source={Images.Model024}
        />
        <Text
          style={StyleSheet.flatten([
            styles.Textpn,
            theme.typography.headline3,
          ])}
        >
          Jessica Green
        </Text>

        <Button style={styles.Button_2W} type="outline">
          Edit Profile
        </Button>
      </Container>

      <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
          style={StyleSheet.flatten([
            styles.TouchableGA,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.Viewch}>
            <Text style={theme.typography.body1}>Privacy Settings</Text>
            <Icon
              style={styles.IconH9}
              size={24}
              color={theme.colors.strong}
              name="MaterialIcons/account-circle"
            />
          </View>
        </Touchable>

        <Touchable
          style={StyleSheet.flatten([
            styles.Touchable_18,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.Viewc1}>
            <Text style={theme.typography.body1}>Notifications</Text>
            <Icon
              style={styles.Iconvu}
              color={theme.colors.strong}
              name="MaterialIcons/notifications"
              size={24}
            />
          </View>
        </Touchable>

        <Touchable
          style={StyleSheet.flatten([
            styles.TouchableGn,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.ViewLp}>
            <Text style={theme.typography.body1}>Order History</Text>
            <Icon
              style={styles.Iconw5}
              color={theme.colors.strong}
              size={24}
              name="MaterialIcons/history"
            />
          </View>
        </Touchable>

        <Touchable
          style={StyleSheet.flatten([
            styles.TouchableDs,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.Viewas}>
            <Text style={theme.typography.body1}>Payment Details</Text>
            <Icon
              style={styles.IconTd}
              size={24}
              name="MaterialIcons/payment"
              color={theme.colors.strong}
            />
          </View>
        </Touchable>
      </Container>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundU5: {
    width: '100%',
    height: 250,
  },
  Imageab: {
    height: 120,
    width: 120,
  },
  ScreenContainerMi: {
    justifyContent: 'space-evenly',
  },
  Viewch: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Viewc1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ViewLp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewas: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ContainerQ9: {
    alignItems: 'center',
    marginTop: -65,
  },
  IconH9: {
    height: 24,
    width: 24,
  },
  Iconvu: {
    width: 24,
    height: 24,
  },
  Iconw5: {
    width: 24,
    height: 24,
  },
  IconTd: {
    height: 24,
    width: 24,
  },
  Textpn: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  TouchableGA: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  Button_2W: {
    marginTop: 16,
    alignSelf: 'center',
    width: '50%',
  },
  Touchable_18: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  TouchableGn: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  TouchableDs: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
});

export default withTheme(UserProfile);