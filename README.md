# Alexever17's Novel Ratings API
This is the API to get all the data for the novel webpage

## Getting Started

Here is the live Website: https://alexever17.github.io/novels/

### Installing

Just fork it and get it on your machine. Then just go "npm install" in the folder

## DOC

### GET REQUEST
https://alexever17.herokuapp.com/api/novels?sort=<number>&find=<nationality>
retrieves all novels, needs the number:

https://alexever17.herokuapp.com/api/novels?sort=1
Sort all novels by the ranking --> 5 to 1
https://alexever17.herokuapp.com/api/novels?sort=2
Sort all novels by the ranking --> 1 to 5
https://alexever17.herokuapp.com/api/novels?sort=3
Sorting alphabetically
https://alexever17.herokuapp.com/api/novels?sort=4
Sorting reverse alphabetically

https://alexever17.herokuapp.com/api/novels?find=chinese
finding only novels with chinese origin
https://alexever17.herokuapp.com/api/novels?find=japanese
finding only novels with japanese origin
https://alexever17.herokuapp.com/api/novels?find=korean
finding only novels with korean origin

combination also possible:
https://alexever17.herokuapp.com/api/novels?find=chinese&sort=3
finding only novels with chinese origin and sorting by alphabet

### Other REQUEST

Please do not use it.

## Built With

* [SASS (SCSS)](https://sass-lang.com/) - CSS Preprocessor
* [NODE.JS](https://nodejs.org/en/) - The backend
* [MONGODB](https://www.mongodb.com/) - The Database

## Contributing

Just feel free to make Pull request however you see fit. Feel free to contact me for question.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
