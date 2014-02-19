Conway Core
===========

I extracted this package from a just-for-fun project: yet another implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). The symbol `Conway` is exported on the server and client, with the following methods/properties:

### On both client and server

```coffeescript
Conway.geometry.with   # width, in cells, of the game world

Conway.geometry.height # height, in cells, of the game world

Conway.Cell            # class representing a single cell

Conway.save()          # save the state of the game world to the database

Conway.createFixture() # create the game world, pass {randomize: true} for randomness

# This method is a no-op by default, override it in your project to specify the rules
# of the game. 
#
# cell    - object representing a cell, including its state object and meta-data
# options - this is currently how information about the cell's neighbors is passed
#           in. This API is in flux.
#
# Returns a new cell object
Conway.getNextCellState() 
```

### On the client only

```coffeescript
Conway.getCells()      # reactively returns an Array of all the cells, length will be width * height 

Conway.play()

Conway.pause()

Conway.isPlaying()
```

## Usage

- Check out the repo using git: `git clone https://github.com/pzatrick/meteor-conway-core.git`
- Extend your smart.json with the following:

```javascript
{
  "meteor": {
    "branch": "shark",
    "git": "https://github.com/meteor/meteor.git"
  },
  "packages": {
    "conway-core" : {
      "path": "../conway-core/"
    }
  }
}
```
- Write meteor template using at least `Conway.getCells()`
- Write CSS creating a grid structure for the game world in your template
- Write an implementation of `Conway.getNextCellState()`
- Run the project using meteorite (`mrt`)
- Laugh like Dr. Frankenstein!

At the time of writing, using the "shark" branch of meteor yields significantly better performance due to its optimized fork of handlebars, but the package also works with the "devel" branch.

The project is still in its infancy and there's a long todo list including at least:
- Documentation and deliverables
  - Write a demo project
  - Write unit tests
  - Finalize the API
  - Create a project homepage
- Tech enablement
  - create Conway.utils instead of using underscore directly (client, server)
  - create/use a grid data-structure for better abstraction (client, server)
  - Write Conway.Instance class (server)



