export function showSubscribedlists(lists, subscribedlists) {
    var new_arr = [];
    for (var i = 0; i < subscribedlists.length; i++) {
        new_arr.push(subscribedlists[i].id);
    }
    return new_arr;
}

//if fave is liked or not .. if yes push its id in a array
export function selfFavezLiked(list){
  var new_arr =[];
  for(var i=0;i< list.length; i++){
    if(list[i].likes!=null){
      new_arr.push(list[i].id);
    }
  }
  return new_arr;
}
export function showFollowedlists(followedlists) {
    var new_arr = [];
    for (var i = 0; i < followedlists.length; i++) {



        new_arr.push(followedlists[i].id);
    }
    return new_arr;

}

export function addrecentClickedFollow(followlist, recentadded) {
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
