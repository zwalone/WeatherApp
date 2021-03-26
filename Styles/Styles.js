import { StyleSheet } from 'react-native'

export const normal = StyleSheet.create({

    ScreenContent: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },

    //TopBar
    TopBar:{
        backgroundColor: '#182848',
    },
    //TempetureView
    TempViewText: {
        fontSize: 42,
        color: 'white',
    },
    TempViewContent: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 0,
        marginLeft: 40,
        marginRight: 40,
    },
    TempViewTextSmall:{
        color: 'white',
    },
    TempViewButton:{
        position: 'absolute',
        right: 10,
        top: 20,
        color: '#4b6cb7',
    },
    TemoViewIconButton:{
        color: 'white',
    },
    //HouresList
    HoursListView:
    {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10,
        margin: 16,
    },
    //HouresListItem
    HoursItemText: {
        textAlign: 'center',
        color: 'white',
    },
    HoursItemIcon:
    {
        width: 50,
        height: 50,
        color: 'white',
    },

    //DetailWeather
    DetailsWeatherContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    //DetailWeatherItem
    DetailItem: {
        padding: 20,
        height: 100,
        margin: 10,
        width: 100,
        borderWidth: 2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.1)',
    },
    DetailIcon: { 
        opacity: 0.3,
        color: 'white',
    },
    DetailTitle: {
        fontSize: 12,
        color: 'white',
    },
    DetailValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    //DetailsScreen
    DSContent: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },
    DSText: {
        fontSize: 36,
        color: 'white',
    },
    DSContainer: {
        alignItems: 'center',
        padding: 80,
    },

    //DayList
    DLText: {
        color: 'white',
        alignItems: 'center',
    },
    DLTitle:{
        color: 'white',
        backgroundColor: '#182848',
        borderColor: '#182848',
    },
})

export const blind = StyleSheet.create({

    ScreenContent: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },
    //TopBar
    TopBar:{
        backgroundColor: '#acb6e5',
    },
    //TempetureView
    TempViewText: {
        fontSize: 62,
    },
    TempViewContent: {
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 0,
    },
    TempViewTextSmall:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    TempViewButton:{
        position: 'absolute',
        right: 10,
        top: 20,
        color: '#4b6cb7',
    },
    TemoViewIconButton:{
        color: 'black',
    },
    //HouresList
    HoursListView:
    {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10,
        margin: 16,
    },
    //HouresListItem
    HoursItemText: {
        fontSize: 24,
        textAlign: 'center',
    },
    HoursItemIcon:
    {
        width: 80,
        height: 80,
    },

    //DetailWeather
    DetailsWeatherContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },

    //DetailWeatherItem
    DetailItem: {
        padding: 6,
        height: 150,
        margin: 6,
        width: 100,
        borderWidth: 2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.5)',
    },
    DetailIcon: { 
        opacity: 0.5,
    },
    DetailTitle: {
        fontSize: 20,
    },
    DetailValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    //DetailsScreen
    DSContent: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },
    DSText: {
        fontSize: 36,
    },
    DSContainer: {
        alignItems: 'center',
        padding: 80,
    },

    //DayList
    DLText: {
        alignItems: 'center',
        fontSize: 20,
    },
    DLTitle:{
        backgroundColor: '#ACB6EB',
        borderColor: '#ACB6EB',
        fontSize: 20,
        fontWeight: 'bold',
    },
})