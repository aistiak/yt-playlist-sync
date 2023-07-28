

## todo 
- knex sqlite3 / lowdb 
- redis for job processing   

## algo
- get list of videos 
- save the list in `temp_store` table
- cross match every `temp_store` entry with `musics` table 
- if item already present then skip and remove from `temp_store` 
- if item not present put item in `jobs` table and remove from `temp_store`
- take item from `jobs` , download the music , store it , put an entry on `musics` remove job 
- process jobs sync (multiple download request might block api access )  


could use bull queue 

### reference 
- https://github.com/typicode/lowdb
- https://github.com/OptimalBits/bull