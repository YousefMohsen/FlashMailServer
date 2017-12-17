var Expo  = require('expo-server-sdk')
var DatabaseFacade = require('../Data/DatabaseFacade');

let expo = new Expo();

 class NotificationHandler  {



async newMessagePush(team,newMessage){

    
let studentsTokens = await  DatabaseFacade.getStudentsTokens(team)

for (let pushToken of studentsTokens) {
    // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
  
    // Check that all your push tokens appear to be valid Expo push tokens
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} is not a valid Expo push token`);
      continue;
    }
  
  // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)


  let chunks = expo.chunkPushNotifications([{
    to: pushToken,
    sound: 'default',
    body: newMessage.title.slice(0,35)+"..",
    title: "You've got a new message in "+team,
    data: { withSome: 'data' },
  }]);

  

  (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
      try {
        let receipts = await expo.sendPushNotificationsAsync(chunk);
        console.log(receipts);
      } catch (error) {
        console.error(error);
      }
    }
  })();



}




}
testMethod(){
    console.log("in tets")
}
}

module.exports = new NotificationHandler();



