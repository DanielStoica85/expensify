// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// add data
// database
//     .ref()
//     .set({
//         name: 'Daniel',
//         age: 34,
//         stressLevel: 6,
//         job: {
//             tittle: 'Developer',
//             company: 'Forescout'
//         },
//         location: {
//             city: 'Eindhoven',
//             country: 'NL'
//         }
//     })
//     .then(() => {
//         console.log('Data saved!');
//     })
//     .catch(error => {
//         console.log('This failed! ' + error);
//     });

// remove data
// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Item removed');
//     })
//     .catch(e => {
//         console.log('Unable to remove item. ', e);
//     });

// or:
// database.ref('isSingle').set(null);

// update data
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'DAZN',
//     'location/city': 'Amsterdam'
// });

// get data
// database
//     .ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => console.log('Error fetching data: ', e));

// Subscribe to data change
// const onValueChange = database.ref().on(
//     'value',
//     snapshot => {
//         console.log(snapshot.val());
//     },
//     e => {
//         console.log('Error when data fetching', e);
//     }
// );

// setTimeout(() => {
//     database.ref('age').set(21);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First note',
//             body: 'This is the first note'
//         },
//         123423: {
//             title: 'Second note',
//             body: 'This is the second note'
//         }
//     }
// };

// database.ref('notes/-LmkPAV3QZxnZNvMOOIh').update({
//     body: 'Buy food'
// });

// database.ref('notes').set(notes);

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React'
// });

// database
//     .ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// child removed
// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// child changed
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// child added
// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 7863823764872
// });
