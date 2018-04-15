# Alexever17's Novel Ratings API
This is the API to get all the data for the novel webpage <br>
https://github.com/Alexever17/novels

## Getting Started

Here is the live Website: https://alexever17.github.io/novels/

### Installing

Just fork it and get it on your machine. Then just go "npm install" in the folder

## DOC

### GET REQUEST
https://alexever17.herokuapp.com/api/novels?sort=number&find=nationality <br>
retrieves all novels, needs the number: <br>
<br>
### Sorting
https://alexever17.herokuapp.com/api/novels?sort=1 <br>
Sort all novels by the ranking --> 5 to 1 <br>
https://alexever17.herokuapp.com/api/novels?sort=2 <br>
Sort all novels by the ranking --> 1 to 5 <br>
https://alexever17.herokuapp.com/api/novels?sort=3 <br>
Sorting alphabetically <br>
https://alexever17.herokuapp.com/api/novels?sort=4 <br>
Sorting reverse alphabetically <br>
<br>
### Country of origin
https://alexever17.herokuapp.com/api/novels?find=chinese <br>
finding only novels with chinese origin <br>
https://alexever17.herokuapp.com/api/novels?find=japanese <br>
finding only novels with japanese origin <br>
https://alexever17.herokuapp.com/api/novels?find=korean <br>
finding only novels with korean origin <br>
<br>
### ID
https://alexever17.herokuapp.com/api/novels?id=5ad2670c835be300042faabf <br>
example get request for an id, you can find ids by searching through all the entries with: <br>
https://alexever17.herokuapp.com/api/novels <br>
<br>
### Combinations
combination also possible: <br>
https://alexever17.herokuapp.com/api/novels?find=chinese&sort=3 <br>
finding only novels with chinese origin and sorting by alphabet <br>
<br>
<br>


### Other REQUEST

Please do not use it.

## Built With

* [NODE.JS](https://nodejs.org/en/) - The backend
* [MONGODB](https://www.mongodb.com/) - The Database

## Contributing

Just feel free to make Pull request however you see fit. Feel free to contact me for question.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
