// (function(){
//     var user_events;
//
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.github.com/users/jcquinlan/events');
//     xhr.send(null);
//
//     xhr.onreadystatechange = function(){
//         var DONE = 4;
//         var OK_STATUS = 200;
//         if( xhr.readyState === DONE ){
//             if( xhr.status === OK_STATUS ){
//                 user_events = JSON.parse(xhr.responseText);
//                 console.log(findPushEvents(user_events));
//             } else {
//                 console.log( 'Error: ' + xhr.status );
//             }
//         }
//     }
//
//     function findPushEvents(events){
//         var pushEvents = [];
//         for( var i = 0; i < events.length; i++ ){
//             if(events[i].type === 'PushEvent'){
//                 pushEvents.push(events[i]);
//             }
//         }
//         return pushEvents;
//     }
    //
    // function logVariables(event){
    //
    // }

function GitGet(username){
    this.username = username;

    this.init = function(){
        this.getAccountEvents();
    }

    this.getAccountEvents = function(){
        var instance = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + this.username + '/events');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            var DONE = 4;
            var OK_STATUS = 200;
            if( xhr.readyState === DONE ){
                if( xhr.status === OK_STATUS ){
                    instance.user_events = JSON.parse(xhr.responseText);
                } else {
                    console.log( 'Error: ' + xhr.status );
                }
            }
        }
    }

    this.getPushEvents = function(){
        return this.user_events;
    }

    this.init();
}

var mo = new GitGet('mojombo');
console.log(mo.getPushEvents());
