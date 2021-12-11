//const {sequelize, DataTypes, Model} = require('./db')
const {Movie, Cast, Crew, sequelize} = require('./index')

describe('Movie Database', ()=> {
    beforeAll(async()=> {

       await sequelize.sync({force:true})

        const arrayOfMovies=[{movie_title: 'Black Panther', release_date: "2018-02-16", budget: 200000000},
                                 {movie_title: '42', release_date: '2013-04-12', budget: 40000000}]

        const arrayOfCast=[{cast_realname: 'Chadwick Boseman', cast_moviename: "T'Challa", role: 'Black Panther', MovieId: 1},
        {cast_realname: 'Michael B. Jordan', cast_moviename: "Erik Killmonger", role: 'Black Panther Cousin', MovieId: 1}]

        const arrayOfCrew=[{ crew_name: 'Ryan Coogler', role: "Director", MovieId: 1},
                          { crew_name: 'RJoe Robert Cole', role: "Writer", MovieId: 1}]

        await Movie.bulkCreate(arrayOfMovies)
        await Cast.bulkCreate(arrayOfCast)
        await Crew.bulkCreate(arrayOfCrew)
    });

    test('Has a movie', async() => {
             const testMovie = await Movie.findOne({
              where: {
                 movie_title: 'Black Panther'
              }
            });
            expect(testMovie.movie_title).toBe('Black Panther')
            expect(testMovie.release_date).toBe("2018-02-16")
            expect(testMovie.budget).toBe(200000000)
     
     })

    test('Has a cast', async() => {
              const testCast = await Cast.findOne({
              where: {
                 cast_realname: 'Chadwick Boseman'
              }
            });
            expect(testCast.cast_realname).toBe('Chadwick Boseman')
            expect(testCast.cast_moviename).toBe("T'Challa")
            expect(testCast.role).toBe('Black Panther')
            expect(testCast.MovieId).toBe(1)
     
     })

     test('Has a crew', async() => {
        const testCrew = await Crew.findOne({
        where: {
            crew_name: 'Ryan Coogler'
        }
      });
      expect(testCrew.crew_name).toBe('Ryan Coogler')
      expect(testCrew.role).toBe("Director")
      expect(testCrew.MovieId).toBe(1)

    })

     afterAll(async()=> {
        sequelize.close()
    })

})