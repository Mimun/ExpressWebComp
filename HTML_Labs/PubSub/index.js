console.log('i am here');

// let modulePath = "../../node_modules/pubsub-js/src/pubsub.js"
// import * as PubSub from (modulePath).then(()=>{
//     console.log('loaded');
// });
import ('../../node_modules/pubsub-js/src/pubsub.js').then (()=>{
    console.log('loaded');
    var mySubscriber = function (msg, data) {
        console.log( msg, data );
    };
    
    console.log('PubSub', PubSub);
    var token = PubSub.subscribe('MY TOPIC', mySubscriber);
    
    // publish a topic asynchronously
    PubSub.publish('MY TOPIC', 'hello world!');
})




