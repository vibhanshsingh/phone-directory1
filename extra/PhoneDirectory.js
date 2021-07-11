// import React, {Component} from 'react';
// import AddSubscribers from '../src/AddSubscribers';
//
// class PhoneDirectory extends Component {
//     constructor() {
//         super();
//         this.state = {
//             subscribersLists: []
//         }
//     }
//
//     addSubscriberHandler = (newSubscriber) => {
//         let subscribersList = this.state.subscribersLists;
//         if(subscribersLists.length > 0) {
//             newSubscriber.id = subscribersLists[subscribersLists.length-1].id + 1;
//         }
//         else {
//             newSubscriber.id = 1;
//         }
//         subscribersList.push(newSubscriber);
//         this.setState({subscribersList: subscribersList});
//         console.log(this.state.subscribersLists);
//     }
//     render() {
//         return (
//             <AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>
//         )
//     }
// }
//
// export default PhoneDirectory;
//
//
// // // class PhoneDirectory extends Component {
// // //
// // //     constructor() {
// // //         super();
// // //         this.state = {
// // //             subscribersList: [
// // //                 {
// // //                     id: 1,
// // //                     name: "Shilpa Bhat",
// // //                     phone: "9999999999"
// // //                 },
// // //                 {
// // //                     id: 2,
// // //                     name: "Srishti Gupta",
// // //                     phone: "8888888888"
// // //                 }
// // //             ]
// // //         }
// // //     }
// // //
// // //     deleteSubscriberHandler = (subscriberId) => {
// // //         let subscribersList = this.state.subscribersList;
// // //         let subscriberIndex = 0;
// // //         subscribersList.forEach(function (subscriber, index) {
// // //             if (subscriber.id === subscriberId) {
// // //                 subscriberIndex = index;
// // //             }
// // //         }, this);
// // //         let newSubscribers = subscribersList;
// // //         newSubscribers.splice(subscriberIndex, 1);
// // //         this.setState({subscribers: newSubscribers});
// // //     }
// // //
// // //     addSubscriberHandler = (newSubscriber) => {
// // //         let subscribersList = this.state.subscribersList;
// // //         if (subscribersList.length > 0) {
// // //             newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
// // //         } else {
// // //             newSubscriber.id = 1;
// // //         }
// // //         subscribersList.push(newSubscriber);
// // //         this.setState({ subscribersList: subscribersList });
// // //     }
// // //
// // //     render() {
// // //         return (
// // //             <Router>
// // //                 <div>
// // //                     <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
// // //                     <Route exact path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
// // //                 </div>
// // //             </Router>
// // //         )
// // //     }
// // // }
