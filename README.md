Studio Eighteen: Favez Front
===
## The Idea
Favez is a React Native mobile application that helps users find information on topics they're interested in. Favez operates on the premise that search sites like Google and Yahoo compromise the accuracy of its results by incentivizing ad services & analytics, both which increase the viewability of such a participating website, which diverts the effort to provide clear and concise information for the user. Our application believes that that information lies with the users who constantly shape and define its discussion and direction. We give the power of curation to these individuals, in the form of lists with which users can add informational websites, articles, and links that they have scoured for on the internet. Users are given the opportunity to communally decide on which lists herald the most relevant and useful information in a similar fashion to a like or vote. These lists naturally rise to the top of popularity, ensuring that the rankings are unbiased and purely democratic.  

## tltr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```
git clone [:named folder] [:this git package]
cd [:named folder]
npm install
react-native run-ios
```


## Contents

Not all of the below is yet fully implemented

### Development & Deployment Infrastructure

* [Auth0](https://auth0.com/)
* React Native
* Router Flux
* Redux Forms
* Redux Loop
* Immutables
* Vector Icons
* Remote Redux DevTools
* ES6

### Development Life Cycle

## FIXES
Use the bracket code to find the associated files for the todo:

* **HEADERS REWORK**: [TD1] Refactor all headers to have the same base styling (some use height, paddingTop, etc etc combinations. Add a justify content to center for all headers, for larger screens.
* **FAVEZ BROWSER REWORK**: 
  * [TD2a] Set render header method into separate file and import into favez browser. 
  * [TD2b] Set injectable javascript and injectable html into separate files in the same directory.
  * [TD2c] Fix error for flickering browser links: On sites that redirect to a different syntax name as url will cause setState flickers. See onNavigationStateChange
  * [TD2d] Add clear state method on component life cycle method BEFORE RENDERING: currently introduces flicker if they navigated to any other website and closed the browser.

* **ADD TOPICS TAGS**:
  * [TD3a] Add 'More Options' Scene to App Router on the same level as Add Fave Form View;
  * [TD3b] Create More Options View, and View Container
  * [TD3c] Add props for topics/tags to attach to the 'current' list:

       `Actions.moreOptions() => code logic for adding topics and tags in that view => onPress of back button: setProps on state(['list', 'current']) to add topics/tags props. => proceed with create list method: createList first, then on Success POST List Taxonomies.`
 
  * [TD3d] Add List Action method for creating new taxonomies.
  * [TD3e] Render topics and tags in the List component's listBody
 
  
* **COMPONENT CREATION**: Change all other component creation methods (function Component, or export default class extends React.Component) to 
 
    ```const Component = React.createClass({})```

## General TODOS
* Need allowed values for edit profile props on backend => finish flow for editing profile on submit method: go back to main profile page.
* Add browse List view footer, specifically the popup menu that contains the list of favez for traversing through the collection.
* add sub views for the profile
* add facebook/contacts friends.
* add flows for collaboration: Notifications, onCreate for Lists (add collaborators)
