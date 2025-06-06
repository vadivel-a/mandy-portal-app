import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export default StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3, // <-- Material Design shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: 'center',
    textTransform: 'uppercase', // Material buttons usually uppercase
  },
  primaryCircle: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 5,  // Add shadow effect for button
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  primaryCircleText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
