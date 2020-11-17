# Project 4, Alt. A - React Native

## General

### To run the client, follow these steps:

- Open a terminal and cd into the project folder
- Write `npm install`
- Write `expo start`

### To open the app on a phone:

- Scan the QR code with the Expo app (Android) or camera (iPhone)

### Backend

This project uses the backend developed by Team 20 for Project 3. To read more about it, 
go [here](https://gitlab.stud.idi.ntnu.no/it2810-h20/team-20/project-3/-/blob/master/README.md).

## Content and functionality

Due to the nature of the assignment, a lot of the logic and basic styling used
has been based on the code from Project 3. Something I've done differently in 
this project is to use Stylesheets to style different components. This is new to me, 
yet quite intuitive to use if you're familiar with CSS.   

When implementing the search functionality I chose to use the TextField component, 
as it conveniently supports the functionality I needed. I've also tried to use the 
accessibilityLabel attribute wherever possible, to accommodate assistive technologies.

Both the pagination, sorting and detailed view functionality uses logic from Project 3. 
Here I focused on getting used to the TouchableOpacity component, to allow more
customizable buttons with Icons etc. This is used throughout the project, 
with the exception of the components relating to the profile screen.

For the filter functionality, using React Native was easier than our implementation in Project 3.
The CheckBox component offered all the functionality that our previous custom component offered. 

As design was not a requirement or learning objective for this project, 
I've chosen to focus on functionality, and learning React native. 
If I were to continue developing this application, I would find better color schemas,
and work on improving the layout etc. 

## Technology

The project was initiated with `expo init`, with Typescript specified as the coding language. 
Typescript has also been used throughout the project. React Native components has been fairly intuitive, 
and functionality such as navigation between pages using the navigation bar is useful. 

As this project has a smaller scope than the others, there haven't been mush need for third-party 
components. However, the [react-native-elements](https://reactnativeelements.com/) toolkit was used 
for the Input component in UserForm.tsx. The Input component offered additional functionality over 
the TextInput component, such as secure fields and icons. 

Currently a user cannot do much, beside registering and logging in/out. As this was not among the 
requirements, I didn't consider this a priority when developing. If I were to develop the application
further, there could be functionality for adding reviews, favouriting books etc. 

## Testing

The application has been manually end-to-end tested, by clicking through the app and ensuring that
all functionality works as intended, and to make sure there are no obvious bugs or issues. 
With that said, an absence of automatic tests means a higher possibility of bugs. 
Ideally there would be unit tests, automatic e2e tests, snapshot tests etc.
