import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Sport = 'badminton' | 'cricket' | 'kabaddi' | 'volleyball' | 'football';

interface SportCardProps {
  sport: Sport;
  style?: object;
}

const SportCard: React.FC<SportCardProps> = ({ sport, style }) => {
  const navigation = useNavigation();

  const getSportEmoji = () => {
    switch (sport) {
      case 'badminton':
        return '🏸';
      case 'cricket':
        return '🏏';
      case 'kabaddi':
        return '👥';
      case 'volleyball':
        return '🏐';
      case 'football':
        return '⚽';
      default:
        return '🎯';
    }
  };

  const getSportName = () => {
    return sport.charAt(0).toUpperCase() + sport.slice(1);
  };

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={() => console.log("hi")}
    >
      <Text style={styles.emoji}>{getSportEmoji()}</Text>
      <Text style={styles.name}>{getSportName()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // Ensure this is visible
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SportCard;