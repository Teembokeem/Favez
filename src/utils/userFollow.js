export function showSubscribedlists(lists, subscribedlists) {
    var new_arr = [];
    for (var i = 0; i < subscribedlists.length; i++) {
        new_arr.push(subscribedlists[i].id);
    }
    return new_arr;
}
export function showFollowedlists(followedlists) {
    var new_arr = [];
    for (var i = 0; i < followedlists.length; i++) {
        var followed_list = {}
        followed_list.id = followedlists[i].id;
        followed_list.status = true;
        new_arr.push(followed_list);

    }

    return new_arr;
}
export function addrecentClickedFollow(followlist, recentadded) {
  console.log("follow list 569op", followlist);
  console.log("recent add list 569op", recentadded);
    var flag = false;
    for (var i = 0; i < followlist.length; i++) {
        if (followlist[i].id == recentadded.id) {
            followlist[i].status = recentadded.status;
            flag = true;
        }
    }
    if (!flag) {
        followlist.push(recentadded);
    }
    console.log("updated lists 569op", followlist);
    return followlist;
}
export function checkOwnerIdinFollowList(followlist, ownerid){

  for (var i=0; i< followlist.length; i++){
    if(followlist[i].id == ownerid){
      return followlist[i].status;

    }
  }
  return false;

}
