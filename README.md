# Alexever17's Novel Ratings API
This is the API to get all the data for the novel webpage <br>
https://github.com/Alexever17/novels

## Getting Started

Here is the live Website: https://alexever17.github.io/novels/

### Installing

Just fork it and get it on your machine. Then just go "npm install" in the folder

## DOC

## GET REQUEST

### Getting all the database
https://alexever17.herokuapp.com/api/novels<br>
<br>
### Get a specific novel
https://alexever17.herokuapp.com/api/novel/5ad27708ed35670004feb933<br>
just change the last part after /novel for a different one, you can find the id in the full version of the database <br>
<br>
### Country of origin
https://alexever17.herokuapp.com/api/novels/origin/chinese <br>
finding only novels with chinese origin <br>
https://alexever17.herokuapp.com/api/novels/origin/japanese <br>
finding only novels with japanese origin <br>
https://alexever17.herokuapp.com/api/novels/origin/korean <br>
finding only novels with korean origin <br>
<br>
### Ranking
https://alexever17.herokuapp.com/api/novels/ranking/3 <br>
You can get a query containing only the novels with this specific Ranking <br>
possible input after ranking/ is 1 to 5 <br>
<br>
### Sorting
Sorting can be aplied to every get request except for the one where you retrieve a single novel<br>
just change the link before the ?<br>
<br>
examples:<br>
https://alexever17.herokuapp.com/api/novels?sort=1 <br>
Sort all novels by the ranking --> 5 to 1 <br>
https://alexever17.herokuapp.com/api/novels?sort=2 <br>
Sort all novels by the ranking --> 1 to 5 <br>
https://alexever17.herokuapp.com/api/novels?sort=3 <br>
Sorting alphabetically <br>
https://alexever17.herokuapp.com/api/novels?sort=4 <br>
Sorting reverse alphabetically <br>
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
