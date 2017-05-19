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
    console.log("likes and id",list[i].likes,list[i].id);
    console.log("new arr sss90909",new_arr);

    if(list[i].likes!=null){
      new_arr.push(list[i].id);
    }

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
