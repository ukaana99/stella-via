import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { colors } from '../assets/colors';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableHighlight 
} from 'react-native';

const NavButton = ({name, path, changePage, pageRoute, small, active}) => {   
  handlePress = () => {
    changePage(pageRoute);
  };

  const navBarIcons = small ? 'smIcon' : null;
  const wrapper = small ? 'smWrapper' : 'iconWrapper';
  const navButton = small ? 'smButton' : 'welcomeButton';

  const isActive = active && small 
    ? styles.active 
    : styles[navButton];

  const text = !small 
    ? <Text style={styles.navText}>{name}</Text> 
    : <Text style={styles.smNavText}>{name}</Text>;

  return (
    <TouchableHighlight 
      style={isActive} 
      onPress={this.handlePress} 
      activeOpacity={0.3} 
      underlayColor={colors.$purple}>

      <View style={styles[wrapper]}> 
        <Image 
          style={styles[navBarIcons]} 
          source={path}
        />
        {text}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130, 
    width: 130,
  },
  welcomeButton: {
    borderRadius: 20,
    backgroundColor: colors.$transparentDarkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  navText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.$white,
    fontWeight: 'bold',
    marginBottom: 4
  },
  smNavText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.$white,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 2
  },
  smWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80, 
    width: 80,
  },
  smButton: {
    borderRadius: 20,
    backgroundColor: colors.$transparentDarkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  smIcon: {
    height: 40, 
    width: 40,
  },
  active: {
    borderRadius: 20,
    backgroundColor: colors.$black,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);

