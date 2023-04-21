import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  loc_time_container: {},
  location: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  date_time: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  icon_desc_container: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 10,
  },
  weather_icon: {
    width: 100,
    height: 100,
  },
  description: {
    marginTop: -10,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  temp: {
    textAlign: 'center',
    marginTop: 10,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  hum_vis_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    marginHorizontal: 15,
  },
  humidity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  visiblity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  wind_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 15,
  },
  wind_speed: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  wind_deg: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  bottom_info_containers: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    width: 130,
    height: 110,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  icons: {
    alignSelf: 'center',
    marginBottom: 3,
  },
});