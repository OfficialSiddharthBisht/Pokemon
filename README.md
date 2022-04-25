# Pokemon

Problem Statement
If you are 90's kid you know pokemon; even if you are not, you must know pokemon :p ( who doesn't ).. Don't worry we will not assign you the task of catching pokemon but rather just getting the pokemon names list and some specific details related to a pokemon. Here is the documentation for the same https://pokeapi.co/docs/v2#pokemon​
Your evaluation is divided into two parts but you will be using the same page; divide your page into two parts;​
First Part Of Evaluation
​

As soon as the page loads; Make a network request and get atleast 20 pokemon names and showcase those pokemon names in the form of a table. Yes, Just names of those pokemons. store this list of names in local storage as well. ( Hint: /pokemon is your endpoint )
Anytime you refresh the page; You shouldn't be making network request again but rather take the names from local storage wherein you have stored this and display it to DOM.​
Second Part of Evaluation
​

Implement a search bar which can search for a particular pokemon. Apply debouncing. ( even in case you don't know pokemon; just search for any pokemon from the list of pokemons that you got as a response from first part of assignment )
Upon making a network request and getting successful response. Please provide all the specific details given below related to pokemon in the form of card.​
id
name (pokemon name)
height
weight
abilities ( just the names of all abilities of pokemon separated by commas )
moves ( just the names of all moves of pokemon separated by commas )
​

Please remember you are responsible if the API bars you if you don't use it properly. Please read their policy here https://pokeapi.co/docs/v2#fairuse. if you get rate limit exceeded error or any such thing. you are solely responsible for it and no message wrt it will be entertained in the midst of evaluation. ( Avoid making a lot of unnecessary hits to api endpoints; use API wisely )
What to submit?
GitHub url